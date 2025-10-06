const horaires = (start, end) => {
  return {
    start: `2025-10-18 ${start}`,
    end: `2025-10-18 ${end}`,
  };
};

const welcome = ["fete1", "fete2", "presby", "outdoor"].map((split) => {
  return {
    ...horaires("09:30", "10:00"),
    title: "Accueil",
    content: "☕ café 👋 papotages",
    contentFull: "Accueil des participant·es, café, thé, jus de fruits",
    class: "welcome",
    split: split,
  };
});

const repas = ["fete1", "fete2", "presby", "outdoor"].map((split) => {
  return {
    ...horaires("12:30", "14:00"),
    title: "🍽️ Repas",
    content: "Auberge Espagnole*",
    contentFull:
      "Chacun apporte un plat, un gateau, une boisson et on partage!<br>L'auberge du Fronton peut aussi avoir des places",
    class: "repas",
    split: split,
    background: true
  };
});

const rangement = ["fete1", "fete2", "presby", "outdoor"].map((split) => {
  return {
    ...horaires("17:00", "18:30"),
    title: "Rangement",
    content: "🧹 🧼 🧹",
    class: "rangement",
    split: split,
  };
});

const orateurices = {
yug: `Yug`,
edouard_lopez: `<a href="https://github.com/edouard-lopez/">Édouard Lopez</a>`,
sorgin: `Sorgin Informatique Libre - <a href="https://sorgin.fr/">sorgin.fr</a>`,
remi_labarthe: `<a href="https://piaille.fr/@remi_labarthe">Rémi Labarthe</a>`,
groupe_osm_mapadour: `<a href="https://forum.openstreetmap.fr/c/groupes-locaux/mapadour/">Groupe <abbr title="OpenStreetMap">OSM</abbr> Mapadour</a>`,
manu: `Manu - Ingénieur C++/Java`,
audrey_perrone: `Audrey Perrone - <a href="https://www.tramedesoi.fr/">Trame de soi</a>`,
patchanka: `<i>Patchanka</i>`,
dum_dum: `<i>Dum - Dum</i>`,
}

window.events = [
  // Accueil
  ...welcome,

  // Repas
  ...repas,

  // Rangement
  ...rangement,

  // Salle des fêtes Espace #1

  {
    ...horaires("10:00", "12:30"),
    title: "🐧 Install Party Linux",
    content: "Installation Linux sur votre machine<br>⚠ sauvegarder vos données",
    contentFull: `<p>Installation de distributions GNU/Linux (Ubuntu, Linux Mint, Debian, Fedora...)</p>
    <p>Apportez votre ordinateur et <strong>sauvegardez vos données avant!</strong></p>`,
    orateurice: `Sorgin Informatique Libre - <a href="https://sorgin.fr/">sorgin.fr</a>`,
    class: "hands-on",
    split: "fete1",
  },
  //   {
  //     ...horaires("14:00", "14:30"),
  //     title: "Panoramax : prise en main",
  //     content: "Panoramax : prise en main<br><small>Édouard</small>",
  //     class: "hand-on",
  //     split: "fete1",
  //   },
  {
    ...horaires("14:00", "15:00"),
    title: "Utiliser l'IA",
    content: "discussion, image, et code",
    class: "talk",
    split: "fete1",
    orateurice: orateurices.yug,
  },
  {
    ...horaires("15:00", "16:30"),
    title: "Docu-Blabla",
    content:
      "🎬 Projection « LOL - Logiciel libre »<br><small>Association Sorgin Informatique Libre</small>",
    class: "talk",
    split: "fete1",
  },

  // Salle des fêtes Espace #2
  {
    ...horaires("10:00", "12:30"),
    title: "Initiation à OpenStreetMap",
    content: "Présentation et première contribution à OpenStreetMap",
    contentFull: `Présentation d'OpenStreetMap, le projet de carte libre et collaborative, et initiation à la contribution.`,
    orateurice: orateurices.groupe_osm_mapadour,
    class: "hands-on",
    split: "fete2",
  },
  {
    ...horaires("15:00", "16:00"),
    title: "Inkscape",
    content: "Initiation au dessin vectoriel",
    contentFull: `Inkscape est un logiciel libre de dessin vectoriel. Il permet de créer des illustrations, des logos, des schémas, des bandes dessinées, etc. Nous verrons les bases du logiciel et réaliserons ensemble une illustration simple.`,
    class: "hands-on",
    split: "fete2",
    orateurice: orateurices.yug,
  },
  {
    ...horaires("16:30", "17:00"),
    title: "Libre et droits humains",
    content: "Libre et droits humains",
    class: "talk",
    split: "presby",
    orateurice: orateurices.yug,
  },

  // Salle du Presbytaire
  {
    ...horaires("10:00", "12:30"),
    title: "Initiation Wikipedia",
    content: "Présentation de l'encyclopédie collaborative et première contribution à Wikipedia",
    class: "hands-on",
    split: "presby",
    orateurice: orateurices.yug,
  },
  {
    ...horaires("16:00", "16:30"),
    title: "Le libre : du besoin au projet",
    content:
      "Le libre : du besoin au projet<br><small>LinguaLibre, ProbeMeteo - Yug</small>",
    class: "talk",
    split: "presby",
    orateurice: orateurices.yug,
  },
  {
    ...horaires("14:00", "15:00"),
    title: "Communs géonumériques et gouvernance territoriale",
    class: "talk",
    split: "presby",
    content: "Rémi Labarthe viendra nous parler de son sujet de thèse",
    contentFull: `Rémi Labarthe viendra nous parler de son sujet de thèse, qui porte sur les communs géonumériques et gouvernance territoriale. La rencontre entre le Département des Landes, OpenStreetMap et Panoramax.`,
    orateurice: orateurices.remi_labarthe,
  },
  {
    ...horaires("14:00", "16:00"),
    title: "Exploration de microcontrôleurs avec ESP32",
    class: "maker",
    split: "fete2",
    content: "Exploration de microcontrôleurs avec ESP32 avec PlatformIO et Visual Studio Code",
    contentFull: `Prendre en main un microcontrôleur ESP32 pour afficher des informations
sur un écran OLED, lire des capteurs, et communiquer en WiFi. Utilisation de
PlatformIO et Visual Studio Code.`,
    orateurice: orateurices.manu,
  },
  {
    ...horaires("10:00", "12:30"),
    title: "Impression 3D et découpe laser",
    class: "maker",
    split: "fete1",
    content: null,
    contentFull: `Creation de porte clés personnalisés et autres objets en impression
3D et découpe laser.`,
    orateurice: orateurices.audrey_perrone,
  },
  {
    ...horaires("14:00", "17:00"),
    title: "Impression 3D et découpe laser",
    class: "maker",
    split: "fete1",
    content: null,
    contentFull: `Creation de porte clés personnalisés et autres objets en impression
3D et découpe laser.`,
    orateurice: orateurices.audrey_perrone,
  },
  {
    ...horaires("10:00", "12:30"),
    title: "Panoramax des sentiers communaux",
    class: "outdoor",
    split: "outdoor",
    content: "Valorisation des sentiers communaux par la création d'une visite virtuelle",
    contentFull: `Captation avec camera GoPro 360 des sentiers pédestres et versement
sur la plateforme <a href="panoramax.openstreetmap.fr">panoramax</a>`,
    orateurice: orateurices.groupe_osm_mapadour,
  },
  {
    ...horaires("14:00", "15:30"),
    title: "Cartopartie: les nichoirs",
    class: "outdoor",
    split: "outdoor",
    content: null,
    contentFull: `Cartopartie sur le thème des nichoirs, installés par lassociation « Les bons p'tits diables ». Première phase de repérage sur le terrain
avec carte papier, la deuxième phase montrera comment rajouter les nichoirs sur OpenStreetMap.`,
    orateurice: `${orateurices.patchanka} & ${orateurices.dum_dum} - ${orateurices.groupe_osm_mapadour}`,
  },
  {
    ...horaires("16:00", "17:00"),
    title: "Archive d'un jardinier",
    class: "outdoor",
    split: "outdoor",
    content: "Visite virtuelle du jardin partagé à l'automne",
    contentFull: `Captation d'une nouvelle visite virtuelle du jardin partagé à l'automne pour suivre son évolution dans le temps`,
    orateurice: `${orateurices.edouard_lopez} & ${orateurices.groupe_osm_mapadour}`,
  }
];
