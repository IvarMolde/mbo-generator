// api/generer.js
// Vercel serverless function – bruker Google Gemini API
// API-nøkkelen ligger trygt som miljøvariabel på Vercel – aldri synlig for brukeren

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ feil: "Kun POST er tillatt" });

  // Hent Google API-nøkkel fra Vercel miljøvariabel
  const apiNøkkel = process.env.GOOGLE_API_KEY;
  if (!apiNøkkel) {
    return res.status(500).json({ feil: "Google API-nøkkel ikke konfigurert på serveren" });
  }

  const { system, prompt, maxTokens } = req.body;
  if (!system || !prompt) {
    return res.status(400).json({ feil: "Mangler system eller prompt" });
  }

  try {
    // Gemini 2.0 Flash – rask og god på norsk
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiNøkkel}`;

    const svar = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system_instruction: {
          parts: [{ text: system }]
        },
        contents: [{
          parts: [{ text: prompt }]
        }],
        generationConfig: {
          maxOutputTokens: maxTokens || 3000,
          temperature: 0.7,
        }
      })
    });

    if (!svar.ok) {
      const feil = await svar.json();
      return res.status(svar.status).json({
        feil: feil.error?.message || "Feil fra Google Gemini API"
      });
    }

    const data = await svar.json();
    const tekst = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!tekst) {
      return res.status(500).json({ feil: "Tomt svar fra Gemini" });
    }

    return res.status(200).json({ tekst });

  } catch (feil) {
    console.error("Serverfeil:", feil);
    return res.status(500).json({ feil: "Serverfeil: " + feil.message });
  }
}
