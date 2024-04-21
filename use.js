const getChatResponse = require('./utils/api');

(async () => {
  const userPrompt = "What is python";
  const systemPrompt = "Please try to provide useful, helpful and actionable answers.";
  const modelId = "llama3-8b-8192";

  try {
    const response = await getChatResponse(userPrompt, systemPrompt, modelId);
    console.log("Response:", response);
  } catch (error) {
    console.error("Error:", error);
  }
})();
