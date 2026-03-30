# Processo Seletivo Intelbras - Soluções de Chatbot

Este repositório centraliza os desafios técnicos realizados para a Intelbras. O foco principal deste projeto é a automação de fluxos e a integração de inteligência artificial via API.

## 📂 Estrutura do Projeto

- **Desafios 1, 2 e 3:** Arquivos `.json` localizados na raiz, contendo os fluxos exportados do Blip (NLU, Validação de Horário e Tracking).
- **Desafio 4 (Destaque):** Localizado na pasta `/Desafio-4`, contendo o código-fonte da API de integração.

## 🚀 Desafio 4: Agente Integrador (Node.js)

O maior desafio técnico deste processo foi o desenvolvimento e deploy de um middleware para conectar o Blip a serviços externos.

### ✅ O que foi implementado:
* **Integração de API:** Consumo de dados externos e tratamento de respostas em tempo real para o chatbot.
* **Segurança:** Uso de variáveis de ambiente (`.env`) para proteção de chaves e dados sensíveis.
* **Deploy e CI/CD:** Configuração de pipeline entre GitHub e **Render**, garantindo que a API esteja online (Live) e responda às requisições do Blip.

### 🧠 Desafios Técnicos Superados:
* **Configuração de Ambiente:** Estruturação do servidor Node.js para suportar as requisições do Blip.
* **Gestão de Deploy:** Ajuste de diretórios e caminhos de execução para garantir a estabilidade da aplicação no ambiente de produção do Render.
* **Tratamento de Dados:** Formatação correta dos JSONs de retorno para que o chatbot exiba as informações de forma amigável ao usuário.


## 🛠️ Como Testar
1. **Fluxos Blip:** Importe os arquivos `.json` no portal Blip para visualizar a lógica e os Tracks de monitoramento.
2. **API (Desafio 4):** O código fonte está disponível na pasta `/Desafio-4`. A API encontra-se hospedada no Render para testes em tempo real.

