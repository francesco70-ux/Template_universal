# Prototipo — Il Casale, Pizzoferrato

Demo commerciale FC Studio. Non è il sito ufficiale.

## Preview live in Cursor

Il sito si vede **dentro Cursor**, senza pubblicare su GitHub e senza avviare un server a mano.

1. Apri questa cartella del repo in Cursor (non un singolo file).
2. Se compare la richiesta, installa l’estensione **Live Preview** (Microsoft, `ms-vscode.live-server`). È quella nativa di VS Code/Cursor per HTML statico: server locale automatico + browser integrato.
3. Apri `demo/il-casale/index.html` o `demo/il-casale/menu.html`.
4. Clicca l’icona **preview** in alto a destra dell’editor, oppure tasto destro sul file → **Show Preview**. Dalla Command Palette: **Live Preview: Show Preview**.

La preview si apre a fianco del codice. I link relativi (`index.html` ↔ `menu.html` ↔ `privacy.html`) funzionano perché la root del server è `demo/il-casale`. Ogni **salvataggio** ricarica la pagina.

Per il menù: stessa preview, oppure naviga dal sito con «Menù» / «Scopri il menù».

«Prenota» porta alla sezione contatti (telefono, mappa, modulo). «Chiama» e il numero `0872 946242` usano `tel:`: sul computer non partono una chiamata, sul telefono sì.

## QR → URL fisso → menù

1. Si stampa **un solo QR**.
2. Il QR punta a un indirizzo che non cambia: `https://ilcasalepizzoferrato.it/menu.html` (dominio previsto, oggi libero).
3. Il contenuto del menù sta in `js/menu-data.js`.
4. Si aggiornano piatti, testi, foto e — quando ci sono — i prezzi **solo in quel file**. Il QR restà identico.

Il file `assets/qr/menu-qr.svg` è il QR di pubblicazione (dominio previsto). Sulla homepage, se la demo è servita in rete locale, compare anche un QR dell’URL attuale per provarlo dal telefono.

## Cosa è vero / cosa è placeholder

**Dati veri (analisi)**  
Nome, indirizzo Casale Pollice 4, telefono 0872 946242, recensioni citate, piatti citati, Carmine / Fernanda / Michele, rating Google 4,6 (661) e Tripadvisor 4,4 (239, 1°/13), Facebook e Tripadvisor linkati.

**Non inventato, quindi assente o dichiarato**  
Orari (Google e gli ospiti non coincidono), anno di apertura, storia di famiglia, email, WhatsApp, handle Instagram, prezzi ufficiali, allergeni, prodotti congelati, carta dei vini, categoria pizze, P.IVA.

**Immagini**  
Foto reali del locale (ospiti, da shooting ufficiale) e di Pizzoferrato / Majella (Wikimedia Commons, CC). Niente foto generate con l’AI. Crediti in calce alle foto.

**Modulo prenotazione**  
Non invia nulla. In produzione: WhatsApp Business o mail del titolare.

## Foto e licenze

| File | Cosa ritrae | Fonte |
|---|---|---|
| `hero-veranda.jpg`, `sala-*`, `esterno.jpg`, `terrazza.jpg`, `dish-*.jpg` | Il Casale (sala, veranda, piatti) | Foto degli ospiti, raccolte pubblicamente |
| `pizzoferrato.jpg` | Il borgo | Licia Missori / Wikimedia, CC BY-SA 3.0 |
| `pizzoferrato-piazza.jpg` | Piazza e chiesa di San Rocco | Cristina Morettini 95 / Wikimedia, CC BY-SA 4.0 |
| `majella.jpg` | Monte Tavola Rotonda | Davipar / Wikimedia, pubblico dominio |
| `majella-inverno.jpg` | Massiccio della Majella | Matulus / Wikimedia, CC BY-SA 4.0 |

## Dove si modifica

| Cosa | File |
|---|---|
| Nome, telefono, social | `js/config.js` |
| Piatti, descrizioni, foto, prezzi | `js/menu-data.js` |
| Testi di pagina | `index.html` |
| Stile sito | `css/site.css` |
| Stile menù | `css/menu.css` |
| QR di pubblicazione | `assets/qr/` (rigenerare se cambia il dominio, non se cambia il menù) |
