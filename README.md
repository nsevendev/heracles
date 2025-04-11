# Heracles  

> Front du projet garage LM4  

## Prérequis  

- docker doit etre installé  
- CLI `ns` doit etre installé et à jour    
- traefik (traefik nseven) doit etre démarré  
- copier/coller `.env.dist` et nommer le fichier `.env` (demander les variables manquantes)  
- (si besoin) ajouter dans /etc/hosts le host que vous avez renseigné dans le `.env` qui se situe dans `HOST_TRAEFIK`  
(prendre la string qui se situe entre parenthèse)

## Commande CLI `ns`

- ns lit un fichier `commands.yaml` situé dans le projet  
cela permet de creer des commandes personnalisées pour le projet
- pour lister les commandes disponibles lancer `ns c list`
- pour executer une commande lancer `ns c <nom_de_la_commande>`
- pour executer une commande avec un parametre lancer `ns c <nom_de_la_commande> <parametre>`

## Installation  

```bash
# lance les containers
ns c dev

# lance les containers avec build
ns c devb

# lance les containers avec build et en mode no detach
ns c devbnod

# arreter le container
ns c stop
```

## Template avec `templ`  

- ce projet utilise `templ` pour la gestion des templates html  
voici la [doc](https://templ.guide/) ce package permet de creer des composants    
réutilisable et de les `render` facilement depuis les controllers  
- la gestion de generation des templates (compilation) est géré par `air`  
donc à chaque reload de `air` les templates sont recompilés et  
donc le navigateur peux etre rechargé pour voir les modifications  
vous n'avez qu'a modifier les fichier `.templ`et `air` s'occupe du reste  