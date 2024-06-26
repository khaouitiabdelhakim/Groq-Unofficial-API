/*
  Copyright (c) 2024 KHAOUITI ABDELHAKIM
  GitHub: khaouitiabdelhakim
  Free to use, update, pull, and change.
*/

const axios = require('axios');
const apiSessionInstance = require('./session');

const API_URL = 'https://api.groq.com/openai/v1/models';

async function getModelIds() {
  try {
    let AUTH_TOKEN;
    
    // Get session JWT
    const sessionResponse = await apiSessionInstance.post('', {});
    AUTH_TOKEN = sessionResponse.data.data.session_jwt;

    // Fetch models
    const modelsResponse = await axios.get(API_URL, {
      headers: {
        'Authorization': `Bearer ${AUTH_TOKEN}`,
        'groq-organization': 'org_01...'
      }
    });

    // Extract and return model IDs
    const models = modelsResponse.data.data;
    const modelIds = models.map(model => model.id);
    return modelIds;
  } catch (error) {
    console.error('Error fetching model IDs:', error);
    throw error; // Re-throwing the error for handling at the caller's end
  }
}

module.exports = getModelIds;
