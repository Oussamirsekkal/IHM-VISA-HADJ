import fetch from 'isomorphic-fetch';

const translateText = async (
  text: string,
  source: string,
  target: string
): Promise<string> => {
  try {
    const res = await fetch('https://libretranslate.com/translate', {
      method: 'POST',
      body: JSON.stringify({ q: text, source, target }),
      headers: {
        'Content-Type': 'application/json',
        // Add any additional headers if required by the API
      
      },
    });

    if (!res.ok) {
      throw new Error('Translation failed with status: ' + res.status);
    }

    const data = await res.json();
    return data.translatedText;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Translation error:', error.message);
    } else {
      console.error('Unknown error occurred:', error);
    }
    throw new Error('Translation failed');
  }
};

export default translateText;
