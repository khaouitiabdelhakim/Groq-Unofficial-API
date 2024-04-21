const axios = require('axios');

// Define your API URL and authentication token
const API_URL = 'https://web.stytch.com/sdk/v1/sessions/authenticate';
const AUTH_TOKEN = 'cHVibGljLXRva2VuLWxpdmUtMjZhODlmNTktMDlmOC00OGJlLTkxZmYtY2U3MGU2MDAwY2I1OkMyLS1PeTVSeUZEWkZYMlhXN0Y1UDloR2FiNk4tQjBvVDN5ZUNQUkgybFRy'; 


// Create an instance of axios with default headers and origin
const apiSessionInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Authorization': `Basic ${AUTH_TOKEN}`,
    'x-sdk-client': 'eyJldmVudF9pZCI6ImV2ZW50LWlkLTQxZWY0MzNlLWY1NGMtNGEyMS1hMzhjLTNlOTY0ZjRlNjdmZiIsImFwcF9zZXNzaW9uX2lkIjoiYXBwLXNlc3Npb24taWQtNDg2NWVmNzYtOTU0Yi00NTE5LWFhZTktZDQ5YTJhNGJkZDhhIiwicGVyc2lzdGVudF9pZCI6InBlcnNpc3RlbnQtaWQtZjRjNDU5ODktMmM5Mi00NmJlLTg4YTEtZjA3MTdhZTA1ODUwIiwiY2xpZW50X3NlbnRfYXQiOiIyMDI0LTA0LTIxVDE4OjQ5OjMzLjIyOFoiLCJ0aW1lem9uZSI6IkFmcmljYS9DYXNhYmxhbmNhIiwic3R5dGNoX3VzZXJfaWQiOiJ1c2VyLWxpdmUtNjhmNTUwYzctNTRlOS00ODU1LWI3OTgtZGE5ODkzOTU4ODgxIiwic3R5dGNoX3Nlc3Npb25faWQiOiJzZXNzaW9uLWxpdmUtNTUwNmY4MzctYjZiMC00M2VkLTg5MGYtZGY3ZmFjZDU0OTgzIiwiYXBwIjp7ImlkZW50aWZpZXIiOiJncm9xLmNvbSJ9LCJzZGsiOnsiaWRlbnRpZmllciI6IlN0eXRjaC5qcyBKYXZhc2NyaXB0IFNESyIsInZlcnNpb24iOiI0LjYuMCJ9fQ==',
    'Content-Type': 'application/json',
    'x-sdk-parent-host': 'https://groq.com',
    'origin': 'https://groq.com'
  }
});

// export the session instance
module.exports = apiSessionInstance;


