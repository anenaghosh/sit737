const express = require('express');
const app = express();
const port = 3000;

// Function to validate input
function validateNumbers(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return { error: "Invalid input. Both parameters must be numbers." };
    }
    return null;
}

// Arithmetic Endpoints
app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const error = validateNumbers(num1, num2);
    if (error) return res.status(400).json(error);
    res.json({ result: num1 + num2 });
});

app.get('/subtract', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const error = validateNumbers(num1, num2);
    if (error) return res.status(400).json(error);
    res.json({ result: num1 - num2 });
});

app.get('/multiply', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const error = validateNumbers(num1, num2);
    if (error) return res.status(400).json(error);
    res.json({ result: num1 * num2 });
});

app.get('/divide', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const error = validateNumbers(num1, num2);
    if (error) return res.status(400).json(error);
    if (num2 === 0) return res.status(400).json({ error: "Cannot divide by zero." });
    res.json({ result: num1 / num2 });
});

// Start server
app.listen(port, () => {
    console.log(`Arithmetic microservice running on port ${port}`);
});
const winston = require('winston');

// Configure Winston logger
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'calculator-microservice' },
    transports: [
        new winston.transports.Console({
            format: winston.format.simple(),
        }),
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs/combined.log' }),
    ],
});

// Middleware to log each request
app.use((req, res, next) => {
    logger.info(`Request received: ${req.method} ${req.url} from ${req.ip}`);
    next();
});

// Updated arithmetic endpoints with logging
app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const error = validateNumbers(num1, num2);
    if (error) {
        logger.error(`Invalid input: ${req.query.num1}, ${req.query.num2}`);
        return res.status(400).json(error);
    }
    const result = num1 + num2;
    logger.info(`Addition operation: ${num1} + ${num2} = ${result}`);
    res.json({ result });
});

// Start server
app.listen(port, () => {
    logger.info(`Arithmetic microservice running on port ${port}`);
});
