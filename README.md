# Processo Seletivo Intelbras - Chatbot & Integração

Este repositório contém a solução completa para os 4 desafios propostos, demonstrando habilidades em fluxos conversacionais no Blip, lógica de programação e integração de APIs.

## 🚀 O que foi desenvolvido

- **Desafios 1 e 2 (Fluxos Conversacionais):** Criação de bot com inteligência artificial para recomendação de filmes e sistema de validação de horário de atendimento automatizado.
- **Desafio 3 (Observabilidade):** Implementação de registros de eventos (Tracks) para monitorar o comportamento do usuário e a performance da NLU.
- **Desafio 4 (Agente Integrador):** Desenvolvimento de uma API em Node.js para conectar o Blip a serviços externos, com deploy realizado no Render.

## 🧠 Desafios Enfrentados e Soluções

1. **Gestão de Fuso Horário:** Um dos maiores desafios foi garantir que a validação de horário funcionasse corretamente no servidor (UTC), sendo necessário criar um script para ajustar o fuso para o horário de Brasília (-3).
2. **Integração em Tempo Real:** Conectar o Agente do Desafio 4 com o Blip exigiu atenção rigorosa à estrutura dos JSONs de requisição e resposta para garantir que o bot exibisse os dados corretamente.
3. **Organização de Código:** Centralizar diferentes desafios em um único repositório, garantindo que o deploy no Render continuasse funcional mesmo após a reestruturação das pastas.

## 📁 Estrutura do Repositório
- `/Desafio-4`: Código-fonte da API (Node.js).
- `Desafio1.json`, `Desafio2.json`, `Desafio_3_Integracao_StormGlass_Rosimeire.json`: Exportações dos fluxos do Blip.
