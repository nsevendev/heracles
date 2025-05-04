-include .env

# Redéfinir MAKEFILE_LIST pour qu'il ne contienne que le Makefile
MAKEFILE_LIST := Makefile

ifeq ($(APP_ENV),dev)
  CONTAINER_NAME := heracles-go
  COMPOSE_FILES := -f docker/compose.yaml -f docker/compose.override.yaml
else ifeq ($(APP_ENV),prod)
  CONTAINER_NAME := heracles-go-prod
  COMPOSE_FILES := -f docker/compose.prod.yaml
else ifeq ($(APP_ENV),preprod)
  CONTAINER_NAME := heracles-go-preprod
  COMPOSE_FILES := -f docker/compose.preprod.yaml
endif

GO_COMMAND_CONTAINER := $(CONTAINER_NAME) go
BASH_COMMAND_CONTAINER := $(CONTAINER_NAME) sh

.DEFAULT_GOAL = help

## —— 🐳 ALL 🐳 ——————————————————————————————————
help: ## Afficher l'aide
	@grep -E '(^[a-zA-Z0-9\./_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}{printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'

starter: ## Instruction pour installer le projet
	cat doc/lancer-environement.md

## —— 🐳 CONTAINER 🐳 ——————————————————————————————————

## Attention définisser l'environement avec APP_ENV=dev, APP_ENV=prod, APP_ENV=preprod
## dans le .env

up: ## Démarre l'environnement
	docker compose --env-file .env $(COMPOSE_FILES) up -d

upb: ## Démarre l'environnement avec build
	docker compose --env-file .env $(COMPOSE_FILES) up -d --build

upbnod: ## Démarre l'environnement sans mode détaché et avec build
	docker compose --env-file .env $(COMPOSE_FILES) up --build

down: ## Arrête les conteneurs
	docker compose --env-file .env $(COMPOSE_FILES) down

## —— 🐳 TEMPLATE 🐳 ——————————————————————————————————

## la generation des templates sert à creer le fichier .go appartenant au fichier
## .templ corespondant à votre code html, utiliser le mode watch pour le dev

gh: ## Genere les templates
	docker exec -i $(CONTAINER_NAME) templ generate -v -log-level -path ./src/template

gwh: ## Genere les templates en mode watch
	docker exec -i $(CONTAINER_NAME) templ generate -watch -v -log-level -path ./src/template

## —— 🐳 TOOL 🐳 ——————————————————————————————————

gg: ## Ajoute une dépendance - usage: make gg dep=path_de_la_dependance
	docker exec -i $(GO_COMMAND_CONTAINER) get $(dep)

s: ## Ouvre un shell dans le conteneur app
	docker exec -it $(BASH_COMMAND_CONTAINER)

l: ## Affiche les logs du conteneur app
	docker logs -f $(CONTAINER_NAME)