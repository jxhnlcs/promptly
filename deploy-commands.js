require('dotenv').config();
const { REST, Routes } = require('discord.js');
const { discordToken, clientId, guildId } = require('./config');
const fs = require('node:fs');
const path = require('node:path');

const commands = [];

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(discordToken);

(async () => {
  try {
    console.log('🚀 Iniciando deploy dos comandos slash...');

    await rest.put(
      Routes.applicationGuildCommands(clientId, guildId),
      { body: commands },
    );

    console.log('✅ Comandos registrados com sucesso!');
  } catch (error) {
    console.error('Erro ao registrar comandos:', error);
  }
})();