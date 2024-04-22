/*
  Copyright (c) 2024 KHAOUITI ABDELHAKIM
  GitHub: khaouitiabdelhakim
  Free to use, update, pull, and change.
*/

const getChatResponse = require('./utils/api');

(async () => {
  // Define user prompt, system prompt, and model ID
  const userPrompt = "Is german langauge difficult to learn?";
  const systemPrompt = "Please try anwser in morroccan dialect.";
  const modelId = "gemma-7b-it";

  try {
    // Call the getChatResponse function to get a response
    const response = await getChatResponse(userPrompt, systemPrompt, modelId);
    console.log("Response:", response);
  } catch (error) {
    console.error("Error:", error);
  }
})();
