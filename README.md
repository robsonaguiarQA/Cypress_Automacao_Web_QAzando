# Automacao_Web_Cypress_QAzando
básico no dia a dia de um QA

Este repositório contém um projeto de **automação de testes end-to-end com Cypress**, aplicando **boas práticas de programação**, incluindo o uso de **Page Objects**, uma organização de código limpa e escalável.

---

## 🚀 Tecnologias utilizadas
- Cypress – Framework de testes E2E
- JavaScript
- Node.js e npm

## 🛠️ Boas Práticas Aplicadas

✅ **Page Objects**: cada página da aplicação tem sua própria classe/módulo, concentrando seletores e ações, tornando os testes mais legíveis e fáceis de manter.  
✅ **Custom Commands**: funções reutilizáveis no `commands.js`, como `cy.login()` ou `cy.cadastrarUsuario()`.  
✅ **Separação de camadas**: lógica de negócio nos *Pages* e massa de dados em `fixtures/`.  
✅ **Testes independentes**: cada teste pode rodar sozinho sem depender da execução de outro.  
✅ **Nomenclatura clara**: arquivos e métodos possuem nomes que descrevem exatamente sua função.

---

## 🧪 Cenários de Teste Implementados

- **Login de usuário**
  - Login com credenciais válidas
  - Validação de mensagens de erro (senha inválida, usuário inexistente, campos obrigatórios)

- **Cadastro de usuário**
  - Cadastro com dados válidos
  - Validação de mensagens de erro (email já existente, campos obrigatórios)

