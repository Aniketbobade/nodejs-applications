const express = require("express");
const app = express();
const { OpenAI }  =require("openai");

require("dotenv").config();
app.use(express.json());

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});
  const port = process.env.PORT || 5000;
  
  app.post("/ask", async (req, res) => {
    const prompt = req.body.prompt;
    try {
      if (prompt == null) {
        throw new Error("Uh oh, no prompt was provided");
      }
      const response = await openai.chat.completions.create({
        messages: [{ role: "system", content: prompt }],
        model: "text-davinci-003",
      });
      const completion = response.data.choices[0].text;
      return res.status(200).json({
        success: true,
        message: completion,
      });
    } catch (error) {
      console.log(error.message);
    }
  });
  
  app.listen(port, () => console.log(`Server is running on port ${port}!!`));