require('dotenv').config();
const express = require('express');
const { Groq } = require('groq-sdk');
const axios = require('axios');

const app = express();
app.use(express.json());

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const OMDB_KEY = process.env.OMDB_API_KEY;

/**
 * 1. FUNÇÃO DE BUSCA (A Tool): 
 * O braço direito da IA para buscar dados reais.
 */
async function get_movie_details(title) {
    try {
        console.log(`🌐 Acessando API OMDb para o filme: ${title}...`);
        const response = await axios.get(`http://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${OMDB_KEY}`);
        
        if (response.data.Response === "False") {
            return "Filme não encontrado na base de dados.";
        }
        
        return JSON.stringify(response.data);
    } catch (error) {
        return "Erro técnico ao acessar o OMDb.";
    }
}

/**
 * 2. ROTA PRINCIPAL:
 * O Blip vai chamar este endpoint via POST.
 */
app.post('/chat', async (req, res) => {
    const { message } = req.body;
    console.log(`💬 Usuário disse: "${message}"`);

    try {
        // DEFINIÇÃO DAS FERRAMENTAS (O modelo sabe que pode usar isso)
        const tools = [{
            type: "function",
            function: {
                name: "get_movie_details",
                description: "Busca detalhes técnicos (ano, diretor, atores, sinopse) de um filme ou série no OMDb.",
                parameters: {
                    type: "object",
                    properties: {
                        title: { type: "string", description: "O nome do filme ou série." }
                    },
                    required: ["title"],
                },
            },
        }];

        // PRIMEIRA CHAMADA: A IA decide se responde direto ou usa a ferramenta
        const chatCompletion = await groq.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [
                { 
                    role: "system", 
                    content: "Você é um assistente sênior de cinema da Rois Automações. Sempre use a ferramenta 'get_movie_details' para buscar informações reais antes de responder sobre filmes específicos. Se o usuário apenas cumprimentar, responda educadamente. REGRAS DE FORMATAÇÃO: Responda sempre em Português do Brasil. Use emojis e quebras de linha reais para separar os tópicos. NÃO use aspas escapadas como \\\" e NÃO use marcações como \\n. Siga este modelo: 🍿 Título: [nome], ⭐ Nota: [nota], 🎬 Diretor: [nome], 📝 Sinopse: [resumo]." 
                },
                { role: "user", content: message }
            ],
            tools: tools,
            tool_choice: "auto",
        });

        const responseMessage = chatCompletion.choices[0].message;

        // VERIFICAÇÃO: A IA decidiu chamar a ferramenta?
        if (responseMessage.tool_calls) {
            const toolCall = responseMessage.tool_calls[0];
            const movieTitle = JSON.parse(toolCall.function.arguments).title;

            console.log(`🤖 IA decidiu: "Preciso buscar dados sobre ${movieTitle}"`);
            
            // Executamos a busca real
            const movieDataRaw = await get_movie_details(movieTitle);

            // SEGUNDA CHAMADA: Enviamos os dados do OMDb para a IA formatar a resposta final
            const secondResponse = await groq.chat.completions.create({
                model: "llama-3.3-70b-versatile",
                messages: [
                    { role: "system", content: "Você é um assistente de cinema. Resuma os dados técnicos recebidos de forma amigável para o usuário." },
                    { role: "user", content: message },
                    responseMessage,
                    { 
                        role: "tool", 
                        tool_call_id: toolCall.id, 
                        name: "get_movie_details", 
                        content: movieDataRaw 
                    }
                ]
            });

            console.log("✅ Resposta final enviada com dados reais.");
            return res.json({ response: secondResponse.choices[0].message.content });
        }

        // Caso a IA responda direto (ex: um "Oi")
        console.log("✅ Resposta direta enviada (sem necessidade de API).");
        res.json({ response: responseMessage.content });

    } catch (error) {
        console.error("❌ ERRO NO PROCESSO:", error.message);
        res.status(500).json({ error: "Erro ao processar sua solicitação de cinema." });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`\n🚀 SERVIDOR ONLINE - PORTA ${PORT}`);
    console.log(`🔗 Endpoint para o Postman: http://localhost:${PORT}/chat`);
    console.log(`🛠️ Modelo em uso: llama-3.3-70b-versatile\n`);
});