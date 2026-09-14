/*
============================================================
PASTIME — Bar · Trattoria · Pizzeria
FILE: config.js · Sito generato dal template FC Studio V2.0

Menu trascritto dal menu cartaceo del locale (settembre 2026).
Voci contrassegnate "TODO" = dati mancanti da fornire
(indirizzo, telefono, orari, social, foto reali).
============================================================
*/

const restaurantConfig = {

    sections: {
        about: true,
        features: true,
        featuredMenu: true,
        gallery: true,
        reviews: true,
        reservation: true
    },

    name: "Pastime",
    type: "Bar – Trattoria – Pizzeria",
    slogan: "Il gusto di stare insieme, dal bar alla pizzeria.",
    description:
        "Pastime è bar, trattoria e pizzeria: pizze rosse e bianche anche alla pala, antipasti, primi della tradizione, secondi e stuzzicheria, in un ambiente curato dal tocco floreale.",

    siteUrl: "https://www.esempio.it", // TODO: dominio reale di Pastime
    locale: "it_IT",

    seo: {
        title: "Pastime | Bar – Trattoria – Pizzeria",
        description:
            "Pastime, bar trattoria pizzeria: pizze rosse e bianche anche alla pala, antipasti, primi e secondi della tradizione. Scopri il menu e prenota il tuo tavolo.",
        ogImage: "assets/images/hero.jpg"
    },

    about: {
        label: "CHI SIAMO",
        title: "Benvenuti da Pastime",
        text1:
            "Pastime è il locale dove la giornata scorre con gusto: dal caffè del mattino al bar, ai piatti sinceri della trattoria, fino alle pizze serali cotte a regola d'arte.",
        text2:
            "In menu trovi pizze rosse e bianche — disponibili anche alla pala — antipasti come l'AntiPastime, primi della tradizione come chitarrina, tagliatella e ravioli, secondi di carne e una ricca stuzzicheria con panini."
    },

    features: {
        label: "PERCHÉ SCEGLIERCI",
        title: "Tre anime, un'unica accoglienza",
        items: [
            {
                icon: "assets/icons/feature-1.svg",
                title: "Pizze anche alla pala",
                description:
                    "Tutte le pizze rosse e bianche sono disponibili anche alla pala, leggera e fragrante."
            },
            {
                icon: "assets/icons/feature-2.svg",
                title: "Cucina di trattoria",
                description:
                    "Antipasti, chitarrina, tagliatella, gnocchi, ravioli e secondi di carne della tradizione."
            },
            {
                icon: "assets/icons/feature-3.svg",
                title: "Bar e stuzzicheria",
                description:
                    "Dal caffè all'aperitivo: stuzzicheria fritta, arrosticini, panini, hamburger e kebab."
            }
        ]
    },

    featuredMenu: {
        label: "LE SPECIALITÀ",
        title: "Da non perdere",
        description:
            "Le tre firme del locale, quelle che i nostri clienti ordinano e riordinano.",
        items: [
            {
                name: "Pizza Pastime",
                description: "Pomodoro, mozzarella, rucola, prosciutto crudo e scaglie di grana.",
                price: "€ 8,00",
                image: "assets/images/gallery-4.jpg",
                imageAlt: "Pizza Pastime con rucola, prosciutto crudo e scaglie di grana"
            },
            {
                name: "AntiPastime",
                description: "Salumi, formaggi, bruschette e antipasti caldi.",
                price: "€ 9,00",
                image: "assets/images/fallback.jpg",
                imageAlt: "AntiPastime con salumi, formaggi, bruschette e antipasti caldi"
            },
            {
                name: "Tagliatella porcini e tartufo",
                description: "Il primo più amato: porcini e profumo di tartufo.",
                price: "€ 9,00",
                image: "assets/images/dish-2.jpg",
                imageAlt: "Tagliatella ai porcini e tartufo"
            }
        ]
    },

    menu: {
        label: "IL NOSTRO MENU",
        title: "Il menu di Pastime",
        description:
            "Pizze rosse e bianche, antipasti, primi, secondi, contorni, stuzzicheria e panini. Chiedi al personale per allergie e intolleranze.",
        note: "Le pizze sono disponibili anche alla pala · Prezzi in euro, servizio incluso.",
        seo: {
            title: "Menu | Pastime — Bar Trattoria Pizzeria",
            description:
                "Il menu completo di Pastime: pizze rosse e bianche anche alla pala, antipasti, primi, secondi, contorni, stuzzicheria e panini."
        },
        categories: [
            {
                name: "Pizze Rosse",
                note: "Disponibili anche alla pala",
                items: [
                    { name: "Marinara", description: "Pomodoro, aglio, origano.", price: "€ 5,00", tags: ["vegetariano"] },
                    { name: "Margherita", description: "Pomodoro, mozzarella, basilico.", price: "€ 5,00", tags: ["vegetariano"] },
                    { name: "Regina Margherita", description: "Pomodoro, mozzarella, mozzarella di bufala, basilico.", price: "€ 8,00", tags: ["vegetariano"] },
                    { name: "Napoli", description: "Pomodoro, mozzarella, alici.", price: "€ 7,00", tags: [] },
                    { name: "Diavola", description: "Pomodoro, mozzarella, salame piccante.", price: "€ 7,00", tags: ["piccante"] },
                    { name: "Capricciosa", description: "Pomodoro, mozzarella, funghi, carciofini, olive, prosciutto cotto.", price: "€ 7,50", tags: [] },
                    { name: "4 Stagioni", description: "Pomodoro, mozzarella, funghi, carciofini, olive, prosciutto crudo.", price: "€ 7,50", tags: [] },
                    { name: "Boscaiola", description: "Pomodoro, mozzarella, funghi.", price: "€ 7,50", tags: ["vegetariano"] },
                    { name: "Americana", description: "Pomodoro, mozzarella, würstel, patatine fritte.", price: "€ 6,50", tags: [] },
                    { name: "Boe", description: "Pomodoro, mozzarella, prosciutto cotto, funghi.", price: "€ 7,50", tags: [] },
                    { name: "Mari e Monti", description: "Pomodoro, mozzarella, funghi, gamberetti.", price: "€ 9,00", tags: [] },
                    { name: "Pomi", description: "Pomodoro, mozzarella, prosciutto cotto, origano.", price: "€ 7,00", tags: [] },
                    { name: "Vivi", description: "Pomodoro, mozzarella.", price: "€ 7,00", tags: ["vegetariano"] },
                    { name: "Pupizza", description: "Pomodoro, mozzarella, patate, origano.", price: "€ 7,00", tags: ["vegetariano"] },
                    { name: "Pastime", description: "Pomodoro, mozzarella, rucola, prosciutto crudo, scaglie di grana.", price: "€ 8,00", tags: ["specialità della casa"] },
                    { name: "Pigro", description: "Pomodoro, mozzarella, salsiccia, funghi, tartufo.", price: "€ 8,50", tags: [] },
                    { name: "Alice", description: "Pomodoro, mozzarella, olive, alici.", price: "€ 7,50", tags: [] },
                    { name: "Parmigiana", description: "Pomodoro, mozzarella, melanzane, parmigiano.", price: "€ 7,00", tags: ["vegetariano"] },
                    { name: "Valtellinese", description: "Pomodoro, mozzarella, rucola, pomodorini, bresaola, scaglie di grana.", price: "€ 8,50", tags: [] },
                    { name: "Il Conte", description: "Pomodoro, mozzarella, gorgonzola, salame piccante.", price: "€ 7,50", tags: ["piccante"] },
                    { name: "Calzone Ripieno", description: "Pomodoro, mozzarella, prosciutto cotto.", price: "€ 7,00", tags: [] }
                ]
            },
            {
                name: "Pizze Bianche",
                note: "Disponibili anche alla pala",
                items: [
                    { name: "Deliziosa", description: "Mozzarella, gamberi, aglio, salsa tartara.", price: "€ 8,00", tags: [] },
                    { name: "Azzurra", description: "Focaccia con mozzarella, rucola, pomodorini, olive.", price: "€ 7,00", tags: ["vegetariano"] },
                    { name: "4 Formaggi", description: "Mozzarella, gorgonzola, edamer, parmigiano.", price: "€ 7,50", tags: ["vegetariano"] },
                    { name: "Vegetariana", description: "Mozzarella, zucchine, peperoni, melanzane.", price: "€ 7,00", tags: ["vegetariano"] },
                    { name: "Bufalotta", description: "Mozzarella, mozzarella di bufala, rucola, pomodorini.", price: "€ 8,00", tags: ["vegetariano"] },
                    { name: "A Silvia", description: "Focaccia ripiena con rucola, pomodorini, mozzarella di bufala, prosciutto cotto.", price: "€ 8,00", tags: [] },
                    { name: "Peperoni e Alici", description: "Mozzarella, peperoni, alici.", price: "€ 7,00", tags: [] },
                    { name: "Salsiccia e Friarelli", description: "Mozzarella, salsiccia, friarelli.", price: "€ 7,50", tags: [] },
                    { name: "Scamorza e Speck", description: "Mozzarella, scamorza, speck.", price: "€ 7,50", tags: [] },
                    { name: "Cotto e Patate", description: "Mozzarella, patate, prosciutto cotto.", price: "€ 7,50", tags: [] },
                    { name: "Tartufona", description: "Mozzarella, funghi, tartufo.", price: "€ 8,00", tags: ["vegetariano"] },
                    { name: "Patate e Salsiccia", description: "Mozzarella, patate, salsiccia.", price: "€ 7,50", tags: [] },
                    { name: "Pupizza", description: "Mozzarella, patate, origano.", price: "€ 7,00", tags: ["vegetariano"] },
                    { name: "Pastime", description: "Mozzarella, mozzarella di bufala, rucola, pomodorini, prosciutto crudo.", price: "€ 8,50", tags: ["specialità della casa"] },
                    { name: "Noci e Gorgonzola", description: "Mozzarella, gorgonzola, noci.", price: "€ 8,00", tags: ["vegetariano"] },
                    { name: "Norcina", description: "Mozzarella, panna, salsiccia, tartufo.", price: "€ 8,00", tags: [] },
                    { name: "Mimosa", description: "Mozzarella, panna, mais.", price: "€ 7,00", tags: ["vegetariano"] },
                    { name: "Tonno e Cipolla", description: "Mozzarella, tonno, cipolla.", price: "€ 7,50", tags: [] },
                    { name: "Green Pass", description: "Mozzarella, crema di pistacchio, mortadella, granella di pistacchio.", price: "€ 8,00", tags: [] },
                    { name: "Pizza Kebab", description: "Focaccia ripiena con insalata, pomodoro, kebab, salse a scelta.", price: "€ 9,00", tags: [] }
                ]
            },
            {
                name: "Antipasti",
                note: "",
                items: [
                    { name: "Antipasto della casa", description: "Salumi, formaggi, bruschette.", price: "€ 7,00", tags: [] },
                    { name: "AntiPastime", description: "Salumi, formaggi, bruschette, antipasti caldi.", price: "€ 9,00", tags: ["specialità della casa"] },
                    { name: "Caprese di bufala", description: "Mozzarella di bufala, rucola, pomodoro.", price: "€ 9,00", tags: ["vegetariano"] },
                    { name: "Carpaccio di Black Angus", description: "Black Angus affumicato, rucola, pomodorini, grana.", price: "€ 9,00", tags: [] }
                ]
            },
            {
                name: "Primi Piatti",
                note: "",
                items: [
                    { name: "Chitarrina al ragù di carne", description: "", price: "€ 7,50", tags: [] },
                    { name: "Chitarrina al ragù di cinghiale", description: "", price: "€ 8,50", tags: [] },
                    { name: "Tagliatella porcini e salsiccia", description: "", price: "€ 8,00", tags: [] },
                    { name: "Tagliatella porcini e tartufo", description: "", price: "€ 9,00", tags: [] },
                    { name: "Gnocchi di patate al ragù di carne", description: "Prodotto non sempre disponibile.", price: "€ 8,00", tags: [] },
                    { name: "Ravioli ricotta e spinaci al ragù di carne", description: "", price: "€ 7,50", tags: [] },
                    { name: "Ravioli ricotta e spinaci burro e salvia", description: "", price: "€ 7,50", tags: ["vegetariano"] },
                    { name: "Ravioli ricotta e spinaci al limone", description: "", price: "€ 7,50", tags: ["vegetariano"] },
                    { name: "Ravioli ai funghi porcini al ragù di carne", description: "", price: "€ 7,50", tags: [] },
                    { name: "Ravioli ai funghi porcini burro e salvia", description: "", price: "€ 7,50", tags: ["vegetariano"] }
                ]
            },
            {
                name: "Secondi Piatti",
                note: "",
                items: [
                    { name: "Agnello", description: "", price: "€ 14,00", tags: [] },
                    { name: "Bistecca di maiale", description: "", price: "€ 7,50", tags: [] },
                    { name: "Bistecca di vitello", description: "400 gr.", price: "€ 20,00", tags: [] },
                    { name: "Tagliata di entrecôte", description: "300 gr.", price: "€ 18,00", tags: [] },
                    { name: "Salsiccia", description: "2 pezzi.", price: "€ 7,00", tags: [] },
                    { name: "Arrosto misto", description: "", price: "€ 16,00", tags: [] },
                    { name: "Arrosticini di pecora", description: "30 gr, € 1,20 al pezzo (minimo 5 pezzi).", price: "€ 1,20", tags: [] },
                    { name: "Cotoletta di pollo", description: "", price: "€ 7,50", tags: [] },
                    { name: "Petto di pollo", description: "300 gr.", price: "€ 7,00", tags: [] },
                    { name: "Formaggio fresco in padella", description: "", price: "€ 6,50", tags: ["vegetariano"] },
                    { name: "Scaloppine di maiale ai funghi", description: "", price: "€ 8,50", tags: [] }
                ]
            },
            {
                name: "Contorni",
                note: "",
                items: [
                    { name: "Insalata verde", description: "", price: "€ 3,00", tags: ["vegetariano"] },
                    { name: "Insalata mista", description: "", price: "€ 4,00", tags: ["vegetariano"] },
                    { name: "Patatina fritta grande", description: "Prodotto surgelato.", price: "€ 3,50", tags: ["vegetariano"] },
                    { name: "Patatina fritta piccola", description: "Prodotto surgelato.", price: "€ 2,50", tags: ["vegetariano"] },
                    { name: "Friarelli alla napoletana", description: "", price: "€ 4,00", tags: ["vegetariano"] },
                    { name: "Cicoria", description: "", price: "€ 4,00", tags: ["vegetariano"] },
                    { name: "Peperoni grigliati", description: "", price: "€ 5,00", tags: ["vegetariano"] },
                    { name: "Melanzane grigliate", description: "", price: "€ 5,00", tags: ["vegetariano"] },
                    { name: "Zucchine grigliate", description: "", price: "€ 5,00", tags: ["vegetariano"] },
                    { name: "Misto di verdure grigliate", description: "", price: "€ 6,00", tags: ["vegetariano"] }
                ]
            },
            {
                name: "Stuzzicheria",
                note: "",
                items: [
                    { name: "Bruschette miste", description: "4 pezzi. Prodotto surgelato.", price: "€ 3,00", tags: [] },
                    { name: "Crocchette di patate", description: "4 pezzi. Prodotto surgelato.", price: "€ 3,00", tags: ["vegetariano"] },
                    { name: "Chele di granchio", description: "2 pezzi. Prodotto surgelato.", price: "€ 2,40", tags: [] },
                    { name: "Olive all'ascolana", description: "4 pezzi. Prodotto surgelato.", price: "€ 3,00", tags: [] },
                    { name: "Fritto misto di verdure", description: "Prodotto surgelato.", price: "€ 3,00", tags: ["vegetariano"] },
                    { name: "Patatina fritta piccola", description: "Prodotto surgelato.", price: "€ 2,50", tags: ["vegetariano"] },
                    { name: "Patatina fritta grande", description: "Prodotto surgelato.", price: "€ 3,50", tags: ["vegetariano"] },
                    { name: "Alette di pollo", description: "5 pezzi. Prodotto surgelato.", price: "€ 5,00", tags: [] },
                    { name: "Arrosticini di pecora", description: "30 gr, € 1,20 al pezzo (minimo 5 pezzi).", price: "€ 1,20", tags: [] }
                ]
            },
            {
                name: "Panini",
                note: "Supplemento contorni aggiunti € 0,50 l'uno",
                items: [
                    { name: "Hot Dog", description: "", price: "€ 4,00", tags: [] },
                    { name: "Hamburger completo", description: "Insalata, pomodoro, patatine, bacon.", price: "€ 8,00", tags: [] },
                    { name: "Panino con Salsiccia", description: "", price: "€ 4,50", tags: [] },
                    { name: "Panino con salsiccia, friarelli e samorza", description: "", price: "€ 7,50", tags: [] },
                    { name: "Kebab", description: "", price: "€ 5,50", tags: [] }
                ]
            }
        ]
    },

    gallery: {
        label: "GALLERIA",
        title: "L'atmosfera di Pastime",
        images: [
            { src: "assets/images/gallery-1.jpg", alt: "La sala di Pastime apparecchiata" },
            { src: "assets/images/gallery-2.jpg", alt: "Dettaglio della sala con luci calde" },
            { src: "assets/images/gallery-3.jpg", alt: "Tavolo apparecchiato da Pastime" },
            { src: "assets/images/gallery-4.jpg", alt: "Pizza appena sfornata da Pastime" },
            { src: "assets/images/gallery-5.jpg", alt: "Angolo accogliente del locale" },
            { src: "assets/images/gallery-6.jpg", alt: "Dettaglio della sala da pranzo" }
        ]
    },

    reviews: {
        label: "RECENSIONI",
        title: "Cosa dicono i nostri ospiti",
        items: [ // TODO: sostituire con recensioni reali (es. da Google) con consenso
            { stars: 5, text: "La Pastime è la nostra pizza preferita, e l'AntiPastime è d'obbligo.", author: "Ospite di Pastime" },
            { stars: 5, text: "Locale accogliente, si mangia bene e si spende il giusto.", author: "Ospite di Pastime" },
            { stars: 5, text: "Pizze ottime anche alla pala. Torneremo presto.", author: "Ospite di Pastime" }
        ]
    },

    reservation: {
        label: "TI ASPETTIAMO",
        title: "Prenota il tuo tavolo",
        description:
            "Chiamaci o compila il modulo nella pagina contatti: ti risponderemo al più presto."
    },

    contactPage: {
        label: "CONTATTI",
        title: "Vieni a trovarci",
        description:
            "Prenota un tavolo o chiedici informazioni: ti aspettiamo da Pastime.",
        formTitle: "Richiedi una prenotazione",
        formNote:
            "Compila il modulo: ti ricontatteremo per confermare la disponibilità. Per urgenze, chiamaci direttamente.",
        seo: {
            title: "Contatti e prenotazioni | Pastime",
            description:
                "Contatta Pastime, bar trattoria pizzeria: indirizzo, telefono, orari e modulo di richiesta prenotazione."
        }
    },

    contact: { // TODO: dati reali del locale
        phone: "+39 000 000 0000",
        email: "info@esempio.it",
        address: "Via Esempio 00",
        city: "00000 Città (PR)",
        whatsapp: "https://wa.me/390000000000",
        mapsUrl: "https://maps.google.com/?q=Pastime",
        vat: ""
    },

    social: { // TODO: URL reali o "" per nascondere
        instagram: "",
        facebook: "",
        tiktok: "",
        tripadvisor: "",
        google: ""
    },

    links: {
        home: "index.html",
        menu: "menu.html",
        reservation: "contatti.html",
        whatsapp: "https://wa.me/390000000000", // TODO
        googleMaps: "https://maps.google.com/?q=Pastime" // TODO
    },

    buttons: {
        heroPrimary: { text: "Scopri il menu", link: "menu.html" },
        heroSecondary: { text: "Prenota un tavolo", link: "contatti.html" },
        featuredMenu: { text: "Vedi il menu completo", link: "menu.html" },
        reservation: { text: "Prenota ora", link: "contatti.html" }
    },

    navbar: {
        reservation: { text: "Prenota", link: "contatti.html" }
    },

    openingHours: { // TODO: orari reali
        monday: "Chiuso",
        tuesday: "19:00 – 23:00",
        wednesday: "19:00 – 23:00",
        thursday: "19:00 – 23:00",
        friday: "19:00 – 23:30",
        saturday: "12:00 – 15:00 / 19:00 – 23:30",
        sunday: "12:00 – 15:00 / 19:00 – 23:00"
    },

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

    images: {
        logo: "assets/logo/logo-pastime.jpg", // logo ufficiale, non modificare
        hero: "assets/images/hero.jpg", // TODO: foto reale del locale
        about: "assets/images/about.jpg", // TODO: foto reale del locale
        fallback: "assets/images/fallback.jpg"
    }
};
