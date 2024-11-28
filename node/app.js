import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
});

const msg = await anthropic.messages.create({
  model: "claude-3-sonnet-20240229",
  max_tokens: 1024,
  messages: messages.map(msg => ({
    role: msg.role === 'user' ? 'user' : 'assistant',
    content: msg.content
  })),
});

console.log(msg)

// anthropic.messages.create({
//   model: "claude-3-haiku-20240307",
//   max_tokens: 1024,
//   temperature: 0.6,
//   messages: messages.map(msg => ({
//     role: msg.role === 'user' ? 'user' : 'assistant',
//     content: msg.content
//   })),
// })
  