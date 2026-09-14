/*
============================================================
FC STUDIO — RESTAURANT TEMPLATE V1.0
FILE: config.js

Questo è il file PRINCIPALE da modificare per ogni nuovo cliente.

OBIETTIVO:
- Il codice HTML non va riscritto per ogni locale.
- Qui inseriamo testi, immagini, contatti, colori, orari e collegamenti.
- Per creare un nuovo sito: duplica il template e modifica soprattutto
  questo file.

IMPORTANTE:
- I percorsi delle immagini devono corrispondere ai file presenti
  nella cartella assets/.
- Non modificare la struttura delle proprietà senza aggiornare
  anche script.js.
============================================================
*/


/* ========================================================
   SEZIONI DEL SITO

   true  = sezione visibile
   false = sezione nascosta

   Per un nuovo cliente puoi disattivare facilmente
   una sezione senza cancellare il codice HTML.
======================================================== */

const restaurantConfig = {

    sections: {

        about: true,

        features: true,

        featuredMenu: true,

        gallery: true,

        reviews: true,

        reservation: true
    },


    /* ========================================================
       INFORMAZIONI GENERALI DEL LOCALE

       Questi dati vengono utilizzati nelle varie parti
       testuali della homepage.
    ======================================================== */

    name: "Nome del locale",

    type: "Bar - Trattoria - Pizzeria",

    slogan: "Tradizione, gusto e convivialità.",

    description:
        "Breve descrizione del locale, della sua identità e dell'esperienza che offre.",


    /* ========================================================
       SEO

       Dati utilizzati nel <title> e nella meta description
       della pagina.

       Per ogni cliente conviene personalizzare entrambi.
    ======================================================== */

    seo: {

        title: "Nome del locale | Bar - Trattoria - Pizzeria",

        description:
            "Scopri Nome del locale: cucina, ambiente, menu, contatti e informazioni."
    },


    /* ========================================================
       CHI SIAMO

       Contiene il testo della sezione dedicata alla storia
       e all'identità del locale.
    ======================================================== */

    about: {

        label: "CHI SIAMO",

        title: "La nostra storia",

        text1:
            "Racconta qui la storia del locale, delle persone che lo hanno creato e della sua identità.",

        text2:
            "Utilizza questo spazio per descrivere la filosofia, la cucina e l'esperienza proposta ai clienti."
    },


    /* ========================================================
       PUNTI DI FORZA

       Ogni elemento può avere:
       - icon: percorso dell'immagine
       - title: titolo
       - description: descrizione

       Per un nuovo cliente basta sostituire i dati qui sotto.
    ======================================================== */

    features: {

        label: "PERCHÉ SCEGLIERCI",

        title: "Qualità e passione",

        items: [

            {
                icon: "assets/icons/feature-1.png",

                title: "Ingredienti di qualità",

                description:
                    "Selezioniamo ingredienti di qualità per offrire un'esperienza autentica."
            },

            {
                icon: "assets/icons/feature-2.png",

                title: "Cucina autentica",

                description:
                    "Una cucina che unisce tradizione, creatività e attenzione ai dettagli."
            },

            {
                icon: "assets/icons/feature-3.png",

                title: "Atmosfera unica",

                description:
                    "Un ambiente pensato per vivere un'esperienza piacevole e conviviale."
            }
        ]
    },


    /* ========================================================
       MENU IN EVIDENZA

       Questa NON è la pagina menu completa.

       Qui inseriamo soltanto 3 prodotti/piatti rappresentativi
       da mostrare nella homepage.
    ======================================================== */

    featuredMenu: {

        label: "DALLA NOSTRA CUCINA",

        title: "Le nostre proposte",

        description:
            "Una selezione dei piatti più rappresentativi del locale.",

        items: [

            {
                name: "Nome del piatto",

                description:
                    "Breve descrizione del piatto.",

                price: "€ 00,00",

                image:
                    "assets/images/dish-1.jpg",

                imageAlt:
                    "Nome del piatto"
            },

            {
                name: "Nome del piatto",

                description:
                    "Breve descrizione del piatto.",

                price: "€ 00,00",

                image:
                    "assets/images/dish-2.jpg",

                imageAlt:
                    "Nome del piatto"
            },

            {
                name: "Nome del piatto",

                description:
                    "Breve descrizione del piatto.",

                price: "€ 00,00",

                image:
                    "assets/images/dish-3.jpg",

                imageAlt:
                    "Nome del piatto"
            }
        ]
    },


    /* ========================================================
       GALLERIA

       Inserisci qui le fotografie del locale.

       È possibile utilizzare da 1 a 6 immagini senza modificare
       la struttura principale del sito.
    ======================================================== */

    gallery: {

        label: "GALLERIA",

        title: "Scopri il nostro locale",

        images: [

            {
                src: "assets/images/gallery-1.jpg",
                alt: "Interno del locale"
            },

            {
                src: "assets/images/gallery-2.jpg",
                alt: "Piatto del locale"
            },

            {
                src: "assets/images/gallery-3.jpg",
                alt: "Dettaglio del locale"
            },

            {
                src: "assets/images/gallery-4.jpg",
                alt: "Atmosfera del locale"
            },

            {
                src: "assets/images/gallery-5.jpg",
                alt: "Piatto del locale"
            },

            {
                src: "assets/images/gallery-6.jpg",
                alt: "Esterno del locale"
            }
        ]
    },


    /* ========================================================
       RECENSIONI

       Le recensioni vengono generate automaticamente da
       script.js.

       stars deve essere un numero da 1 a 5.
    ======================================================== */

    reviews: {

        label: "RECENSIONI",

        title: "Cosa dicono i nostri clienti",

        items: [

            {
                stars: 5,
                text: "Una breve recensione del cliente.",
                author: "Nome Cliente"
            },

            {
                stars: 5,
                text: "Una breve recensione del cliente.",
                author: "Nome Cliente"
            },

            {
                stars: 5,
                text: "Una breve recensione del cliente.",
                author: "Nome Cliente"
            }
        ]
    },


    /* ========================================================
       PRENOTAZIONE

       Testi della call to action finale della homepage.
    ======================================================== */

   reservation: {

    label: "TI ASPETTIAMO",

    title: "Prenota il tuo tavolo",

    description:
        "Contattaci per prenotare il tuo tavolo e vivere la nostra esperienza."
},


    /* ========================================================
       CONTATTI

       Informazioni principali del locale.
    ======================================================== */

    contact: {

        phone: "+39 000 000 0000",

        email: "email@esempio.it",

        address: "Via Esempio 00",

        city: "00000 Città (Provincia)"
    },


    /* ========================================================
       SOCIAL

       Inserisci gli URL reali dei profili del cliente.
    ======================================================== */

    social: {

        instagram: "https://instagram.com/",

        facebook: "https://facebook.com/"
    },


    /* ========================================================
       LINK PRINCIPALI

       Centralizziamo qui i collegamenti del sito.
    ======================================================== */

    links: {

        menu: "menu.html",

        reservation: "contatti.html",

        whatsapp: "https://wa.me/390000000000",

        googleMaps: "https://maps.google.com/"
    },


    /* ========================================================
       PULSANTI

       Ogni pulsante importante ha:
       - text = testo visualizzato
       - link = destinazione

       Per cambiare un pulsante del sito si modifica quindi
       questo blocco, senza intervenire nell'HTML.
    ======================================================== */

    buttons: {

        heroPrimary: {

            text: "Scopri il menu",

            link: "menu.html"
        },

        heroSecondary: {

            text: "Prenota un tavolo",

            link: "contatti.html"
        },

        featuredMenu: {

            text: "Scopri il menu",

            link: "menu.html"
        },

        reservation: {

            text: "Prenota ora",

            link: "contatti.html"
        }
    },


    /* ========================================================
       PULSANTE NAVBAR

       Controlla il pulsante di prenotazione presente
       nella barra di navigazione.
    ======================================================== */

    navbar: {

        reservation: {

            text: "Prenota",

            link: "contatti.html"
        }
    },


    /* ========================================================
       ORARI

       Gli orari vengono utilizzati nel footer.

       I nomi delle proprietà devono rimanere invariati
       perché script.js li utilizza per individuare i giorni.
    ======================================================== */

    openingHours: {

        monday: "Chiuso",

        tuesday: "19:00 - 23:00",

        wednesday: "19:00 - 23:00",

        thursday: "19:00 - 23:00",

        friday: "19:00 - 23:30",

        saturday: "12:00 - 15:00 / 19:00 - 23:30",

        sunday: "12:00 - 15:00 / 19:00 - 23:00"
    },


    /* ========================================================
       COLORI

       script.js trasforma automaticamente questi valori
       nelle variabili CSS --color-*.

       Per creare un nuovo stile grafico, normalmente basta
       modificare questi colori.
    ======================================================== */

    colors: {

        primary: "#19352A",

        primaryDark: "#10241C",

        secondary: "#C8A96B",

        background: "#F8F6F0",

        backgroundLight: "#FFFFFF",

        backgroundDark: "#17241E",

        text: "#222222",

        textLight: "#6B6B6B"
    },


    /* ========================================================
       IMMAGINI PRINCIPALI

       Tutte le immagini fondamentali del sito vengono
       centralizzate qui.

       fallback = immagine utilizzata quando un'immagine
       principale non è disponibile.
    ======================================================== */

    images: {

        logo: "assets/logo/logo.png",

        hero: "assets/images/hero.jpg",

        about: "assets/images/about.jpg",

        fallback: "assets/images/fallback.jpg"
    }
};