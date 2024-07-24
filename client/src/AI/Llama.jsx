import axios from 'axios';

const apiKey = 'LL-fxElMDVQd3wxzK6CDRMthYNG6RP9Ix1PJSgiTe1MzGM77prTxhinXyvM3Kx7s8NX'; // Replace with your actual API key
const baseURL = 'https://api.llama-api.com/chat/completions'; // Replace with the actual LLaMA API endpoint

export const fetchLlamaResponse = async (prompt) => {
  try {
    const response = await axios.post(baseURL, 
      {
        prompt,
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching data from LLaMA API:', error);
    throw error;
  }
};
