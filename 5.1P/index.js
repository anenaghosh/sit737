require("dotenv").config();
const express = require("express");
const { Pool } = require("pg");

const app = express();
const PORT = process.env.PORT || 3000;

// PostgreSQL Database Connection
const pool = new Pool({
  user: process.env.DB_USER || "user",
  host: process.env.DB_HOST || "db",
  database: process.env.DB_NAME || "mydatabase",
  password: process.env.DB_PASSWORD || "password",
  port: 5432, // PostgreSQL default port
});

// Middleware
app.use(express.json());

// Root Route
app.get("/", (req, res) => {
  res.send("🚀 Welcome to my Dockerized Node.js App!");
});

// Database Test Route
app.get("/db-test", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ message: "Database connected!", time: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database connection failed" });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
