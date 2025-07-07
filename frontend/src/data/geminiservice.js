import axios from "axios";

const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export const sendToGemini = async (userInput, lang = "en") => {
  const prompt = `
You are an Ayurvedic doctor. Only provide advice based on ancient Ayurvedic principles.
The user may describe symptoms, dosha problems, or lifestyle issues.
Based on their message, suggest:
- Ayurvedic medicines
- Useful herbs
- Natural remedies
- Dietary or lifestyle suggestions

Answer in the language code: ${lang}

User message: "${userInput}"
`;

  try {
    const response = await axios.post(
      `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
      {
        contents: [{ parts: [{ text: prompt }] }],
      }
    );

    const aiText =
      response.data.candidates?.[0]?.content?.parts?.[0]?.text || "No response.";
    return aiText;
  } catch (err) {
    console.error("Gemini error:", err);
    return "Sorry, I couldn’t fetch a response. Try again.";
  }
};
