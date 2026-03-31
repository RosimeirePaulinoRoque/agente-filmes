# Desafio 4: IA Generativa com Function Calling (Diferencial) 🚀

Este diretório contém a solução do Desafio 4, desenvolvido como um diferencial para demonstrar domínio avançado em IA Generativa, integração de APIs e automação autônoma.

## 🎯 Objetivo
Criar um **Agente de IA Generativa** que atua como *fallback* inteligente para o chatbot. Quando o fluxo principal não reconhece uma intenção, este agente interpreta a mensagem do usuário e decide automaticamente se deve consultar a API do OMDb para fornecer informações sobre filmes e séries.

## 🛠️ Stack Tecnológica (Ferramentas)
Para este desafio, utilizei as seguintes ferramentas:
- **LLM (Cérebro da IA):** [Groq](https://groq.com/).
- **Hospedagem:** [Render](https://render.com/).
- **Linguagem:** Node.js (JavaScript).
- **API de Dados:** OMDb API para consulta de informações cinematográficas.

## 🧠 Decisões Técnicas e Implementação
- **Function Calling:** Defini a busca no OMDb como uma `tool` específica. O modelo não apenas responde texto, ele "entende" quando precisa de dados reais e chama a função de busca sozinho.
- **Prompt Engineering:** O sistema foi instruído para ser um especialista em cinema, mantendo um tom prestativo e filtrando mensagens fora do contexto de filmes.
- **Fallback Inteligente:** Em vez de uma resposta de erro, o usuário recebe uma experiência rica e fluida gerada por IA.

## 🚀 Como Executar
1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2. Configure as variáveis de ambiente (`GROQ_API_KEY` e `OMDB_API_KEY`) no arquivo `.env`.
3. Execute `npm install` para instalar as dependências.
4. Inicie o servidor com `npm start`.

