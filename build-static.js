#!/usr/bin/env node

import { execSync } from 'child_process';
import { existsSync, mkdirSync, cpSync, rmSync } from 'fs';
import path from 'path';

console.log('🚀 Building static site for Vercel deployment...');

// Clean up any existing dist
if (existsSync('dist')) {
  rmSync('dist', { recursive: true });
}
mkdirSync('dist', { recursive: true });

try {
  // Copy the client directory to a temp build location
  console.log('📦 Preparing client build...');
  
  // Build the client using its own vite config
  console.log('🔨 Building React application...');
  execSync('cd client && npx vite build --outDir=../dist/public', {
    stdio: 'inherit',
    env: { 
      ...process.env, 
      NODE_ENV: 'production',
      VITE_API_BASE_URL: '/api'
    }
  });

  // Copy attached assets if they exist
  if (existsSync('attached_assets')) {
    console.log('📁 Copying assets...');
    cpSync('attached_assets', 'dist/public/attached_assets', { recursive: true });
  }

  console.log('✅ Static build completed successfully!');
  console.log('📁 Files ready for deployment:');
  console.log('   - dist/public/ (React app)');
  console.log('   - Ready for static hosting (Vercel, Netlify, etc.)');

} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}