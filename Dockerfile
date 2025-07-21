# Use Node.js 20 runtime
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy built application
COPY dist/ ./dist/
COPY attached_assets/ ./attached_assets/ 2>/dev/null || true

# Expose port
EXPOSE 5000

# Add health check for autoscaling
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:5000/health || exit 1

# Start the server
CMD ["node", "dist/index.js"]