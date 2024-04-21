# Groq Unofficial API


Welcome to the Groq Unofficial API! This API provides an interface for interacting with Groq's services in a seamless and efficient manner. Whether you're a developer, researcher, or enthusiast, this API empowers you to integrate Groq's capabilities into your applications and projects with ease.



# Disclaimer: This is Not the Official Groq API

Please note that this API is an unofficial implementation and is not affiliated with Groq. For the official Groq API, please visit groq.com.

```
If you find this repository useful or it has helped you,
please don't forget to leave a ⭐️, or even follow my GitHub account.
Your support motivates me to continue providing helpful resources.
Thank you for your appreciation! 🌟🚀💖😊👍

If you'd like to support further, consider buying us a coffee:
```
[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee--yellow.svg?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/kh.abdelhakim)

### Features

- **Chat Interface**: Engage with Groq's cutting-edge chat capabilities through a simple API interface. Utilize chat prompts and receive responses powered by advanced natural language processing models.
  
- **Model Management**: Access and manage Groq's models effortlessly. Retrieve model IDs, configure model parameters, and streamline your workflow when working with Groq's AI models.

### Installation

To start using the Groq Unofficial API, simply install the required dependencies:

```bash
npm install axios
```

### Getting Started

1. **Authentication**: Before using the API, ensure you have the necessary authentication credentials. This typically involves obtaining an authentication token or session JWT, which grants access to Groq's services.

2. **Importing the API**: Import the API module into your project using `require` or `import` statements.

3. **Interacting with Groq**: Begin interacting with Groq's services by calling the provided API functions. Pass in the required parameters, such as prompts or model IDs, to receive responses tailored to your needs.

### Usage

```javascript
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
```

### Dependencies

- **axios**: A popular HTTP client for making requests to external APIs.

### Contributing

We welcome contributions from the community to enhance and improve the Groq Unofficial API. Feel free to submit pull requests, report issues, or share ideas for new features.

### Disclaimer

This project is not affiliated with Groq and is an unofficial API implementation. Use it at your own discretion and ensure compliance with Groq's terms of service and usage policies.

## License

```
Copyright 2024 KHAOUITI Abdelhakim
powered by KHAOUITI Apps

Licensed under the MIT License
You may obtain a copy of the License at

http://opensource.org/licenses/MIT

Unless required by applicable law or agreed to in writing, software
distributed under the MIT License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the MIT License.
```

Thank you for choosing the Groq Unofficial API! We hope it accelerates your development and enables exciting new possibilities with Groq's technology. If you have any questions or feedback, please don't hesitate to reach out. Happy coding!
