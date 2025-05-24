// backend/src/index.ts
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config(); // Load environment variables from .env

const app = express();
const PORT = process.env.PORT || 5000; // Use port from .env or default to 5000

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // For parsing application/json

// --- Routes ---

// Root endpoint
app.get('/', (request, response) => {
    response.status(200).send({ msg: 'Hello from the Backend!' });
});

// API endpoint for dummy users
app.get('/api/users', (request, response) => {
    const users = [
        { id: 1, username: 'jhon', displayName: 'Jhon Doe' },
        { id: 2, username: 'jane', displayName: 'Jane Doe' },
        { id: 3, username: 'peter', displayName: 'Peter Pan' },
    ];
    response.status(200).json(users); // Using .json() is preferred for sending JSON data
});

// Start the server
app.listen(PORT, () => {
    console.log(`Backend server is running on port ${PORT}`);
});