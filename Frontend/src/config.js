// src/config.js

// Access environment variables using Vite's import.meta.env
export const FRONTEND_URL = import.meta.env.VITE_FRONTEND_URL || 'http://localhost:5173';
