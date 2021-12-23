import imageApropos from "./assets/images/pc-salon.png";
import lettreCSPI from "./assets/documents/LIMOGES-Dale_Lettre-de-Recommandation-CSPI_2014.pdf";
import lettreCGL from "./assets/documents/LIMOGES-Dale_Lettre-experience-et-référence-CGL-Micro_2015.pdf";
import lettreMicrofix from "./assets/documents/LIMOGES-Dale_Lettre-experience-et-reference_Equipe-Microfix.pdf";
import cv from "./assets/documents/LIMOGES-Dale_CV.pdf";
import releveNoteMontmorency from "./assets/documents/LIMOGES-Dale_Releve-Note_Montmorency.pdf";

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
        texte: `Chacun des projets démontrent différentes compétences : ma capacité à gérer un projet, mon autonomie, ma vision globale, mes compétences technique en programmation ainsi que mon “efficacité redoutable”`,
        lien: `dl-nd.com`,
        nomLien: "1",
      },
    ],
    images: [
      {
        id: 1,
        src: imageApropos,
        alt: "Alt de l'image 1",
      },
    ],
  },

  projetVedette: {
    nom: "leRempart",
    id: 1,
    titre: "Projet Le Rempart (chef de projet)",
    sommaire: "Site web pour un organisme de Québec qui aide les femmes en difficulté et à risque d'itinérance.",
    srcImageSommaire: "",
  },

  projets: [
    {
      id: 2,
      titre: "https://dl-nd.com",
      sommaire: "Une bonne partie de mes travaux se retrouve dans la mise à jour de mon site professionnel. De la structure, au design, en passant par le SEO et les outils de prise de rendez-vous en ligne.",
      imgSrc: imageApropos,
      imgAlt: "test",
    },
    {
      id: 3,
      titre: "Présentation de Webpack",
      sommaire: "Dans le cadre du cour de Recherche et développement, j'ai appris à utiliser de Webpack et l'ai présenté groupe",
      imgSrc: imageApropos,
      imgAlt: "test",
    },
    {
      id: 4,
      titre: "Reproduction de l'Affichage de Légo",
      sommaire: "Ce travail a été fait sans framework ni librairies, il servait à tester notre compréhension du SCSS.",
      imgSrc: imageApropos,
      imgAlt: "test",
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
      doc1src:lettreCSPI,
      doc2src:lettreCGL,
      doc3src:lettreMicrofix,
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
      lien:   `https://federaciondecafeteros.org/`,
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
      lien:  `javascrip:;`
    }
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
};

export default resume;
