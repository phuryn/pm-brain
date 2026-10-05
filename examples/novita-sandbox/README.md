# Novita Sandbox example

Minimal TypeScript demo of [Novita Code Interpreter](https://novita.ai/) sandboxes: create a sandbox, run Python, list `/tmp`, then kill the sandbox.

This is a standalone sidecar under `examples/` — it is **not** part of the PM Brain skill, scaffold, or eval harness.

## Prerequisites

- Node.js 20+
- A Novita API key (`NOVITA_API_KEY`)

## Run

```bash
cd examples/novita-sandbox
npm install
cp .env.example .env   # then paste your key
npm start
```

Or without a `.env` file:

```bash
export NOVITA_API_KEY=sk_***
npm start
```

Expected output includes `hello world` in the execution logs and a listing of `/tmp` inside the remote sandbox.

## Layout

| File | Role |
| --- | --- |
| `index.ts` | Create → `runCode` → `files.list` → `kill` |
| `.env.example` | Template for `NOVITA_API_KEY` |
| `package.json` | `novita-sandbox`, `dotenv`, `tsx` |
