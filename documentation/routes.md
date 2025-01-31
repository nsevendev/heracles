# Routes  

- Les modes de rendu son configurer dans le fichier `app.routes.server.ts`  
- Les routes des pages sont définies dans le fichier `app.routes.ts`  
- Concernant les routes des pages, elles sont render par le `router-outlet` depuis les layouts  
et les layouts sont render par le `router-outlet` depuis le `app.component.html` qui est le composant racine de l'application  
- Ensuite les pages sont composées de composants metier ou ui  

- Les pages `notfound-page` et `internal-error-page` sont des pages de gestion d'erreur et elles ont  
leurs propre layout


