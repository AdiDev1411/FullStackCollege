import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// API to get current count
app.get('/api/count', (req, res) => {
    fs.readFile(path.join(__dirname, 'data.json'), 'utf-8', (err, data) => {
        if (err) return res.status(500).json({ error: 'Failed to read data' });
        try {
            const json = JSON.parse(data);
            res.json({ count: json.count });
        } catch (e) {
            res.status(500).json({ error: 'Invalid data format' });
        }
    });
});

// API to update count
app.post('/api/count', (req, res) => {
    const { count } = req.body;
    if (typeof count !== 'number' || count < 0) {
        return res.status(400).json({ error: 'Invalid count value' });
    }
    const newData = { count };
    fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(newData, null, 2), err => {
        if (err) return res.status(500).json({ error: 'Failed to write data' });
        res.json({ success: true });
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
