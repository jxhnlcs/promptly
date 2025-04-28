const axios = require('axios');
const { openaiApiKey } = require('../config');

async function openaiAsk(prompt) {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
      },
      {
        headers: {
          'Authorization': `Bearer ${openaiApiKey}`,
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error('Erro ao consultar o ChatGPT:', error.response?.data || error.message);
    return 'Erro ao consultar o ChatGPT.';
  }
}

module.exports = { openaiAsk };
