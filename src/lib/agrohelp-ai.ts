import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const messageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  text: z.string().trim().min(1).max(2_000),
});

const chatSchema = z.object({
  messages: z.array(messageSchema).min(1).max(10),
});

const systemInstruction = `You are AgroHelp AI, the helpful assistant for AgroHelp, a climate-smart farming platform created by the Made in Moldova team.
Answer in the language used by the visitor (Russian, Romanian, or English). Be concise, practical and friendly.
You can explain soil moisture, irrigation, weather-aware field work, crop monitoring, agricultural technology and QR food traceability.
Do not invent sensor readings, weather forecasts, regulations, pesticide dosage, or agricultural diagnoses. For high-risk crop, chemical or safety decisions, recommend consulting a qualified local agronomist.`;

type GeminiResponse = {
  candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>;
  error?: { message?: string };
};

export const askAgroHelp = createServerFn({ method: "POST" })
  .validator(chatSchema)
  .handler(async ({ data }) => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("AgroHelp AI is not configured yet.");
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${process.env.GEMINI_MODEL ?? "gemini-3.6-flash"}:generateContent`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-goog-api-key": apiKey,
        },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: systemInstruction }] },
          contents: data.messages.map((message) => ({
            role: message.role === "assistant" ? "model" : "user",
            parts: [{ text: message.text }],
          })),
          generationConfig: { maxOutputTokens: 350, temperature: 0.35 },
        }),
      },
    );

    const result = (await response.json()) as GeminiResponse;
    if (!response.ok) {
      throw new Error(result.error?.message ?? "Gemini could not answer right now.");
    }

    const reply = result.candidates?.[0]?.content?.parts
      ?.map((part) => part.text ?? "")
      .join("")
      .trim();

    if (!reply) throw new Error("Gemini returned an empty response.");
    return { reply };
  });
