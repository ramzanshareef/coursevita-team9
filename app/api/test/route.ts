import { google } from '@ai-sdk/google';
import { generateText } from 'ai';

export async function POST(req: Request) {
    try {

        // const { text } = await generateText({
        //     model: google('gemini-1.5-pro-latest'),
        //     prompt: `Comments: ${comments} Type: ${tpyeOfComments} Post: ${post} Please summarize the comments based on the type of comments as if the comments are of type 1. criticism, 2. appreciation, 3. suggestion, 4. question for criticism type comments, the model should return a summarization of the comments in a way that it highlights the issue which is being criticized for appreciation type comments, the model should return a summarization of the comments in a way that it highlights the positive aspects of the post for suggestion type comments, the model should return a summarization of the comments in a way that it highlights the suggestions given by the users for question type comments, the model should return a summarization of the comments in a way that it highlights the questions asked by the users`,
        // });
        return Response.json({
        });
    }
    catch (error: any) {
        return Response.json({
            status: 500,
            error
        });
    }
}