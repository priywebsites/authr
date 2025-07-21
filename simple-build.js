#!/usr/bin/env node

import { execSync } from 'child_process';
import { existsSync, mkdirSync, writeFileSync, cpSync } from 'fs';
import path from 'path';

console.log('🚀 Building Authentic Cuts Barbershop for deployment...');

// Create dist directory
if (!existsSync('dist')) {
  mkdirSync('dist', { recursive: true });
}

try {
  // Build only the client directly without server interference
  console.log('📦 Building client application...');
  execSync('cd client && npx vite build --outDir ../dist/public --mode production', {
    stdio: 'inherit',
    env: { ...process.env, NODE_ENV: 'production' }
  });

  // Create a simple production server
  console.log('🔧 Creating production server...');
  const serverCode = `
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Health check endpoint for autoscaling
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Serve attached assets
if (require('fs').existsSync(path.join(__dirname, '..', 'attached_assets'))) {
  app.use('/attached_assets', express.static(path.join(__dirname, '..', 'attached_assets')));
}

// SPA fallback - serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(\`🌟 Authentic Cuts Barbershop running on port \${PORT}\`);
});
`;

  writeFileSync('dist/index.js', serverCode);

  // Copy assets if they exist
  if (existsSync('attached_assets')) {
    console.log('📁 Copying assets...');
    cpSync('attached_assets', 'dist/attached_assets', { recursive: true });
  }

  console.log('✅ Build completed successfully!');
  console.log('📁 Files ready for deployment:');
  console.log('   - dist/public/ (React app)');
  console.log('   - dist/index.js (Express server)');
  console.log('   - dist/attached_assets/ (Assets)');

} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}