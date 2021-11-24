# Backend Challenge 

## Pré requisitos

Para rodar o projeto, você precisará de algumas dependências previamente instaladas:

- [NodeJS](https://nodejs.org/en/) ( Versão recomendada: 14.18.1)
- [Yarn](https://yarnpkg.com/) ou NPM

## Clonando o repositório 

Para baixar o repositório localmente, basta utilizar o seguinte comando em seu terminal de preferência:

```bash
$ git clone https://github.com/marceloWired/enterprise-api.git
```

## Instalando dependências

<p>Após clonar o repositório, você precisará instalar as dependências do projeto.</p>

<p>Para isso, basta navegar até a pasta do projeto e rodar o seguinte comando:</p>

```bash

# navegando até a pasta
$ cd ./enterprises-api

# instalando dependências: para Yarn
$ yarn

# instalando dependências: para NPM
$ npm install
```

## Rodando o projeto

<p>Uma vez que instalada todas as dependências, você já pode rodar a aplicação! Basta utilizar o comando:</p>

```bash
# para Yarn
$ yarn dev

# para NPM
$ npm run dev
```

Por padrão, a aplicação irá rodar na porta 3002.

## Arquivo .ENV

<p>No arquivo .env você pode setar algumas variáveis de ambiente, como a porta onde a aplicação irá rodar.</p>

<p>Também temos o link do banco de dados onde você não precisa se preocupar, a conexão é feita com um usuário temporário que expira daqui 06 dias contando a partir o dia 23/11.</p>

## Deploy

Você pode conferir o frontend que consome essa aplicação clicando <a href="https://enterprise-frontend-alterado.vercel.app/">AQUI</a>

Caso julgue necessário, é possível acessar o link da API diretamente <a href="https://enterprise-backend-api.herokuapp.com/">AQUI</a>
