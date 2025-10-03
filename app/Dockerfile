# --- Build Stage ---
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# --- Production Stage ---
FROM nginx:alpine

# Copy built files from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose Cloud Run port
EXPOSE 8080

# Configure nginx to listen on Cloud Run's port
CMD ["nginx", "-g", "daemon off;"]
