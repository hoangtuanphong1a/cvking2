# ---------- Stage 1: Build ----------
FROM node:20-alpine AS builder

# Enable pnpm
RUN corepack enable
WORKDIR /app

# Install dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build Next.js (standalone mode)
RUN pnpm build


# ---------- Stage 2: Runtime ----------
FROM node:20-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production

# Copy only the minimal production files
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Expose the port
EXPOSE 3000

# Start the app
CMD ["node", "server.js"]