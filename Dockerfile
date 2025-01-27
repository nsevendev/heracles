#Base image
FROM node:22.13.0-bookworm AS base
RUN apt-get update && apt-get install -y procps curl bash

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
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
CMD ["bun", "start"]





