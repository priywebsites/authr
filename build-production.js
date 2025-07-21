#!/usr/bin/env node

import { execSync } from 'child_process';
import { existsSync, mkdirSync } from 'fs';
import path from 'path';

console.log('Building Authentic Cuts Barbershop for production...');

// Ensure dist directory exists
if (!existsSync('dist')) {
  mkdirSync('dist', { recursive: true });
}

try {
  // Kill any existing processes to free up port 5000
  try {
    execSync('pkill -f vite || true', { stdio: 'pipe' });
    execSync('pkill -f tsx || true', { stdio: 'pipe' });
    execSync('pkill -f "node.*server" || true', { stdio: 'pipe' });
  } catch (e) {
    // Ignore errors, processes might not exist
  }
  
  // Wait a moment for processes to clean up
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Set environment to production
  process.env.NODE_ENV = 'production';
  
  // Build client using dedicated build config
  console.log('Building client with Vite...');
  execSync('npx vite build --config vite.build.config.ts', { 
    stdio: 'inherit', 
    env: { ...process.env, NODE_ENV: 'production' },
    cwd: process.cwd()
  });
  
  // Build server (Express app)
  console.log('Building server with ESBuild...');
  execSync(`npx esbuild server/index.ts --bundle --platform=node --target=node20 --outfile=dist/index.js --external:express --external:path --external:url --external:fs --external:http --external:crypto --external:os --external:buffer --external:stream --external:util --external:events --external:querystring --external:zlib --external:net --external:@neondatabase/serverless --external:drizzle-orm --external:nanoid --minify --define:process.env.NODE_ENV='"production"'`, { 
    stdio: 'inherit',
    env: { ...process.env, NODE_ENV: 'production' }
  });
  
  console.log('✅ Build completed successfully!');
  console.log('📁 Client built to: dist/public');
  console.log('🚀 Server built to: dist/index.js');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}