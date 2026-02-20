
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: (process.env as any).API_KEY, vertexai: true });

export const getAIResponse = async (userMessage: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        ...history,
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: `Вы — профессиональный ассистент по недвижимости для элитного риэлтора Алексея Иванова. 
        Ваша задача: помогать клиентам с вопросами о покупке, продаже и инвестициях в коммерческую недвижимость в Санкт-Петербурге. 
        Будьте вежливы, профессиональны и лаконичны. 
        Если спрашивают о ценах, давайте общие рыночные ориентиры. 
        Всегда предлагайте оставить контакты для детальной консультации с Алексеем.`,
        temperature: 0.7,
      }
    });
    return response.text;
  } catch (error) {
    console.error('Gemini API Error:', error);
    return 'Извините, произошла ошибка при обработке вашего запроса. Пожалуйста, попробуйте позже или свяжитесь со мной напрямую.';
  }
};

export const generateImage = async (prompt: string, aspectRatio: '1:1' | '3:4' | '4:3' | '9:16' | '16:9' = '1:1') => {
  try {
    const response = await ai.models.generateImages({
      model: 'imagen-4.0-generate-001',
      prompt: prompt,
      config: {
        numberOfImages: 1,
        outputMimeType: 'image/jpeg',
        aspectRatio: aspectRatio,
      },
    });

    const base64ImageBytes = response.generatedImages[0].image.imageBytes;
    return `data:image/jpeg;base64,${base64ImageBytes}`;
  } catch (error) {
    console.error('Image Generation Error:', error);
    return null;
  }
};
