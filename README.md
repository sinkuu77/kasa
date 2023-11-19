# Kasa (un site de la location d’appartements entre particuliers)

<p>J'ai créé un site en responsive en utilisant les composants React, les routes React Router, dans le cadre du huitième projet de ma formation en tant qu'intégrateur web chez OpenClassrooms.</p>
<p>  👇 </p>
<a href=></a>

* **Pour exécuter ce projet**
<p>Cloner le repo en local</p>

```bash
npm install

npm run start
```
  
## Preview

Projet 8 - Créez une application web de location immobilière avec React (OpenClassrooms)

<img src="https://i.ibb.co/y529J7P/kasa.webp" />

## le délai de production du site
14.06.23 - 11.07.23

## Stack utilisé
React, Sass

## Point
<p>J'ai appris comment créer une application de manière efficace en produisant des composants réutilisables. </p>
<p>De plus, pour la première fois, j'ai pris en compte l'expérience utilisateur en utilisant React Router.</p>

## Problème en réalisant ce projet
<p>Lorsque j'utilisais React, je rencontrais fréquemment des difficultés à gérer les erreurs 'Cannot read properties of undefined'. </p>
<p>J'ai découvert la cause de ces erreurs grâce à un article de blog, qui expliquait que l'erreur se produit lorsque l'on essaie d'accéder à une valeur non définie, comme un tableau qui n'a pas été initialisé ou qui n'a pas encore reçu de données. </p>
<p>Par exemple, lorsqu'on récupère des éléments de tâches à partir des données de JSON Placeholder, il arrive que la méthode map soit appelée avant que les données de la requête API ne soient disponibles. </p>
<p>Depuis lors, je veille à utiliser des opérateurs de comparaison pour prévenir la réapparition de ce même problème.</p>
