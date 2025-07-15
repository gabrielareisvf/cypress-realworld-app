# 🧪 Projeto QA Prático – Testes Automatizados com Cypress  
**Aplicação Real World App (RWA)**

Este repositório reúne os testes funcionais automatizados que desenvolvi durante minha jornada de aprendizado em **Quality Assurance (QA)**. Os testes foram implementados com **Cypress.io** e aplicados sobre o sistema Real World App, uma aplicação web que simula funcionalidades bancárias reais.

---

## 📚 Funcionalidades Cobertas

### 🔐 Login
- ✅ Login bem-sucedido com dados válidos  
- 🚫 Erro ao tentar login com usuário/senha inválidos

### 🧾 Cadastro de Usuário
- ✅ Criação de nova conta com informações corretas  
- 🚫 Falha ao tentar cadastrar com campos incompletos

### 💸 Transferência de Dinheiro
- ✅ Envio de valores com saldo suficiente  
- 🚫 Erro ao tentar enviar sem saldo disponível

### 📜 Histórico de Transações
- ✅ Visualização de transações anteriores (usuário com histórico)  
- ℹ️ Exibição de mensagem informando ausência de transações (usuário sem histórico)

---

## 🚀 Como Executar os Testes

### ✅ Requisitos
Certifique-se de ter o **Node.js** instalado. A versão utilizada pode ser consultada no arquivo `.node-version` do projeto.

Além disso, é necessário utilizar o **Yarn Classic (v1.x)**. Para instalar globalmente:

```bash
npm install yarn@latest -g
```

> 💡 Se estiver usando o recurso **Corepack** do Node.js, você pode pular a instalação manual do Yarn.

> ⚠️ **Este projeto não é compatível com Yarn Modern (2.x ou superior).**

---

### 📦 Instalação do Projeto

```bash
git clone https://github.com/gabrielareisvf/cypress-realworld-app
cd cypress-realworld-app
yarn
```

💡 Para usuários de **Mac com chip M1/M2**, use:

```bash
PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true yarn install
```

---

### ▶️ Iniciar a Aplicação

```bash
yarn dev
```

A aplicação será iniciada nas portas padrão:

- `3000` → Frontend  
- `3001` → Backend/API

> Caso essas portas estejam ocupadas, altere as variáveis `PORT` e `VITE_BACKEND_PORT` no `.env`.  
> ⚠️ Não versionar essas alterações no Git.

---

### 🧪 Executar os Testes com Cypress

Para abrir a interface do Cypress:

```bash
yarn cypress:open
```

Ou para rodar os testes em modo headless:

```bash
yarn cypress:run
```

---

## 📁 Estrutura de Pastas

```bash
cypress/
├── fixtures/              # Dados de teste (ex: usuários)
├── pages/                 # Page Object Models
│   ├── loginPage.js
│   ├── userRegistrationPage.js
│   ├── sendMoneyPage.js
│   └── transactionHistoryPage.js
└── tests/
    └── e2e/
        ├── login.spec.js
        ├── userRegistration.spec.js
        ├── sendMoney.spec.js
        └── transactionHistory.spec.js
```

---

## 🛠️ Tecnologias Utilizadas

- [Cypress.io](https://www.cypress.io/)  
- Node.js  
- JavaScript (ES6+)  
- Yarn Classic  
- Real World App (RWA)

---

## 🎯 Objetivo do Projeto

Este projeto tem como foco o desenvolvimento de habilidades práticas em QA, incluindo:

- ✍️ Escrita de casos de teste baseados em requisitos reais  
- 🤖 Automação de testes funcionais com Cypress  
- 📐 Organização de código com Page Object Model (POM)  
- 🧠 Validação de funcionalidades críticas em sistemas web

---

## 👩‍💻 Autor(a)

**Gabriela Reis**  
Estudante e futura QA profissional apaixonada por qualidade de software.  
🔗 [github.com/gabrielareisvf](https://github.com/gabrielareisvf)

---

## 📌 Créditos

Este projeto utiliza como base a aplicação **Real World App**, criada e mantida pela equipe do Cypress.  
🔗 Repositório oficial: [https://github.com/cypress-io/cypress-realworld-app](https://github.com/cypress-io/cypress-realworld-app)

> Este repositório tem fins educacionais e de prática profissional.


