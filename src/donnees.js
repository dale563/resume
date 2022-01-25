import lettreCSPI from "./assets/documents/LIMOGES-Dale_Lettre-de-Recommandation-CSPI_2014.pdf";
import lettreCGL from "./assets/documents/LIMOGES-Dale_Lettre-experience-et-référence-CGL-Micro_2015.pdf";
import lettreMicrofix from "./assets/documents/LIMOGES-Dale_Lettre-experience-et-reference_Equipe-Microfix.pdf";
import cv from "./assets/documents/LIMOGES-Dale_CV.pdf";
import releveNoteMontmorency from "./assets/documents/LIMOGES-Dale_Releve-Note_Montmorency.pdf";
import mesIcones from "./mesIcones";
import bgDark from "./assets/images/bgdark_1920.jpg";

// Images et documents en lien avec Apropos ************************************************************************
// Images et documents en lien avec Apropos ************************************************************************
// Images et documents en lien avec Apropos ************************************************************************

import AproposThumbnail01 from "./assets/images/Apropos-thumbnail-01.png";
import AproposThumbnail02 from "./assets/images/Apropos-thumbnail-02.png";

// Images et documents en lien avec LeRempart ************************************************************************
// Images et documents en lien avec LeRempart ************************************************************************
// Images et documents en lien avec LeRempart ************************************************************************

import LeRempartImageVedette01 from "./assets/images/LeRempart-image-vedette-01.png";
import LeRempartModale01 from "./assets/images/LeRempart-modale-01.png";
import LeRempartModale02 from "./assets/images/LeRempart-modale-02.png";
import LeRempartModale03 from "./assets/images/LeRempart-modale-03.png";
import LeRempartModale04 from "./assets/images/LeRempart-modale-04.png";
import LeRempartModale05 from "./assets/images/LeRempart-modale-05.png";
import LeRempartPresentation from "./assets/documents/LeRempart_Presentation-fin-session-1ere-partie.pdf";

const leRempartSiteWeb = "https://lerempart.org";
const leRempartLienFigma =
  "https://www.figma.com/proto/H9rFVKEWWpOlB36dsC0D3U/Maquettes-haute-fid%C3%A9lit%C3%A9?page-id=0%3A1&node-id=313%3A2352&viewport=378%2C48%2C0.11&scaling=min-zoom&starting-point-node-id=313%3A2352&show-proto-sidebar=1";
const leRempartFormulaireDon =
  "https://app.simplyk.io/fr/donation-form/933a119b-e342-4d6f-bc0a-735d810c2737";

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

const reproductionLegoSiteWeb = "https://dalelimoges-tl-rw.web.app/";
const reproductionLegoGitHub =
  "https://github.com/dale563/travail-long-rw-grille-lego";

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
  fr: {
    apropos: {
      paragraphes: [
        {
          id: 1,
          texte: `Je recherche un stage en intégration web ou en programmation front-end avec possibilité de poursuivre en emploi à temps plein (35h/semaine). J'aspire à un environnement professionnel, bienveillant et convivial. Finalement, je me débrouille bien dans la gestion d’une équipe ou d’un projet.`,
        },
        {
          id: 2,
          texte: `J’accorde beaucoup d’importance à l’efficacité et à l’optimisation. Mon super pouvoir est la résolution de problème par la vision d’ensemble (systémique).  Mon intérêt est marqué pour le développement front-end. J'apprécie particulièrement le Sass, Bootstrap, React, Git et Webpack.`,
        },
        {
          id: 3,
          texte: `Chacun des projets, dans la section suivante, démontre différentes compétences : ma capacité à gérer un projet, mon autonomie, ma vision globale, mes compétences technique en programmation ainsi que ma “capacité exceptionnelle à apprendre”`,
          sourceCitation: lettreCGL,
        },
      ],
      images: [
        {
          id: 1,
          src: AproposThumbnail01,
          alt: "Photo de moi travaillant devant 3 écrans",
          figCaption: "Mon bureau de travail à l'étage.",
        },
      ],
      liens: [
        {
          id: 1,
          text: "Curriculum vitae",
          href: cv,
          icone: mesIcones.pdf,
        },
        {
          id: 3,
          text: "Lettre de référence d'Équipe Microfix",
          href: lettreMicrofix,
          icone: mesIcones.pdf,
        },
        {
          id: 4,
          text: "Lettre de référence de la Commission Scolaire de la Pointe de l'Île",
          href: lettreCSPI,
          icone: mesIcones.pdf,
        },
        {
          id: 5,
          text: "Lettre référence CGL Micro",
          href: lettreCGL,
          icone: mesIcones.pdf,
        },
      ],
    },
    projets: [
      {
        id: 1,
        vedette: true,
        vedetteTexteRuban:"Vedette",
        vedetteTexte:`Avec l’aide de la plateforme de dons Symplik mise, vous pouvez
                      soutenir les femmes en difficulté et à risque d’itinérance :`,
        vedetteCta:`Faire un don`,
        titre: "Projet Le Rempart (chef de projet)",
        sommaire: `Projet synthèse pour l'AEC en production de média interactif. Mon rôle dans le projet est d'abord de m'assurer du bon fonctionnement de l'équipe, 
                   de la satisfaction de la cliente ainsi que du bon déroulement du projet. Ce sont donc mes compétences pour communiquer, orchestrer, gérer et anticiper le travail qui y ont été importantes.`,
        imgSrc: LeRempartImageVedette01,
        imgAlt: "Présentation web du Rempart, bannière rouge écrit le rempart sous un menu noir",
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
              imgAlt:
                "Explorateur de fichier ouvert avec les dossiers partagés du projets",
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
                  text: "Site web temporaire",
                  href: leRempartSiteWeb,
                  icone: mesIcones.internet,
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
                  text: "Présentation de fin de session",
                  href: LeRempartPresentation,
                  icone: mesIcones.pdf,
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
                  text: "Maquette Figma",
                  href: leRempartLienFigma,
                  icone: mesIcones.figma,
                },
              ],
            },
            {
              id: 5,
              titre: "Conclusion",
              imgSrc: LeRempartModale05,
              imgAlt:
                "Présentaiton web du Rempart, bannière rouge écrit le rempart sous un menu noir et une carourel d'images du lieu",
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
        imgAlt:
          "Vision globale de la page d'accueil avec le menu a gauche. Image d'un homme qui cour avec une citation a droite. Présentation des services et des questions fréquentes en dessous.",
        icones: [
          mesIcones.wordpress,
          mesIcones.illustrator,
          mesIcones.mailchimp,
        ],
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
              imgAlt:
                "Pèle-mèle, brainstorm, inspiration, compétiteur, plusieurs captures d'écrans avec des plantes médécinales et des aliments biologiques",
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
            },
            {
              id: 2,
              titre: "Persona et marketing",
              imgSrc: DlndModale02,
              imgAlt:
                "Persona, Marie Fournier, femme de 44 ans monoparentale ave cun intéret pour la santé et la marque Kashi",
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
              imgAlt:
                "Bouteille de produit naturel mise en valeur dans une promotion",
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
                  icone: mesIcones.pdf,
                },
              ],
            },
            {
              id: 4,
              titre: "Résultat",
              imgSrc: DlndModale05,
              imgAlt:
                "Téléphone portable avec l'application vendue ouverte devant un meuble plein de produits de santé naturels. Écrit Soutien rapide avec confirmation visuel de ma disponibilité",
              paragraphes: [
                {
                  id: 1,
                  texte: `Au final, je suis tombé sur un thème Wordpress tout indiqué pour mes besoins.`,
                },
                {
                  id: 2,
                  texte: `Entre deux sessions, j’ai mis mon nouveau site en ligne.`,
                },
                {
                  id: 3,
                  texte: `J’ai compris l’importance des différentes étapes et comment l’ensemble interagit.`,
                },
                {
                  id: 4,
                  texte: `Cela me permet de mieux apprécier là valeur du design et des règles d’ergonomie et d’être en mesure de les évaluer objectivement.`,
                },
                {
                  id: 5,
                  texte: `J’ai aussi appris, que le design me demande beaucoup plus d’effort et pour des résultats moindres que les autres éléments couverts dans la formation.`,
                },
              ],
              liens: [
                {
                  id: 1,
                  text: "https://dl-nd.com",
                  href: "https://dl-nd.com",
                  icone: mesIcones.internet,
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
        imgAlt:
          "Menu écrit Présentation puis Logo Webpack centré sur fond noir prenant tout l'espace disponible.",
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
              imgAlt:
                "Code Javascript dans le fichier webpack.config.dev dans VS Code.",
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
            },
            {
              id: 2,
              titre: "Recherche",
              imgSrc: PresentationWebpackModale02,
              imgAlt:
                "Code Javascript dans le fichier webpack.config.prod dans VS Code.",
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
            },
            {
              id: 3,
              titre: "Mise en place de l'environnement",
              imgSrc: PresentationWebpackModale03,
              imgAlt:
                "Code Javascript dans le fichier webpack.config.common dans VS Code.",
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
                  text: "Repository GitHub",
                  href: presentationWebPackGitHub,
                  icone: mesIcones.github,
                },
              ],
            },
            {
              id: 4,
              titre: "Présentations",
              imgSrc: PresentationWebpackModale04,
              imgAlt:
                "Directive pour cloner le répertoire GitHub contenant la présentation Webpack sur fond noir.",
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
                  text: "Présentation Webpack",
                  href: presentationWebPackSiteWeb,
                  icone: mesIcones.internet,
                },
              ],
            },
            {
              id: 5,
              titre: "Conclusion",
              imgSrc: PresentationWebpackModale05,
              imgAlt:
                "Capture d'écran d'une partie la bibiographie en bleu sur fond noir.",
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
            },
          ],
        },
      },
      {
        id: 4,
        titre: "Reproduction de l'affichage de LEGO",
        sommaire:
          "Ce travail a été fait sans framework ni librairies, il servait à tester notre compréhension du SCSS.",
        imgSrc: ReproductionLegoSommaire01,
        imgAlt:
          "Menu mauve avec une bannière présentant un couple qui s'enlasse devant un paysage orangé et des icones en dessous.",
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
          header: "Reproduction de l'affichage de LEGO",
          sections: [
            {
              id: 1,
              titre: "Introduction",
              imgSrc: ReproductionLegoModale01,
              imgAlt:
                "Haut de page web avec menu jaune, avec bannière noir présentant des Legos.",
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
            },
            {
              id: 3,
              titre: "Sémentique, accessibilité et structure du code Sass",
              imgSrc: ReproductionLegoModale04,
              imgAlt:
                "Code Sass dans VS Code affichant une partie des styles du projet",
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
            },
            {
              id: 4,
              titre: "Résultat",
              imgSrc: ReproductionLegoModale03,
              imgAlt:
                "Code Sass dans VS Code affichant les variables du projet",
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
                  text: "Repository Git",
                  href: reproductionLegoGitHub,
                  icone: mesIcones.github,
                },
              ],
            },
            {
              id: 5,
              titre: "Conclusion",
              imgSrc: ReproductionLegoModale05,
              imgAlt:
                "Menu mauve avec une bannière présentant un couple qui s'enlasse devant un paysage orangé et des icones en dessous.",
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
                  text: "Site web",
                  href: reproductionLegoSiteWeb,
                  icone: mesIcones.internet,
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
        nom: "Français",
        niveau: 5,
        commentaire: "Langue de naissance",
      },
      {
        id: 2,
        nom: "Anglais",
        niveau: 4,
        commentaire: "Professionnel",
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
        id: 1,
        nom: `HTML, CSS et Sass`,
        niveau: `Expert`,
        tooltip: `Il s'agit de la base de la formation que j'ai suivi avec javascript.`,
        pourcentage: 95,
      },
      {
        id: 7,
        nom: `Javascript et jQuery`,
        niveau: `Avancé`,
        tooltip: `Il s'agit d'une part importante de la formation que j'ai suivi. Bien que certains concepts Javascript m'échappent encore, son fonctionnement et sa logique est très claire d'autant avec l'utilisation de React et de Webpack dans mes derniers projets.`,
        pourcentage: 85,
      },
      {
        id: 2,
        nom: `Wordpress et Bootstrap`,
        niveau: `Avancé`,
        tooltip: `Ce sont les frameworks et les librairies que j'ai le plus utilisés jusqu'à maintenant.`,
        pourcentage: 80,
      },
      {
        id: 3,
        nom: `Git et GitHub`,
        niveau: `Intermédiaire`,
        tooltip: `Je suis efficient avec Git et GitHub pour la gestions des branches sans toutefois connaître l'étendu de ses fonctionnalités.`,
        pourcentage: 80,
      },
      {
        id: 4,
        nom: `Gulp et Webpack`,
        niveau: `Intermédiaire`,
        tooltip: `Je les maîtrise assez bien pour les utiliser dans mes projets. J'ai expliqué le fonctionnement de base de Webpack dans une présentation. Je devrais élaboré des configurations plus poussées dans les prochaines semaines pour une seconde présentation.`,
        pourcentage: 70,
      },
      {
        id: 6,
        nom: `PHP et MySQL`,
        niveau: `Intermédiaire`,
        tooltip: `J'ai appris le fonctionnement de PHP et de MySQL et j'ai des notes à cet effet. Ils sont l'objet d'un cour que je suis présentement.`,
        pourcentage: 70,
      },
      {
        id: 5,
        nom: `React`,
        niveau: `Intermédiaire`,
        tooltip: `Le présent site est construit avec React. Je maîtrise assez bien la structure et l'utilisation des "props". Par contre, je n'ai pas encore utilisé les "hooks" ni les événements en dehors du "portal" pour le formulaire de contact.`,
        pourcentage: 50,
      },
    ],
    qualites: [
      {
        id: 1,
        nom: `Autonomie`,
        niveau: `Expert`,
        tooltip: `C'est l'une de mes forces bien reconnues.`,
        pourcentage: 100,
      },
      {
        id: 2,
        nom: `Communication`,
        niveau: `Expert`,
        tooltip: `J'ai fait plusieurs formations en communication notamment en communication non-violente. C'est un dada personnel très utile pour vivre de belle relation familiale et professionnelle. C'est un domaine qui me passionne.`,
        pourcentage: 95,
      },
      {
        id: 3,
        nom: `Analyse`,
        niveau: `Expert`,
        tooltip: `Avec la résolution de problème l'analyse fait partie de ma vie dans tous les domaines afin d'arriver à l'effort minimal nécessaire et pour optimiser mes efforts.`,
        pourcentage: 95,
      },
      {
        id: 4,
        nom: `Gestion de projet`,
        niveau: `Intermédiaire`,
        tooltip: `Les qualités précédentes m'ont amenés naturellement à gérer de façon fortuite des projets et orchestrer des efforts d'équipe.`,
        pourcentage: 50,
      },
    ],
    temoignages: [
      {
        id: 1,
        texte: `Je puis témoigner de sa remarquable compétence, de sa capacité d’adaptation et de la qualité de ses rapports avec les clients.[...] 
             Il représente un atout certain pour toute organisation.`,
        auteur: `René Blanchette`,
        titreAuteur: `Régisseur CSSPI`,
        source: lettreCSPI,
      },
      {
        id: 2,
        texte: `Il est d'une autonomie redoutable et nous n'hésitions pas à lui confier des mandants plus complexes en sachant qu'il mènerait à bon port notre client. 
             `,
        auteur: `David Aubry`,
        titreAuteur: `Co-propriétaire de CGL Micro inc.`,
        source: lettreCGL,
      },
      {
        id: 3,
        texte: `[...], Monsieur Limoges a démontré de remarquables compétences techniques, notamment dans ses interactions avec la clientèle.[...] il représente un atout 
             appréciable pour toute organisation.`,
        auteur: `Mathieu Jacques`,
        titreAuteur: `Président, Équipe Microfix`,
        source: lettreMicrofix,
      },
    ],
  },
  en: {
    apropos: {
      paragraphes: [
        {
          id: 1,
          texte: `I'm looking for an internship in web integration or front-end programming with the possibility of pursuing a full-time job (35h/week). I aspire to a professional, caring and friendly environment. Finally, I am good at managing a team or a project.`,
        },
        {
          id: 2,
          texte: `My superpower is problem solving through a systemic approach.  My interest is in front-end development. I particularly enjoy Sass, Bootstrap, React, Git and Webpack.`,
        },
        {
          id: 3,
          texte: `Each of the projects in the following sections demonstrate different skills: my ability to manage a project, my autonomy, my global vision, my technical skills in programming as well as my "exceptional capacity to learn"
          `,
          sourceCitation: lettreCGL,
        },
      ],
      images: [
        {
          id: 1,
          src: AproposThumbnail01,
          alt: "Picture of me working in front of 3 screens",
          figCaption: "My work desk upstairs.",
        },
      ],
      liens: [
        {
          id: 1,
          text: "Curriculum vitae",
          href: cv,
          icone: mesIcones.pdf,
        },
        {
          id: 3,
          text: "Équipe Microfix reference letter",
          href: lettreMicrofix,
          icone: mesIcones.pdf,
        },
        {
          id: 4,
          text: "Commission Scolaire de la Pointe de l'Île's letter of reference",
          href: lettreCSPI,
          icone: mesIcones.pdf,
        },
        {
          id: 5,
          text: "CGL Micro reference letter",
          href: lettreCGL,
          icone: mesIcones.pdf,
        },
      ],
    },
    projets: [
      {
        id: 1,
        vedette: true,
        vedetteTexteRuban:"Featured",
        vedetteTexte:`You can support support women in need and at risk of homelessness via Simplyk :`,
        vedetteCta:`Donate`,
        titre: "Le Rempart project (project leader)",
        sommaire: `Synthesis project for the AEC in interactive media production. My role in the project is first to make sure the team is working well. Also, i had to keep in touch 
        with the client's satisfaction. My skills in communication, orchestration, management and anticipation of the work are the most relevant here.`,
        imgSrc: LeRempartImageVedette01,
        imgAlt: "Web presentation of Le Rempart, red banner writes the Rampart under a black navigation menu",
        hrefFormulaireDon: leRempartFormulaireDon,
        icones: [mesIcones.wordpress, mesIcones.figma],
        liens: [
          {
            id: 1,
            text: "The Figma prototype",
            href: leRempartLienFigma,
            icone: mesIcones.figma,
          },
          {
            id: 2,
            text: "The temporary web page",
            href: leRempartSiteWeb,
            icone: mesIcones.internet,
          },
        ],
       modale: {
          id: 1,
          dataBsTarget: "#modalProjetLeRempart",
          htmlIdModale: "modalProjetLeRempart",
          header: "Le Rempart Project",
          sections: [
            {
              id: 1,
              titre: "Introduction",
              imgSrc: LeRempartModale01,
              imgAlt:
                "File explorer open with shared project folders",
              paragraphes: [
                {
                  id: 1,
                  texte: `This is a team effort of five people that I am in charge of.`,
                },
                {
                  id: 2,
                  texte: `As a team leader, I was in charge of the relationship with the client, 
                        work organization and communication within the team.`,
                },
                {
                  id: 3,
                  texte: `Given my background in computer science, I was able to take the lead and offer 
                        the necessary technical support for our working environments.`,
                },
                {
                  id: 4,
                  texte: `The result is that we quickly delivered a temporary website to the client 
                        and exceeded the expectations of the first part of the project. We still have the second part ahead.`,
                },
              ],
              liens: [
                {
                  id: 1,
                  text: "Temporary website",
                  href: leRempartSiteWeb,
                  icone: mesIcones.internet,
                },
              ],
            },
            {
              id: 2,
              titre: "Project background",
              imgSrc: LeRempartModale02,
              imgAlt: "List of Microsoft To Do tasks, 37 completed",
              paragraphes: [
                {
                  id: 1,
                  texte: `When we took over the project, the client had no website. However, she had a logo and a facebook page.`,
                },
                {
                  id: 2,
                  texte: `Her priority was visibility and she was eager to have a website. Luckily, my team is proactive.`,
                },
                {
                  id: 3,
                  texte: `A first design was made and we delivered a temporary site three days before our summer vacation 2021.`,
                },
                {
                  id: 4,
                  texte: `The implementation of online donations with Simplyk, the configuration of Google My Business and Google Ads are also bonuses that we have already been able to give to the client.`,
                },
              ],
              liens: [
                {
                  id: 1,
                  text: "End of session presentation",
                  href: LeRempartPresentation,
                  icone: mesIcones.pdf,
                },
              ],
            },
            {
              id: 3,
              titre: "Research and design",
              imgSrc: LeRempartModale03,
              imgAlt: "Four colored mood boards",
              paragraphes: [
                {
                  id: 1,
                  texte: `The approach chosen for the conception and design is user-centered.`,
                },
                {
                  id: 2,
                  texte: `We first researched the comparables and asked for the client's preferences to deliver the temporary webpage. We currently use it as a basis for the final site design.`,
                },
                {
                  id: 3,
                  texte: `We then created several moodboards and started the Figma mockups for the site as well as identified suitable WordPress Themes.`,
                },
                {
                  id: 4,
                  texte: `Finally we orchestrated user tests and documented everything.`,
                },
                {
                  id: 5,
                  texte: `I am proud to say that we met our deadlines and managed our efforts very well and the end result matches our objectives.`,
                },
              ],
            },
            {
              id: 4,
              titre: "Result",
              imgSrc: LeRempartModale04,
              imgAlt: "Nearly a hundred Figma frames connected to the project",
              paragraphes: [
                {
                  id: 1,
                  texte: `As of December 13 (2021), the majority of the project is done and we will have one month to work on it again.`,
                },
                {
                  id: 2,
                  texte: `We delivered a temporary website, configured the Symplik, Google Ads and Google My Business platforms.`,
                },
                {
                  id: 3,
                  texte: `Each team member is happy to be part of the team and rates their experience as spotless 
                        and without conflict. I believe I have something to do with conflict prevention and resolution since my knowledge on communication are great.`,
                },
                {
                  id: 4,
                  texte: `The final WordPress site is advanced, locally, on a WAMP server and we plan to put some effort into SEO in the next session.`,
                },
              ],
              liens: [
                {
                  id: 1,
                  text: "Figma model",
                  href: leRempartLienFigma,
                  icone: mesIcones.figma,
                },
              ],
            },
            {
              id: 5,
              titre: "Conclusion",
              imgSrc: LeRempartModale05,
              imgAlt:
                "Web presentation of Le Rempart, red banner writing Le Rempart under a black navigation menu and a carourel of images of the place",
              paragraphes: [
                {
                  id: 1,
                  texte: `The feedback from the team members was unanimous: the work experience was greatly appreciated.`,
                },
                {
                  id: 2,
                  texte: `It also allowed me to further develop my adaptability and work management skills by having a designated team leader position and applying all of my skills and qualities.`,
                },
                {
                  id: 3,
                  texte: `I can show you the local Wordpress website under construction on request.`,
                },
              ],
            },
          ],
        },
      },
      {
        id: 2,
        titre: "Dale Limoges, Naturopath",
        sommaire:
          "During classes, a lot of my work did go into updating my professional website. From the structure, to the design, to the SEO and online appointment scheduling tools.",
        imgSrc: DlndSommaire01,
        imgAlt:
          "Global view of the home page with the menu on the left. Image of a man running with a quote on the right. Presentation of services and frequently asked questions below",
        icones: [
          mesIcones.wordpress,
          mesIcones.illustrator,
          mesIcones.mailchimp,
        ],
        liens: [
          {
            id: 1,
            text: "The website",
            href: dlndSiteWeb,
            icone: mesIcones.internet,
          },
        ],
       modale: {
          id: 1,
          dataBsTarget: "#modalDLND",
          htmlIdModale: "modalDLND",
          header: "Dale Limoges, Naturopath",
          sections: [
            {
              id: 1,
              titre: "Introduction",
              imgSrc: DlndModale01,
              imgAlt:
                "Pattern, brainstorm, inspiration, competitor, several screenshots with medicinal plants and organic foods",
              paragraphes: [
                {
                  id: 1,
                  texte: `Developing an objective view of one's own business, of the present and potential customers, still seems to me a real challenge.`,
                },
                {
                  id: 2,
                  texte: `That being said, it allowed me to put most of the aspects of the training into practice in a real world context that I care about.`,
                },
              ],
            },
            {
              id: 2,
              titre: "Persona and marketing",
              imgSrc: DlndModale02,
              imgAlt:
                "Persona, Marie Fournier, 44 year old single parent with interest in health and Kashi brand.",
              paragraphes: [
                {
                  id: 1,
                  texte: `The first step was to clearly establish the target audience in order to focus my design on a clearly defined customer segment.`,
                },
                {
                  id: 2,
                  texte: `So I did a market analysis and established a SMART goal and key performance indicators (KPI).`,
                },
              ],
              liens: [
                {
                  id: 1,
                  text: "Market analysis",
                  href: DLNDanalyseMarche,
                  icone: mesIcones.pdf,
                },
              ],
            },
            {
              id: 3,
              titre: "Research and design",
              imgSrc: DlndModale03,
              imgAlt:
                "Bottle of natural product highlighted in a promotion",
              paragraphes: [
                {
                  id: 1,
                  texte: `Then, in the design class (the only class that is really challenging for me), I put together a Graphic Standards Guide and an example of an application advertisement.`,
                },
                {
                  id: 2,
                  texte: `I am aware that the design of my guide is rather ordinary, fortunately I am not applying for graphic designer role. non the less I had a great teacher and learn a lot for that matter.`,
                },
              ],
              liens: [
                {
                  id: 1,
                  text: "Graphic Standards Guide",
                  href: DLNDguideGraphique,
                  icone: mesIcones.pdf,
                },
              ],
            },
            {
              id: 4,
              titre: "Results",
              imgSrc: DlndModale05,
              imgAlt:
                "Mobile phone with sold app open in front of cabinet full of natural health products. Written Fast support with visual confirmation of my availability",
              paragraphes: [
                {
                  id: 1,
                  texte: `In the end, I found a wordpress theme that was just right for my needs.`,
                },
                {
                  id: 2,
                  texte: `Between two sessions, I put my new website online.`,
                },
                {
                  id: 3,
                  texte: `I understood the importance of the different steps and how the whole interacts.`,
                },
                {
                  id: 4,
                  texte: `It allows me to better appreciate the value of design and ergonomic rules and to be able to evaluate them objectively.`,
                },
                {
                  id: 5,
                  texte: `I also learned that design requires much more effort and for less results than the other elements covered in the training.`,
                },
              ],
              liens: [
                {
                  id: 1,
                  text: "https://dl-nd.com",
                  href: "https://dl-nd.com",
                  icone: mesIcones.internet,
                },
              ],
            },
          ],
        },
      },
      {
        id: 3,
        titre: "Webpack presentation",
        sommaire:
          "As part of the Research and Development course, I learned how to use Webpack and presented it to the group",
        imgSrc: PresentationWebpackSommaire01,
        imgAlt:
          "Menu written Presentation then Webpack logo centered on black background taking all the available space.",
        icones: [mesIcones.webpack, mesIcones.bootstrap],
        liens: [
          {
            id: 1,
            text: "The GitHub repository",
            href: presentationWebPackGitHub,
            icone: mesIcones.github,
          },
          {
            id: 2,
            text: "The website",
            href: presentationWebPackSiteWeb,
            icone: mesIcones.internet,
          },
        ],
       modale: {
          id: 1,
          dataBsTarget: "#modalPresentationWebpack",
          htmlIdModale: "modalPresentationWebpack",
          header: "Webpack presentations",
          sections: [
            {
              id: 1,
              titre: "Introduction",
              imgSrc: PresentationWebpackModale01,
              imgAlt:
                "Javascript code in the webpack.config.dev file in VS Code.",
              paragraphes: [
                {
                  id: 1,
                  texte: `Webpack intrigued me and so I chose to address it in the research and development course.`,
                },
                {
                  id: 2,
                  texte: `Knowing that I'm good with the command line interface and with debugging because of my computer background, the challenge seemed perfect to understand 
                        the operation of the development environment (node.js, importing modules, etc.).`,
                },
                {
                  id: 3,
                  texte: `My goal was to set up a functional development environment with Webpack. Which I did well.`,
                },
              ],
            },
            {
              id: 2,
              titre: "Research",
              imgSrc: PresentationWebpackModale02,
              imgAlt:
                "Javascript code in the file webpack. config.prod in VS Code",
              paragraphes: [
                {
                  id: 1,
                  texte: `The challenge at the beginning was that the Webpack usage demonstrations on YouTube were different from each other and did not work.`,
                },
                {
                  id: 2,
                  texte: `Moreover many were using outdated versions, loaders and plugins made useless in the most recent version of Webpack.`,
                },
                {
                  id: 3,
                  texte: `The Webpack documentation is both extensive and very technical which make it hard to follow without examples.`,
                },
                {
                  id: 4,
                  texte: `It was the sum of the two with the practical application that allowed me to achieve my goals.`,
                },
              ],
            },
            {
              id: 3,
              titre: "Setting up the environment",
              imgSrc: PresentationWebpackModale03,
              imgAlt:
                "Javascript code in the file webpack. config.common in VS Code.",
              paragraphes: [
                {
                  id: 1,
                  texte: `For the first presentation, I wanted, and so I did set up, an environment that involves at least two html pages, Bootstrap, Reveal.js and their dependencies. I also wanted that 
                "chunks" differ from page to page.`,
                },
                {
                  id: 2,
                  texte: `One version fully managed by Webpack and its dependency graph and one partially bypassing it.`,
                },
                {
                  id: 3,
                  texte: `That being said, I have focused on the material presented and the working environments set up on the different branches (see the project on GitHub). 
                  Therefor, the presentation page itself isn't appealing as it would if the "customers" weren't becoming developers more focus on technical understanding than eye catching presentation.`,
                },
              ],
            },
            {
              id: 4,
              titre: "Presentations",
              imgSrc: PresentationWebpackModale04,
              imgAlt:
                "Directive to clone the GitHub directory containing the Webpack presentation on black background.",
              paragraphes: [
                {
                  id: 1,
                  texte: `The presentations last one hour each.  I've only done the first one so far and covered Webpack "with flying colors" in the words of our teacher.`,
                },
                {
                  id: 2,
                  texte: `I think I have indeed managed to grasp, use, explain and convey the use of Webpack with several of its fundamental functions.`,
                },
                {
                  id: 3,
                  texte: `However, some of the more complex configurations such as the use of elements on remote servers or for production optimization still escape me and will probably be the subject of the second presentation.`,
                },
              ],
              liens: [
                {
                  id: 1,
                  text: "Webpack presentation",
                  href: presentationWebPackSiteWeb,
                  icone: mesIcones.internet,
                },
              ],
            },
            {
              id: 5,
              titre: "Conclusion",
              imgSrc: PresentationWebpackModale05,
              imgAlt:
                "Screenshot of a part of the bibiography in blue on a black background.",
              paragraphes: [
                {
                  id: 1,
                  texte: `I now use Webpack by default for my projects and plan to use it more and more.`,
                },
                {
                  id: 2,
                  texte: `I not only learned Webpack, I also understood much better the imports, the dependencies, the interactions between modules, the functioning of the environment under node.js, etc...`,
                },
                {
                  id: 3,
                  texte: `Be aware that the graphics of the presentation isn't that great but it is clear that the two pages do not have the same chunks (which was mattering the most). Also you can see the project on GitHub.`,
                },
              ],
            },
          ],
        },
      },
      {
        id: 4,
        titre: "Reproduction of the LEGO display",
        sommaire:
          "This work was done without a framework or libraries, it was used to test our understanding of SCSS.",
        imgSrc: ReproductionLegoSommaire01,
        imgAlt:
          "Purple navigation menu with a banner featuring a couple hugging in front of an orange landscape and icons below.",
        icones: [mesIcones.html, mesIcones.sass],
        liens: [
          {
            id: 1,
            text: "The GitHub repository",
            href: reproductionLegoGitHub,
            icone: mesIcones.github,
          },
          {
            id: 2,
            text: "The website",
            href: reproductionLegoSiteWeb,
            icone: mesIcones.internet,
          },
        ],
  
       modale: {
          id: 1,
          dataBsTarget: "#modalReproductionLego",
          htmlIdModale: "modalReproductionLego",
          header: "Reproduction of the LEGO display",
          sections: [
            {
              id: 1,
              titre: "Introduction",
              imgSrc: ReproductionLegoModale01,
              imgAlt:
                "Top of web page with yellow menu, with black banner featuring Legos.",
              paragraphes: [
                {
                  id: 1,
                  texte: `As part of the web design course, I have reproduced the Lego main webpage with custom content.`,
                },
                {
                  id: 2,
                  texte: `This project demonstrates my skills with Sass, it was done only with HTML and Sass.`,
                },
              ],
            },
            {
              id: 2,
              titre: "First reproduce the structure",
              imgSrc: ReproductionLegoModale02,
              imgAlt: "Web page design in wireframe, 12 columns.",
              paragraphes: [
                {
                  id: 1,
                  texte: `The first step was to create mobile models and desktops. In a second step prepare each of the images.`,
                },
              ],
            },
            {
              id: 3,
              titre: "Semantics, accessibility and structure of Sass code",
              imgSrc: ReproductionLegoModale04,
              imgAlt:
                "Sass code in VS Code displaying part of the project styles",
              paragraphes: [
                {
                  id: 1,
                  texte: `Next I needed to structure the HTML code and the Sass.`,
                },
                {
                  id: 2,
                  texte: `I had fun using only HTML tags without any class or id. Although this is not an ideal practice.`,
                },
              ],
            },
            {
              id: 4,
              titre: "Result",
              imgSrc: ReproductionLegoModale03,
              imgAlt:
                "Sass code in VS Code displaying project variables",
              paragraphes: [
                {
                  id: 1,
                  texte: `I also determined variables to test the color matches and fonts I had set up for my company. I did so with variables. The project also required the use of mixins.`,
                },
                {
                  id: 2,
                  texte: `Finally, after creating custom placeholders, I replaced them with images I prepared in Adobe Illustrator.`,
                },
              ],
              liens: [
                {
                  id: 1,
                  text: "Repository Git",
                  href: reproductionLegoGitHub,
                  icone: mesIcones.github,
                },
              ],
            },
            {
              id: 5,
              titre: "Conclusion",
              imgSrc: ReproductionLegoModale05,
              imgAlt:
                "Purple navigatio nmenu with a banner featuring a couple hugging in front of an orange landscape and icons below.",
              paragraphes: [
                {
                  id: 1,
                  texte: `In the end, I only used the HTML tags to target the styles in the Sass.`,
                },
                {
                  id: 2,
                  texte: `I now understand the usefulness of classes with clear names to organize. That being said, I thought of the reproduction with the idea 
                to eventually make it a Newsletter (without the header navigation menu).`,
                },
                {
                  id: 3,
                  texte: `I had a lot of fun doing this project.`,
                },
              ],
              liens: [
                {
                  id: 1,
                  text: "Website",
                  href: reproductionLegoSiteWeb,
                  icone: mesIcones.internet,
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
        poste: "Computer technician",
        entreprise: "CGL Micro, Équipe Microfix, Trévi",
        annees: "2014-2019",
        texte: `Over five years, I worked three full years in IT in various environments.
              Mostly Microsoft but also VM 
              Ware and Fortinet technologies. I have done both system administration and
              network management as well as technical support directly with users.`,
        lien: `https://www.equipemicrofix.com/`,
        doc1src: lettreCSPI,
        doc2src: lettreCGL,
        doc3src: lettreMicrofix,
      },
      {
        id: 1,
        poste: "Self-employed",
        entreprise: "Dale Limoges, Naturopath",
        annees: "2010 - Today",
        texte: `Apart from the specific work in alternative medicine, I have done all the tasks
              related to my business. In the last few months, when time allowed, I have been implementing
              and maintained a more complex WordPress website with an emphasis on search engine optimization.`,
        lien: `https://dl-nd.com`,
      },
    ],
  
    accomplissements: [
      {
        id: 1,
        titre: "Projects analysis in South America",
        texte: `As part of a 4 months internship at the "Federacion Nationale de Cafeteros" in the department of international cooperation, 
              I analyzed the support projects. My role was to review the projects and regions to determine if the funds did the job they were meant to do 
              and provide feedback on each of the projects.`,
        lien: `https://federaciondecafeteros.org/`,
      },
      {
        id: 3,
        titre: "Science and Society Forums",
        texte: `I also had the opportunity to organize a Science and Society Forum at Montmorency College. This is in addition to the martial arts training 
              (a dozen hours a week at the time) and the international cooperation project in Guatemala.`,
        lien: `https://www.acfas.ca/evenements/forum`,
      },
      {
        id: 2,
        titre: "International Cooperation in Guatemala",
        texte: `Although it was more an experience than a contribution. This trip involved a great deal of preparation and studies on
              Guatemala and international cooperation. It was a trip as part of a course. It changed my life goals.`,
        lien: `javascrip:;`,
      },
    ],
  
    langues: [
      {
        id: 1,
        nom: "French",
        niveau: 5,
        commentaire: "Native language",
      },
      {
        id: 2,
        nom: "English",
        niveau: 4,
        commentaire: "Professional",
      },
      {
        id: 3,
        nom: "Spanish",
        niveau: 3,
        commentaire: "Intermediate",
      },
    ],
  
    educations: [
      {
        id: 1,
        nomFormation: "AEC - Interactive media production",
        lieuFormation: "Cégep Limoilou",
        anneesFormation: "2020-2022",
        documentSrc: "",
      },
      {
        id: 2,
        nomFormation: "DEP - Information technology support",
        lieuFormation: "School of Information, Commerce and Administration (EMICA)",
        anneesFormation: "2012-2014",
        documentSrc: "",
      },
      {
        id: 3,
        nomFormation: "DEC - Human and Pure Sciences",
        lieuFormation: "Cégep Montmorency",
        anneesFormation: "2004-2007",
        documentSrc: releveNoteMontmorency,
      },
    ],
  
    competences: [
      {
        id: 1,
        nom: `HTML, CSS and Sass`,
        niveau: `Expert`,
        tooltip: `With javascript, this is the basis of the training I took.`,
        pourcentage:95,
      },
      {
        id: 7,
        nom: `Javascript and jQuery`,
        niveau: `Advanced`,
        tooltip: `It is an important part of the training I have taken. Javascript's functioning and logic is very clear to me, especially with the use of React and Webpack in my latest projects.`,
        pourcentage:85,
      },
      {
        id: 2,
        nom: `Wordpress and Bootstrap`,
        niveau: `Advanced`,
        tooltip: `These are the frameworks and libraries I have used the most so far.`,
        pourcentage:80,
      },
      {
        id: 3,
        nom: `Git and GitHub`,
        niveau: `Intermediate`,
        tooltip: `I am proficient with Git and GitHub.`,
        pourcentage:80,
      },
      {
        id: 4,
        nom: `Gulp and Webpack`,
        niveau: `Intermediate`,
        tooltip: `I have mastered them well enough to use them in my projects. I have explained the basic operation of Webpack in a presentation. I should elaborate more advanced configurations in the next weeks for a second presentation.`,
        pourcentage:70,
      },
      {
        id: 6,
        nom: `PHP and MySQL`,
        niveau: `Intermediate`,
        tooltip: `I have learned how PHP and MySQL work and have notes on them.`,
        pourcentage:70,
      },
      {
        id: 5,
        nom: `React`,
        niveau: `Intermediate`,
        tooltip: `This page is built with React. I have a pretty good understanding of the structure and the use of props. However, I have not yet used much hooks yet.`,
        pourcentage:50,
      },
    ],
    qualites: [
      {
        id: 1,
        nom: `Autonomy`,
        niveau: `Expert`,
        tooltip: `This is one of my well recognized strengths. See the testimonies and recommandation letters for that matters.`,
        pourcentage:100 ,
      },
      {
        id: 2,
        nom: `Communication`,
        niveau: `Expert`,
        tooltip: `I have done several trainings in communication, especially in non-violent communication. It is very useful to live a beautiful family and professional relationship. I love reading on the subject on my spare time.`,
        pourcentage:95 ,
      },
      {
        id: 3,
        nom: `Analysis`,
        niveau: `Expert`,
        tooltip: `With problem solving, analysis is part of my life in all areas in order to optimize my efforts and gain efficacity.`,
        pourcentage:95,
      },
      {
        id: 4,
        nom: `Product Owning`,
        niveau: `Intermediate`,
        tooltip: `The previous qualities naturally led me to manage projects and orchestrate team efforts.`,
        pourcentage:50,
      },
    ],
  
    temoignages: [
      {
        id: 1,
        texte: `I can testify to his remarkable competence, his ability to adapt and the quality of his communication with clients [...] 
             It represents a definite asset for any organization.`,
        auteur: `René Blanchette`,
        titreAuteur: 'CSSPI Manager',
        source: lettreCSPI,
      },
      {
        id: 2,
        texte: `He is a formidable self-starter and we did not hesitate to entrust him with more complex mandates knowing that he would lead our client to success.`, 
        auteur: `David Aubry`,
        titreAuteur: `Owner of CGL Micro Inc`,
        source: lettreCGL,
      },
      {
        id: 3,
        texte: `[...], Mr. Limoges has demonstrated outstanding technical skills, particularly in his interactions with customers.[...] he is an asset 
             appreciable for any organization.`,
        auteur: `Mathieu Jacques`,
        titreAuteur: `President, Équipe Microfix`,
        source: lettreMicrofix,
      },
    ],
  },
};

export default resume;
