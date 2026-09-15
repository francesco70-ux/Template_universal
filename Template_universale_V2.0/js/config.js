/*
============================================================
FC STUDIO — UNIVERSAL TEMPLATE V2.0
FILE: config.js

UNICO file da modificare per creare il sito di un cliente.

COME USARE QUESTO FILE PER UN NUOVO CLIENTE:
1. Cerca "✏️" : sono i campi da personalizzare obbligatoriamente.
2. Sostituisci testi, prezzi, contatti, orari e collegamenti.
3. Sostituisci le immagini in assets/ mantenendo gli stessi
   nomi di file (oppure aggiorna i percorsi qui sotto).
4. Non modificare la struttura delle proprietà senza aggiornare
   anche js/script.js (vedi README.md, sezione "Contratto dati").

Tutti i contenuti di esempio (testi, piatti, prezzi, recensioni)
sono SEGNAPOSTO da sostituire con i dati reali del cliente.
============================================================
*/

const restaurantConfig = {

    /* ========================================================
       SEZIONI DELLA HOMEPAGE
       true = visibile, false = nascosta (nasconde anche la
       relativa voce di menu in navbar, vedi script.js).
    ======================================================== */
    sections: {
        about: true,
        features: true,
        featuredMenu: true,
        gallery: true,
        reviews: true,
        reservation: true
    },

    /* ========================================================
       IDENTITÀ — ✏️ personalizzare per ogni cliente
    ======================================================== */
    name: "Nome del Locale", // ✏️
    type: "Ristorante — Cucina italiana", // ✏️ es. "Trattoria — Pizzeria"
    slogan: "Tradizione, gusto e accoglienza nel cuore della città.", // ✏️
    description:
        "Un luogo dove la cucina italiana incontra l'ospitalità autentica: ingredienti selezionati, ricette della tradizione e un'atmosfera curata nei dettagli.", // ✏️

    /* URL pubblico del sito — ✏️ serve per canonical e Open Graph */
    siteUrl: "https://www.esempio.it",
    locale: "it_IT",

    /* ========================================================
       SEO HOMEPAGE — ✏️ personalizzare per ogni cliente
       Nota: i testi sono scritti anche nell'HTML statico
       (vedi index.html) così restano leggibili dai crawler
       anche senza JavaScript. Mantieni allineati i due punti.
    ======================================================== */
    seo: {
        title: "Nome del Locale | Ristorante italiano — Città", // ✏️ max ~60 caratteri
        description:
            "Nome del Locale: ristorante italiano a Città. Scopri il menu, la nostra storia, la galleria e prenota il tuo tavolo.", // ✏️ 140–160 caratteri
        ogImage: "assets/images/hero.jpg"
    },

    /* ========================================================
       CHI SIAMO
    ======================================================== */
    about: {
        label: "CHI SIAMO",
        title: "La nostra storia", // ✏️
        text1:
            "Da anni accogliamo i nostri ospiti con la stessa passione del primo giorno: una cucina che parte dagli ingredienti del territorio e li trasforma in piatti sinceri.", // ✏️
        text2:
            "In sala troverai un ambiente elegante e familiare, curato nei dettagli per farti sentire a casa — che sia una cena romantica, un pranzo di famiglia o una serata tra amici." // ✏️
    },

    /* ========================================================
       PUNTI DI FORZA — icone in assets/icons/ (SVG)
    ======================================================== */
    features: {
        label: "PERCHÉ SCEGLIERCI",
        title: "Qualità e passione", // ✏️
        items: [
            {
                icon: "assets/icons/feature-1.svg",
                title: "Ingredienti selezionati", // ✏️
                description:
                    "Materie prime fresche e di stagione, scelte ogni giorno dai nostri fornitori di fiducia." // ✏️
            },
            {
                icon: "assets/icons/feature-2.svg",
                title: "Cucina della tradizione", // ✏️
                description:
                    "Ricette autentiche eseguite con tecnica e rispetto, dal primo all'ultimo dettaglio." // ✏️
            },
            {
                icon: "assets/icons/feature-3.svg",
                title: "Ospitalità di casa", // ✏️
                description:
                    "Un'accoglienza calorosa e attenta, perché ogni ospite deve sentirsi speciale." // ✏️
            }
        ]
    },

    /* ========================================================
       MENU IN EVIDENZA (homepage: 3 piatti vetrina)
       Il menu COMPLETO vive in `menu` qui sotto (menu.html).
    ======================================================== */
    featuredMenu: {
        label: "DALLA NOSTRA CUCINA",
        title: "Le nostre proposte", // ✏️
        description:
            "Una selezione dei piatti più amati dai nostri ospiti. Il menu completo ti aspetta alla pagina dedicata.", // ✏️
        items: [
            {
                name: "Filetto di salmone alle erbe", // ✏️
                description: "Salmone fresco, erbe dell'orto e riduzione di limone.", // ✏️
                price: "€ 24,00", // ✏️
                image: "assets/images/dish-1.jpg",
                imageAlt: "Filetto di salmone alle erbe"
            },
            {
                name: "Tagliatelle al pomodoro", // ✏️
                description: "Pasta fresca tirata a mano con sugo di datterini e basilico.", // ✏️
                price: "€ 16,00", // ✏️
                image: "assets/images/dish-2.jpg",
                imageAlt: "Tagliatelle fresche al pomodoro e basilico"
            },
            {
                name: "Tagliata di manzo", // ✏️
                description: "Manzo selezionato, rucola, scaglie di grana e olio EVO.", // ✏️
                price: "€ 26,00", // ✏️
                image: "assets/images/dish-3.jpg",
                imageAlt: "Tagliata di manzo con rucola e grana"
            }
        ]
    },

    /* ========================================================
       MENU COMPLETO (pagina menu.html) — ✏️ per ogni cliente
       categories: [{ name, note, items: [{ name, description,
       price, tags: ["vegetariano","piccante",...] }] }]
       I tag generano automaticamente un badge nel piatto.
    ======================================================== */
    menu: {
        label: "IL NOSTRO MENU",
        title: "Sapori autentici", // ✏️
        description:
            "Il menu segue le stagioni e il mercato: alcuni piatti possono variare. Per allergie e intolleranze, chiedi al nostro personale.", // ✏️
        note: "Prezzi in euro, servizio incluso.", // ✏️
        seo: {
            title: "Menu | Nome del Locale — Ristorante italiano", // ✏️
            description:
                "Scopri il menu di Nome del Locale: antipasti, primi, secondi e dolci della tradizione italiana." // ✏️
        },
        categories: [
            {
                name: "Antipasti", // ✏️
                note: "", // ✏️ nota facoltativa di categoria
                items: [
                    { name: "Tagliere della casa", description: "Salumi e formaggi del territorio, miele e noci.", price: "€ 14,00", tags: ["da condividere"] },
                    { name: "Bruschette miste", description: "Pomodoro, funghi e crema di olive su pane toscano.", price: "€ 9,00", tags: ["vegetariano"] }
                ]
            },
            {
                name: "Primi piatti",
                note: "",
                items: [
                    { name: "Tagliatelle al pomodoro", description: "Pasta fresca tirata a mano, datterini e basilico.", price: "€ 16,00", tags: ["vegetariano"] },
                    { name: "Risotto ai funghi porcini", description: "Carnaroli mantecato con porcini e prezzemolo.", price: "€ 19,00", tags: [] }
                ]
            },
            {
                name: "Secondi piatti",
                note: "",
                items: [
                    { name: "Tagliata di manzo", description: "Rucola, scaglie di grana e olio EVO.", price: "€ 26,00", tags: [] },
                    { name: "Filetto di salmone alle erbe", description: "Erbe dell'orto e riduzione di limone.", price: "€ 24,00", tags: [] }
                ]
            },
            {
                name: "Dolci",
                note: "",
                items: [
                    { name: "Tiramisù della casa", description: "La ricetta classica con savoiardi e mascarpone.", price: "€ 7,00", tags: [] },
                    { name: "Panna cotta ai frutti di bosco", description: "Con coulis di frutti di bosco freschi.", price: "€ 7,00", tags: ["vegetariano"] }
                ]
            }
        ]
    },

    /* ========================================================
       GALLERIA — da 1 a 6 immagini, senza toccare HTML/CSS
    ======================================================== */
    gallery: {
        label: "GALLERIA",
        title: "L'atmosfera del locale", // ✏️
        images: [
            { src: "assets/images/gallery-1.jpg", alt: "Sala del ristorante apparecchiata" }, // ✏️ alt reali
            { src: "assets/images/gallery-2.jpg", alt: "Dettaglio della sala con luci calde" },
            { src: "assets/images/gallery-3.jpg", alt: "Tavolo con mise en place elegante" },
            { src: "assets/images/gallery-4.jpg", alt: "Pizza appena sfornata" },
            { src: "assets/images/gallery-5.jpg", alt: "Angolo accogliente del locale" },
            { src: "assets/images/gallery-6.jpg", alt: "Dettaglio della sala da pranzo" }
        ]
    },

    /* ========================================================
       RECENSIONI — stars: numero da 1 a 5
    ======================================================== */
    reviews: {
        label: "RECENSIONI",
        title: "Cosa dicono i nostri ospiti", // ✏️
        items: [ // ✏️ sostituire con recensioni reali (chiedi il consenso)
            { stars: 5, text: "Cena indimenticabile: piatti curati e personale attentissimo.", author: "Maria R." },
            { stars: 5, text: "Il posto perfetto per una serata speciale. Torneremo presto.", author: "Luca B." },
            { stars: 4, text: "Ottima cucina e atmosfera elegante. Consigliata la prenotazione.", author: "Elena T." }
        ]
    },

    /* ========================================================
       PRENOTAZIONE (CTA finale homepage + pagina contatti)
    ======================================================== */
    reservation: {
        label: "TI ASPETTIAMO",
        title: "Prenota il tuo tavolo", // ✏️
        description:
            "Chiamaci, scrivici su WhatsApp o compila il modulo nella pagina contatti: ti risponderemo al più presto." // ✏️
    },

    /* ========================================================
       PAGINA CONTATTI — ✏️ per ogni cliente
    ======================================================== */
    contactPage: {
        label: "CONTATTI",
        title: "Vieni a trovarci", // ✏️
        description:
            "Ci trovi in centro, a pochi minuti dalla piazza principale. Prenota o chiedici informazioni: ti aspettiamo.", // ✏️
        formTitle: "Richiedi una prenotazione",
        formNote:
            "Compila il modulo: ti ricontatteremo per confermare la disponibilità. Per urgenze, chiamaci direttamente.",
        seo: {
            title: "Contatti e prenotazioni | Nome del Locale", // ✏️
            description:
                "Contatta Nome del Locale: indirizzo, telefono, orari e modulo di richiesta prenotazione." // ✏️
        }
    },

    /* ========================================================
       CONTATTI — ✏️ personalizzare per ogni cliente
    ======================================================== */
    contact: {
        phone: "+39 000 000 0000", // ✏️ formato internazionale
        email: "info@esempio.it", // ✏️
        address: "Via Esempio 00", // ✏️
        city: "00000 Città (PR)", // ✏️ CAP + città + provincia
        whatsapp: "https://wa.me/390000000000", // ✏️ solo cifre, prefisso intl senza "+"
        mapsUrl: "https://maps.google.com/?q=Via+Esempio+00+Città", // ✏️ link "Come raggiungerci"
        vat: "" // ✏️ facoltativo: P.IVA mostrata nel footer se compilata
    },

    /* ========================================================
       SOCIAL — lascia "" per nascondere un canale
    ======================================================== */
    social: {
        instagram: "https://instagram.com/", // ✏️ URL profilo o ""
        facebook: "https://facebook.com/", // ✏️ URL profilo o ""
        tiktok: "", // ✏️ URL profilo o ""
        tripadvisor: "", // ✏️ URL scheda o ""
        google: "" // ✏️ URL recensioni Google o ""
    },

    /* ========================================================
       LINK PRINCIPALI
    ======================================================== */
    links: {
        home: "index.html",
        menu: "menu.html",
        reservation: "contatti.html",
        whatsapp: "https://wa.me/390000000000", // ✏️ = contact.whatsapp
        googleMaps: "https://maps.google.com/?q=Via+Esempio+00+Città" // ✏️ = contact.mapsUrl
    },

    /* ========================================================
       PULSANTI (testo + destinazione)
    ======================================================== */
    buttons: {
        heroPrimary: { text: "Scopri il menu", link: "menu.html" },
        heroSecondary: { text: "Prenota un tavolo", link: "contatti.html" },
        featuredMenu: { text: "Vedi il menu completo", link: "menu.html" },
        reservation: { text: "Prenota ora", link: "contatti.html" }
    },

    navbar: {
        reservation: { text: "Prenota", link: "contatti.html" }
    },

    /* ========================================================
       ORARI — ✏️ per ogni cliente (stringhe libere)
    ======================================================== */
    openingHours: {
        monday: "Chiuso", // ✏️
        tuesday: "19:00 – 23:00", // ✏️
        wednesday: "19:00 – 23:00",
        thursday: "19:00 – 23:00",
        friday: "19:00 – 23:30",
        saturday: "12:00 – 15:00 / 19:00 – 23:30",
        sunday: "12:00 – 15:00 / 19:00 – 23:00"
    },

    /* ========================================================
       COLORI — generano le variabili CSS --color-*
       (primaryDark deriva da primaryDark, ecc.)
    ======================================================== */
    colors: {
        primary: "#19352A",
        primaryDark: "#10241C",
        secondary: "#C8A96B",
        background: "#F8F6F0",
        backgroundLight: "#FFFFFF",
        backgroundDark: "#17241E",
        text: "#222222",
        textLight: "#5C5C5C"
    },

    /* ========================================================
       IMMAGINI PRINCIPALI
    ======================================================== */
    images: {
        logo: "assets/logo/logo.svg", // ✏️ logo del cliente (SVG o PNG con trasparenza)
        hero: "assets/images/hero.jpg", // ✏️ min 1600 px di larghezza
        about: "assets/images/about.jpg",
        fallback: "assets/images/fallback.jpg"
    }
};
