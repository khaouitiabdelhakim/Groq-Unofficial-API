/*
  Copyright (c) 2024 KHAOUITI ABDELHAKIM
  GitHub: khaouitiabdelhakim
  Free to use, update, pull, and change.
*/

const axios = require('axios');

// Define your API URL and authentication token
const API_URL = 'https://web.stytch.com/sdk/v1/sessions/authenticate';
const AUTH_TOKEN = 'cHViLmFwcGxlLmNvbToxMjM0NTY='; 

// Create an instance of axios with default headers and origin
const apiSessionInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Authorization': `Basic ${AUTH_TOKEN}`,
    'x-sdk-client': 'ey...',
    'Content-Type': 'application/json',
    'x-sdk-parent-host': 'https://groq.com',
    'origin': 'https://groq.com'
  }
});

// export the session instance
module.exports = apiSessionInstance;
