# Rules naming  

> ATTENTION UTILISER LES OUTILS DU CLI ANGULAR POUR CREER LES FICHIERS  
> PUIS DEPLACER CELUI CI DANS LE DOSSIER APPROPRIE  
> 
> utiliser les commandes makes utilisant `ng`, besoin d'aide taper `make help` directement dans le terminal

---

### **1. Utilisation des minuscules et du kebab-case**

- **Dossiers** : Nommez tous les dossiers en minuscules,  
en utilisant le kebab-case (mots séparés par des tirets) pour améliorer la lisibilité.  
utilisez le pluriel pour les dossiers contenant plusieurs éléments.  

  *Exemples* :
  - `/src/app/core/components/`
  - `/src/app/features/task/services/`
  - `/src/app/features/task/models/`
  - `/src/app/features/task/components/`
  - `/src/app/shared/components`  
etc...  

<br>

- **Fichiers** : De même, nommez les fichiers en minuscules avec le kebab-case,  
en ajoutant des suffixes explicites pour indiquer leur type.

  *Exemples* :
  - `user-profile.component.ts`
  - `auth.service.ts`
  - `app.module.ts`  
etc...

<br>

---

<br>

### **2. Suffixes des fichiers**

Ajoutez des suffixes explicites pour indiquer le type de fichier :

- **Composants** : `[nom].component.ts`
- **Services** : `[nom].service.ts`
- **Modules** : `[nom].module.ts`
- **Directives** : `[nom].directive.ts`
- **Pipes** : `[nom].pipe.ts`
- **Modèles** : `[nom].model.ts`  
etc...

  *Exemples* :
  - `login.component.ts`
  - `auth.service.ts`
  - `user.module.ts`
