export type Mountain = {
  uid: number;
  title: string;
  description: string;
  location: string;
  image: string;
  height: string;
  firstAscent: string;
  difficulty: string;
  notableRoutes: string[];
  bestClimbingSeason: string[];
  interestingFact: string;
};

export const MountainData: Mountain[] = [
  {
    uid: 1,
    title: "Mount Everest",
    description:
      "Der höchste Berg der Welt, im Himalaya an der Grenze zwischen Nepal und China.",
    location: "Nepal/China",
    image: "Mount_Everest.webp",
    height: "8.848 Meter (29.029 ft)",
    firstAscent: "1953 von Edmund Hillary und Tenzing Norgay",
    difficulty: "Extrem anspruchsvoll, mit großer Höhe und extremem Wetter",
    notableRoutes: ["Südcol-Route (Nepal)", "Nordcol-Route (Tibet)"],
    bestClimbingSeason: ["Mai", "Oktober"],
    interestingFact:
      "Aufgrund der tektonischen Aktivität wächst der Mount Everest jährlich um etwa 4 mm.",
  },
  {
    uid: 2,
    title: "K2",
    description:
      "Bekannt als der Wilde Berg, der zweithöchste Gipfel, berüchtigt für seine Schwierigkeit und hohe Todesrate.",
    location: "Pakistan/China",
    image: "K2.webp",
    height: "8.611 Meter (28.251 ft)",
    firstAscent: "1954 von Achille Compagnoni und Lino Lacedelli",
    difficulty:
      "Einer der schwierigsten Berge, mit technischen Herausforderungen und unberechenbarem Wetter",
    notableRoutes: ["Abruzzi-Sporn", "Cesen-Route", "Nordgrat"],
    bestClimbingSeason: ["Juni", "August"],
    interestingFact:
      "K2 hat eine höhere Sterberate im Vergleich zum Mount Everest.",
  },
  {
    uid: 3,
    title: "Kangchenjunga",
    description:
      "Der dritthöchste Berg an der Grenze zwischen Nepal und Indien, der von Einheimischen als heilig angesehen wird.",
    location: "Nepal/Indien",
    image: "Kangchenjunga.webp",
    height: "8.586 Meter (28.169 ft)",
    firstAscent: "1955 von Joe Brown und George Band",
    difficulty:
      "Anspruchsvoll, mit komplexen Routen und unberechenbarem Wetter",
    notableRoutes: ["Südwestwand (Nepal)", "Nordostsporn (Indien)"],
    bestClimbingSeason: ["April", "Mai"],
    interestingFact:
      "Einheimische betrachten den Gipfel als heilig, daher halten Kletterer traditionell ein paar Meter vor dem Gipfel an.",
  },
  {
    uid: 4,
    title: "Lhotse",
    description:
      "Der vierthöchste Gipfel, neben dem Mount Everest gelegen, teilt einen Großteil seiner Route bis zum Südcol.",
    location: "Nepal/China",
    image: "Lhotse.webp",
    height: "8.516 Meter (27.940 ft)",
    firstAscent: "1956 von Ernst Reiss und Fritz Luchsinger",
    difficulty:
      "Technische Herausforderung mit steilen Abschnitten nahe dem Gipfel",
    notableRoutes: ["Westwand", "Lhotse-Wand"],
    bestClimbingSeason: ["Mai", "Oktober"],
    interestingFact: "Lhotse bedeutet 'Südgipfel' auf Tibetisch.",
  },
  {
    uid: 5,
    title: "Makalu",
    description:
      "Der fünfthöchste Berg, bekannt für seine markante Pyramidenform und technische Schwierigkeit.",
    location: "Nepal/China",
    image: "Makalu.webp",
    height: "8.485 Meter (27.838 ft)",
    firstAscent: "1955 von Lionel Terray und Jean Couzy",
    difficulty:
      "Technisch anspruchsvoll, erfordert Fels- und Eiskletterfähigkeiten",
    notableRoutes: ["Nordostgrat", "Nordwestwand"],
    bestClimbingSeason: ["April", "Mai"],
    interestingFact: "Makalu ist einer der schwierigsten 8.000-Meter-Gipfel.",
  },
  {
    uid: 6,
    title: "Cho Oyu",
    description:
      "Der sechsthöchste Berg, oft als einer der einfacheren 8.000-Meter-Gipfel angesehen.",
    location: "Nepal/China",
    image: "Cho_Oyu.webp",
    height: "8.188 Meter (26.864 ft)",
    firstAscent: "1954 von Herbert Tichy, Joseph Jöchler und Pasang Dawa Lama",
    difficulty:
      "Moderate Schwierigkeit für einen 8.000-Meter-Gipfel, weniger technisches Klettern erforderlich",
    notableRoutes: ["Westwand", "Südwestgrat"],
    bestClimbingSeason: ["April", "Mai"],
    interestingFact:
      "Cho Oyu wird oft als Trainingsgipfel für den Mount Everest verwendet.",
  },
  {
    uid: 7,
    title: "Dhaulagiri",
    description:
      "Der siebthöchste Gipfel in Nepal, bekannt für seine massive Größe und auffällige Pyramidenform.",
    location: "Nepal",
    image: "Dhaulagiri.webp",
    height: "8.167 Meter (26.795 ft)",
    firstAscent: "1960 von einer Schweizerisch-Österreichischen Expedition",
    difficulty: "Technisch schwierig, mit Lawinenrisiko",
    notableRoutes: ["Nordostgrat", "Südwand"],
    bestClimbingSeason: ["April", "Mai"],
    interestingFact:
      "Dhaulagiri galt als der höchste Berg der Welt, bis Kangchenjunga entdeckt wurde.",
  },
  {
    uid: 8,
    title: "Manaslu",
    description:
      "Der achthöchste Berg in Nepal, auch als 'Berg des Geistes' bekannt.",
    location: "Nepal",
    image: "Manaslu.webp",
    height: "8.163 Meter (26.781 ft)",
    firstAscent: "1956 von Toshio Imanishi und Gyalzen Norbu",
    difficulty:
      "Mittlere Schwierigkeit, aber herausforderndes Wetter und Gelände",
    notableRoutes: ["Nordostwand", "Südwand"],
    bestClimbingSeason: ["September", "Oktober"],
    interestingFact:
      "Manaslu ist für seine kulturelle Bedeutung unter den lokalen Gemeinschaften bekannt.",
  },
  {
    uid: 9,
    title: "Nanga Parbat",
    description:
      "Der neuntgrößte Berg, berühmt als 'Killerberg' aufgrund der hohen Todesrate.",
    location: "Pakistan",
    image: "Nanga_Parbat.webp",
    height: "8.126 Meter (26.660 ft)",
    firstAscent: "1953 von Hermann Buhl",
    difficulty: "Sehr schwierig, mit häufigen Lawinen und extremem Wetter",
    notableRoutes: ["Rupal-Wand", "Diamir-Wand"],
    bestClimbingSeason: ["Juni", "August"],
    interestingFact:
      "Nanga Parbat hat eine der höchsten Todesraten unter den 8.000-Meter-Gipfeln.",
  },
  {
    uid: 10,
    title: "Annapurna",
    description:
      "Der zehnthöchste Gipfel und einer der gefährlichsten, gelegen in Nepals Annapurna-Gebirge.",
    location: "Nepal",
    image: "Annapurna.webp",
    height: "8.091 Meter (26.545 ft)",
    firstAscent: "1950 von Maurice Herzog und Louis Lachenal",
    difficulty: "Extrem gefährlich aufgrund häufiger Lawinen",
    notableRoutes: ["Nordwand", "Südwand"],
    bestClimbingSeason: ["April", "Mai"],
    interestingFact:
      "Annapurna hat eine der höchsten Sterberaten unter den Kletterern.",
  },
  {
    uid: 11,
    title: "Gasherbrum I",
    description:
      "Auch bekannt als Hidden Peak, der elfhöchste Berg und Teil des Karakorum-Gebirges.",
    location: "Pakistan/China",
    image: "Gasherbrum_I.webp",
    height: "8.080 Meter (26.509 ft)",
    firstAscent: "1958 von Pete Schoening und Andy Kauffman",
    difficulty: "Sehr anspruchsvoll aufgrund technischer Kletterabschnitte",
    notableRoutes: ["Japanische Couloir", "Nordwestgrat"],
    bestClimbingSeason: ["Juni", "August"],
    interestingFact:
      "Gasherbrum I wurde 'Hidden Peak' genannt, da er von benachbarten Bergen verdeckt ist.",
  },
  {
    uid: 12,
    title: "Broad Peak",
    description:
      "Der zwölfthöchste Berg, gelegen im Karakorum in der Nähe von K2.",
    location: "Pakistan/China",
    image: "Broad_Peak.webp",
    height: "8.051 Meter (26.414 ft)",
    firstAscent:
      "1957 von Fritz Wintersteller, Marcus Schmuck, Kurt Diemberger und Hermann Buhl",
    difficulty:
      "Moderat für einen 8.000-Meter-Gipfel, aber dennoch technisch anspruchsvoll",
    notableRoutes: ["Westgrat", "Südwestwand"],
    bestClimbingSeason: ["Juni", "August"],
    interestingFact:
      "Der Gipfelgrat des Broad Peak ist über 1,5 Kilometer lang.",
  },
  {
    uid: 13,
    title: "Gasherbrum II",
    description:
      "Der dreizehnthöchste Berg, bekannt dafür, etwas zugänglicher als die anderen Karakorum-Gipfel zu sein.",
    location: "Pakistan/China",
    image: "Gasherbrum_II.webp",
    height: "8.035 Meter (26.362 ft)",
    firstAscent: "1956 von einer österreichischen Expedition",
    difficulty:
      "Moderat für einen 8.000-Meter-Gipfel, jedoch mit eisigem Gelände",
    notableRoutes: ["Normalroute (Südwestgrat)", "Westwand"],
    bestClimbingSeason: ["Juni", "August"],
    interestingFact:
      "Gasherbrum II gilt oft als der 'kletterbarste' 8.000-Meter-Gipfel im Karakorum.",
  },
  {
    uid: 14,
    title: "Shishapangma",
    description:
      "Der vierzehnthöchste Berg und der einzige 8.000er, der vollständig in Tibet liegt, oft von Expeditionsteams bestiegen.",
    location: "Tibet (China)",
    image: "Shishapangma.webp",
    height: "8.027 Meter (26.335 ft)",
    firstAscent:
      "1964 von einer chinesischen Expedition unter der Leitung von Xu Jing",
    difficulty:
      "Relativ weniger anspruchsvoll als andere 8.000er, aber oft mit schwierigen Schneebedingungen",
    notableRoutes: ["Nordgrat", "Südwestwand"],
    bestClimbingSeason: ["April", "Oktober"],
    interestingFact:
      "Shishapangma ist der niedrigste der 8.000er-Gipfel, aber wegen politischer und logistischer Herausforderungen selten bestiegen.",
  },
];
