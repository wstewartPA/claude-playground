This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started
1. Get an Anthropic API key:
    * Go to https://console.anthropic.com/
    * Create an account or sign in if you already have one
    * Once logged in, go to the "API Keys" section in your account settings
    * Click "Create Key" to generate a new API key
    * Copy the key - it will start with "sk-"
2. Create a file called '.env.local' in the root of the directory
3. Add the following to you .env.local file:
    ANTHROPIC_API_KEY=your_api_key_here
5. Run 'npm install in your terminal'
6. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

