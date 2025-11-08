
var GoogleGenAI = require("@google/genai").GoogleGenAI;

require('dotenv').config()

const ai = new GoogleGenAI(process.env.GOOGLE_GEN_AI_KEY);

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Explain how AI works in a few words",
  });
  return response.text
}




var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  let gem = await main();
  res.json({"gemini_response": "PLACEHOLDER"});
  res.render(gem, { title: 'Express' });
});

module.exports = router;