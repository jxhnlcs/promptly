const { Client, Collection, GatewayIntentBits, Events } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const { discordToken } = require('./config');

const express = require('express');
const app = express();

app.get('/ping', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>Status do Bot</title>
      <style>
        body {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background-color: #f0f2f5;
          margin: 0;
          font-family: Arial, sans-serif;
        }
        .status-container {
          text-align: center;
          background: white;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }
        .status-container h1 {
          color: #28a745;
          font-size: 32px;
          margin-bottom: 12px;
        }
        .status-container p {
          color: #555;
          font-size: 18px;
        }
      </style>
    </head>
    <body>
      <div class="status-container">
        <h1>✅ Online</h1>
        <p>O Bot Promptly está funcionando normalmente.</p>
      </div>
    </body>
    </html>
  `);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🌐 Servidor HTTP ouvindo na porta ${PORT}`));

// ---------------------------------------------

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  client.commands.set(command.data.name, command);
}

client.once(Events.ClientReady, c => {
  console.log(`✅ Bot Promptly conectado como ${c.user.tag}`);
});

client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) return;

  const command = client.commands.get(interaction.commandName);
  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({ content: 'Ocorreu um erro ao executar o comando!', ephemeral: true });
  }
});

client.login(discordToken);