import lettreCSPI from "./assets/documents/LIMOGES-Dale_Lettre-de-Recommandation-CSPI_2014.pdf";
import lettreCGL from "./assets/documents/LIMOGES-Dale_Lettre-experience-et-référence-CGL-Micro_2015.pdf";
import lettreMicrofix from "./assets/documents/LIMOGES-Dale_Lettre-experience-et-reference_Equipe-Microfix.pdf";
import cv from "./assets/documents/LIMOGES-Dale_CV.pdf";
import releveNoteMontmorency from "./assets/documents/LIMOGES-Dale_Releve-Note_Montmorency.pdf";
import mesIcones from "./mesIcones";

// Images et documents en lien avec Apropos ************************************************************************ 
// Images et documents en lien avec Apropos ************************************************************************ 
// Images et documents en lien avec Apropos ************************************************************************ 

import AproposThumbnail01 from "./assets/images/Apropos-thumbnail-01.png"
import AproposThumbnail02 from "./assets/images/Apropos-thumbnail-02.png"

// Images et documents en lien avec LeRempart ************************************************************************ 
// Images et documents en lien avec LeRempart ************************************************************************ 
// Images et documents en lien avec LeRempart ************************************************************************ 

import LeRempartImageVedette01 from "./assets/images/LeRempart-image-vedette-01.png";
import LeRempartModale01 from "./assets/images/LeRempart-modale-01.png";
import LeRempartModale02 from "./assets/images/LeRempart-modale-02.png";
import LeRempartModale03 from "./assets/images/LeRempart-modale-03.png";
import LeRempartModale04 from "./assets/images/LeRempart-modale-04.png";
import LeRempartModale05 from "./assets/images/LeRempart-modale-05.png";

const leRempartSiteWeb = "https://lerempart.org";
const leRempartLienFigma = "https://www.figma.com/proto/H9rFVKEWWpOlB36dsC0D3U/Maquettes-haute-fid%C3%A9lit%C3%A9?page-id=0%3A1&node-id=313%3A2352&viewport=378%2C48%2C0.11&scaling=min-zoom&starting-point-node-id=313%3A2352&show-proto-sidebar=1";
const leRempartFormulaireDon = "https://app.simplyk.io/fr/donation-form/933a119b-e342-4d6f-bc0a-735d810c2737";

// Images et documents en lien avec PresentationWebpack ************************************************************************ 
// Images et documents en lien avec PresentationWebpack ************************************************************************ 
// Images et documents en lien avec PresentationWebpack ************************************************************************ 

import PresentationWebpackSommaire01 from "./assets/images/Presentation-Webpack-sommaire-01.png";
import PresentationWebpackModale01 from "./assets/images/Presentation-Webpack-modale-01.png";
import PresentationWebpackModale02 from "./assets/images/Presentation-Webpack-modale-02.png";
import PresentationWebpackModale03 from "./assets/images/Presentation-Webpack-modale-03.png";
import PresentationWebpackModale04 from "./assets/images/Presentation-Webpack-modale-04.png";
import PresentationWebpackModale05 from "./assets/images/Presentation-Webpack-modale-05.png";

const presentationWebPackSiteWeb = "https://rd-webpack.web.app/";
const presentationWebPackGitHub = "https://github.com/dale563/rd-webpack";


// Images et documents en lien avec ReproductionLego ************************************************************************ 
// Images et documents en lien avec ReproductionLego ************************************************************************ 
// Images et documents en lien avec ReproductionLego ************************************************************************ 

import ReproductionLegoSommaire01 from "./assets/images/Reproduction-Lego-sommaire-01.png";
import ReproductionLegoModale01 from "./assets/images/Reproduction-Lego-modale-01.png";
import ReproductionLegoModale02 from "./assets/images/Reproduction-Lego-modale-02.png";
import ReproductionLegoModale03 from "./assets/images/Reproduction-Lego-modale-03.png";
import ReproductionLegoModale04 from "./assets/images/Reproduction-Lego-modale-04.png";
import ReproductionLegoModale05 from "./assets/images/Reproduction-Lego-modale-05.png";

const reproductionLegoSiteWeb = "https://dalelimoges-tl-rw.web.app/"
const reproductionLegoGitHub = "https://github.com/dale563/travail-long-rw-grille-lego"

// Images et documents en lien avec DLND ************************************************************************ 
// Images et documents en lien avec DLND ************************************************************************ 
// Images et documents en lien avec DLND ************************************************************************ 

import DlndSommaire01 from "./assets/images/DLND-sommaire-01.png";
import DlndModale01 from "./assets/images/DLND-modale-01.png";
import DlndModale02 from "./assets/images/DLND-modale-02.png";
import DlndModale03 from "./assets/images/DLND-modale-03.png";
import DlndModale04 from "./assets/images/DLND-modale-04.png";
import DlndModale05 from "./assets/images/DLND-modale-05.png";

import DLNDanalyseMarche from "./assets/documents/DLND_Etude-de-marche.pdf";
import DLNDguideGraphique from "./assets/documents/DLND_Guide-des-normes-graphiques.pdf";
import DLNDstructureSite from "./assets/documents/DLND_Architecture-site.pdf";

const dlndSiteWeb = "https://dl-nd.com";



// Début du module resume ************************************************************************ 
// Début du module resume ************************************************************************ 
// Début du module resume ************************************************************************ 

const resume = {
  apropos: {
    paragraphes: [
      {
        id: 1,
        texte: `J’accorde beaucoup d’importance à l’efficacité et à l’optimisation. Mon super pouvoir est la résolution de problème par la vision d’ensemble (systémique).`,
      },
      {
        id: 2,
        texte: `Je suis passionné de technologies et de médecines naturelles et j’aspire à équilibrer les deux dans ma vie.`,
      },
      {
        id: 3,
        texte: `Je recherche un stage en intégration web ou en programmation front-end avec possibilité de poursuivre en emploi à temps plein (35h/semaine). Je suis ouvert à d'autres propositions qui permettraient une place pour ma pratique en naturopathie (une journée par semaine ou l'équivalent suffit).`,
      },
      {
        id: 4,
        texte: `Finalement, je me débrouille bien dans la gestion d’une équipe ou d’un projet et j’aspire à un environnement professionnel, bienveillant et convivial.`,
      },
      {
        id: 5,
        texte: `Chacun des projets démontrent différentes compétences : ma capacité à gérer un projet, mon autonomie, ma vision globale, mes compétences technique en programmation ainsi que ma “capacité exceptionnelle à apprendre”`,
        sourceCitation:lettreCGL,
      },
    ],
    images: [
      {
        id: 1,
        src: AproposThumbnail01,
        alt: "Photo de moi travaillant devant 3 écrans",
      },
      {
        id: 2,
        src: AproposThumbnail02,
        alt: "Photo de moi travaillant devant 2 écrans et une tablette de dessin",
      },
    ],
    documents: [
      {
        id: 1,
        nom: "Curriculum vitae",
        src:cv,
        icone:mesIcones.pdf,
      },
      // {
      //   id: 2,
      //   nom: "Lettre présentation générique",
      //   src:cv,
      //   icone:mesIcones.pdf,
      // },
      {
        id: 3,
        nom: "Lettre de référence d'Équipe Microfix",
        src:lettreMicrofix,
        icone:mesIcones.pdf,
      },
      {
        id: 4,
        nom: "Lettre de référence de la Commission Scolaire de la Pointe de l'Île",
        src:lettreCSPI,
        icone:mesIcones.pdf,
      },
      {
        id: 5,
        nom: "Lettre référence CGL Micro",
        src:lettreCGL,
        icone:mesIcones.pdf,
      }
    ]
  },

  projets: [
    {
      id: 1,
      vedette: true,
      titre: "Projet Le Rempart (chef de projet)",
      sommaire:
        "Site web pour un organisme de Québec qui aide les femmes en difficulté et à risque d'itinérance.",
      imgSrc: LeRempartImageVedette01,
      imgAlt: "Présentaiton web du Rempart, bannière rouge écrit le rempart sous un menu noir",
      hrefFormulaireDon: leRempartFormulaireDon,
      icones: [mesIcones.wordpress, mesIcones.figma],
      liens: [
        {
          id: 1,
          text: "Le prototype Figma",
          href: leRempartLienFigma,
          icone: mesIcones.figma,
        },
        {
          id: 2,
          text: "La page web temporaire",
          href: leRempartSiteWeb,
          icone: mesIcones.internet,
        },
      ],
      modale: {
        id: 1,
        dataBsTarget: "#modaleProjetLeRempart",
        htmlIdModale: "modaleProjetLeRempart",
        header: "Projet Le Rempart",
        sections: [
          {
            id: 1,
            titre: "Introduction",
            imgSrc: LeRempartModale01,
            imgAlt: "Explorateur de fichier ouvert avec les dossiers partagés du projets",
            paragraphes: [
              {
                id: 1,
                texte: `Il s’agit d’un travail d’équipe (cinq personnes) dont je suis en charge.`,
              },
              {
                id: 2,
                texte: `En tant que chef d’équipe, je me suis occupé des relations avec la cliente, 
                        de l’organisation du travail, de la communication au sein de l’équipe.`,
              },
              {
                id: 3,
                texte: `Étant donné mon background en informatique, j’ai pu prendre les devants et offrir 
                        le soutien technique nécessaire pour nos environnements de travail.`,
              },
              {
                id: 4,
                texte: `Le résultat a été que nous avons rapidement livré un site web temporaire à la cliente 
                        et dépassé les attentes de la première partie du projet. Il nous reste la seconde.`,
              },
            ],
            liens: [
              {
                id: 1,
                text: "test",
                href: "https://lerempart.org",
                icone: mesIcones.lienExt,
              },
            ],
          },
          {
            id: 2,
            titre: "Mise en situation",
            imgSrc: LeRempartModale02,
            imgAlt: "Liste de tâches Microsoft To Do, 37 terminées",
            paragraphes: [
              {
                id: 1,
                texte: `Lorsque nous avons pris le projet en main, la cliente n’avait aucun site web. Elle avait néanmoins un logo et une page facebook.`,
              },
              {
                id: 2,
                texte: `Sa priorité était la visibilité et elle avait très hâte d’avoir un site web et mon équipe était proactive.`,
              },
              {
                id: 3,
                texte: `Un premier design a été fait et nous avons livré un site temporaire trois jours avant nos vacances d’été 2021.`,
              },
              {
                id: 4,
                texte: `La mise en place des dons en ligne avec Simplyk, la configuration de Google My Business et Google Ads sont des bonus que nous avons déjà pu remettre à la cliente.`,
              },
            ],
            liens: [
              {
                id: 1,
                text: "test",
                href: "https://lerempart.org",
                icone: mesIcones.lienExt,
              },
            ],
          },
          {
            id: 3,
            titre: "Recherche et design",
            imgSrc: LeRempartModale03,
            imgAlt: "Quatres planches d'ambience colorées",
            paragraphes: [
              {
                id: 1,
                texte: `L’approche choisit pour la conception et le design est centrée sur l’utilisateur.`,
              },
              {
                id: 2,
                texte: `Nous avons d’abord recherché les comparables et demandé les préférences de la cliente pour livrer le site temporaire et s’en servir de base pour la conception du site final.`,
              },
              {
                id: 3,
                texte: `Nous avons ensuite créé plusieurs moodboards et débuté les maquettes Figma pour le site ainsi qu’identifié des Thèmes WordPress adéquat.`,
              },
              {
                id: 4,
                texte: `Finalement nous avons orchestré des tests utilisateurs et documentés le tout.`,
              },
              {
                id: 5,
                texte: `Je suis fier de dire que nous avons respecté nos échéances et très bien gérer nos efforts et le résultat final correspond à nos objectifs.`,
              },
            ],
            liens: [
              {
                id: 1,
                text: "test",
                href: "https://lerempart.org",
                icone: mesIcones.lienExt,
              },
            ],
          },
          {
            id: 4,
            titre: "Résultat",
            imgSrc: LeRempartModale04,
            imgAlt: "Près d'une centaine de frames Figma reliés au projet",
            paragraphes: [
              {
                id: 1,
                texte: `En date du 13 décembre 2021, la majorité du projet est faite et nous aurons un mois pour y travailler à nouveau.`,
              },
              {
                id: 2,
                texte: `Nous avons livré un site web temporaire, configuré les plateformes Symplik, Google Ads et Google My Business.`,
              },
              {
                id: 3,
                texte: `Chacun des membres de l’équipe est content d’en faire partie et évalue son expérience comme étant sans tache 
                        et même sans conflit. Il faut dire que je me débrouille bien en prévention et en résolution de conflits.`,
              },
              {
                id: 4,
                texte: `Le site final WordPress est avancé, en local, sur un serveur WAMP et nous comptons mettre des efforts sur le SEO lors de la prochaine session.`,
              },
            ],
            liens: [
              {
                id: 1,
                text: "test",
                href: "https://lerempart.org",
                icone: mesIcones.lienExt,
              },
            ],
          },
          {
            id: 5,
            titre: "Conclusion",
            imgSrc: LeRempartModale05,
            imgAlt: "Présentaiton web du Rempart, bannière rouge écrit le rempart sous un menu noir et une carourel d'images du lieu",
            paragraphes: [
              {
                id: 1,
                texte: `Le retour des membres de l’équipe a été unanime : l’expérience de travail a été grandement appréciée.`,
              },
              {
                id: 2,
                texte: `Cela m’a aussi permis d’aller plus loin dans mes capacités d’adaptation et de gestion de travail en ayant un poste de chef d’équipe désigné et en appliquant l’ensemble de mes compétences et de mes qualités.`,
              },
              {
                id: 3,
                texte: `Je peux vous montrez le site en construction sur demande.`,
              },
            ],
            liens: [
              {
                id: 1,
                text: "test",
                href: "https://lerempart.org",
                icone: mesIcones.lienExt,
              },
            ],
          },
        ],
      },
    },
    {
      id: 2,
      titre: "Dale Limoges, Naturopathe",
      sommaire:
        "Une bonne partie de mes travaux se retrouve dans la mise à jour de mon site professionnel. De la structure, au design, en passant par le SEO et les outils de prise de rendez-vous en ligne.",
      imgSrc: DlndSommaire01,
      imgAlt: "Vision globale de la page d'accueil avec le menu a gauche. Image d'un homme qui cour avec une citation a droite. Présentation des services et des questions fréquentes en dessous.",
      icones: [mesIcones.wordpress, mesIcones.illustrator, mesIcones.mailchimp],
      liens: [
        {
          id: 1,
          text: "Le site web",
          href: dlndSiteWeb,
          icone: mesIcones.internet,
        },
      ],
      modale: {
        id: 1,
        dataBsTarget: "#modaleDLND",
        htmlIdModale: "modaleDLND",
        header: "Dale Limoges, Naturopathe",
        sections: [
          {
            id: 1,
            titre: "Introduction",
            imgSrc: DlndModale01,
            imgAlt: "Pèle-mèle, brainstorm, inspiration, compétiteur, plusieurs captures d'écrans avec des plantes médécinales et des aliments biologiques",
            paragraphes: [
              {
                id: 1,
                texte: `Développer un regard objectif sur sa propre entreprise, sur la clientèle présente et potentielle me parait encore aujourd’hui un réel défi.`,
              },
              {
                id: 2,
                texte: `Ceci étant dit, cela m’a permis de mettre en pratique la majorité des aspects de la formation dans un contexte réel qui me tient à cœur.`,
              },
            ],
            liens: [
              {
                id: 1,
                text: "test",
                href: "https://lerempart.org",
                icone: mesIcones.lienExt,
              },
            ],
          },
          {
            id: 2,
            titre: "Persona et marketing",
            imgSrc: DlndModale02,
            imgAlt: "Persona, Marie Fournier, femme de 44 ans monoparentale ave cun intéret pour la santé et la marque Kashi",
            paragraphes: [
              {
                id: 1,
                texte: `La première étape a été d’établir clairement la clientèle cible afin de centrer mon design sur une clientèle clairement définie.`,
              },
              {
                id: 2,
                texte: `J’ai donc fait une analyse de marché et établi un objectif SMART ainsi que des indices de performances clefs (KPI).`,
              },
             
            ],
            liens: [
              {
                id: 1,
                text: "Analyse de marché",
                href: DLNDanalyseMarche,
                icone: mesIcones.pdf,
              },
            ],
          },
          {
            id: 3,
            titre: "Recherche et design",
            imgSrc: DlndModale03,
            imgAlt: "Bouteille de produit naturel mise en valeur dans une promotion",
            paragraphes: [
              {
                id: 1,
                texte: `Ensuite, dans le cours de design (le seul cours qui représente un vrai défi pour moi), j’ai mis en place un Guide de norme graphique ainsi qu’un exemple de publicité pour une application.`,
              },
              {
                id: 2,
                texte: `Je suis conscient que le graphisme de mon guide est plutôt ordinaire, heureusement je ne suis pas graphiste.`,
              },
            ],
            liens: [
              {
                id: 1,
                text: "Guide de norme graphique",
                href: DLNDguideGraphique,
                icone: mesIcones.lienExt,
              },
            ],
          },
          {
            id: 4,
            titre: "Résultat",
            imgSrc: DlndModale04,
            imgAlt: "Téléphone portable avec l'application vendue ouverte devant un meuble plein de produits de santé naturels. Écrit Soutien rapide avec confirmation visuel de ma disponibilité",
            paragraphes: [
              {
                id: 1,
                texte: `Au final, je suis tombé sur un thème Wordpress tout indiqué pour mes besoins.`,
              },
              {
                id: 2,
                texte: `Entre deux sessions, j’ai mis mon nouveau site en ligne.`,
              },
            ],
            liens: [
              {
                id: 1,
                text: "https://dl-nd.com",
                href: "https://dl-nd.com",
                icone: mesIcones.lienExt,
              },
            ],
          },
          {
            id: 5,
            titre: "Conclusion",
            imgSrc: DlndModale05,
            imgAlt: "Vision globale de la page d'accueil avec le menu a gauche. Image d'un homme qui cour avec une citation a droite. Présentation des services et des questions fréquentes en dessous. Et finalement des témoignages",
            paragraphes: [
              {
                id: 1,
                texte: `J’ai compris l’importance des différentes étapes et comment l’ensemble interagit.`,
              },
              {
                id: 2,
                texte: `Cela me permet de mieux apprécier là valeur du design et des règles d’ergonomie et d’être en mesure de les évaluer objectivement.`,
              },
              {
                id: 3,
                texte: `J’ai aussi appris, que le design me demande beaucoup plus d’effort et pour des résultats moindres que les autres éléments couverts dans la formation.`,
              },
            ],
            liens: [
              {
                id: 1,
                text: "test",
                href: "https://lerempart.org",
                icone: mesIcones.lienExt,
              },
            ],
          },
        ],
      },
    },
    {
      id: 3,
      titre: "Présentation de Webpack",
      sommaire:
        "Dans le cadre du cour de Recherche et développement, j'ai appris à utiliser de Webpack et l'ai présenté groupe",
      imgSrc: PresentationWebpackSommaire01,
      imgAlt: "Menu écrit Présentation puis Logo Webpack centré sur fond noir prenant tout l'espace disponible.",
      icones: [mesIcones.webpack, mesIcones.bootstrap],
      liens: [
        {
          id: 1,
          text: "Le repository GitHub",
          href: presentationWebPackGitHub,
          icone: mesIcones.github,
        },
        {
          id: 2,
          text: "Le site web",
          href: presentationWebPackSiteWeb,
          icone: mesIcones.internet,
        },
      ],
      modale: {
        id: 1,
        dataBsTarget: "#modalePresentationWebpack",
        htmlIdModale: "modalePresentationWebpack",
        header: "Présentations de Webpack",
        sections: [
          {
            id: 1,
            titre: "Introduction",
            imgSrc: PresentationWebpackModale01,
            imgAlt: "Code Javascript dans le fichier webpack.config.dev dans VS Code.",
            paragraphes: [
              {
                id: 1,
                texte: `Webpack m’intriguait et j’ai donc choisit de l’aborder dans le cours de recherche et développement.`,
              },
              {
                id: 2,
                texte: `Sachant que je me débrouille bien avec la ligne de commande et avec le débogage vu mon passé en informatique, le défi me semblait parfait pour comprendre 
                        le fonctionnement de l’environnement de développement (node.js, l’importation des modules, etc).`,
              },
              {
                id: 3,
                texte: `Mon objectif était de mettre en place un environnement de développement fonctionnel avec Webpack. Ce que j’ai bien réussi.`,
              },
            ],
            liens: [
              {
                id: 1,
                text: "test",
                href: "https://lerempart.org",
                icone: mesIcones.lienExt,
              },
            ],
          },
          {
            id: 2,
            titre: "Recherche",
            imgSrc: PresentationWebpackModale02,
            imgAlt: "Code Javascript dans le fichier webpack.config.prod dans VS Code.",
            paragraphes: [
              {
                id: 1,
                texte: `Au départ, le défi était que les démonstrations d’utilisations de Webpack sur YouTube étaient différentes les unes des autres et ne fonctionnaient pas.`,
              },
              {
                id: 2,
                texte: `De plus plusieurs utilisaient des versions révolues, des loaders et des plugins rendus inutiles dans la version la plus récente de Webpack.`,
              },
              {
                id: 3,
                texte: `De son coté la documentation de Webpack est à la fois vaste et très technique.`,
              },
              {
                id: 4,
                texte: `C’est la somme des deux avec l’application pratique qui m’a permis d’arriver à mes fins.`,
              },
            ],
            liens: [
              {
                id: 1,
                text: "test",
                href: "https://lerempart.org",
                icone: mesIcones.lienExt,
              },
            ],
          },
          {
            id: 3,
            titre: "Mise en place de l'environnement",
            imgSrc: PresentationWebpackModale03,
            imgAlt: "Code Javascript dans le fichier webpack.config.common dans VS Code.",
            paragraphes: [
              {
                id: 1,
                texte: `Pour la première présentation, je voulais et j’ai donc mis en place un environnement qui implique au moins deux pages html, Bootstrap, Reveal.js et leurs dépendances et dont les 
                « chunks » diffèrent d’une page à l’autre.`,
              },
              {
                id: 2,
                texte: `Une version gérée entièrement par Webpack et son graphique de dépendances et une le contournant en partie.`,
              },
              {
                id: 3,
                texte: `Cela étant dit, j’ai mis l’accent sur la matière présenté et sur les environnements de travail mis en place sur les différentes branches (voir le projet sur GitHub).`,
              },
            ],
            liens: [
              {
                id: 1,
                text: "test",
                href: "https://lerempart.org",
                icone: mesIcones.lienExt,
              },
            ],
          },
          {
            id: 4,
            titre: "Présentations",
            imgSrc: PresentationWebpackModale04,
            imgAlt: "Directive pour cloner le répertoire GitHub contenant la présentation Webpack sur fond noir.",
            paragraphes: [
              {
                id: 1,
                texte: `Les présentations durent une heure chacune.  Je n’ai fait que la première pour le moment et j’ai couvert Webpack « avec brio » selon les mots de notre professeure.`,
              },
              {
                id: 2,
                texte: `Je pense en effet être arrivé a saisir, utiliser, expliquer et transmettre l’utilisation de Webpack avec plusieurs de ses fonctions fondamentales.`,
              },
              {
                id: 3,
                texte: `Néanmoins, certaines configurations plus complexes comme l’utilisation d’éléments sur des serveurs distants ou servant à l’optimisation de la production m’échappent encore et feront probablement l’objet de de la seconde présentation.`,
              },
            ],
            liens: [
              {
                id: 1,
                text: "test",
                href: "https://lerempart.org",
                icone: mesIcones.lienExt,
              },
            ],
          },
          {
            id: 5,
            titre: "Conclusion",
            imgSrc: PresentationWebpackModale05,
            imgAlt: "Capture d'écran d'une partie la bibiographie en bleu sur fond noir.",
            paragraphes: [
              {
                id: 1,
                texte: `J’utilise maintenant Webpack par défaut pour mes projets et compte l’exploiter de plus en plus.`,
              },
              {
                id: 2,
                texte: `Je n’ai pas seulement appris Webpack, j’ai aussi beaucoup mieux compris les importations, les dépendances, les interactions entre les modules, le fonctionnement de l’environnement sous node.js, etc…`,
              },
              {
                id: 3,
                texte: `Les graphiques de la présentation laisse a désiré mais permettent bien de constater que les deux pages n’ont pas les même chunks. Aussi vous pouvez voir le projet sur GitHub.`,
              },
            ],
            liens: [
              {
                id: 1,
                text: "test",
                href: "https://lerempart.org",
                icone: mesIcones.lienExt,
              },
            ],
          },
        ],
      },
    },
    {
      id: 4,
      titre: "Reproduction de l'Affichage de Lego",
      sommaire:
        "Ce travail a été fait sans framework ni librairies, il servait à tester notre compréhension du SCSS.",
      imgSrc: ReproductionLegoSommaire01,
      imgAlt: "Menu mauve avec une bannière présentant un couple qui s'enlasse devant un paysage orangé et des icones en dessous.",
      icones: [mesIcones.html, mesIcones.sass],
      liens: [
        {
          id: 1,
          text: "Le repository GitHub",
          href: reproductionLegoGitHub,
          icone: mesIcones.github,
        },
        {
          id: 2,
          text: "Le site web",
          href: reproductionLegoSiteWeb,
          icone: mesIcones.internet,
        },
      ],

      modale: {
        id: 1,
        dataBsTarget: "#modaleReproductionLego",
        htmlIdModale: "modaleReproductionLego",
        header: "Reproduction de l'Affichage de Lego",
        sections: [
          {
            id: 1,
            titre: "Introduction",
            imgSrc: ReproductionLegoModale01,
            imgAlt: "Haut de page web avec menu jaune, avec bannière noir présentant des Legos.",
            paragraphes: [
              {
                id: 1,
                texte: `Dans le cadre du cours de réalisation web, j’ai reproduit le site Lego avec du contenu original.`,
              },
              {
                id: 2,
                texte: `Ce projet démontre mes capacités avec Sass, il a été réalisé uniquement avec du HTML et du Sass.`,
              },
            ],
            liens: [
              {
                id: 1,
                text: "test",
                href: "https://lerempart.org",
                icone: mesIcones.lienExt,
              },
            ],
          },
          {
            id: 2,
            titre: "D'abord reproduire la structure",
            imgSrc: ReproductionLegoModale02,
            imgAlt: "Design de la page web en fil de fer, 12 colonnes.",
            paragraphes: [
              {
                id: 1,
                texte: `La première étape à été de créer des maquettes mobiles et desktops. Dans un second temps préparer chacune des images.`,
              },
            ],
            liens: [
              {
                id: 1,
                text: "test",
                href: "https://lerempart.org",
                icone: mesIcones.lienExt,
              },
            ],
          },
          {
            id: 3,
            titre: "Sémentique, accessibilité et structure du code Sass",
            imgSrc: ReproductionLegoModale04,
            imgAlt: "Code Sass dans VS Code affichant une partie des styles du projet",
            paragraphes: [
              {
                id: 1,
                texte: `Ensuite structurer le code HTML et le code Sass.`,
              },
              {
                id: 2,
                texte: `Je me suis amusé à ne pas faire de classe et d’utiliser uniquement les balise HTML. Bien que ce ne soit pas une pratique idéale.`,
              },
            ],
            liens: [
              {
                id: 1,
                text: "test",
                href: "https://lerempart.org",
                icone: mesIcones.lienExt,
              },
            ],
          },
          {
            id: 4,
            titre: "Résultat",
            imgSrc: ReproductionLegoModale03,
            imgAlt: "Code Sass dans VS Code affichant les variables du projet",
            paragraphes: [
              {
                id: 1,
                texte: `J'ai aussi déterminé des variables afin de tester les matchs de couleur et les fonts que j'avais établis pour mon entreprise de façon dynamique. Le projet demandait aussi d'utiliser des mixins.`,
              },
              {
                id: 2,
                texte: `Finalement, remplacer les placeholders par les images préparées avec Illustrator.`,
              },
            ],
            liens: [
              {
                id: 1,
                text: "test",
                href: "https://lerempart.org",
                icone: mesIcones.lienExt,
              },
            ],
          },
          {
            id: 5,
            titre: "Conclusion",
            imgSrc: ReproductionLegoModale05,
            imgAlt: "Menu mauve avec une bannière présentant un couple qui s'enlasse devant un paysage orangé et des icones en dessous.",
            paragraphes: [
              {
                id: 1,
                texte: `Au final, j'ai utilisé uniquement les balise HTML pour cibler les styles dans le Sass.`,
              },
              {
                id: 2,
                texte: `Je comprends maintenant l'utilité des classes avec des noms clairs pour s'organiser. Ceci étant dit, j'ai pensé la reproduction dans l'idée 
                d'en faire éventuellement une Infolettre (sans les menu du header).`,
              },
              {
                id: 3,
                texte: `J'ai eu beaucoup de plaisir à faire ce projet.`,
              },
            ],
            liens: [
              {
                id: 1,
                text: "test",
                href: "https://lerempart.org",
                icone: mesIcones.lienExt,
              },
            ],
          },
        ],
      },
    },
  ],

  experiences: [
    {
      id: 2,
      poste: "Technicien informatique",
      entreprise: "CGL Micro, Équipe Microfix, Trévi",
      annees: "2014-2019",
      texte: `Sur cinq ans, j’ai travaillé trois ans en informatique dans divers environnements.
              Majoritairement des environnements sous Microsoft mais aussi des environnements VM
              Ware et de la technologie Fortinet. J’ai fait autant de l’administration système que de la
              gestion de réseaux ainsi que du soutien technique directement avec les utilisateurs.`,
      lien: `https://www.equipemicrofix.com/`,
      doc1src: lettreCSPI,
      doc2src: lettreCGL,
      doc3src: lettreMicrofix,
    },
    {
      id: 1,
      poste: "Travailleur autonome",
      entreprise: "Dale Limoges, Naturopathe",
      annees: "2010 - Aujourd'hui",
      texte: `En dehors, du travail spécifique aux médecines douces, j’ai fait l’ensemble des tâches
              reliées à mon entreprise. Dans les derniers mois, quand le temps me l’a permis, j’ai mis en
              ligne et je maintien un site WordPress plus complexe avec une emphase sur le SEO.`,
      lien: `https://dl-nd.com`,
    },
  ],

  accomplissements: [
    {
      id: 1,
      titre: "Analyse de projet en Amérique du Sud",
      texte: `Dans le cadre d'un stage de 4 mois à la "Federacion Nationale de Cafeteros" dans le département de coopération internationale, 
              j'ai analysé les projets d'aide. Mon rôle était d'étudier les projets et les régions afin de déterminer si les fonds avaient 
              été bien investi et faire un retour sur chacun des projets.`,
      lien: `https://federaciondecafeteros.org/`,
    },
    {
      id: 3,
      titre: "Forums Science et Société",
      texte: `J'ai aussi eu l'occasion d'organiser un Forum Science et Société au Cégep Montmorency. Cela en sus des entrainements d'arts martiaux 
              (une douzaine d'heures par semaine à l'époque) et du projet de coopération internationale au Guatemala.`,
      lien: `https://www.acfas.ca/evenements/forum`,
    },
    {
      id: 2,
      titre: "Coopération internationale au Guatemala",
      texte: `Bien qu'il s'agisse plus d'une expérience que d'une contribution. Ce voyage impliquait une très grande préparation et une étude
              poussée du Guatemala et de la coopération internationnale. C'était un voyage dans le cadre d'un cour.`,
      lien: `javascrip:;`,
    },
  ],

  langues: [
    {
      id: 1,
      nom: "Francais",
      niveau: 5,
      commentaire: "Langue de naissance",
    },
    {
      id: 2,
      nom: "Anglais",
      niveau: 4,
      commentaire: "Professionnel avancé",
    },
    {
      id: 3,
      nom: "Espagnol",
      niveau: 3,
      commentaire: "Intermédiaire",
    },
  ],

  educations: [
    {
      id: 1,
      nomFormation: "AEC - Production de média interactif",
      lieuFormation: "Cégep Limoilou",
      anneesFormation: "2020-2022",
      documentSrc: "",
    },
    {
      id: 2,
      nomFormation: "DEP - Soutien informatique",
      lieuFormation:
        "Ecole des métiers de l'information, du commerce et de l'administration",
      anneesFormation: "2012-2014",
      documentSrc: "",
    },
    {
      id: 3,
      nomFormation: "DEC - Sciences humaine et pure",
      lieuFormation: "Cégep Montmorency",
      anneesFormation: "2004-2007",
      documentSrc: releveNoteMontmorency,
    },
  ],

  competences: [
    {
      id:1,
      compentence:`HTML/CSS/Sass/Javascript/VS Code`,
      niveau:`Expert`,
      tooltip:`Il s'agit de la base de la formation que j'ai suivi. Bien que certains concepts Javascript m'échappent encore, son fonctionnement et sa logique est très claire d'autant avec l'utilisation de React et de Webpack dans mes derniers projets.`,
      pourcentage:100,
    },
    {
      id:2,
      compentence:`Wordpress/Bootstrap/jQuery/Velocity.js`,
      niveau:`Avancé`,
      tooltip:`Ce sont les frameworks et les librairies que j'ai le plus utilisés jusqu'à maintenant. Sans connaitre les `,
      pourcentage:80,
    },
    {
      id:3,
      compentence:`Gulp/Git/GitHub`,
      niveau:`Intermédiaire`,
      tooltip:`Ce sont des outils que nous avons utilisés tout au long de la formation. Je suis efficient avec Git et GitHub pour la gestions des branches sans toutefois connaître l'étendu de ses fonctionnalités.`,
      pourcentage:80,
    },
    {
      id:4,
      compentence:`Webpack`,
      niveau:`Intermédiaire`,
      tooltip:`Je le maîtrise assez bien pour l'utiliser dans mes projets. J'en ai expliqué le fonctionnement de base dans une présentation. Je devrais élaboré des configurations plus poussées dans les prochaines semaines pour une seconde présentation.`,
      pourcentage:50,
    },
    {
      id:5,
      compentence:`React`,
      niveau:`Intermédiaire`,
      tooltip:`Le présent site est construit avec React. Je maîtrise assez bien la structure et l'utilisation des "props". Par contre, je n'ai pas encore utilisé les "hooks" ni les événements en dehors du "portal" pour le formulaire de contact.`,
      pourcentage:50,
    },
    {
      id:6,
      compentence:`PHP/MySQL`,
      niveau:`Intermédiaire`,
      tooltip:`J'ai appris le fonctionnement de PHP et de MySQL et j'ai des notes à cet effet. Ils sont l'objet d'un cour que je suis présentement.`,
      pourcentage:40,
    }
  ],

  temoignages: [
    {
      id:1,
      texte:`Je puis témoigner de sa remarquable compétence, de sa capacité d’adaptation et de la qualité de ses rapports avec les clients.[...] Il représente un atout certain pour toute organisation.`,
      auteur:`René Blanchette`,
      titreAuteur:`Régisseur CSSPI`,
      source:lettreCSPI,
    },
    {
      id:2,
      texte:`Il est d'une autonomie redoutable et nous n'hésitions pas à lui confier des mandants plus complexes en sachant qu'il mènerait à bon port notre client.`,
      auteur:`David Aubry`,
      titreAuteur:`Co-propriétaire de CGL Micro inc.`,
      source:lettreCGL,
    },
    {
      id:3,
      texte:`[...], Monsieur Limoges a démontré de remarquables compétences techniques, notamment dans ses interactions avec la clientèle.[...] il représente un atout appréciable pour toute organisation.`,
      auteur:`Mathieu Jacques`,
      titreAuteur:`Président, Équipe Microfix`,
      source:lettreMicrofix,
    }
  ],
};

export default resume;
