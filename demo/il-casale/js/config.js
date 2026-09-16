/*
  FC Studio — Il Casale, Pizzoferrato
  -----------------------------------
  File di identità e contatti.
  Modificare QUI testi, orari, link e percorsi delle immagini.
  Non inventare dati: i campi con placeholder:true vanno confermati col titolare.
*/

var SITE = {
  name: "Il Casale",
  nameFull: "Il Casale Pizzoferrato",
  place: "Pizzoferrato",
  region: "Parco Nazionale della Majella",
  positioning: "La tavola con vista sulla Majella",
  tagline: "Cucina abruzzese di montagna, porzioni generose, vallata davanti agli occhi.",
  studio: "FC Studio",
  demo: true,

  /* URL pubblico previsto a pubblicazione.
     Il QR stampato punta a questo indirizzo e NON va ristampato
     se si aggiornano piatti o prezzi in js/menu-data.js. */
  publicUrl: "https://ilcasalepizzoferrato.it",
  menuPath: "/menu.html",

  contact: {
    phoneDisplay: "0872 946242",
    phoneTel: "+390872946242",
    address: "Casale Pollice, 4",
    city: "66040 Pizzoferrato (CH)",
    mapsQuery: "Casale Pollice 4, Pizzoferrato CH",
    mapsUrl: "https://maps.google.com/?q=Casale+Pollice+4+Pizzoferrato",
    mapsEmbed: "https://maps.google.com/maps?q=Casale%20Pollice%204%2C%20Pizzoferrato%20CH&output=embed",
    email: "",          // NON VERIFICATO — non inventato
    whatsapp: ""        // NON VERIFICATO — in produzione: numero cellulare Business
  },

  social: {
    facebook: "https://www.facebook.com/pages/Ristorante-il-casale-Pizzoferrato/133508856734476",
    instagram: "",      // NON VERIFICATO — nessun handle pubblico trovato
    tripadvisor: "https://www.tripadvisor.it/Restaurant_Review-g1897616-d3484464-Reviews-Il_Casale-Pizzoferrato_Province_of_Chieti_Abruzzo.html"
  },

  hours: {
    source: "Google Business Profile, via aggregatori (agg. agosto 2026)",
    note: "Orari pubblicati su Google. Un ospite ha raccontato di aver trovato il locale aperto anche di martedì: da confermare con il titolare, soprattutto in stagione.",
    days: [
      { day: "Lunedì", hours: "Chiuso" },
      { day: "Martedì", hours: "Chiuso" },
      { day: "Mercoledì", hours: "Chiuso" },
      { day: "Giovedì", hours: "Chiuso" },
      { day: "Venerdì", hours: "Chiuso" },
      { day: "Sabato", hours: "12:00 – 23:00" },
      { day: "Domenica", hours: "12:00 – 16:00" }
    ]
  },

  reputation: {
    google: { score: "4,6", count: "661", source: "Google, via aggregatori" },
    tripadvisor: { score: "4,4", count: "239", rank: "1° su 13 a Pizzoferrato" }
  },

  people: {
    owner: "Carmine",
    staffCited: ["Fernanda", "Michele"]
  }
};
