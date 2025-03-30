const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/exponentiation', (req, res) => {
    const { base, exponent } = req.query;
    if (!base || !exponent) return res.status(400).json({ error: 'Missing parameters' });
    res.json({ result: Math.pow(Number(base), Number(exponent)) });
});

app.get('/sqrt', (req, res) => {
    const { number } = req.query;
    if (!number) return res.status(400).json({ error: 'Missing parameter' });
    res.json({ result: Math.sqrt(Number(number)) });
});

app.get('/modulo', (req, res) => {
    const { dividend, divisor } = req.query;
    if (!dividend || !divisor) return res.status(400).json({ error: 'Missing parameters' });
    res.json({ result: Number(dividend) % Number(divisor) });
});

app.listen(port, () => console.log(`Calculator microservice running on port ${port}`));
