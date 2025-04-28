const { SlashCommandBuilder } = require('discord.js');
const { openaiAsk } = require('../services/openaiService');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('perguntar')
    .setDescription('Faz uma pergunta ao ChatGPT')
    .addStringOption(option =>
      option.setName('texto')
        .setDescription('O que você quer perguntar?')
        .setRequired(true)
    ),

  async execute(interaction) {
    const pergunta = interaction.options.getString('texto');
    await interaction.deferReply();

    const resposta = await openaiAsk(pergunta);
    await interaction.editReply(resposta);
  }
};