// app/api/translate/route.js

import { translateToBengali } from "@/app/lib/translate";

export async function POST(request) {
  try {
    const { text } = await request.json();
    
    if (!text) {
      return Response.json({ error: 'Text is required' }, { status: 400 });
    }

    const translatedText = await translateToBengali(text);
    return Response.json({ translatedText });
  } catch (error) {
    console.error('Translation API error:', error);
    return Response.json({ error: 'Translation failed' }, { status: 500 });
  }
}