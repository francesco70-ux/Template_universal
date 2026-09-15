/*
============================================================
PASTIME — Bar · Trattoria · Pizzeria
FILE: config.js

File principale dei CONTENUTI del sito.
- Testi, contatti, social, immagini e impostazioni vivono qui.
- script.js legge questo oggetto e popola gli elementi HTML
  che hanno l'attributo data-config="percorso.chiave".
- Il menu completo è in js/menu-data.js.

REGOLE:
- Un valore impostato a null nasconde automaticamente
  l'elemento HTML collegato (es. email non ancora disponibile).
- I percorsi delle immagini sono relativi alla root del sito.
============================================================
*/

const restaurantConfig = {

    /* ---------- SEZIONI HOMEPAGE (true = visibile) ---------- */
    sections: {
        about: true,
        features: true,
        featuredMenu: true,
        gallery: true,
        reviews: false,      // nessuna recensione reale disponibile: sezione disattivata
        reservation: true
    },

    /* ---------- IDENTITÀ ---------- */
    name: "Pastime",
    owner: "Simone De Iuliis",
    type: "Bar · Trattoria · Pizzeria",
    slogan: "Pizza, cucina della tradizione e buona compagnia a Pizzoferrato.",
    description:
        "Pastime è bar, trattoria e pizzeria a Pizzoferrato, in Abruzzo: pizze rosse e bianche anche alla pala, primi fatti in casa, arrosticini, carni e stuzzicheria.",

    /* ---------- SEO ---------- */
    seo: {
        title: "Pastime | Bar · Trattoria · Pizzeria a Pizzoferrato (CH)",
        description:
            "Pastime, bar trattoria pizzeria a Pizzoferrato (Chieti): pizze rosse e bianche anche alla pala, chitarrina, arrosticini, carni alla griglia e stuzzicheria. Chiama lo 0872 946641.",
        // Da compilare quando il dominio sarà definitivo (URL assoluto, es. https://www.esempio.it/)
        siteUrl: null
    },

    /* ---------- CHI SIAMO ---------- */
    about: {
        label: "Chi siamo",
        title: "Un unico posto, tre modi di stare a tavola",
        text1:
            "Pastime è il bar, trattoria e pizzeria di Simone De Iuliis a Pizzoferrato, tra le montagne della provincia di Chieti. Un locale dove fermarsi per un caffè, una pizza con gli amici o una cena della tradizione abruzzese.",
        text2:
            "In cucina trovi la chitarrina al ragù, le tagliatelle ai porcini, gli arrosticini di pecora e le carni alla griglia; al forno oltre quaranta pizze rosse e bianche, disponibili anche alla pala. Per chi ha meno tempo, stuzzicheria e panini."
    },

    /* ---------- PUNTI DI FORZA (le tre anime del locale) ---------- */
    features: {
        label: "Le tre anime di Pastime",
        title: "Bar, trattoria e pizzeria",
        items: [
            {
                icon: "pizza",
                title: "Pizzeria",
                description:
                    "Oltre quaranta pizze tra rosse e bianche, dalla Margherita alla Pastime con rucola, crudo e scaglie di grana. Tutte disponibili anche alla pala."
            },
            {
                icon: "pasta",
                title: "Trattoria",
                description:
                    "Primi della tradizione come chitarrina, tagliatelle e ravioli, secondi di carne, arrosticini di pecora e contorni di verdure grigliate."
            },
            {
                icon: "cup",
                title: "Bar",
                description:
                    "Il punto d'incontro del paese: stuzzicheria, panini e hamburger per una pausa veloce o una serata informale in compagnia."
            }
        ]
    },

    /* ---------- MENU IN EVIDENZA (piatti reali dal menu) ---------- */
    featuredMenu: {
        label: "Dal nostro menu",
        title: "Le specialità della casa",
        description:
            "Una selezione di ciò che ci rappresenta di più. Il menu completo, con tutti i prezzi, è sempre aggiornato.",
        items: [
            {
                category: "Pizza rossa",
                name: "Pastime",
                description: "Pomodoro, mozzarella, rucola, prosciutto crudo, scaglie di grana",
                price: "€ 8,00"
            },
            {
                category: "Antipasto",
                name: "AntiPastime",
                description: "Salumi, formaggi, bruschette e antipasti caldi",
                price: "€ 9,00"
            },
            {
                category: "Primo piatto",
                name: "Chitarrina al ragù di cinghiale",
                description: "Pasta alla chitarra della tradizione abruzzese",
                price: "€ 8,50"
            },
            {
                category: "Secondo piatto",
                name: "Arrosticini di pecora",
                description: "30 gr al pezzo, minimo 5 pezzi",
                price: "€ 1,20"
            }
        ]
    },

    /* ---------- GALLERIA ----------
       NOTA: le fotografie attuali sono immagini d'archivio del template,
       da sostituire con foto reali del locale appena disponibili.
       Mantenere lo stesso schema { src, webp, width, height, alt }.
    -------------------------------------------------------- */
    gallery: {
        label: "Galleria",
        title: "L'atmosfera di Pastime",
        images: [
            { src: "assets/images/gallery-1.jpg", webp: "assets/images/gallery-1.webp", width: 1199, height: 672, alt: "Tavolo apparecchiato con calici e tovaglia bianca" },
            { src: "assets/images/gallery-4.jpg", webp: "assets/images/gallery-4.webp", width: 736, height: 1307, alt: "Pizze margherita appena sfornate" },
            { src: "assets/images/dish-3.jpg", webp: "assets/images/dish-3.webp", width: 720, height: 404, alt: "Sala del bar con luce naturale e piante" },
            { src: "assets/images/gallery-3.jpg", webp: "assets/images/gallery-3.webp", width: 1200, height: 857, alt: "Bancone del bar con bottiglie e bicchieri" },
            { src: "assets/images/fallback.jpg", webp: "assets/images/fallback.webp", width: 736, height: 1298, alt: "Chef che completa un piatto con erbe fresche" },
            { src: "assets/images/gallery-2.jpg", webp: "assets/images/gallery-2.webp", width: 1200, height: 799, alt: "Sala ristorante con tavoli apparecchiati e luci calde" }
        ]
    },

    /* ---------- RECENSIONI (disattivate: nessuna recensione reale) ---------- */
    reviews: {
        label: "Recensioni",
        title: "Cosa dicono i nostri clienti",
        items: []
    },

    /* ---------- CTA FINALE / DOVE SIAMO ---------- */
    reservation: {
        label: "Ti aspettiamo",
        title: "Prenota un tavolo o ordina la tua pizza",
        description:
            "Chiamaci per prenotare, per informazioni su orari e disponibilità o per ordinare le pizze da asporto, anche alla pala."
    },

    /* ---------- CONTATTI ----------
       address / email: null = non ancora disponibili (elementi nascosti). */
    contact: {
        phone: "0872 946641",
        phoneInternational: "+390872946641",
        email: null,
        address: null,
        city: "Pizzoferrato (CH)",
        region: "Abruzzo"
    },

    /* ---------- SOCIAL ---------- */
    social: {
        instagram: "https://www.instagram.com/pastime.pizzoferrato_official/",
        instagramHandle: "@pastime.pizzoferrato_official",
        facebook: null,           // pagina "Pastime": URL da confermare
        facebookHandle: "Pastime"
    },

    /* ---------- LINK ---------- */
    links: {
        menu: "menu.html",
        contact: "contatti.html",
        reservation: "tel:+390872946641",
        whatsapp: null,
        googleMaps: "https://www.google.com/maps/search/?api=1&query=Pastime+Bar+Trattoria+Pizzeria+Pizzoferrato"
    },

    /* ---------- PULSANTI ---------- */
    buttons: {
        heroPrimary: { text: "Scopri il menu", link: "menu.html" },
        heroSecondary: { text: "Chiama per prenotare", link: "tel:+390872946641" },
        featuredMenu: { text: "Menu completo", link: "menu.html" },
        reservation: { text: "Chiama lo 0872 946641", link: "tel:+390872946641" }
    },

    navbar: {
        reservation: { text: "Prenota", link: "tel:+390872946641" }
    },

    /* ---------- ORARI ----------
       Non ancora comunicati: null nasconde il blocco orari. */
    openingHours: null,

    /* ---------- IMMAGINI ---------- */
    images: {
        logo: "assets/logo/logo.png",
        hero: "assets/images/hero.jpg",
        about: "assets/images/about.jpg",
        fallback: "assets/images/fallback.jpg"
    }
};
