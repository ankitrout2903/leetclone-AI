// Import the OpenAIStream function from the '@/utils' file
import { OpenAIStream } from '@/utils/code-translate/index';

// Define the configuration for the serverless function
export const config = {
  runtime: 'edge',
};

// Define the main function for the serverless function
export default async function handler(req: { json: () => PromiseLike<{ inputLanguage: any; outputLanguage: any; inputCode: any; }> | { inputLanguage: any; outputLanguage: any; inputCode: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): void; new(): any; }; }; }) {
  try {
    // Parse incoming request data as JSON
    const { inputLanguage, outputLanguage, inputCode } = await req.json();

    // Call the OpenAIStream function with input parameters
    const stream = await OpenAIStream(
      inputLanguage,
      outputLanguage,
      inputCode
    );

    // Return the response from the OpenAIStream function
    return new Response(stream);
  } catch (error) {
    // Catch errors and return an error message
    res.status(500).send('Error')
  }
}
