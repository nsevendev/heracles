#Base image
FROM node:22.13.0-bookworm AS base
RUN apt-get update && apt-get install -y procps curl bash

# Install bun
FROM base As bun
RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:$PATH"
RUN bun add -g @angular/cli
RUN ng config -g cli.packageManager bun

# Installer Google Chrome pour les tests avec Karma
FROM bun AS chrome
RUN apt-get update && apt-get install -y \
    wget \
    gnupg \
    && wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google-chrome.list \
    && apt-get update \
    && apt-get install -y google-chrome-stable \
    && rm -rf /var/lib/apt/lists/*

# Mode dev
FROM chrome AS development
WORKDIR /app
COPY entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
CMD ["bun", "start"]

# Etape de build (pour la prod)
FROM bun AS builder
WORKDIR /app
COPY . .
RUN bun install --frozen-lockfile
RUN ng build --configuration=production

# Mode prod
FROM bun AS production
WORKDIR /app
COPY --from=builder /app/dist /app/dist
RUN bun add -g serve
CMD ["serve", "-s", "/app/dist"]





