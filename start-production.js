#!/usr/bin/env node
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Basic logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Serve attached assets
const assetsPath = path.resolve(__dirname, 'attached_assets');
if (existsSync(assetsPath)) {
  app.use('/attached_assets', express.static(assetsPath));
  console.log(`📁 Serving assets from: ${assetsPath}`);
}

// Serve built client files
const publicPath = path.resolve(__dirname, 'dist', 'public');
if (existsSync(publicPath)) {
  app.use(express.static(publicPath));
  console.log(`📁 Serving static files from: ${publicPath}`);
} else {
  console.error(`❌ Public directory not found: ${publicPath}`);
  console.log('Available directories:', process.cwd());
}

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    env: process.env.NODE_ENV 
  });
});

// Basic API endpoint for testing
app.get('/api/status', (req, res) => {
  res.json({ status: 'running', app: 'Authentic Cuts Barbershop' });
});

// Fallback to index.html for SPA routes
app.get('*', (req, res) => {
  const indexPath = path.resolve(publicPath, 'index.html');
  if (existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send('App not built yet. Please run build first.');
  }
});

// Error handling
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

const port = parseInt(process.env.PORT || '5000', 10);
const host = process.env.HOST || '0.0.0.0';

app.listen(port, host, () => {
  console.log(`🚀 Production server running on http://${host}:${port}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
});