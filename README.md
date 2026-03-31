
Processo Seletivo Intelbras - Chatbot & IA Generativa 🚀

Este repositório contém a entrega completa dos desafios técnicos propostos, demonstrando habilidades em fluxos conversacionais (Blip), lógica de programação em JavaScript e implementação avançada de IA Generativa.

📁 Conteúdo do Repositório
Desafios 1 e 2: Arquivos .json na raiz com o fluxo completo do chatbot, modelo de IA (NLP) treinado e o script de validação de horário comercial.

Desafio 3: Arquivo de coleção do Postman com a requisição estruturada para a API de clima StormGlass.

Desafio 4 (Destaque): Localizado na pasta /Desafio-4, contendo o código-fonte do Agente de IA Generativa.

🌟 Diferencial: Agente de IA com Function Calling
O Desafio 4 foi desenvolvido como um fallback inteligente. Quando o fluxo principal não reconhece a intenção do usuário, o agente entra em ação de forma autônoma.

Tecnologias e Decisões Técnicas:
LLM (Groq/Llama-3): Escolhida pela alta performance e suporte nativo a Function Calling.

Function Calling: O modelo foi configurado com uma tool de busca na API do OMDb, decidindo sozinho quando precisa de dados reais sobre filmes.

Hospedagem (Render): API publicada em URL pública para integração direta com as requisições HTTP do Blip.

Segurança: Implementação de variáveis de ambiente (.env) para proteção das chaves de API.

