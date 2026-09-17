# Prototipo — Il Casale, Pizzoferrato

Demo commerciale FC Studio. Non è il sito ufficiale.

Proposta di stile **rustico elegante**: beige, sfumature di legno, verde della Majella, motivi dorati leggeri. Le foto di sala e piatti sono di **riferimento** (altri ristoranti / Unsplash), per far vedere al cliente come potrebbe venire il sito. Pizzoferrato e Majella sono foto reali.

## Pagine

| Pagina | File | Note |
|---|---|---|
| Home | `index.html` | Hero, percorso, paesaggio, prenota |
| Chi siamo | `chi-siamo.html` | Locale + territorio |
| Menù (sito) | `carta.html` | Carta da sito, **non** è il QR |
| Recensioni | `recensioni.html` | Citazioni vere da analisi |
| Contatti | `contatti.html` | Telefono, mappa, modulo demo |
| Menù digitale (QR) | `menu.html` | Da tavolo, pensato per il telefono |
| Privacy | `privacy.html` | Segnaposto |

Navigazione del sito: Home · Chi siamo · Menù · Recensioni · Contatti.  
Il QR sui tavoli apre `menu.html` (stesso stile, interfaccia mobile).

## Porte di anteprima

Due numeri di porta, così sito e menù da tavolo si aprono separati.

| Cosa | Porta | Indirizzo locale | Cosa si vede |
|---|---|---|---|
| Sito web | **8080** | http://127.0.0.1:8080 | Home, chi siamo, menù, recensioni, contatti |
| Menù QR | **8081** | http://127.0.0.1:8081 | `menu.html` (si apre subito, senza altri click) |

Avvio:

```bash
python3 demo/il-casale/serve.py
```

Se la 8080 è già occupata, resta su quella porta il sito; lo script alza comunque la **8081** per il menù.

Dal telefono, sulla stessa rete, si usa l’IP del computer al posto di `127.0.0.1`. In produzione il QR non avrà un numero di porta: punterà a `https://ilcasalepizzoferrato.it/menu.html`.

## Preview live in Cursor

Il sito si vede **dentro Cursor**, senza pubblicare su GitHub e senza avviare un server a mano.

1. Apri questa cartella del repo in Cursor (non un singolo file).
2. Se compare la richiesta, installa l’estensione **Live Preview** (Microsoft, `ms-vscode.live-server`).
3. Apri `demo/il-casale/index.html` o `demo/il-casale/menu.html`.
4. Clicca l’icona **preview** in alto a destra, oppure tasto destro → **Show Preview**.

I link relativi tra le pagine funzionano se la root del server è `demo/il-casale`.

## QR → URL fisso → menù

1. Si stampa **un solo QR** (va sui tavoli).
2. Il QR punta a un indirizzo che non cambia: `https://ilcasalepizzoferrato.it/menu.html`.
3. Il contenuto del menù sta in `js/menu-data.js`.
4. Si aggiornano piatti, testi, foto e — quando ci sono — i prezzi **solo in quel file**. Il QR resta identico.

Il file `assets/qr/menu-qr.svg` è il QR di pubblicazione (dominio previsto).

## Cosa è vero / cosa è placeholder

**Dati veri (analisi)**  
Nome, indirizzo Casale Pollice 4, telefono 0872 946242, recensioni citate, piatti citati, Carmine / Fernanda / Michele, rating Google 4,6 (661) e Tripadvisor 4,4 (239, 1°/13), Facebook e Tripadvisor linkati.

**Non inventato, quindi assente o dichiarato**  
Orari (Google e gli ospiti non coincidono), anno di apertura, storia di famiglia, email, WhatsApp, handle Instagram, prezzi ufficiali, allergeni, prodotti congelati, carta dei vini, categoria pizze, P.IVA.

**Testi**  
Frasi di prova, in attesa di quelle ufficiali del titolare. Non sono inventati orari, prezzi, mail o WhatsApp.

**Immagini**  
- Riferimento stile: `assets/img/ref/` (Unsplash, altri ristoranti). Elenco in `assets/img/ref/CREDITS.txt`.  
- Foto reali del territorio: Pizzoferrato e Majella (Wikimedia).  
- Alcuni piatti nel menù QR: foto degli ospiti del locale.  
Niente foto generate con l’AI.

**Modulo prenotazione**  
Non invia nulla. In produzione: WhatsApp Business o mail del titolare.

## Foto e licenze

| File | Cosa ritrae | Fonte |
|---|---|---|
| `assets/img/ref/*` | Sala, pasta, brace, dolci… di altri locali | Unsplash, uso di riferimento |
| `hero-veranda.jpg`, `sala-*`, `esterno.jpg`, `terrazza.jpg`, `dish-*.jpg` | Il Casale (ospiti) | Foto pubbliche degli ospiti |
| `pizzoferrato.jpg` | Il borgo | Licia Missori / Wikimedia, CC BY-SA 3.0 |
| `pizzoferrato-piazza.jpg` | Piazza e chiesa di San Rocco | Cristina Morettini 95 / Wikimedia, CC BY-SA 4.0 |
| `majella.jpg` | Monte Tavola Rotonda | Davipar / Wikimedia, pubblico dominio |
| `majella-inverno.jpg` | Massiccio della Majella | Matulus / Wikimedia, CC BY-SA 4.0 |

## Dove si modifica

| Cosa | File |
|---|---|
| Nome, telefono, social | `js/config.js` |
| Piatti, descrizioni, foto, prezzi | `js/menu-data.js` |
| Header e footer | `js/layout.js` |
| Testi di pagina | `index.html`, `chi-siamo.html`, `carta.html`, `recensioni.html`, `contatti.html` |
| Stile sito | `css/site.css` |
| Stile menù QR | `css/menu.css` |
| QR di pubblicazione | `assets/qr/` (rigenerare se cambia il dominio, non se cambia il menù) |
