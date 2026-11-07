// server.js
// Simple Express server for the AI Software Development Team project
// ---------------------------------------------------------------
// This file sets up a basic web server that:
//   • Loads environment variables from a .env file (via dotenv)
//   • Serves a health‑check endpoint at GET /health
//   • Serves a status endpoint at GET /api/status
//   • Listens on port 3000 (or the PORT env var if provided)
//   • Includes minimal error handling for unexpected errors
// The code is intentionally beginner‑friendly with clear comments.

// 1️⃣ Load environment variables from a .env file (if present)
require('dotenv').config();

// 2️⃣ Import Express and create an app instance
const express = require('express');
const app = express();

// 3️⃣ Define a simple health‑check route
//    This endpoint is useful for monitoring tools and for confirming the server is running.
app.get('/health', (req, res) => {
  // Respond with a JSON payload indicating the service status
  res.json({ status: 'ok' });
});

// 4️⃣ Define a status route for service monitoring
//    Returns operational status, uptime in seconds, ISO timestamp, and environment.
app.get('/api/status', (req, res, next) => {
  try {
    res.json({
      status: 'ok',
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development'
    });
  } catch (err) {
    next(err);
  }
});

// 5️⃣ Basic error handling middleware
//    Catches any errors that occur in route handlers and returns a JSON error response.
app.use((err, req, res, next) => {
  console.error('Unexpected error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// 6️⃣ Determine the listening port (default to 3000)
const PORT = process.env.PORT || 3000;

// 7️⃣ Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
