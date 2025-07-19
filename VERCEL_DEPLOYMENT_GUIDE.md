# Vercel Deployment Guide for Authentic Cuts Barbershop

This guide will walk you through deploying your barbershop website to Vercel.

## Prerequisites

1. A Vercel account (free) - sign up at https://vercel.com
2. Your project code in a Git repository (GitHub, GitLab, or Bitbucket)

## Required Files for Vercel Deployment

The following files are already configured in your project:

### 1. `vercel.json` (Project Configuration)
```json
{
  "version": 2,
  "builds": [
    {
      "src": "server/index.ts",
      "use": "@vercel/node"
    },
    {
      "src": "client/src/**/*",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist/public"
      }
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/server/index.ts"
    },
    {
      "src": "/(.*)",
      "dest": "/dist/public/$1"
    }
  ],
  "functions": {
    "server/index.ts": {
      "maxDuration": 30
    }
  },
  "installCommand": "npm install",
  "buildCommand": "npm run build"
}
```

### 2. Build Scripts (Already in package.json)
```json
{
  "scripts": {
    "build": "npm run build:client && npm run build:server",
    "build:client": "vite build",
    "build:server": "esbuild server/index.ts --bundle --platform=node --target=node18 --outfile=dist/index.js --external:express --external:path --external:url",
    "start": "node dist/index.js"
  }
}
```

## Step-by-Step Deployment Process

### Step 1: Prepare Your Repository
1. Push all your code to a Git repository (GitHub recommended)
2. Ensure all files are committed and pushed

### Step 2: Connect to Vercel
1. Go to https://vercel.com and log in
2. Click "New Project"
3. Import your Git repository
4. Select your barbershop project

### Step 3: Configure Build Settings
Vercel should automatically detect these settings:
- **Framework Preset**: Other
- **Root Directory**: `./` (leave empty)
- **Build Command**: `npm run build`
- **Output Directory**: `dist/public`
- **Install Command**: `npm install`

### Step 4: Environment Variables (if needed)
If your project uses a database or external APIs:
1. Go to Project Settings > Environment Variables
2. Add any required environment variables:
   - `DATABASE_URL` (if using PostgreSQL)
   - Any API keys for external services

### Step 5: Deploy
1. Click "Deploy"
2. Wait for the build to complete (usually 2-3 minutes)
3. Your site will be live at `https://your-project-name.vercel.app`

## Project Structure for Vercel

Your project is already properly structured:

```
authentic-cuts-barbershop/
├── client/                 # Frontend React app
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── ...
│   └── index.html
├── server/                 # Backend Express API
│   ├── index.ts           # Main server file
│   ├── routes.ts
│   └── ...
├── shared/                 # Shared types/schemas
├── dist/                   # Build output (generated)
│   ├── public/            # Client build
│   └── index.js           # Server build
├── package.json
├── vercel.json
└── vite.config.ts
```

## Build Process

When deploying to Vercel:

1. **Client Build**: Vite builds the React app to `dist/public/`
2. **Server Build**: ESBuild bundles the Express server to `dist/index.js`
3. **Static Files**: All assets are served from `dist/public/`
4. **API Routes**: Server handles `/api/*` routes

## Custom Domain (Optional)

To use a custom domain:
1. Go to Project Settings > Domains
2. Add your custom domain
3. Configure DNS records as instructed by Vercel

## Troubleshooting

### Common Issues:

**Build Fails:**
- Check that all dependencies are in `package.json`
- Ensure TypeScript files compile without errors

**Static Files Not Loading:**
- Verify `vite.config.ts` is properly configured
- Check that build outputs to `dist/public/`

**API Routes Not Working:**
- Ensure server file is at `server/index.ts`
- Check `vercel.json` routing configuration

### Checking Build Status:
1. Go to your project dashboard on Vercel
2. Click on the latest deployment
3. View build logs for any errors

## Performance Optimizations

Your project includes:
- ✅ Code splitting with Vite
- ✅ Image optimization
- ✅ CSS minification
- ✅ Tree shaking
- ✅ Gzip compression

## Monitoring

After deployment:
- Monitor performance in Vercel Analytics
- Check for any runtime errors in the Function Logs
- Set up error tracking if needed

## Security

- All environment variables are encrypted
- HTTPS is automatically enabled
- DDoS protection included

## Support

For deployment issues:
- Check Vercel documentation: https://vercel.com/docs
- Visit Vercel community: https://github.com/vercel/vercel/discussions
- Contact support: https://vercel.com/support

---

Your barbershop website is now ready for production deployment with Vercel!