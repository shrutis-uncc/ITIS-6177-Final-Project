# ITIS-6177-Final-Project

# Azure Translator API Integration

Welcome to the Azure Translator API Node.js Integration repository! This project demonstrates how to integrate and use the Azure Translator API in a Node.js application to perform language translation.

## Features

- Translate text into multiple languages with high accuracy.
- Supports over 90 languages.
- Real-time processing for instant results.
- Simple and scalable integration with Node.js.

## Prerequisites

1. An active Azure account.
2. Azure Cognitive Services Translator resource created.
3. Node.js installed on your machine.
4. Basic knowledge of APIs and JavaScript.

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/shrutis-uncc/ITIS-6177-Final-Project.git
cd azure-translator-integration
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root directory and add the following:

```
AZURE_API_KEY=your-azure-api-key
AZURE_ENDPOINT=https://your-resource-name.cognitiveservices.azure.com
AZURE_LOCATION=your-resource-location
```

### 4. Run the Application

```bash
node app.js
```

The server will run at `http://104.248.227.148:3000`.

## API Documentation

### Endpoint

#### POST `104.248.227.148:3000/azure-api`

- **Request Body**:

```json
{
  "text": "your_text_here",
  "from_language": "en",
  "to_translate": "fr,hi"
}
```

- **Response**:

```json
[
  {
    "translations": [
      { "text": "Bonjour", "to": "fr" },
      { "text": "नमस्ते", "to": "hi" }
    ]
  }
]
```

### Error Handling

| Status Code | Error          | Cause                                       | Solution                                     |
|-------------|----------------|---------------------------------------------|---------------------------------------------|
| 400         | Bad Request    | Missing or invalid input parameters.       | Ensure all required fields are provided.    |
| 401         | Unauthorized   | Invalid or missing API key.                | Verify the API key in your `.env` file.     |
| 500         | Internal Error | Error occurred while processing the request.| Check server logs for more details.         |

## Testing the API

1. Use [Postman](https://www.postman.com/) or any API client.
2. Create a POST request to `http://104.248.227.148:3000/azure-api`.
3. Set the request body as described above.

## Screenshots and Visuals

<img width="432" alt="image" src="https://github.com/user-attachments/assets/5af53e64-fa40-43f4-86a5-705f12d39b89">


## Contributing

Feel free to fork this repository and submit pull requests! For major changes, please open an issue first to discuss what you would like to change.
