/*
============================================================
PASTIME — FILE: menu-data.js

Menu completo del locale, trascritto dal menu cartaceo.
Viene renderizzato da js/menu.js nella pagina menu.html.

STRUTTURA:
- categories[]: una voce per categoria (ordine = ordine in pagina)
  - id: usato per gli ancoraggi (#antipasti)
  - name: titolo della categoria
  - note: nota mostrata sotto il titolo (opzionale)
  - groups[]: sottogruppi opzionali (es. "Chitarrina" con più condimenti)
  - items[]: { name, description, price, notes }
      notes: array di simboli legenda, es. ["frozen"] o ["availability"]

- legend: spiegazione dei simboli usati nelle note.

Per aggiornare un prezzo o aggiungere un piatto basta modificare
questo file: nessuna modifica all'HTML è necessaria.
============================================================
*/

const menuData = {

    legend: {
        frozen: { symbol: "**", text: "prodotto surgelato" },
        availability: { symbol: "*", text: "prodotto non sempre disponibile" }
    },

    categories: [

        {
            id: "antipasti",
            name: "Antipasti",
            items: [
                { name: "Antipasto della casa", description: "Salumi, formaggi, bruschette", price: "7,00" },
                { name: "AntiPastime", description: "Salumi, formaggi, bruschette, antipasti caldi", price: "9,00" },
                { name: "Caprese di bufala", description: "Mozzarella di bufala, rucola, pomodoro", price: "9,00" },
                { name: "Carpaccio di Black Angus", description: "Black Angus affumicato, rucola, pomodorini, grana", price: "9,00" }
            ]
        },

        {
            id: "stuzzicheria",
            name: "Stuzzicheria",
            items: [
                { name: "Bruschette miste", description: "4 pezzi", price: "3,00", notes: ["frozen"] },
                { name: "Crocchette di patate", description: "4 pezzi", price: "3,00", notes: ["frozen"] },
                { name: "Chele di granchio", description: "2 pezzi", price: "2,40", notes: ["frozen"] },
                { name: "Olive all'ascolana", description: "4 pezzi", price: "3,00", notes: ["frozen"] },
                { name: "Fritto misto di verdure", price: "3,00", notes: ["frozen"] },
                { name: "Patatina fritta piccola", price: "2,50", notes: ["frozen"] },
                { name: "Patatina fritta grande", price: "3,50", notes: ["frozen"] },
                { name: "Alette di pollo", description: "5 pezzi", price: "5,00", notes: ["frozen"] },
                { name: "Arrosticini di pecora", description: "30 gr al pezzo, minimo 5 pezzi", price: "1,20" }
            ]
        },

        {
            id: "primi",
            name: "Primi piatti",
            groups: [
                {
                    name: "Chitarrina",
                    items: [
                        { name: "Ragù di carne", price: "7,50" },
                        { name: "Ragù di cinghiale", price: "8,50" }
                    ]
                },
                {
                    name: "Tagliatella",
                    items: [
                        { name: "Porcini e salsiccia", price: "8,00" },
                        { name: "Porcini e tartufo", price: "9,00" }
                    ]
                },
                {
                    name: "Gnocchi di patate",
                    notes: ["availability"],
                    items: [
                        { name: "Ragù di carne", price: "8,00" }
                    ]
                },
                {
                    name: "Ravioli ricotta e spinaci",
                    items: [
                        { name: "Ragù di carne", price: "7,50" },
                        { name: "Burro e salvia", price: "7,50" },
                        { name: "Limone", price: "7,50" }
                    ]
                },
                {
                    name: "Ravioli funghi porcini",
                    items: [
                        { name: "Ragù di carne", price: "7,50" },
                        { name: "Burro e salvia", price: "7,50" }
                    ]
                }
            ]
        },

        {
            id: "secondi",
            name: "Secondi piatti",
            items: [
                { name: "Agnello", price: "14,00" },
                { name: "Bistecca di maiale", price: "7,50" },
                { name: "Bistecca di vitello", description: "400 gr", price: "20,00" },
                { name: "Tagliata di entrecôte", description: "300 gr", price: "18,00" },
                { name: "Salsiccia", description: "2 pezzi", price: "7,00" },
                { name: "Arrosto misto", price: "16,00" },
                { name: "Arrosticini di pecora", description: "30 gr al pezzo, minimo 5 pezzi", price: "1,20" },
                { name: "Cotoletta di pollo", price: "7,50" },
                { name: "Petto di pollo", description: "300 gr", price: "7,00" },
                { name: "Formaggio fresco in padella", price: "6,50" },
                { name: "Scaloppine di maiale ai funghi", price: "8,50" }
            ]
        },

        {
            id: "contorni",
            name: "Contorni",
            items: [
                { name: "Insalata verde", price: "3,00" },
                { name: "Insalata mista", price: "4,00" },
                { name: "Patatina fritta grande", price: "3,50", notes: ["frozen"] },
                { name: "Patatina fritta piccola", price: "2,50", notes: ["frozen"] },
                { name: "Friarelli alla napoletana", price: "4,00" },
                { name: "Cicoria", price: "4,00" },
                { name: "Peperoni grigliati", price: "5,00" },
                { name: "Melanzane grigliate", price: "5,00" },
                { name: "Zucchine grigliate", price: "5,00" },
                { name: "Misto di verdure grigliate", price: "6,00" }
            ]
        },

        {
            id: "pizze-rosse",
            name: "Pizze rosse",
            note: "Le pizze sono disponibili anche alla pala.",
            items: [
                { name: "Marinara", description: "Pomodoro, aglio, origano", price: "5,00" },
                { name: "Margherita", description: "Pomodoro, mozzarella, basilico", price: "5,00" },
                { name: "Regina Margherita", description: "Pomodoro, mozzarella, mozzarella di bufala, basilico", price: "8,00" },
                { name: "Pastime", description: "Pomodoro, mozzarella, rucola, prosciutto crudo, scaglie di grana", price: "8,00", highlight: true },
                { name: "Mari e Monti", description: "Pomodoro, mozzarella, funghi, gamberetti", price: "9,00" },
                { name: "Boscaiola", description: "Pomodoro, mozzarella, funghi", price: "7,50" },
                { name: "Capricciosa", description: "Pomodoro, mozzarella, funghi, carciofini, olive, prosciutto cotto", price: "7,50" },
                { name: "4 Stagioni", description: "Pomodoro, mozzarella, funghi, carciofini, olive, prosciutto crudo", price: "7,50" },
                { name: "Diavola", description: "Pomodoro, mozzarella, salame piccante", price: "7,00" },
                { name: "Napoli", description: "Pomodoro, mozzarella, alici", price: "7,00" },
                { name: "Americana", description: "Pomodoro, mozzarella, würstel, patatine fritte", price: "6,50" },
                { name: "Boe", description: "Pomodoro, mozzarella, prosciutto cotto, funghi", price: "7,50" },
                { name: "Pomi", description: "Pomodoro, mozzarella, prosciutto cotto, origano", price: "7,00" },
                { name: "Vivi", description: "Pomodoro, mozzarella", price: "7,00" },
                { name: "Pupizza", description: "Pomodoro, mozzarella, patate, origano", price: "7,00" },
                { name: "Pigro", description: "Pomodoro, mozzarella, salsiccia, funghi, tartufo", price: "8,50" },
                { name: "Alice", description: "Pomodoro, mozzarella, olive, alici", price: "7,50" },
                { name: "Parmigiana", description: "Pomodoro, mozzarella, melanzane, parmigiano", price: "7,00" },
                { name: "Valtellinese", description: "Pomodoro, mozzarella, rucola, pomodorini, bresaola, scaglie di grana", price: "8,50" },
                { name: "Il Conte", description: "Pomodoro, mozzarella, gorgonzola, salame piccante", price: "7,50" },
                { name: "Calzone ripieno", description: "Pomodoro, mozzarella, prosciutto cotto", price: "7,00" }
            ]
        },

        {
            id: "pizze-bianche",
            name: "Pizze bianche",
            note: "Le pizze sono disponibili anche alla pala.",
            items: [
                { name: "Pastime", description: "Mozzarella, mozzarella di bufala, rucola, pomodorini, prosciutto crudo", price: "8,50", highlight: true },
                { name: "Tartufona", description: "Mozzarella, funghi, tartufo", price: "8,00" },
                { name: "Patate e salsiccia", description: "Mozzarella, patate, salsiccia", price: "7,50" },
                { name: "Pupizza", description: "Mozzarella, patate, origano", price: "7,00" },
                { name: "Noci e Gorgonzola", description: "Mozzarella, gorgonzola, noci", price: "8,00" },
                { name: "Norcina", description: "Mozzarella, panna, salsiccia, tartufo", price: "8,00" },
                { name: "Mimosa", description: "Mozzarella, panna, mais", price: "7,00" },
                { name: "Tonno e Cipolla", description: "Mozzarella, tonno, cipolla", price: "7,50" },
                { name: "Green Pass", description: "Mozzarella, crema di pistacchio, mortadella, granella di pistacchio", price: "8,00" },
                { name: "Pizza Kebab", description: "Focaccia ripiena con insalata, pomodoro, kebab, salse a scelta", price: "9,00" },
                { name: "Deliziosa", description: "Mozzarella, gamberi, aglio, salsa tartara", price: "8,00" },
                { name: "Azzurra", description: "Focaccia con mozzarella, rucola, pomodorini, olive", price: "7,00" },
                { name: "4 Formaggi", description: "Mozzarella, gorgonzola, edamer, parmigiano", price: "7,50" },
                { name: "Vegetariana", description: "Mozzarella, zucchine, peperoni, melanzane", price: "7,00" },
                { name: "Bufalotta", description: "Mozzarella, mozzarella di bufala, rucola, pomodorini", price: "8,00" },
                { name: "A Silvia", description: "Focaccia ripiena con rucola, pomodorini, mozzarella di bufala, prosciutto cotto", price: "8,00" },
                { name: "Peperoni e Alici", description: "Mozzarella, peperoni, alici", price: "7,00" },
                { name: "Salsiccia e Friarelli", description: "Mozzarella, salsiccia, friarelli", price: "7,50" },
                { name: "Scamorza e Speck", description: "Mozzarella, scamorza, speck", price: "7,50" },
                { name: "Cotto e Patate", description: "Mozzarella, patate, prosciutto cotto", price: "7,50" }
            ]
        },

        {
            id: "panini",
            name: "Panini",
            note: "Supplemento contorni aggiunti € 0,50 l'uno.",
            items: [
                { name: "Hot Dog", price: "4,00" },
                { name: "Hamburger completo", description: "Insalata, pomodoro, patatine, bacon", price: "8,00" },
                { name: "Panino con salsiccia", price: "4,50" },
                { name: "Panino con salsiccia, friarelli e scamorza", price: "7,50" },
                { name: "Kebab", price: "5,50" }
            ]
        }
    ]
};
