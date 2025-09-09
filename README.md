# Libre à Orx

LàO : Libre à Orx, logiciels et cultures libres

## Description

Site web dédié aux logiciels libres et à la culture libre. Un espace pour découvrir, partager et contribuer à un écosystème ouvert et collaboratif.

## Structure du projet

```
libre-a-orx/
├── index.html          # Page principale du site
├── assets/
│   ├── css/
│   │   └── style.css   # Styles CSS du site
│   ├── js/
│   │   └── script.js   # Fonctionnalités JavaScript
│   └── images/         # Dossier pour les images
├── LICENSE             # Licence CC0 1.0 Universal
└── README.md          # Ce fichier
```

## Utilisation

### Affichage local

1. Clonez le repository :
   ```bash
   git clone https://github.com/edouard-lopez/libre-a-orx.git
   cd libre-a-orx
   ```

2. Ouvrez `index.html` dans votre navigateur web
   ```bash
   # Avec un serveur local simple (recommandé)
   python -m http.server 8000
   # Puis visitez http://localhost:8000
   
   # Ou directement dans le navigateur
   open index.html
   ```

### Personnalisation

Le site est conçu pour être facilement personnalisable :

- **Contenu** : Modifiez le texte dans `index.html`
- **Styles** : Adaptez les couleurs et la mise en page dans `assets/css/style.css`
- **Fonctionnalités** : Ajoutez des interactions dans `assets/js/script.js`
- **Images** : Placez vos images dans `assets/images/`

### Déploiement

Le site peut être déployé sur :
- GitHub Pages
- Netlify
- Vercel
- Tout serveur web statique

## Contribution

Ce projet est sous licence CC0 1.0 Universal. Vous êtes libre de l'utiliser, le modifier et le distribuer comme vous le souhaitez.

## License

Ce projet est dans le domaine public sous la licence [CC0 1.0 Universal](LICENSE).
