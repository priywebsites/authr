import { mkdirSync, cpSync, existsSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create dist directory structure
mkdirSync('dist', { recursive: true });

// Create a simple production server entry point
const serverCode = `
import express from 'express';
import { registerRoutes } from '../server/routes.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static assets
app.use('/attached_assets', express.static(path.resolve(__dirname, '..', 'attached_assets')));
app.use(express.static(path.resolve(__dirname, 'public')));

// Register API routes
const server = await registerRoutes(app);

// Fallback to index.html for SPA
app.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

const port = parseInt(process.env.PORT || '5000', 10);
server.listen(port, '0.0.0.0', () => {
  console.log(\`Production server running on port \${port}\`);
});
`;

writeFileSync(join('dist', 'index.js'), serverCode);

console.log('Production server configuration created successfully!');