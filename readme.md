# 🧪 Automação de Testes E2E & API - Automation Exercise

![Cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

Projeto de automação de testes híbrido (Front-end e API) desenvolvido para validar as funcionalidades do e-commerce [Automation Exercise](https://automationexercise.com/). O projeto foca em arquitetura escalável, utilizando **Page Objects** para UI e validações de contrato para API.

## 🚀 Destaques Técnicos

* **Page Object Model (POM):** Arquitetura para separação de responsabilidades e reuso de código.
* **API Testing:** Testes de integração diretos nos endpoints da aplicação (`cy.request`).
* **Dados Dinâmicos:** Geração de massa de dados única (e-mails randômicos) para garantir a execução contínua dos testes sem conflitos.
* **Massa de Dados Estruturada:** Uso de Objetos JavaScript para preenchimento de formulários complexos.
* **Hooks:** Uso de `beforeEach` para otimização e limpeza de código (DRY).
* **Upload de Arquivos:** Automação de input de arquivos locais.

## 📂 Estrutura do Projeto

```text
cypress/
├── e2e/
│   ├── api/
│   │   └── produtos.cy.js      # Testes de API (Backend)
│   ├── fluxo_cadastro.cy.js    # Teste de Registro Completo
│   ├── fluxo_contato.cy.js     # Teste de Fale Conosco
│   └── navegacao_inicial.cy.js
├── fixtures/
│   └── teste.txt               # Arquivo para teste de upload
├── support/
│   ├── pages/                  # Page Objects (UI)
│   │   ├── CadastroPage.js     # Mapeamento do formulário complexo
│   │   ├── ContatoPage.js
│   │   ├── HomePage.js
│   │   └── LoginPage.js
│   ├── commands.js             # Comandos customizados
│   └── e2e.js

```

## ✅ Cenários Cobertos

### 🖥️ Front-end (UI)

1. **Cadastro de Usuário (Fluxo Completo):**
* Preenchimento de formulário complexo (Dropdowns, Checkboxes, Endereço).
* Uso de **e-mail dinâmico** para garantir sucesso no cadastro.
* Validação de bloqueio para e-mails duplicados.


2. **Autenticação:**
* Login com sucesso e validação de erro (Credenciais inválidas).


3. **Fale Conosco:**
* Envio de mensagem com anexo (**Upload de arquivo**).
* Validação de mensagem de sucesso.



### 🔌 Back-end (API)

1. **Produtos:**
* GET: Validação de Status Code 200 e contrato JSON da lista de produtos.
* POST: Validação de segurança (Status 405 - Method Not Allowed) para rotas protegidas.



## ⚙️ Como Rodar o Projeto

### Pré-requisitos

* [Node.js](https://nodejs.org/) (LTS)
* Git

### Passo a Passo

1. **Clone o repositório:**
```bash
git clone [https://github.com/itjuanr/qa-automation-exercise.git](https://github.com/itjuanr/qa-automation-exercise.git)

```


2. **Instale as dependências:**
```bash
npm install

```


3. **Execute os testes:**
* **Modo Interface (Visual):**
```bash
npx cypress open

```


* **Modo Headless (Terminal):**
```bash
npx cypress run

```
