import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import type { Message } from '@/app/types/chat';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { messages }: { messages: Message[] } = await req.json();
    
    if (!process.env.ANTHROPIC_API_KEY) {
      throw new Error('ANTHROPIC_API_KEY is not set');
    }

    const response = await anthropic.messages.create({
      model: "claude-3-sonnet-20240229",
      max_tokens: 1024,
      messages: messages.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'assistant',
        content: msg.content
      })),
    });

    // Return the response in the correct format
    if (response.content && response.content[0] && 'text' in response.content[0]) {
        return NextResponse.json({
          message: response.content[0].text,
        });
      } else {
        throw new Error('Invalid response format');
      }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('API Error:', error.message);
      return NextResponse.json(
        { error: error.message || 'An error occurred' },
        { status: 500 }
      );
    }
    // Handle unexpected error types (e.g., non-Error objects)
    console.error('Unexpected Error:', error);
    return NextResponse.json(
      { error: 'An unknown error occurred' },
      { status: 500 }
    );
  }
}