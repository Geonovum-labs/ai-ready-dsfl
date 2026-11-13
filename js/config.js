let respecConfig = {
  useLogo: true,
  useLabel: true,

  // TODO: title is verplicht! Neem hieronder de titel van het document op
  title: "AI Ready DSFL",
  //-- specStatus is verplicht! (activeer 1 van de volgende)
   specStatus: "wv",                 // Werkversie
  //specStatus: "cv",               // Consultatieversie
  //specStatus: "vv",               // Versie ter vaststelling
  //specStatus: "def",              // Vastgestelde versie
  //specStatus: "basis",            // Basis Document

  //-- specType is verplicht!
  //specType: "NO",                 // Norm
  //specType: "ST",                 // Standaard
  //specType: "IM",                 // Informatie Model
  //specType: "PR",                 // Praktijkrichtlijn
  //specType: "HR",                   // HandReiking
  //specType: "WA",                 // Werkafspraak
  //specType: "BD",                 // Beheer Documentatie
  //specType: "AL",                 // Algemeen document
  specType: "BP",                 // Best Practice

  //-- pubDomain is verplicht! (komt in de URL)
  //-- zie: https://geonovum.github.io/handleiding-tooling/ReSpec/#pubdomain
  //-- TODO: vul pubDomain in
  pubDomain: "ngii",

  //-- license: voor de geldende gebruiksvoorwaarden. Default is cc-by.
  //license: "cc-by-nd",            // bronvermelding, geen afgeleide werken (default)
  //license: "cc0",                 // Public Domain Dedication
  license: "cc-by",                 // Attribution, met bronvermelding

  //-- TODO shortName is verplicht! (komt in de URL: kies logische afkorting)
  //-- Regel: shortName mag geen hoofdletters bevatten.
  shortName: "aireadydsfl",
  
  //edDraftURI = De URI van de draft version. Deze wordt automatisch afgeleid van de github URI; maar kan hier overschreven worden. 
	//edDraftURI: ["https://geonovum.github.io", "/", "shortName"],

  //-- publishDate is verplicht. Als je werkversie gekozen hebt  dan pakt Respec
  //-- de pushdate maar de publishDate is nog steeds verplicht.
  publishDate: "2026-02-09",
  
  //-- publishVersion is verplicht. Hij mag wel leeg zijn [], maar niet de lege string zijn "".
  publishVersion: [],
 
  //-- Voor dit blok geldt: alleen als er eerdere versies zijn en altijd beide aan/uit! 
  //previousPublishDate: "2014-05-01",
  //previousMaturity: "CV",

  //-- Deze gebruiken we niet binnen Geonovum
  //prevVersion: "0.0.1",

  //-- TODO: de namen van de Editor(s) / Redacteur(en)
  //-- vul in: per Editor: name:, company:, companyURL:
  editors:  [
      {
        name: "Michel Grothe",
        company: "Geonovum",
        companyURL: "https://www.geonovum.nl",
      },
      {
        name: "Marcel Reuvers",
        company: "Kadaster",
        companyURL: "https://www.kadaster.nl",
      }
    ],

  //-- de namen van de auteur(s) 
  //-- vul in: per auteur: name:, company:, companyURL: 
  authors:  [
      {
        name: "Jesse Bakker",
        company: "Kadaster",
        companyURL: "https://www.kadaster.nl",
      },
      {
        name: "Geert-Jan van den Bogaerde",
        company: "...",
        companyURL: "...",
      },
      {
        name: "Linda van den Brink",
        company: "Geonovum",
        companyURL: "https://www.geonovum.nl",
      },
      {
        name: "Sjaak Derksen",
        company: "Rijksgeologsche Dienst Nederland",
        companyURL: "https://www.geologischedienst.nl/",
      },
      {
        name: "Joost Farla",
        company: "Modeldesk",
        companyURL: "https://modeldesk.io",
      },
      {
        name: "Michel Grothe",
        company: "Geonovum",
        companyURL: "https://www.geonovum.nl",
      },
      {
        name: "Anjo Kolk",
        company: "Kadaster",
        companyURL: "https://www.kadaster.nl",
      },
      {
        name: "Pano Maria",
        company: "Modeldesk",
        companyURL: "https://modeldesk.io",
      },
      {
        name: "Clemens Portele",
        company: "interactive instruments GMBH",
        companyURL: "https://www.interactive-instruments.de",
      },
      {
        name: "Marcel Reuvers",
        company: "Kadaster",
        companyURL: "https://www.kadaster.nl",
      },
      {
        name: "Lexi Rowland",
        company: "Kadaster",
        companyURL: "https://www.kadaster.nl",
      },
      {
        name: "Johan Vandewalle",
        company: "Enact",
        companyURL: "...",
      }
    ],

  // TODO: Vul de github URL in.
  // neem hier de URL van de github repository op waar het respec document in staat
  // dit zorgt voor het 'Doe mee:' onderdeel in het voorblad van de publicatie.
  github: "https://github.com/Geonovum-labs/ai-ready-dsfl",

  // Create PDF and link to file in header (optional):
  // TODO: Change the filename as preferred.
  //alternateFormats: [
  //    {
  //        label: "pdf",
  //        uri: "static/template.pdf",
  //    },
  //],

  //
  // Lokale lijst voor bibliografie
  // - Kijk eerst naar de beschikbare www.specref.org .
  // - Kijk daarna in de organisatieconfig op: https://tools.geostandaarden.nl/specref/
  // - Voeg dan pas hieronder toe.
  // - Zie handleiding: https://geonovum.github.io/handleiding-tooling/ReSpec/ReSpec-onderdelen/#bibliografie
  //
  localBiblio: 
  {
  // Paginanummers zijn PDF-paginanummers van de gebruikte exemplaren.
  // [5] t/m [10] zijn projectdocumenten zonder genoemde auteur; volgens APA komt de titel dan eerst.
  // Details per element en register-ID's staan in werknotities-frame 9c-detail.

  // [1] Gebruikt voor: het samenhangende beeld van de leefomgeving (p.6).
  "GNVM-ZoN-Kaders": {
    title: "Handreiking kaders Zicht op Nederland (Versie 1.0)",
    href: "https://github.com/Geonovum/zon-kaderstelling/raw/main/HandreikingZoNEcosysteem-2026.pdf",
    authors: [
      "Geonovum"
    ],
    publisher: "Geonovum",
    date: "2026"
  },

  // [2] Gebruikt voor: het overkoepelende doel en vijf van de Zicht op Nederland-doelen.
  "BZK-ZON-DA": {
    title: "Zicht op Nederland doelarchitectuur (Werkversie, 26 oktober 2026)",
    href: "https://geonovum.github.io/ZON-DA/",
    authors: [
      "Ministerie van Binnenlandse Zaken en Koninkrijksrelaties"
    ],
    publisher: "Ministerie van Binnenlandse Zaken en Koninkrijksrelaties",
    date: "2026-10-26"
  },

  // [3] Ongepubliceerd concept. Gebruikt voor: gebiedsinformatie voor elke taak of
  // beleidscyclus (§1.9); gebruikers zonder geokennis.
  "DSFL-PSA": {
    title: "Projectstartarchitectuur – Datastelsel Fysieke Leefomgeving (DSFL-PSA) (Versie 0.06)",
    authors: [
      "Kint R."
    ],
    date: "2026"
  },

  // [11] Bijlage bij Kamerstuk 26 643, nr. 1125; op 18 januari 2024 naar de Tweede Kamer
  // gestuurd. Gebruikt op frame 9d voor citaten van p.4, p.26, p.38 en p.43, en voor de
  // vier uitgangspunten (p.24 t/m 27).
  "BZK-VisieGenAI": {
    title: "Overheidsbrede visie generatieve AI",
    authors: [
      "Ministerie van Binnenlandse Zaken en Koninkrijksrelaties"
    ],
    publisher: "Rijksoverheid",
    date: "2024-01-18"
  },

  // [12] Gebruikt op frame 9d: "Zo blijft de ambtenaar aan het stuur bij de inzet van
  // generatieve AI." (p.10).
  "BZK-HandreikingGenAI": {
    title: "Verantwoorde inzet van generatieve AI: Overheidsbrede handreiking",
    authors: [
      "Ministerie van Binnenlandse Zaken en Koninkrijksrelaties"
    ],
    publisher: "Rijksoverheid",
    date: "2025"
  },

  // [13] Gebruikt op frame 9d voor citaten van p.17 en p.25. Paginanummers zijn die van de
  // samengestelde volledige tekst van release v2.5.2.
  "BZK-Algoritmekader": {
    title: "Algoritmekader (Versie 2.5.2)",
    href: "https://github.com/MinBZK/Algoritmekader",
    authors: [
      "Ministerie van Binnenlandse Zaken en Koninkrijksrelaties"
    ],
    publisher: "Ministerie van Binnenlandse Zaken en Koninkrijksrelaties",
    date: "2026"
  },

  // [14] Conceptrapport. Op frame 10 genoemd als mogelijke bron voor de IST-kant;
  // nog niet gebruikt voor een element.
  "LatentWorlds-GapAssessment": {
    title: "Kadaster / PDOK AI readiness: Gap assessment for LLMs, geospatial AI, world models, and digital twins",
    authors: [
      "LatentWorlds AI"
    ],
    publisher: "LatentWorlds AI",
    date: "2026-06-26"
  },

  // [15] Gebruikt op frame 9d voor citaten uit Data (p.6) en AI (p.7). Citaten en
  // paginanummers komen uit een tekstextractie en moeten nog tegen de PDF worden gecontroleerd.
  "NDS-2025": {
    title: "De Nederlandse Digitaliseringsstrategie: Samen versnellen",
    href: "https://zoek.officielebekendmakingen.nl/blg-1209584.pdf",
    authors: [
      "Rijksoverheid"
    ],
    publisher: "Rijksoverheid",
    date: "2025-06"
  },

  // [17] Gebruikt voor: de acht readiness-aspecten en drie niveaus (Foundational,
  // Intermediate, Advanced) van Tabel 3 (p.59), als tags op frame 10 en als sjabloon voor
  // Blok 1 deliverable 2. Tabelinhoud moet nog tegen de PDF worden gecontroleerd.
  "BDVA-AIReady": {
    title: "AI-ready data products (Version 1.0)",
    href: "https://bdva.eu/news/ai-ready-data-products-publication/",
    authors: [
      "Pezuela Robles C. M.",
      "De Majo C.",
      "Alonso D.",
      "Curry E.",
      "Simperl E.",
      "Laatikainen G.",
      "Fidan G.",
      "Chrysakis I.",
      "Giner Miguelez J.",
      "Aas K.",
      "Majithia N.",
      "Plebani P.",
      "Carey-Wilson T.",
      "Hütter T.",
      "Tuikka T."
    ],
    publisher: "Big Data Value Association",
    date: "2025"
  },

  // [18] Britse richtlijn; een referentie, geen Nederlands beleid. Gebruikt op frame 10:
  // onderbouwing voor C1, C7, C8, C9, C10 en C11; kandidaat-capabilities C12 en C13
  // (pijler "Data and metadata quality").
  "GDS-AIReady": {
    title: "Guidelines and best practices for making government datasets ready for AI",
    href: "https://www.gov.uk/government/publications/making-government-datasets-ready-for-ai",
    authors: [
      "Government Digital Service"
    ],
    publisher: "GOV.UK",
    date: "2026-01-19"
  },
    MIM12: {
      id: "MIM12",
      title: "MIM - Metamodel Informatie Modellering (Versie 1.2)",
      href: "https://docs.geostandaarden.nl/mim/def-st-mim-20240613/",
      status: "Definitief",
      publisher: "Geonovum",
      date: "2024-06-13"
    }
  }
};
