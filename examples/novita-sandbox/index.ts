import 'dotenv/config'
import { Sandbox } from 'novita-sandbox/code-interpreter'

/**
 * Minimal Novita Code Interpreter demo.
 *
 * Requires NOVITA_API_KEY in the environment or a local `.env` file
 * (see `.env.example`). dotenv loads `.env` from the current working directory.
 *
 *   cd examples/novita-sandbox
 *   npm install
 *   export NOVITA_API_KEY=sk_***   # or copy .env.example → .env
 *   npm start
 */

async function main() {
  if (!process.env.NOVITA_API_KEY) {
    throw new Error(
      'NOVITA_API_KEY is not set. Copy .env.example to .env or export NOVITA_API_KEY=sk_***'
    )
  }

  const sandbox = await Sandbox.create()
  try {
    const execution = await sandbox.runCode('print("hello world")')
    console.log('execution.logs:', execution.logs)

    const files = await sandbox.files.list('/tmp')
    console.log('files in /tmp:', files)
  } finally {
    // Always tear down so the remote sandbox does not keep running.
    await sandbox.kill()
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
