# References

```javascript
var localBiblio = {
  // Paginanummers zijn PDF-paginanummers van de gebruikte exemplaren.
  // [5] t/m [10] zijn projectdocumenten zonder genoemde auteur; volgens APA komt de titel dan eerst.
  // Details per element en register-ID's staan in werknotities-frame 9c-detail.

  // [1] Gebruikt voor: het samenhangende beeld van de leefomgeving (p.6).
  "Geonovum-ZON-Kaders": {
    title: "Handreiking kaders Zicht op Nederland (Versie 1.0)",
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
  "BZK-GENAI": {
    title: "Overheidsbrede visie generatieve AI",
    authors: [
      "Ministerie van Binnenlandse Zaken en Koninkrijksrelaties"
    ],
    publisher: "Rijksoverheid",
    date: "2024-01-18"
  },

  // [12] Gebruikt op frame 9d: "Zo blijft de ambtenaar aan het stuur bij de inzet van
  // generatieve AI." (p.10).
  "BZK-HGENAI": {
    title: "Verantwoorde inzet van generatieve AI: Overheidsbrede handreiking",
    authors: [
      "Ministerie van Binnenlandse Zaken en Koninkrijksrelaties"
    ],
    publisher: "Rijksoverheid",
    date: "2025"
  },

  // [13] Gebruikt op frame 9d voor citaten van p.17 en p.25. Paginanummers zijn die van de
  // samengestelde volledige tekst van release v2.5.2.
  "BZK-AK": {
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
  "LW-GAPA": {
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

  // [20] Mededeling van de Europese Commissie, COM(2020) 66 final.
  "EU-DataStrategy": {
    title: "A European strategy for data (COM(2020) 66 final)",
    href: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52020DC0066",
    authors: [
      "European Commission"
    ],
    publisher: "European Commission",
    date: "2020-02-19"
  },

  // [21] Verordening (EU) 2024/1689 (AI-verordening), vastgesteld op 13 juni 2024 en
  // bekendgemaakt in het Publicatieblad op 12 juli 2024.
  "EU-AIACT": {
    title: "Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act)",
    href: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
    authors: [
      "European Parliament",
      "Council of the European Union"
    ],
    publisher: "Official Journal of the European Union",
    date: "2024-06-13"
  },

  // [22] Mededeling van de Europese Commissie, COM(2018) 237 final: de Europese AI-strategie.
  "EU-AIS": {
    title: "Artificial Intelligence for Europe (COM(2018) 237 final)",
    href: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52018DC0237",
    authors: [
      "European Commission"
    ],
    publisher: "European Commission",
    date: "2018-04-25"
  },

  // [23] Mededeling van de Europese Commissie, COM(2025) 723 final: de Apply AI-strategie.
  "EU-AAIS": {
    title: "Apply AI Strategy (COM(2025) 723 final)",
    href: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52025DC0723",
    authors: [
      "European Commission"
    ],
    publisher: "European Commission",
    date: "2025-10-08"
  }
};
```
