FROM golang:1.24-bullseye AS base
RUN go install github.com/air-verse/air@latest
RUN go install github.com/a-h/templ/cmd/templ@latest
WORKDIR /app
RUN mkdir -p /app/tmp/air
RUN mkdir -p /app/tmp/log
COPY go.mod go.sum ./
RUN go mod download

FROM base AS dev
WORKDIR /app
COPY . .
CMD ["air", "-c", ".air.toml"]
