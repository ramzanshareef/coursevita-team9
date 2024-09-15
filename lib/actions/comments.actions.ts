/* eslint-disable no-unused-vars */
"use server";

import { google } from '@ai-sdk/google';
import { generateText } from 'ai';



export async function createQuiz(comments: any, tpyeOfComments: String, post: any) {
    try {
        const { text } = await generateText({
            model: google('gemini-1.5-pro-latest'),
            prompt: `Comments: ${comments} Type of Comment: ${tpyeOfComments} Post: ${post} Please summarize the comments based on the type of comments as if the comments are of type 1. criticism, 2. appreciation, 3. suggestion, 4. question for criticism type comments, the model should return a summarization of the comments in a way that it highlights the issue which is being criticized for appreciation type comments, the model should return a summarization of the comments in a way that it highlights the positive aspects of the post for suggestion type comments, the model should return a summarization of the comments in a way that it highlights the suggestions given by the users for question type comments, the model should return a summarization of the comments in a way that it highlights the questions asked by the users. Please Note that the commensts are in the form of an array of strings, and also dont give the summary as this comment says this, but just give the abstract summary of the comments in max 5 lines.And also dont give the summary of the comments like --The Commentors said this or that, just give the summary of the comments in a way that it highlights the main points of the comments. Please start the summary with the main point of the comments, and start as the direct summary of the comments.`,
        });
        return {
            status: 200,
            data: JSON.parse(JSON.stringify(text)),
        };
    }
    catch (e: any) {
        return {
            status: 500,
            message: e.message,
        };
    }
}