import React, { createContext, useState, useEffect } from "react";
// Créez un contexte
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [lightMode, setLightMode] = useState(false);

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  
    useEffect(() => {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowSize;
  }
  const showroomslist = [
    { id: 1, lieu: 'CCPS VDN', image: '../images/store-1.jpg', plan: <iframe title="CCPS" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d613050.3502656833!2d-17.439802!3d14.672483!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec173db7629dfd7%3A0x85910afdd1bb38aa!2sCOMPTOIR%20COMMERCIAL%20PLOMBERIE%20DU%20SENEGAL%20SARL%20-%20CCPS%20SARL!5e1!3m2!1sfr!2sus!4v1727867360117!5m2!1sfr!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>, movie: <iframe width="764" height="434" src="https://www.youtube.com/embed/iwWTEAzLqOQ" title="Des tous nouveaux modèles d’armoire à lavabo sont disponibles à CCPS. Passer nous visiter nous somme" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>, description: "En cours d'enrichissement", adresse: '10561 Voie de degagement N, Dakar, Sénégal', gerant: 'Ibrahima Kane',tel: '+221 77 517 98 29'},
    { id: 2, lieu: 'CCPS Dakar', image: '../images/store-2.jpg', plan: <iframe title="CCPS" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d613050.3502656833!2d-17.439802!3d14.672483!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec173db7629dfd7%3A0x85910afdd1bb38aa!2sCOMPTOIR%20COMMERCIAL%20PLOMBERIE%20DU%20SENEGAL%20SARL%20-%20CCPS%20SARL!5e1!3m2!1sfr!2sus!4v1727867528949!5m2!1sfr!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>, movie: <iframe width="764" height="434" src="https://www.youtube.com/embed/iwWTEAzLqOQ" title="Des tous nouveaux modèles d’armoire à lavabo sont disponibles à CCPS. Passer nous visiter nous somme" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>, description: "En cours d'enrichissement", adresse: 'Dakar, Sénégal', gerant: 'Ibrahima Kane',tel: '+221 77 517 98 29'},
    { id: 3, lieu: 'CCPS TOUBA', image: '../images/store-3.jpg', plan: <iframe title="CCPS" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d612642.2951568189!2d-15.917874!3d14.817437!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xeea370068b2a355%3A0xf9caa17073863e6f!2sCCPS%20TOUBA!5e1!3m2!1sfr!2sus!4v1727867600148!5m2!1sfr!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>, movie: <iframe width="764" height="434" src="https://www.youtube.com/embed/iwWTEAzLqOQ" title="Des tous nouveaux modèles d’armoire à lavabo sont disponibles à CCPS. Passer nous visiter nous somme" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>, description: "En cours d'enrichissement", adresse: 'R38J+XR, Mbacké, Sénégal', gerant: 'Ibrahima Kane', tel: '+221 77 082 31 18'},
  ],
  members = [
    { id: 1, name: "Ibrahima Kane", profession: "PDG", image: "../images/team/1.jpg"},
    { id: 2, name: "Mouhamed Kane", profession: "Commercial", image: "../images/team/1.jpg"},
    { id: 3, name: "Rokhaya Diouf", profession: "Sécrétaire", image: "../images/team/1.jpg"},
    { id: 4, name: "Astou Fall", profession: "Comptable", image: "../images/team/1.jpg"},
  ],
  
  partenaires = [
    {id: 1, name:'', link: '',image: '../images/partenaires/client-1.png'},
    {id: 2, name:'', link: '',image: '../images/partenaires/client-2.webp'},
    {id: 3, name:'', link: '',image: '../images/partenaires/client-3.webp'},
    {id: 4, name:'', link: '',image: '../images/partenaires/client-4.webp'},
    {id: 5, name:'', link: '',image: '../images/partenaires/client-5.webp'},
    {id: 6, name:'', link: '',image: '../images/partenaires/client-6.webp'},
    {id: 7, name:'', link: '',image: '../images/partenaires/client-7.webp'},
    {id: 8, name:'', link: '',image: '../images/partenaires/client-8.webp'},
  ]
  const newsData = [
    { 
      id: 1, title: "L'évolution du marché immobilier au Sénégal en 2024", 
      content: "Depuis quelques années, le marché immobilier au Sénégal connaît une croissance soutenue, portée par l'urbanisation rapide et l'augmentation de la population. En 2024, cette tendance se confirme avec une forte demande dans les grandes villes comme Dakar, Thiès et Saint-Louis. Les prix de l'immobilier ont augmenté, en particulier dans les quartiers résidentiels prisés de la capitale. Cependant, des initiatives gouvernementales visant à faciliter l'accès au logement, notamment pour les classes moyennes, contribuent à dynamiser le secteur. L'essor du secteur immobilier au Sénégal est également alimenté par des investissements étrangers. De nombreux promoteurs, séduits par la stabilité politique et les perspectives de croissance économique, investissent massivement dans des projets résidentiels et commerciaux. Cela inclut la construction d'immeubles de grande hauteur, de centres commerciaux et de résidences de luxe. Par ailleurs, le développement de nouvelles zones urbaines comme Diamniadio constitue une opportunité majeure pour les investisseurs. Cependant, le marché immobilier au Sénégal n'est pas exempt de défis. Le coût des matériaux de construction, l'accès au financement et la saturation des zones urbaines comme Dakar sont des obstacles auxquels font face les promoteurs et acheteurs. De plus, les infrastructures doivent suivre cette croissance rapide pour éviter la congestion urbaine. L'avenir du secteur réside dans une expansion contrôlée et dans le développement de logements plus accessibles, en particulier pour les jeunes familles sénégalaises.",
      image: '../images/house-1.jpg', 
      pub : '14/09/20024', 
      rate: 'top', 
      category: 'location' 
    },
    { 
      id: 2, title: "Investir dans l'immobilier à Dakar : Opportunités et défis", 
      content: "<p>Dakar, capitale dynamique du Sénégal, offre d'importantes opportunités d'investissement immobilier. Les quartiers prisés tels qu'Almadies, Mermoz, et Sacré-Cœur attirent les investisseurs locaux et étrangers pour des projets résidentiels et commerciaux. Le développement des infrastructures urbaines, la proximité avec les plages et la croissance de la classe moyenne ont rendu ces zones particulièrement attractives. Les rendements locatifs y sont élevés, en particulier pour les immeubles résidentiels destinés aux expatriés ou aux cadres sénégalais. Cependant, investir dans l'immobilier à Dakar présente également des défis majeurs. Le prix du mètre carré dans les quartiers centraux a considérablement augmenté, ce qui peut limiter l'accès pour les petits investisseurs. De plus, la réglementation foncière et les procédures d'acquisition peuvent être complexes, nécessitant l'assistance d'experts juridiques. La saturation de certaines zones et la gestion des titres fonciers restent également des problématiques à résoudre pour les investisseurs. Malgré ces obstacles, Dakar demeure une ville prometteuse pour les investisseurs immobiliers, notamment grâce aux projets d'expansion vers des zones comme Diamniadio. Les perspectives d'avenir incluent le développement de nouveaux pôles économiques et résidentiels, ainsi que l'amélioration des infrastructures de transport. Pour maximiser les opportunités, il est recommandé de diversifier les investissements entre l'immobilier résidentiel, commercial et touristique, en fonction des tendances du marché local.", 
      image: '../images/house-2.jpg', 
      pub : '14/09/20024', 
      rate: '', 
      category: 'vente' 
    },
    { 
      id: 3, 
      title: 'Les meilleurs quartiers pour acheter une maison à Dakar', 
      content: "Dakar est une ville où le marché immobilier est en constante évolution, et certains quartiers se distinguent particulièrement pour l’achat d’une maison. Almadies, par exemple, est l’un des secteurs les plus prisés, avec ses villas de luxe, ses résidences sécurisées et sa proximité avec la mer. Ce quartier est souvent privilégié par les expatriés et les Sénégalais aisés à la recherche d’un cadre de vie prestigieux. Mermoz et Fann-Point E sont également des zones résidentielles attractives, offrant un bon équilibre entre tranquillité, commodités et proximité avec le centre-ville. Outre ces quartiers haut de gamme, d’autres zones émergent comme de bons investissements pour les acheteurs à la recherche de prix plus abordables. Des quartiers comme Parcelles Assainies et Yoff, bien que moins luxueux, proposent des logements à des prix plus accessibles et bénéficient d’infrastructures en développement. Ces zones, souvent choisies par les jeunes familles et la classe moyenne, sont bien desservies par les transports publics et offrent une bonne qualité de vie. Enfin, pour ceux qui recherchent une option plus éloignée de la frénésie urbaine, les quartiers de la banlieue de Dakar, comme Keur Massar et Rufisque, sont en plein essor. Avec des prix encore abordables, ces secteurs offrent des opportunités d’achat intéressantes, notamment pour les investisseurs cherchant à anticiper la croissance de ces zones. Cependant, il est important de prendre en compte l’évolution des infrastructures et des services avant de s'engager dans un achat dans ces zones périphériques.", 
      image: '../images/house-3.jpg', 
      pub : '14/09/20024', 
      rate: '', 
      category: 'vente' 
    },
    { 
      id: 4, 
      title: "L'immobilier vert au Sénégal : Quand l'écologie s'invite dans les constructions", 
      content: "L'immobilier vert est en plein essor au Sénégal, avec de plus en plus de promoteurs qui adoptent des pratiques de construction respectueuses de l'environnement. Les matériaux écologiques, tels que le bois, les briques en terre cuite et les systèmes de recyclage de l'eau, deviennent des éléments essentiels dans les projets de nouvelles constructions. Les promoteurs mettent aussi l’accent sur la réduction de l'empreinte carbone des bâtiments en optant pour des panneaux solaires, des toits végétalisés et des systèmes d'isolation innovants. Les avantages de l'immobilier vert ne sont pas seulement écologiques, ils sont également économiques. Les maisons écologiques consomment moins d'énergie et permettent aux propriétaires de réaliser des économies à long terme. De plus, le Sénégal, avec son climat ensoleillé, est idéal pour l'adoption de technologies vertes comme l'énergie solaire. Cela attire les investisseurs, tant locaux qu'internationaux, qui souhaitent non seulement participer à la préservation de l'environnement, mais aussi profiter des avantages financiers que ces projets apportent. Cependant, l'adoption massive de l'immobilier vert au Sénégal fait face à des défis. Le coût initial des matériaux écologiques et des technologies vertes peut être un obstacle pour les promoteurs et les acheteurs. De plus, bien que le gouvernement encourage ce type de développement à travers des incitations fiscales, il reste encore beaucoup à faire en termes de sensibilisation et de réglementation. Pourtant, avec la demande croissante des consommateurs pour des logements durables, le marché de l'immobilier vert est promis à un bel avenir au Sénégal.", 
      image: '../images/house-4.jpg', 
      pub : '14/09/20024', 
      rate: '', 
      category: 'location' },
    { 
      id: 5, title: "Le boom de l’immobilier de luxe au Sénégal : une nouvelle ère", 
      content: "Le secteur de l’immobilier de luxe au Sénégal connaît une expansion sans précédent, notamment à Dakar et dans ses environs. Des quartiers comme Almadies, Ngor et la Corniche sont devenus des pôles d’attraction pour des projets immobiliers prestigieux, tels que des villas avec vue sur l’océan, des appartements de standing et des résidences privées avec des services haut de gamme. Ces propriétés sont prisées non seulement par les Sénégalais aisés, mais aussi par des expatriés et des investisseurs étrangers à la recherche de biens de prestige dans une ville en plein essor. Cette montée en puissance de l’immobilier de luxe s'explique par plusieurs facteurs. D’une part, la stabilité politique du Sénégal et sa croissance économique ont renforcé la confiance des investisseurs. D’autre part, la demande croissante de biens immobiliers de prestige, que ce soit pour la résidence principale ou pour la location à des cadres internationaux, alimente le marché. En outre, des promoteurs immobiliers internationaux ont contribué à transformer l’horizon immobilier de Dakar avec des projets ambitieux qui répondent aux normes internationales. Cependant, ce marché reste très exclusif et nécessite un capital important. Le coût des biens immobiliers de luxe au Sénégal, en particulier à Dakar, peut être un obstacle pour de nombreux acheteurs locaux. Néanmoins, les perspectives restent positives pour ce segment, avec de nouveaux projets en cours dans des zones comme Diamniadio, qui visent à élargir l'offre de biens immobiliers haut de gamme tout en diversifiant les options pour les investisseurs de prestige.", 
      image: '../images/house-5.jpg', 
      pub : '14/09/20024', 
      rate: '', 
      category: 'vente' 
    },
    { 
      id: 6, 
      title: "Comment acheter un terrain au Sénégal : guide pour les investisseurs", 
      content: "Acheter un terrain au Sénégal peut s'avérer une opération rentable, mais elle nécessite une compréhension approfondie du cadre juridique et administratif. Le premier pas pour les investisseurs est de choisir la bonne localisation. Des zones comme Dakar, Thiès, et la région de Saint-Louis sont très demandées, mais les prix peuvent être élevés. D'autres régions en périphérie, comme Diamniadio ou Rufisque, offrent des terrains à des prix plus abordables, avec un fort potentiel de développement. Une fois la localisation choisie, les investisseurs doivent naviguer à travers les procédures administratives pour l'acquisition. L'enregistrement foncier est une étape cruciale qui permet de sécuriser le titre de propriété. Il est essentiel de s'assurer que le terrain est libre de tout litige et qu'il est légalement disponible à la vente. Pour cela, l'assistance d'un notaire ou d'un avocat est souvent recommandée afin de vérifier les documents et de s'assurer que la transaction est conforme à la loi sénégalaise. Le financement de l'achat d'un terrain peut également poser un défi. Les banques sénégalaises proposent des solutions de prêt pour les acquisitions foncières, mais les conditions peuvent être strictes, notamment pour les acheteurs étrangers. Il est donc essentiel de bien se renseigner sur les options de financement disponibles. Une fois le terrain acquis, les investisseurs peuvent commencer à planifier la construction, en tenant compte des réglementations locales en matière d'urbanisme et de construction.", 
      image: '../images/house-6.jpg', 
      pub : '14/09/20024', 
      rate: '', 
      category: 'maison' 
    },
    { 
      id: 7, title: "L'immobilier vert au Sénégal : Quand l'écologie s'invite dans les constructions", 
      content: "L'augmentation du nombre d'expatriés au Sénégal, notamment à Dakar, a créé une forte demande pour des résidences adaptées à leurs besoins. Les complexes résidentiels haut de gamme, souvent situés dans des quartiers comme les Almadies, Mermoz ou Point E, offrent des logements de luxe avec des services exclusifs, tels que la sécurité 24h/24, des piscines, et des espaces verts privés. Ces résidences répondent parfaitement aux exigences d'une clientèle internationale à la recherche de confort et de commodités modernes. Les écoles internationales, les centres de santé et les entreprises multinationales situées à Dakar renforcent l'attractivité de ces quartiers pour les expatriés. De nombreux investisseurs immobiliers, conscients de cette demande croissante, ont lancé des projets spécialement dédiés à ce segment de marché. Les appartements meublés, avec des contrats de location flexibles, sont particulièrement prisés par les expatriés travaillant à court ou moyen terme dans le pays. Malgré les avantages de ce marché en expansion, certains défis subsistent. Le coût des logements dans ces résidences pour expatriés est souvent prohibitif pour les Sénégalais de la classe moyenne, ce qui contribue à une certaine ségrégation résidentielle. De plus, la demande accrue pour ces biens entraîne une augmentation des prix de l'immobilier dans certains quartiers, rendant l'accès au logement plus difficile pour les habitants locaux. Néanmoins, avec l'essor des entreprises internationales au Sénégal, ce marché devrait continuer à se développer.", 
      image: '../images/house-7.jpg', 
      pub : '14/09/20024', 
      rate: '', 
      category: 'studio' 
    },
    { 
      id: 8, title: "Comment financer un achat immobilier au Sénégal : solutions et conseils", 
      content: "L'acquisition d'une propriété au Sénégal peut être facilitée par diverses options de financement. Les banques locales proposent des prêts hypothécaires aux citoyens sénégalais, ainsi qu'aux membres de la diaspora, pour leur permettre de financer l'achat d'un terrain ou d'une maison. Ces prêts sont généralement accordés pour des durées de 10 à 25 ans, avec des taux d’intérêt compétitifs en fonction du profil de l'emprunteur et du projet immobilier. Pour les Sénégalais de la diaspora, des dispositifs spécifiques sont mis en place pour faciliter l'investissement immobilier dans leur pays d'origine. Ces solutions incluent des partenariats entre des banques sénégalaises et des institutions financières étrangères, offrant des prêts aux résidents à l’étranger pour l’achat de biens immobiliers au Sénégal. De plus, des promoteurs immobiliers locaux proposent des programmes de pré-vente qui permettent d’échelonner les paiements sur plusieurs années, facilitant ainsi l’accès à la propriété. Néanmoins, le financement immobilier au Sénégal présente également des défis. Pour les investisseurs étrangers ou ceux qui ne peuvent pas accéder aux prêts bancaires, il est souvent nécessaire de payer comptant, ce qui peut être un frein pour certains. Il est donc crucial de bien préparer son projet immobilier en consultant les institutions financières pour connaître les meilleures options de financement, en fonction de son statut, de ses revenus et de la nature de l’investissement. L’assistance d’un conseiller immobilier ou financier est fortement recommandée pour optimiser l’achat.", 
      image: '../images/house-8.jpg', 
      pub : '14/09/20024', 
      rate: '', 
      category: 'appartement' 
    },
    { 
      id: 9, title: "Projets immobiliers d'envergure au Sénégal : Focus sur Diamniadio et la ville nouvelle", 
      content: "Le projet de la ville nouvelle de Diamniadio, à environ 30 kilomètres de Dakar, est l'une des initiatives immobilières les plus ambitieuses au Sénégal et en Afrique de l'Ouest. Conçue pour désengorger la capitale et répondre à la demande croissante de logements et d'espaces commerciaux, Diamniadio se veut un centre urbain moderne avec des infrastructures de pointe. Les plans incluent des complexes résidentiels, des centres d'affaires, des écoles, des universités, ainsi que des installations sportives et culturelles. Le développement de Diamniadio est un projet stratégique qui attire de nombreux investisseurs nationaux et internationaux. En plus des logements, plusieurs grands projets y sont en cours, tels que le Centre international de conférences Abdou Diouf (CICAD) et des zones industrielles. Ces projets visent à créer un pôle économique attractif, capable de rivaliser avec d'autres grandes villes africaines en termes de compétitivité et de qualité de vie. Le gouvernement sénégalais a également mis en place des mesures fiscales avantageuses pour encourager les investissements dans cette région. Cependant, malgré l'engouement pour la ville nouvelle, des défis persistent. Le financement à long terme de ces projets, la gestion des infrastructures publiques, ainsi que l'intégration des habitants dans ce nouvel environnement urbain sont autant de questions à résoudre. Néanmoins, Diamniadio représente une formidable opportunité pour les investisseurs immobiliers qui souhaitent participer à la transformation urbaine du Sénégal. Avec la construction du Train Express Régional (TER), qui relie Dakar à Diamniadio, la ville nouvelle est sur la voie d'une expansion rapide.",
      image: '../images/house-9.jpg', 
      pub : '14/09/20024', rate: 'top', category: 'location' },
    { 
      id: 10, 
      title: "La location meublée à Dakar : un marché en pleine croissance", 
      content: "Le marché de la location meublée à Dakar connaît une croissance rapide, en grande partie due à l'augmentation du tourisme et des déplacements professionnels. Les voyageurs d'affaires, les expatriés et les touristes à court terme préfèrent souvent les appartements meublés pour leur flexibilité, leur confort et leur accessibilité. Des quartiers comme les Almadies, Ngor et la Corniche proposent de nombreuses options de location meublée, allant des studios modernes aux appartements de luxe avec vue sur l'océan. Cette forme de location est particulièrement populaire auprès des investisseurs immobiliers qui cherchent à maximiser leur retour sur investissement. Contrairement à la location à long terme, les locations meublées offrent des rendements plus élevés, notamment grâce à la forte demande saisonnière. De plus, les plateformes de réservation en ligne, telles que Airbnb, facilitent la mise en relation entre les propriétaires et les locataires, rendant ce marché encore plus attractif. Dakar, avec son statut de hub économique et touristique, est devenue un terrain fertile pour ces types d'investissements. Cependant, le marché de la location meublée n’est pas sans défis. Les propriétaires doivent assurer un entretien régulier des appartements, ainsi que la gestion des réservations et des services associés (ménage, sécurité). De plus, la concurrence est de plus en plus forte, avec de nombreux nouveaux acteurs qui entrent sur ce marché en pleine expansion. Malgré cela, les perspectives de croissance restent très favorables, tant pour les propriétaires que pour les locataires, en raison de la demande croissante de logements flexibles et bien équipés à Dakar.", 
      image: '../images/house-10.jpg', 
      pub : '14/09/20024', 
      rate: 'top', 
      category: 'location' 
    },
  ];
    // Détermine la propriété qui a le prix minimal

    let topNews = [];
    const tab = [...newsData];
    topNews = (tab.filter(news=>news.rate === 'top'))
    function formatNumber(number){return number.toLocaleString('fr-FR')}
    return(
    <GlobalContext.Provider value={{showroomslist, members, partenaires, formatNumber, newsData, topNews, setLightMode, lightMode, useWindowSize}}>
      {children}
    </GlobalContext.Provider>
  );
};
