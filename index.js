//URL - http://104.248.227.148:3000/azure-api
const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = 3000;

const API_KEY = process.env.AZURE_API_KEY;
const ENDPOINT = process.env.AZURE_ENDPOINT;
const LOCATION = process.env.AZURE_LOCATION;

if (!API_KEY || !ENDPOINT || !LOCATION) {
  console.error("Missing environment variables. Please check your .env file.");
  process.exit(1);
}

app.use(express.json());

//Using POST http method
app.post("/azure-api", async (req, res) => {
  try {
    const { text, from_language = "en", to_translate } = req.body;

    console.log(text);

    //Validate the input parameters
    if (!text) {
      return res.status(400).json({ error: "Missing 'text' parameter." });
    }

    if (!to_translate) {
      return res.status(400).json({ error: "Missing 'to_translate' field." });
    }

    //Make call to the Azure Translator Api
    const response = await axios({
      baseURL: ENDPOINT,
      url: "/translate",
      method: "post",
      //add the headers
      headers: {
        "Ocp-Apim-Subscription-Key": API_KEY,
        "Ocp-Apim-Subscription-Region": LOCATION,
        "Content-type": "application/json",
      },
      //construct the params
      params: {
        "api-version": "3.0",
        from: from_language,
        to: to_translate,
      },
      data: [
        {
          text: text,
        },
      ],
      responseType: "json",
    });

    //Send the results back
    res.json(response.data);
  } catch (error) {
    console.error("Error translating text:", error.message);
    res.status(500).json({
      error: "Failed to fetch data from Azure API",
      message: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://104.248.227.148:${PORT}`);
});
