/*
  Copyright (c) 2024 KHAOUITI ABDELHAKIM
  GitHub: khaouitiabdelhakim
  Free to use, update, pull, and change.
*/

const axios = require("axios");
const apiSessionInstance = require("./session");

async function getChatResponse(
  userPrompt,
  systemPrompt,
  modelId
) {
  try {
    // Get session JWT
    const sessionResponse = await apiSessionInstance.post("", {
      /* Your data here */
    });
    const AUTH_TOKEN = sessionResponse.data.data.session_jwt;

    // Define your API URL
    const API_URL = "https://api.groq.com/openai/v1/chat/completions";

    // Create an instance of axios with default headers and origin
    const apiChatInstance = axios.create({
      baseURL: API_URL,
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
        "groq-organization": "org_01....",
      },
    });

    const query = {
      model: modelId,
      messages: [
        { content: systemPrompt, role: "system" },
        { content: userPrompt, role: "user" },
      ],
      temperature: 0.2,
      max_tokens: 2048,
      top_p: 0.8,
      stream: false,
    };

    // Send the request and return the response
    const response = await apiChatInstance.post("", query);
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

module.exports = getChatResponse;
