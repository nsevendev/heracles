#Base image
FROM node:22.13.0-bookworm AS base
RUN apt-get update && apt-get install -y procps curl bash
# Installer Google Chrome pour les tests avec Karma
RUN apt-get update && apt-get install -y \
    wget \
    gnupg \
    && wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google-chrome.list \
    && apt-get update \
    && apt-get install -y google-chrome-stable \
    && rm -rf /var/lib/apt/lists/*

# Install bun
FROM base As bun
RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:$PATH"
RUN bun add -g @angular/cli
RUN ng config -g cli.packageManager bun

FROM bun AS development
WORKDIR /app
COPY entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh
EXPOSE 4200
EXPOSE 9876
EXPOSE 9222
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
CMD ["bun", "start"]





