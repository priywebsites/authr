#!/usr/bin/env node
import { execSync } from 'child_process';
import { mkdirSync, writeFileSync, cpSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('Starting production build...');

try {
  // Create dist directory
  mkdirSync('dist', { recursive: true });
  mkdirSync('dist/public', { recursive: true });

  // Build client with a different command to avoid port conflicts
  console.log('Building client...');
  execSync('npx vite build --mode production', {
    stdio: 'inherit',
    env: { ...process.env, NODE_ENV: 'production' }
  });

  // Create production server
  console.log('Creating production server...');
  const serverCode = `
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS for development
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Serve attached assets
app.use('/attached_assets', express.static(path.resolve(__dirname, '..', 'attached_assets')));

// Serve built client files
app.use(express.static(path.resolve(__dirname, 'public')));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Fallback to index.html for SPA routes
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// Error handling
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

const port = parseInt(process.env.PORT || '5000', 10);
const host = process.env.HOST || '0.0.0.0';

app.listen(port, host, () => {
  console.log(\`🚀 Production server running on http://\${host}:\${port}\`);
  console.log(\`📁 Serving static files from: \${path.resolve(__dirname, 'public')}\`);
  console.log(\`🖼️  Serving assets from: \${path.resolve(__dirname, '..', 'attached_assets')}\`);
});
`;

  writeFileSync(resolve('dist', 'server.js'), serverCode);

  console.log('✅ Production build completed successfully!');
  console.log('📦 Built files are in the dist/ directory');
  console.log('🚀 Run with: NODE_ENV=production node dist/server.js');

} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}