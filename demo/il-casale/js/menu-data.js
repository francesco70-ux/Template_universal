/*
  FC STUDIO — Menu digitale de Il Casale
  --------------------------------------
  UNICO file da modificare per piatti, descrizioni, foto, prezzi.

  Come funziona a pubblicazione:
  QR stampato  →  https://ilcasalepizzoferrato.it/menu.html  →  questo file
  Cambiare i piatti qui NON richiede di ristampare il QR.

  REGOLE DI QUESTA DEMO
  - Solo piatti emersi da recensioni e aggregatori.
  - Nessun prezzo ufficiale era disponibile: price: null.
  - priceNote spiega come viene comunicato (incluso nel percorso / da confermare).
  - Niente pizza come categoria (compariva solo in directory errate).
  - Niente lista vini inventata: solo vino della casa e liquori citati.
  - allergens: null = da compilare col titolare (obbligo di legge in sala).
  - frozen: false se non dichiarato; non inventiamo prodotti congelati.
  - image: foto degli ospiti del locale (non AI). image: null se non c’è uno scatto corrispondente.
  - imagePlaceholder non si usa più: niente foto generate.
*/

var MENU = {
  intro: "Pasta fatta in casa, antipasti di terra, brace e liquori della casa. Il percorso cambia con la stagione: tartufo, porcini, orapi, cinghiale.",
  searchPlaceholder: "Cerca un piatto, es. ravioli, tartufo…",
  allergenDisclaimer:
    "Elenco allergeni da completare con il titolare. In sala è obbligatorio per legge. Segnalate sempre intolleranze al personale: dalle recensioni risulta che la cucina sa adattarsi.",
  priceDisclaimer:
    "Nessun listino ufficiale era pubblicato online al momento dell’analisi. I prezzi sotto non sono inventati: dove manca la cifra, indichiamo solo ciò che sappiamo.",

  formula: {
    title: "Come funziona il pranzo",
    lead: "Al Casale non si sceglie da una carta lunga: si fa il percorso della casa. È la cosa che gli ospiti raccontano di più.",
    steps: [
      { n: "01", title: "Antipasti", text: "Arrivano caldi e freddi, in più portate: tagliere, bruschette, pizzette fritte, polentine, pallotte…" },
      { n: "02", title: "Primi", text: "Pasta fatta in casa. Si può assaggiare più di un primo, a seconda della fame." },
      { n: "03", title: "Brace", text: "Grigliata mista, agnello, salsicce, arrosticini, tegamini." },
      { n: "04", title: "Dolci e liquori", text: "Dolci della casa, caffè e liquori fatti in casa — gli ospiti citano il liquore al kiwi." }
    ],
    variants: [
      "Percorso completo (la formula più raccontata)",
      "Solo primo e secondo — alcuni ospiti lo chiedono: da confermare al momento della prenotazione",
      "Bambini e esigenze vegetariane: segnalate in prenotazione (dalle recensioni risulta attenzione alle intolleranze)"
    ],
    priceFromReviews: "",
    priceOfficial: null,
    priceLabel: "Prezzo ufficiale da confermare col locale"
  },

  categories: [
    {
      id: "antipasti",
      name: "Antipasti",
      note: "Quello che tipicamente arriva al tavolo, in più portate. Cambia con la stagione.",
      items: [
        {
          id: "antipasto-percorso",
          name: "Antipasti della casa",
          description: "Caldi e freddi, in 6–7 portate secondo gli ospiti. È l’inizio del pranzo al Casale.",
          price: null,
          priceLabel: "Incluso nel percorso",
          tags: ["firma"],
          allergens: null,
          frozen: false,
          image: "assets/img/dish-antipasti.jpg"
        },
        {
          id: "tagliere",
          name: "Tagliere di salumi e formaggi",
          description: "Salumi e formaggi locali, citato di continuo nelle recensioni.",
          price: null,
          priceLabel: "Incluso nel percorso",
          tags: [],
          allergens: null,
          frozen: false,
          image: null
        },
        {
          id: "bruschette",
          name: "Bruschette miste",
          description: "Tra gli antipasti più segnalati dagli ospiti.",
          price: null,
          priceLabel: "Incluso nel percorso",
          tags: [],
          allergens: null,
          frozen: false,
          image: null
        },
        {
          id: "pizzette",
          name: "Pizzette fritte",
          description: "Il piatto più indicato come «consigliato» su Sluurpy. Non è una pizzeria: è un antipasto della casa.",
          price: null,
          priceLabel: "Incluso nel percorso",
          tags: ["consigliato"],
          allergens: null,
          frozen: false,
          image: null
        },
        {
          id: "polentine",
          name: "Polentine con porcini",
          description: "Antipasto caldo di terra, citato insieme a funghi e tartufo.",
          price: null,
          priceLabel: "Incluso nel percorso · di stagione",
          tags: ["stagione"],
          allergens: null,
          frozen: false,
          image: null
        },
        {
          id: "pallotte",
          name: "Pallotte",
          description: "Citata tra gli antipasti caldi (frittelle, pallotte, misto fritti).",
          price: null,
          priceLabel: "Incluso nel percorso",
          tags: [],
          allergens: null,
          frozen: false,
          image: null
        },
        {
          id: "fegatini",
          name: "Fegatini con patate",
          description: "Tra gli antipasti caldi descritti dagli ospiti.",
          price: null,
          priceLabel: "Incluso nel percorso",
          tags: [],
          allergens: null,
          frozen: false,
          image: null
        }
      ]
    },
    {
      id: "primi",
      name: "Primi",
      note: "Pasta fatta in casa. I tre nomi che tornano più spesso nelle recensioni sono sotto.",
      items: [
        {
          id: "ravioli",
          name: "Ravioli noci e tartufo",
          description: "Il piatto-firma. Gli ospiti lo citano più di ogni altro primo.",
          price: null,
          priceLabel: "Nel percorso · da confermare à la carte",
          tags: ["firma"],
          allergens: null,
          frozen: false,
          image: "assets/img/dish-ravioli.jpg"
        },
        {
          id: "pappardelle",
          name: "Pappardelle al cinghiale",
          description: "«Voto 10», «le migliori mai mangiate»: è il primo che gli ospiti raccontano quando escono.",
          price: null,
          priceLabel: "Nel percorso · da confermare à la carte",
          tags: ["firma", "stagione"],
          allergens: null,
          frozen: false,
          image: "assets/img/dish-pappardelle.jpg"
        },
        {
          id: "gnocchi-orapi",
          name: "Gnocchi con orapi",
          description: "Tra i piatti più segnalati. Gli orapi sono le spinaci di montagna della Majella, di primavera.",
          price: null,
          priceLabel: "Nel percorso · di stagione",
          tags: ["consigliato", "stagione"],
          allergens: null,
          frozen: false,
          image: null
        },
        {
          id: "chitarra",
          name: "Chitarrina funghi e tartufo",
          description: "Pasta alla chitarra con i due sapori più citati della tavola.",
          price: null,
          priceLabel: "Nel percorso · di stagione",
          tags: ["stagione"],
          allergens: null,
          frozen: false,
          image: null
        },
        {
          id: "chitarra-ragu",
          name: "Chitarrina al ragù",
          description: "Citata dagli ospiti tra i primi della casa.",
          price: null,
          priceLabel: "Nel percorso",
          tags: [],
          allergens: null,
          frozen: false,
          image: null
        },
        {
          id: "gnocchi-pomodoro",
          name: "Gnocchi al pomodoro",
          description: "Presente nelle ricostruzioni di menu degli aggregatori.",
          price: null,
          priceLabel: "Nel percorso",
          tags: [],
          allergens: null,
          frozen: false,
          image: null
        }
      ]
    },
    {
      id: "secondi",
      name: "Dalla brace",
      note: "Secondi di terra. Non risulta una carta di pesce.",
      items: [
        {
          id: "grigliata",
          name: "Grigliata di carne mista",
          description: "Il secondo più raccontato. «Un misto alla brace che parla da solo».",
          price: null,
          priceLabel: "Nel percorso · da confermare à la carte",
          tags: ["firma"],
          allergens: null,
          frozen: false,
          image: "assets/img/dish-griglia.jpg"
        },
        {
          id: "agnello",
          name: "Agnello",
          description: "Citato spesso insieme alla grigliata. Carne di montagna.",
          price: null,
          priceLabel: "Nel percorso",
          tags: [],
          allergens: null,
          frozen: false,
          image: null
        },
        {
          id: "salsicce",
          name: "Salsicce alla brace",
          description: "Nella grigliata e da sole, secondo gli ospiti.",
          price: null,
          priceLabel: "Nel percorso",
          tags: [],
          allergens: null,
          frozen: false,
          image: null
        },
        {
          id: "arrosticini",
          name: "Arrosticini",
          description: "Presenti nel percorso. Un ospite li ha trovati duri: lo segnaliamo con onestà.",
          price: null,
          priceLabel: "Nel percorso",
          tags: [],
          allergens: null,
          frozen: false,
          image: null
        },
        {
          id: "tegamino-salsiccia",
          name: "Tegamino scamorza e salsiccia",
          description: "Secondo caldo, citato come «veramente gustoso».",
          price: null,
          priceLabel: "Nel percorso",
          tags: ["consigliato"],
          allergens: null,
          frozen: false,
          image: null
        },
        {
          id: "tegamino-porcini",
          name: "Tegamino porcini e tartufo",
          description: "Variante di stagione del tegamino.",
          price: null,
          priceLabel: "Nel percorso · di stagione",
          tags: ["stagione"],
          allergens: null,
          frozen: false,
          image: null
        }
      ]
    },
    {
      id: "dolci",
      name: "Dolci e liquori",
      note: "Fatti in casa. Chiudono il pranzo insieme al caffè.",
      items: [
        {
          id: "dolci-casa",
          name: "Dolci della casa",
          description: "Selezione di dolcetti. Un ospite racconta un dolce tipo pancake con crema chantilly.",
          price: null,
          priceLabel: "Incluso nel percorso, da confermare",
          tags: ["firma"],
          allergens: null,
          frozen: false,
          image: null
        },
        {
          id: "liquori",
          name: "Liquori della casa",
          description: "Digestivi fatti in casa. Il liquore al kiwi è il dettaglio che gli ospiti ricordano.",
          price: null,
          priceLabel: "Offerti in chiusura, da confermare",
          tags: ["firma"],
          allergens: null,
          frozen: false,
          image: null
        }
      ]
    },
    {
      id: "bevande",
      name: "Bevande",
      note: "Non esiste una carta vini pubblica. Indichiamo solo ciò che gli ospiti citano.",
      items: [
        {
          id: "vino-casa",
          name: "Vino della casa",
          description: "Citato spesso, in particolare il rosso. Nessun etichetta o prezzo ufficiale online.",
          price: null,
          priceLabel: "Da confermare",
          tags: [],
          allergens: null,
          frozen: false,
          image: null
        },
        {
          id: "caffe",
          name: "Caffè",
          description: "A chiusura del percorso, insieme ai liquori.",
          price: null,
          priceLabel: "Da confermare",
          tags: [],
          allergens: null,
          frozen: false,
          image: null
        }
      ]
    }
  ]
};
