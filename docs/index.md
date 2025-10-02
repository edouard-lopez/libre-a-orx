<div class="hero-section">
  <div class="content">
    <h1>🎈 LàO : Libre à Orx</h1>
    <dl>
      <dt>Où ?</dt><dd> <a href="https://www.openstreetmap.org/relation/75976#map=14/43.60468/-1.36822&layers=N">Place de l'Église, Orx, Landes</a></dd>
      <dt>Quand ?</dt><dd> Samedi 18 oct. 10h-17h</dd>
      <dt>Mail :</dt><dd> <a href="mailto:libre.a.orx.edgy933@aleeas.com">libre.a.orx.edgy933@aleeas.com</a></dd>
      <dt>Réseau Sociaux</dt><dd>: <a href="https://piaille.fr/@edouard_lopez/">Mastodon</a></dd>
      <dt>Tarif :</dt><dd> Libre</dd>
      <dt>Programme :</dt><dd> <a href="#programme">Voir ci-dessous ⬇</a></dd>
      <dt>Repas :</dt><dd> Auberge Espagnole (chacun apporte un plat à partager)</dd>
      <dt></dt><dd><a href="./code-de-conduite.md">Code de conduite</a></dd>
    </dl>
  </div>
  <div class="image-container">
    <img src="./affiche-event.svg" alt="Affiche Libre à Orx" />
  </div>
</div>

## Programme

| Horaire     | Salle des fêtes Espace #1                         | Salle des fêtes Espace #2                       | Salle du Presbytaire                                          | Inclus Kfé |
| ----------- | ------------------------------------------------- | ----------------------------------------------- | ------------------------------------------------------------- | ---------- |
| 9h30-10h00  | Acceuil du publique                               |
| 10h00-10h30 | 🐧 Install Party Linux                             | Initiation OSM                                  | Initiation Wikipedia                                          | -          |
| 10h30-11h00 | 🐧 Install Party Linux                             | Contribution OSM                                | Éditathon Wikipedia                                           | -          |
| 11h00-11h30 | 🐧 Install Party Linux                             | Contribution OSM                                | Éditathon Wikipedia                                           | -          |
| 11h00-12h00 | 🐧 Install Party Linux                             | Contribution OSM                                | Éditathon Wikipedia                                           | -          |
| 12h00-12h30 | 🐧 Install Party Linux                             | Contribution OSM                                | Éditathon Wikipedia                                           | -          |
| 12h30-13h00 | Repas                                             | Repas                                           | Repas                                                         | -          |
| 13h00-13h30 | -                                                 | -                                               | -                                                             | -          |
| 13h30-14h00 | -                                                 | -                                               | -                                                             | -          |
| 14h00-14h30 | Panoramax : prise en main – Édouard?              | Inkscape : initiation au dessin vectoriel - Yug | Le libre : du besoin au projet. LinguaLibre, ProbeMeteo - Yug |
| 14h30-15h00 | Utiliser l’IA : discussion, image, et code. - Yug | Libre et droits humains - Yug                   |
| 15h00-15h30 | Docu-Blabla                                       |
| 15h30-16h00 | Docu-Blabla                                       |
| 16h00-16h30 | Docu-Blabla                                       |
| 16h30-17h00 |
| 17h00-17h30 | Rangement  🧹 🧼 🧹                                  |
| 17h30-18h00 |

### Install Party Linux

> Fedora, LMDE

Association [Sorgin Informatique Libre](https://www.sorgin-informatique-libre.org/)

### Docu-Blabla

> Projection du document « LOL - Logiciel libre », suivi de questions et débat.

Association [Sorgin Informatique Libre](https://www.sorgin-informatique-libre.org/)

### Communs géonumériques et gouvernance territoriale

> Communs géonumériques et gouvernance territoriale. La rencontre entre le Département des Landes, OpenStreetMap et Panoramax.”

[Rémi Labarthe](https://piaille.fr/@Remi_Labarthe@mastodon.social)

### Exploration de microcontrôleurs avec ESP32

> Exploration de microcontrôleurs avec ESP32 avec PlatformIO et Visual Studio Code.

Manu

<style>
  /** Hero section responsive layout **/
  .hero-section {
    display: flex;
    align-items: flex-start;
    gap: 2em;
    max-width: 100%;
  }
  
  .content {
    flex: 1;
    min-width: 0; /* Allow content to shrink */
  }
  
  .image-container {
    flex: 0 0 auto;
  }
  
  .image-container img {
    max-width: 50vw; /* Fit within viewport on desktop */
    height: auto;
    display: block;
  }
  
  /* Mobile layout - image below content */
  @media (max-width: 768px) {
    .hero-section {
      flex-direction: column;
      gap: 1.5em;
    }

    .image-container {
      order: 2; /* Move image below content */
      align-self: center;
    }

    .image-container img {
      max-width: 90vw; /* Use more viewport width on mobile */
      width: 100%;
    }
  }

  /** Style for definition list to have terms and definitions on separate lines **/
  dl {
    display: grid;  
    grid-template-columns: max-content auto;
    gap: 0.5em 1em;
  }
  dt {
    font-weight: bold;  
    grid-column: 1;
    text-align: right;
  }
  dd {
    grid-column: 2;
  }
  dd, dt {
    padding: 0.2em 0;
    margin: 0 0.2em;
  }
/* Responsive adjustments */
  @media (max-width: 600px) {
    dl {
      grid-template-columns: auto;
    }
    dt {
      text-align: left;
      grid-column: 1;
    }
    dd {
      grid-column: 1;
    }
  }
  /* set a minimal width for the first column of the table */
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    padding: 8px;
    text-align: left;
  }
  th:first-child, td:first-child {
    min-width: 120px;
    font-weight: bold;
  }
  /* alternate background color for rows */
  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  tr:nth-child(odd) {
    background-color: #ffffff;
  }

</style>
