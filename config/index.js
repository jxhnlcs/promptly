require('dotenv').config();

module.exports = {
  discordToken: process.env.DISCORD_TOKEN,
  openaiApiKey: process.env.OPENAI_API_KEY,
  clientId: process.env.DISCORD_CLIENT_ID,
  guildId: process.env.DISCORD_GUILD_ID
};