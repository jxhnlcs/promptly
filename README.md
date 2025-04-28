# Promptly 🚀

Promptly é um bot de Discord open-source que conecta você ao ChatGPT usando comandos de texto diretamente no seu servidor!

<p align="center">
  <img src="assets/icon-promptly.png" alt="Promptly Logo" width="150" />
</p>

## 🔥 Funcionalidades

- Faça perguntas ao ChatGPT com o comando `/perguntar`.
- Receba respostas diretamente no Discord.
- Código limpo, modular e fácil de expandir.
- Configuração segura via `.env`.

## 🛠️ Tecnologias usadas

- [Node.js](https://nodejs.org/)
- [Discord.js](https://discord.js.org/)
- [OpenAI API](https://platform.openai.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [axios](https://axios-http.com/)

## ⚙️ Instalação

Clone o repositório:

```bash
git clone https://github.com/jxhnlcs/promptly.git
cd promptly
```

Instale as dependências:

```bash
npm install
```

Configure as variáveis ambiente criando um arquivo `.env` baseado no `.env.example`:

```env
DISCORD_TOKEN=seu_token_do_bot
OPENAI_API_KEY=sua_key_da_openai
```

Registre os comandos de slash:

```bash
node deploy-commands.js
```

Inicie o bot:

```bash
node index.js
```

👉 O Promptly agora está online no seu servidor Discord!

## 🤖 Comandos disponíveis

- `/perguntar [texto]` — Envia sua pergunta para o ChatGPT.

---

Feito com ❤️ por John Lucas ou [@ifyouweremy](https://discord.com/users/852939215503097896) no discord
