FROM golang:1.24-bullseye AS base
RUN go install github.com/air-verse/air@latest
RUN go install github.com/a-h/templ/cmd/templ@latest
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download

FROM base AS dev
WORKDIR /app
RUN mkdir -p /app/tmp/air
RUN mkdir -p /app/tmp/log
COPY . .
CMD ["air", "-c", ".air.toml"]

FROM base AS build
WORKDIR /app
COPY . .
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o dist/heracles main.go
CMD ["ls", "-l", "/app/dist/heracles"]

FROM alpine:3.21 AS prod
WORKDIR /app
# certificats (pour les appels HTTPS éventuels)
RUN apk add --no-cache ca-certificates
# uniquement le binaire
COPY --from=build /app/dist/heracles .
RUN chmod +x /app/heracles
CMD ["./heracles"]
