import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const LOG_FILE = path.join(__dirname, 'error.log.txt'); // Change filename as needed

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
    try {
        const logContent = await fs.readFile(LOG_FILE, 'utf-8');
        res.send(`
      <html>
        <head>
          <title>Error Log Viewer</title>
          <style>
            body { background: #f7faff; font-family: 'Segoe UI', Arial, sans-serif; }
            .container { max-width: 800px; margin: 40px auto; background: #fff; border-radius: 12px; box-shadow: 0 4px 16px rgba(0,0,0,0.08); padding: 32px 24px; }
            h1 { color: #2a6edb; text-align: center; }
            pre { background: #222; color: #eee; padding: 18px; border-radius: 8px; overflow-x: auto; font-size: 1.08em; }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Error Log Viewer</h1>
            <pre>${logContent.replace(/</g, '&lt;')}</pre>
          </div>
        </body>
      </html>
    `);
    } catch (err) {
        res.status(404).send(`
      <html>
        <head><title>Error Log Viewer</title></head>
        <body style="font-family:Arial,sans-serif;background:#f7faff;text-align:center;padding:60px;">
          <h1 style="color:#e74c3c;">Log File Not Found or Inaccessible</h1>
          <p style="color:#555;">${err.message}</p>
        </body>
      </html>
    `);
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Log viewer running on http://localhost:${PORT}`);
});
