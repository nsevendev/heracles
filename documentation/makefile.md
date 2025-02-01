# Makefile  

> Makefile est un fichier raccourcie pour executer des commandes du terminal local  
> directement dans le container docker. Obliger vous à l'utiliser pour éviter les bugs.  

### voir toute les commandes disponibles dans le makefile  
```bash
# taper la commande suivante dans le terminal
make help
# ou
make
```

### commande special `make ngg c=""`  
cette commande permet de generer n'importe quel fichier dans le projet angular.  
si vous avez besoin de creer des `composants`, `services`, `pipe`, `directive` etc ...  
utilisez cette commande. Dans c="" mettez la commande que vous voulez executer  
par exemple si vous voulez creer un composant vous pouvez taper la commande suivante  
```bash
# creer un composant nommé my-component
make ngg c="component my-component"
```
par default le cli vous creer les choses dans le dossier app donc apres la generation  
deplacez le dossier/fichier à l'endroit approprié dans le projet.  

### Commandes disponibles dans le cli angular:  
- https://angular.dev/cli/generate  

ce lien est egalement disponible quand vous taper la commande `make help` dans le terminal.  
à la section de la command `ngg`.
