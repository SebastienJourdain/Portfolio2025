export default function About() {
  const skills = [
    { name: "CSS", icon: "img/icones/css.svg" },
    { name: "Figma", icon: "img/icones/figma.svg" },
    { name: "Suite Adobe", icon: "img/icones/adobe.svg" },
    { name: "HTML", icon: "img/icones/html.svg" },
    { name: "Joomla", icon: "img/icones/joomla.svg" },
    { name: "JavaScript", icon: "img/icones/js.svg" },
    { name: "PHP", icon: "img/icones/php.svg" },
    { name: "Vue.js", icon: "img/icones/vuejs.svg" },
    { name: "Wordpress", icon: "img/icones/wordpress.svg" },
    { name: "React", icon: "img/icones/react.svg" },
    { name: "Next.js", icon: "img/icones/next.svg" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen px-6 py-20 bg-secondaire text-dominante"
    >
      <h2 className="text-4xl md:text-5xl mb-12 text-center">
        A propos de moi
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
        <div className="flex">
          <img
            src="img/photoprofil.png"
            alt="Sébastien Jourdain"
            className="rounded-2xl object-cover w-full max-w-sm shadow-lg"
          />
        </div>

        <div className="bg-cards rounded-2xl p-5 border border-cards leading-normal flex flex-col col-span-2 pt-13 justify-between">
          <p className="mb-6 text-dominante">
            Je m'appelle Sébastien Jourdain, j'ai 24 ans et je suis originaire
            de la ville de Thann en Alsace. J'ai réalisé mes études dans le web 
            en commençant par un DUT MMI (Métiers du multimédia et
            de l’internet), puis une licence professionelle Webdesign tous deux
            au département MMI de Montbéliard. J'ai par la suite souhaité 
            entrer dans le monde du travail en intégrant la hotline de Euro Protection
            Surveillance (homiris, télésurveillance pour particuliers) au sein de laquelle
            j'ai réalisé mes objectifs durant 2 ans et demi. J'ai maintenant décidé de reprendre
            mes études, et je suis depuis septembre en année préparatoire au Master en cybersécurité
            de Epitech Strasbourg. Dans le cadre de ce cursus je recherche une alternance en cybersécurité
            à partir de janvier 2026 et jusqu'à septembre 2028. N'hésitez pas a me contacter si mon profil vous intéresse !
          </p>

          <a
            href=""
            download
            className="inline-flex text-lg text-bold text-secondaire items-center gap-2 w-fit"
          >
            TÉLÉCHARGER MON CV
            <img
              src="img/icones/cvdownload.svg"
              alt="download icon"
              className="w-5 h-5"
            />
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-cards rounded-2xl md:p-6 border border-cards">
          <h3 className="text-3xl text-center text-secondaire mb-6">
            Formation
          </h3>
          <li className="font-bold ml-3.5 text-secondaire">2025 / 2028</li>
          <p className="border-l-2 pl-3 border-secondaire">
            Master en cybersécurité à EPITECH Strasbourg
          </p>
          <li className="font-bold ml-3.5 text-secondaire">2021 / 2022</li>
          <p className="border-l-2 pl-3 border-secondaire">
            Licence professionelle Webdesign à l’IUT de Belfort Montbéliard
          </p>
          <li className="font-bold ml-3 text-secondaire">2019 / 2021</li>
          <p className="border-l-2 pl-3 border-secondaire">
            DUT métiers du multimédia et de l’internet (MMI) à l’IUT de Belfort
            Montbéliard
          </p>
          <li className="font-bold ml-3.5 text-secondaire">2021</li>
          <p className="border-l-2 pl-3 border-secondaire">
            Baccalauréat section scientifique
          </p>
        </div>

        <div className="bg-cards rounded-2xl p-6 md:p-6 border border-cards">
          <h3 className="text-3xl text-secondaire text-center mb-6">
            Softwares
          </h3>
          <div className="grid grid-cols-4 sm:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="text-center"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-15 h-15 mx-auto mb-2"
                />
                <span className="text-sm text-dominante">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
