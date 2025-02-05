# Prime NG

- on utilise la bibliothèque PrimeNG pour le projet  
mais nous utilisons tailwind en second plan pour les styles personnalisés  
- la config de primeNG est dans le fichier `src/styles/heracles-theme.ts`  
cette config est appellé dans `app.config.ts`  
- pour surcharger les styles de primeNG avec tailwind, ajout le " ! " de important  
proprieté css: `!important` devant la classe tailwind ex: `!bg-blue-500`  
