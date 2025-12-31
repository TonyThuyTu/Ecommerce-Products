FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files first (cache-friendly)
COPY package*.json ./

# Install only production deps
RUN npm ci --omit=dev

# Copy source code
COPY . .

# App port (change if yours is different)
EXPOSE 3000

# Start server
CMD ["npm", "start"]
