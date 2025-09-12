const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));
app.use(express.urlencoded({ extended: true }));

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Show tax form
app.get('/', (req, res) => {
    res.render('form', { error: null, values: { income1: '', income2: '' } });
});

// Handle form submission
app.post('/result', (req, res) => {
    const { income1, income2 } = req.body;
    let error = null;
    let values = { income1, income2 };

    // Validation: must be numbers and not empty
    if (!income1 || !income2) {
        error = 'Please enter both income values.';
        return res.render('form', { error, values });
    }
    if (isNaN(income1) || isNaN(income2)) {
        error = 'Please enter valid numbers only.';
        return res.render('form', { error, values });
    }

    // Calculate total income
    const total = Number(income1) + Number(income2);
    res.render('result', { total });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
