# Desafio 4 - Agente de Integração (API)

Este diretório contém o código-fonte do agente integrador desenvolvido em **Node.js**, responsável por processar as requisições do Blip e realizar a busca de informações externas.

## 🛠️ Especificações Técnicas
- **Linguagem:** JavaScript (Node.js)
- **Framework:** Express (ou o que você usou no index.js)
- **Hospedagem:** Render
- **Gerenciador de Pacotes:** NPM

## 📂 Arquivos do Sistema
- `index.js`: Ponto de entrada da aplicação e rotas da API.
- `package.json`: Definição de dependências e scripts de inicialização.
- `.env`: Configuração de variáveis de ambiente (Exemplo: Chave de API).
- `.gitignore`: Proteção para não subir arquivos desnecessários (como node_modules).

## 🧠 Desafios de Desenvolvimento
O principal desafio técnico foi a estruturação do servidor para responder ao formato esperado pelo Blip (JSON), garantindo que os dados buscados fossem formatados corretamente antes do retorno. 

## 🚀 Deploy
A aplicação está configurada com **Continuous Deployment** via GitHub, onde cada alteração nesta pasta reflete automaticamente no ambiente de produção do Render.
