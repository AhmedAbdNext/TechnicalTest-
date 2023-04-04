# **Projet**

Ce projet utilise Vite et BabelJS pour compiler et bundle les fichiers JavaScript, CSS et autres ressources nécessaires à l'application.

## **Prérequis**

Assurez-vous d'avoir Node.js et npm installés sur votre machine.

## **Installation**

1. Clonez le projet à partir du dépôt GitHub : **`git clone git@github.com:AhmedAbdNext/nnnnnnnnn.git`**
2. Installez les dépendances du projet : **`npm install`**

## **Utilisation**

1. Pour lancer l'application en mode développement : **`npm run start`**
2. Pour lancer l'application en mode production : **`npm run build`**
3. Pour exécuter les tests : **`npm run test`**
4. Pour lance eslint: **`npm run lint`**

## **Structure du projet**

- **`main.js`** : Fichier d'entrée principal pour l'application
- **`src/`** : Répertoire contenant les fichiers sources de l'application
- **`dist/`** : Répertoire contenant les fichiers générés Webpack pour l'application en mode production
- **`test/`** : Répertoire contenant les fichiers de test pour l'application



## **Docker**
Pour créer l'image Docker, accédez au répertoire contenant le Dockerfile et exécutez la commande suivante :

```

docker build -t my-nginx-image .

```

Cela créera une image Docker avec une tag "my-nginx-image" basée sur le Dockerfile dans le répertoire actuel.

Vous pouvez ensuite exécuter l'image en tant que conteneur à l'aide de la commande suivante :

```

docker run -p 8080:80 my-nginx-image

```

Cela démarrera un conteneur exécutant Nginx avec votre projet Webpack sur le port 8080 sur votre ordinateur local.

## **Eslint**

Ce projet posséde un outil d'analyse statique populaire 
(`Eslint `) qui aide les développeurs à identifier et à résoudre les problèmes dans leur code JavaScript.

Pour exécuter ESLint sur votre code, vous pouvez utiliser la commande :

```

npm run lint

```