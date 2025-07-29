# FROM node:18-alpine

# WORKDIR /app

# COPY package*.json ./

# RUN npm install

# COPY . .

# EXPOSE 3000

# CMD npm run build
# 1. Base image
FROM node:18-alpine AS builder

# 2. Set working directory
WORKDIR /app

# 3. Copy dependencies
COPY package.json package-lock.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy app source code
COPY . .

# 6. Build the Next.js app
RUN npm run build

# 7. Create a new image for production
FROM node:18-alpine AS runner

WORKDIR /app

# Copy built files from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# If using standalone build:
# COPY --from=builder /app/.next/standalone ./
# COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["npm", "start"]
