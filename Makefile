#find variable in .env.dev file

#ifneq (,$(wildcard .env.dev))
#   include .env.dev
#   export $(shell sed 's/=.*//' .env.dev)
#endif

NAME_CONTAINER=heracles-front

# Executables (local)
DOCKER			= docker
DOCKER_COMP = docker compose

# Docker containers
APP_CONT = $(DOCKER_COMP) exec $(NAME_CONTAINER)

# Executables
NPM = $(APP_CONT) npm
BUN = $(APP_CONT) bun
NGG = $(APP_CONT) ng g
# TODO : ajouter executable pour les tests si pas de commande dans le package.json

# Files env
ENV_FILE_DEV = .env.dev.local
ENV_FILE_PROD = .env.prod.local

# Misc
.DEFAULT_GOAL = help
.PHONY        : help build up start down logs sh bash install bun bun-arg bun-prune

## —— 🎵 🐳 The Angular Docker Makefile 🐳 🎵 ——————————————————————————————————
help: ## Outputs this help screen
	@grep -E '(^[a-zA-Z0-9\./_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}{printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'

## —— Docker dev 🐳 ————————————————————————————————————————————————————————————————
build: ## Builds the Docker images
	@echo "🚀 Lancement du build..."
	@$(DOCKER_COMP) build --pull --no-cache

up: ## Start the docker hub mode dev in detached mode (no logs)
	@echo "🚀 Lancement en mode development..."
	@$(DOCKER_COMP) up --detach

start: build up ## Build and start the containers mode dev

down: ## Stop the docker hub
	@echo "🚀 Fermeture des containers..."
	@$(DOCKER_COMP) down

## —— Docker generic 🐳 ————————————————————————————————————————————————————————————————
logs: ## Show live logs
	@echo "🚀 Affichage des logs du container..."
	@$(DOCKER) logs -f $(NAME_CONTAINER)

bash: ## Connect container via bash so up and down arrows go to previous commands
	@echo "🚀 Ouverture du container..."
	@$(APP_CONT) bash

## —— Tests 🧪 ——————————————————————————————————————————————————————————————
test: ## Exécute les tests sans watch
	@echo "🚀 Lancement des tests simple..."
	@$(BUN) run t:t

test-w: ## Exécute les tests avec watch
	@echo "🚀 Lancement des tests en mode watch..."
	@$(BUN) run t:w

test-c: ## Exécute les tests avec code coverage
	@echo "🚀 Lancement des tests en mode coverage..."
	@$(BUN) run tc:t

test-cw: ## Exécute les tests avec code coverage en mode watch
	@echo "🚀 Lancement des tests en mode coverage + watch..."
	@$(BUN) run tc:w

## —— Angular Cli 🧙 ——————————————————————————————————————————————————————————————
ng: ## Run ng, pass the parameter "c=" to run a given command, example: make ng c='generate service servicename'
	@echo "🚀 Angular Cli..."
	@$(eval c ?=)
	@$(APP_CONT) ng $(c)

ngg: ## ng generate, pass the parameter "c=" to run a given command, see command in https://angular.dev/cli/generate
	@echo "🚀 Angular Cli Generate..."
	@$(eval c ?=)
	@$(NGG) $(c)

## —— Bun Cli 🧙 ——————————————————————————————————————————————————————————————
install: ## Install dependencies with Bun and with lock file
	@$(BUN) install --frozen-lockfile

bun: ## Run bun, pass the parameter "c=" to run a given command, example: make bun c='add packagename'
	@echo "🚀 Bun Cli..."
	@$(eval c ?=)
	@$(BUN) $(c)

bun-arg: ## Run bun, pass the parameter "c=" to run a given command, example: make bun c='add packagename'
	@$(eval c ?=)
	@$(eval arg ?=)
	@$(BUN) $(c) $(arg)

bun-prune: ## Remove unused dependencies
	@$(BUN) prune

## —— Docker prod 🐳 🚀🚀🚀🚀 ——————————————————————————————————————————————————————————————
prod: ## lancement de container en mode prod
	@echo "🚀 Lancement en mode production..."
	@$(DOCKER_COMP) -f compose.yaml -f compose.prod.yaml up -d

down-prod: ## arret des container en mode prod
	@echo "🛑 Arrêt du container en production..."
	@$(DOCKER_COMP) -f compose.yaml -f compose.prod.yaml down

