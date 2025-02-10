#find variable in .env.dev file

#ifneq (,$(wildcard .env.dev))
#   include .env.dev
#   export $(shell sed 's/=.*//' .env.dev)
#endif

# Executables (local)
DOCKER			= docker
DOCKER_COMP = docker compose

# Docker containers
APP_CONT = $(DOCKER_COMP) exec app

# Executables
NPM      = $(APP_CONT) npm
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
	@$(DOCKER_COMP) build --pull --no-cache

up: ## Start the docker hub mode dev in detached mode (no logs)
	@$(DOCKER_COMP) up --detach

start: build up ## Build and start the containers mode dev

## —— Docker generic 🐳 ————————————————————————————————————————————————————————————————
down: ## Stop the docker hub
	@$(DOCKER_COMP) down --remove-orphans

logs: ## Show live logs
	@$(DOCKER) logs -f heracles

sh: ## Connect to the FrankenPHP container
	@$(APP_CONT) sh

bash: ## Connect to the FrankenPHP container via bash so up and down arrows go to previous commands
	@$(APP_CONT) bash

## —— Tests 🧪 ——————————————————————————————————————————————————————————————
test: ## Exécute les tests sans watch
	@$(BUN) run t:t

test-w: ## Exécute les tests avec watch
	@$(BUN) run t:w

test-c: ## Exécute les tests avec code coverage
	@$(BUN) run tc:t

test-cw: ## Exécute les tests avec code coverage en mode watch
	@$(BUN) run tc:w

## —— Angular Cli 🧙 ——————————————————————————————————————————————————————————————
ng: ## Run ng, pass the parameter "c=" to run a given command, example: make ng c='generate service servicename'
	@$(eval c ?=)
	@$(APP_CONT) ng $(c)

ngg: ## ng generate, pass the parameter "c=" to run a given command, see command in https://angular.dev/cli/generate
	@$(eval c ?=)
	@$(NGG) $(c)

## —— Bun 🧙 ——————————————————————————————————————————————————————————————
install: ## Install dependencies with Bun and with lock file
	@$(BUN) install --frozen-lockfile

bun: ## Run bun, pass the parameter "c=" to run a given command, example: make bun c='add packagename'
	@$(eval c ?=)
	@$(BUN) $(c)

bun-arg: ## Run bun, pass the parameter "c=" to run a given command, example: make bun c='add packagename'
	@$(eval c ?=)
	@$(eval arg ?=)
	@$(BUN) $(c) $(arg)

bun-prune: ## Remove unused dependencies
	@$(BUN) prune
