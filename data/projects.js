export const projects = [
    {
      id: 'TheLastJourney',
      title: '<The last journey>',
      date: '2025',
      shortDescription: "Jeu en 2D type roguelike",
      fullDescription: "The last journey est un rogue like en 2D isométrique. Il s’inspire principalement des jeux The binding of isaac et Hades. Le joueur a le choix entre trois héros, Celinia l'archère, Renaud le chevalier et Rogier le sorcier. Chaque héros possède 2 attaques qui lui sont propres et un dash pour avancer plus rapidement. L’attaque est trigger au clic, une étant sur le clic gauche, et l’autre le droit. Le dash est quant à lui géré par la barre d’espace. Les déplacements sont libres, le héros avance suivant l’orientation de la souris via les touches classiques Z/Q/S/D. Le héros évolue dans un donjon de plusieurs étages. Chaque étage est généré aléatoirement entre une configuration de 3 par 4 salles ou 4 par 3 salles. Les salles possèdent 6 obstacles aléatoires et un certain nombre d’ennemis. Chaque fin de salle nous propose de choisir 1 parmi 3 power ups: l’attaque, les critiques et la vitesse une fois la salle vidée. Le jeu propose 3 types d’ennemis, les orcs, les gobelins et les squelettes. Chaque caste a une attaque et suis son propre pattern. Il est également possible de rencontrer 3 bosses différents : Astérion l'exterminateur, un gros minotaure cyclope, Goundorf le germanique, le chef des orcs, Ruzalgal le profanateur, un nécromancien. L’inventaire regroupe les infos globales du héros, avec les power up, il permet aussi de voir la liste des items achetés au marchand. Le marchand propose 3 items parmi une banque aléatoire, l’un coûte 15 pièces, un autre 30 et le dernier 45. Les pièces sont récoltées automatiquement après avoir tué une ennemi, chacun rapporte une seule pièce.",
      technologies: ['Java', 'Maven -> gestion des packets', 'Swing -> moteur graphique'],
      fond: '/img/mockups/TLJ.jpg',
      images: [
        '/img/galeriesprojets/java1.png',
        '/img/galeriesprojets/java2.png',
        '/img/galeriesprojets/java3.png',
        '/img/galeriesprojets/java4.png',
        '/img/galeriesprojets/java5.png',
        '/img/galeriesprojets/java6.png',
        '/img/galeriesprojets/java8.png',
        '/img/galeriesprojets/java9.png',
      ],
      demoLink: "https://github.com/SebastienJourdain/TheLastJourney.git",
    },
    {
      id: 'Ponos',
      title: '<Ponos>',
      date: '2025',
      shortDescription: "Jobboard",
      fullDescription: "Ponos constitue mon projet web réalisé en pré Master à Epitech en groupe de 3. Nous avions pour consigne de développer un jobboard responsive permettant à deux types d'utilisateurs, candidats et entreprises de pouvoir poster des offres d'emplois pour les entreprises, et d'y postuler pour les candidats. Chaque profil dispose d'un espace profil lui permettant de gérer ses informations personelles, ses candidatures ou ses offres postées. Ainsi est né Ponos, en référence au dieu grec du travail. Le choix des technologies nous a été laissé et nous sommes partis sur un front en react et tailwindcss, laravel nous a permis de faire le pont entre le front et le back, et la base de données à été créée via PostgreSQL. Nous avons tous les trois travaillé sur toutes les phases du projet afin que nous puissions ếtre polyvalents à la fin.",
      technologies: ['Figma', 'React', 'Tailwind', 'Laravel', 'Postgre'],
      fond: '/img/mockups/Ponos.png',
      images: [
        '/img/galeriesprojets/Ponos1.png',
        '/img/galeriesprojets/Ponos2.png',
        '/img/galeriesprojets/Ponos3.png',
        '/img/galeriesprojets/Ponos4.png',
        '/img/galeriesprojets/Ponos5.png',
      ],
      demoLink: "https://github.com/SebastienJourdain/Ponos.git",
    },
    {
        id: 'agemo',
        title: '<Agemo>',
        date: '2021 / 2022',
        shortDescription: 'Précommande de sneakers personnalisées',
        fullDescription: "AGEMO est mon projet collectif de Licence Webdesign. Le sujet de ce projet est de créer un site de personalisation de sneakers en précommande. Mon groupe et moi sommes donc partis sur le concept de AGEMO, un site qui permet de créer une paire unique de sneakers suivant 4 modèles différents, en 10 étapes pour une personalisation la plus poussée possible. Nous avons également incorporé les collaborations avec des streamers, mais aussi de grandes entreprises comme la NASA, ou encore des séries, animés etc... De plus, grace a notre page 'engagements', nous nous positionons comme le plus respectueux de l'environnement possible, notamment par le fait que nous sommes au maximum le plus transparent a propos de notre chaine de fabrication. Nous souhaitions partir sur un logo en rapport avec le caméléon, qui est un animal qui peut changer d'apparence a l'infini ( logo a droite ). De plus, notre nom fait référence à une déesse africiaine, AGEMO qui apparait sous la forme d'un camémélon. Pour l'istant, nous avons passé la phase de maquettage ( que vous pouvez retrouver plus bas dans cette page ), et nous commencons à développer le site qui aura un front-end géré par le framework javascript VUEJS, et un back-end géré par le CMS Wordpress.",
        technologies: ['WordPress', 'Figma', 'Illustrator', 'Photoshop', 'REST API', 'Vue.js', 'HTML/CSS/JS'],
        fond: '/img/mockups/agemo.jpg',
        images: [
          '/img/galeriesprojets/agemo1.jpg',
          '/img/galeriesprojets/agemo2.png',
          '/img/galeriesprojets/agemo3.png',
          '/img/galeriesprojets/agemo4.png',
          '/img/galeriesprojets/agemo5.png',
        ],
        demoLink: 'https://agemo.sebastienjourdain.com/',
    },
    {
      id: 'domainedelapierreronde',
      title: '<Domaine de la pierre ronde>',
      date: '2021 / 2022',
      shortDescription: "Refonte du site du domaine",
      fullDescription: "J’ai choisi de réaliser la refonte du site du domaine de la Pierre Ronde en projet individuel de Licence pro Webdesign. J’y étais déjà allé par le passé et j’avais trouvé le parc très intéressant et avec beaucoup de potentiel, là ou leur site n’est pas vraiment à la hauteur de la qualité du domaine. J’ai donc repensé intégralement le site afin qu'il soit visuellement plus attractif et qu’il soit plus fonctionnel. Globalement, je n’ai pas ajouté de nouvelles fonctionnalités, j’ai seulement repensé celles qui étaient déjà présentes. J’ai utilisé Wordpress avec les extensions ACF et CPT UI pour gérer les contenus dynamiques et plus généralement tout le back-end, tandis que j’ai développé le front-end en créant un thème spécifique pour lequel j’ai eu besoin d’utiliser de l’HTML, ainsi que du JavaScript, et GulpJS qui m’a permis d'utiliser des SCSS. Pour finir, j’ai énormément utilisé Illustrator qui m’a permis de designer l’image de fond en flat design sur la page d’accueil, afin de plonger l’utilisateur dans une expérience la plus immersive possible.",
      technologies: ['WordPress', 'Figma', 'Photoshop', 'Illustrator', 'Gulp.js', 'HTML/CSS'],
      fond: '/img/mockups/pierreronde.jpg',
      images: [
        '/img/galeriesprojets/pierre1.png',
        '/img/galeriesprojets/pierre2.png',
        '/img/galeriesprojets/pierre3.png',
        '/img/galeriesprojets/pierre4.png',
        '/img/galeriesprojets/pierre5.png',
      ],
      demoLink: 'https://projetindiv.sebastienjourdain.com/',
    },
    {
      id: 'acadenum',
      title: '<Acadenum>',
      date: '2020 / 2021',
      shortDescription: 'Plateforme de formation en ligne',
      fullDescription: "Acadenum nous a été proposé en tant que projet collectif de troisième semestre dans le cadre du DUT. Pour la première fois, nous avions un commanditaire réel et le site a été notre premier projet en ligne : ce fut donc mon premier projet professionel. De plus, nous avons dû nous attribuer des rôles bien spécifiques au sein de notre groupe. J’ai donc assumé les rôles de développeur et de chef de projet, tandis que Hugo Joubert était communiquant et Paul Sémon designer du projet. Nous devions réaliser une plateforme de formation en ligne 100% gratuite du nom d'Acadenum. Nous avions également comme contraintes de développer le site sous le CMS Wordpress afin que notre commanditaire puisse assurer la maintenance après livraison. Nous nous sommes appuyés d'un thème Astra et du LMS ( Learning Management System ) TutorLMS pour mener à bien le projet et répondre à la volonté de notre commanditaire qui était de mettre ses cours à disposition en ligne pour tous. Le projet s'est achevé le lundi 4 Janvier lors de notre soutenance finale qui s'est bien déroulée et qui a validée 3 mois de travail. À ce jour, ce site reste une grande fierté pour moi, de part le fait que nous avons réussi à développer entièrement le site dans les délais et d'autre part car notre commanditaire en a été très satisfait.",
      technologies: ['WordPress', 'Tutuo LMS', 'Illustrator', 'Photoshop', 'Adobe XD', 'HTML/CSS/JS'],
      fond: '/img/mockups/acadenum.jpg',
      images: [
        '/img/galeriesprojets/acadenum1.png',
        '/img/galeriesprojets/acadenum2.jpg',
        '/img/galeriesprojets/acadenum3.jpg',
        '/img/galeriesprojets/acadenum4.jpg',
        '/img/galeriesprojets/acadenum5.png',
      ],
    },
    
    
  ]
  
  // Helper function to get project by ID
  export function getProjectById(id) {
    return projects.find(project => project.id === id)
  }
  
  // Helper function to get all project IDs
  export function getAllProjectIds() {
    return projects.map(project => project.id)
  }