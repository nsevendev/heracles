# Rules architechture   

---

## **Exemple Structure Générale**

```
/src
│   ├── /app
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   └── app-routing.module.ts
│   │── /core
│   │   ├── /layout
│   │   │   ├── /layout-private.component.ts
│   │   │   ├── /layout.component.ts
│   │   ├── /pages
│   │   │   ├── /private
│   │   │   │   ├── /dashboard.page.ts
│   │   │   ├── /public
│   │   │   │   ├── /home.page.ts
│   │   ├── /components
│   │   │   ├── /header
│   │   │   │   ├── /header-private.component.ts
│   │   │   │   ├── /header.component.ts
│   │   │   ├── /footer
│   │   │   │   ├── /footer-private.component.ts
│   │   │   │   ├── /footer.component.ts
│   │   ├── /services
│   │   │   │   ├── /date.service.ts
│   │   ├── /guards
│   │   │   │   ├── /role.guard.ts
│   │   ├── /interceptors
│   │── /shared
│   │   ├── /components
│   │   │   ├── /button
│   │   │   │   ├── /button.component.ts
│   │   ├── /directives
│   │   ├── /pipes
│   │── /domain
│   │   ├── /task-example
│   │   │   ├── /components
│   │   │   ├── /services
│   │   │   ├── /models
│   │   └── /another-domain
│   │       ├── /components
│   │       ├── /services
│   │       ├── /models
│   ├── /assets
│   ├── /environments
│   ├── main.ts
│   ├── main.server.ts
│   └── styles.css
```

<br>

---

## 1. Détails des Dossiers et Fichiers  

> Les fichiers .html et .css ont été omis pour simplifier la lecture  
> mais chaques composants contient ses fichiers .html et .css

### **1.1 Dossier `core/`**
Le dossier `core` contient tous les éléments globaux de l'application, qui sont utilisés une seule fois et fournis à l'ensemble du projet.

- **`layout/`** : Gestion des layouts (privé et public).
- **`pages/`** : Pages globales (ex. : Dashboard, Home).
- **`components/`** : Composants génériques de l'application (ex. : Header, Footer).
- **`services/`** : Services globaux (ex. : `date.service.ts` pour la gestion des dates).
- **`guards/`** : Guards pour la gestion des accès et rôles (ex. : `role.guard.ts`).
- **`interceptors/`** : Gestion des intercepteurs HTTP.

### **1.2 Dossier `shared/`**
Le dossier `shared` contient les éléments réutilisables à travers l’application.

- **`components/`** : Composants génériques utilisés dans plusieurs parties de l’application.
  - `button/` : Composant `button.component.ts` utilisé de manière transversale.
- **`directives/`** : Directives personnalisées.
- **`pipes/`** : Pipes Angular personnalisés.

### **1.3 Dossier `domain/`**
Le dossier `domain` représente la logique métier de l’application.

- **`task-example/`** : Gestion des tâches avec :
  - `components/` : Composants liés aux tâches.
  - `services/` : Services spécifiques aux tâches.
  - `models/` : Modèles Class / TypeScript liés aux tâches.
- **`another-domain/`** : Structure similaire pour un autre domaine métier.

### **1.4 Dossiers supplémentaires possible**

- **`assets/`** : Contient les fichiers statiques (images, icônes (png etc ...), etc.).
- **`environments/`** : Configuration des environnements (`dev`, `prod`).

### **1.5 Fichiers supplémentaires existant**

- **`main.ts`** : Entrée principale pour l'application Angular.
- **`main.server.ts`** : Entrée principale pour l'exécution en mode SSR.
- **`server.ts`** : Fichier du serveur expressjs pour le SSR.
- **`styles.css`** : Fichier de styles global de l’application.

## 2. Conclusion
Cette structure assure une séparation claire entre  
- les fonctionnalités globales (`core`),  
- les composants réutilisables (`shared`),  
- et la logique métier (`domain`).  

**Tous ceci peut etre modulable en gardant le tronc commun (core, domain, shared)  
et ainsi rajouter une gestion de store globale, ou autres mécanismes**

<br>

---

<br>
