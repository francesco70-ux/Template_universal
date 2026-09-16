# Prototipo — Il Casale, Pizzoferrato

Demo commerciale FC Studio. Non è il sito ufficiale.

Apri `index.html` con un server locale (non in `file://`, altrimenti mappa e QR live possono fallire):

```bash
python3 -m http.server 8080 --directory demo/il-casale
```

Poi: http://127.0.0.1:8080/

## QR → URL fisso → menù

1. Si stampa **un solo QR**.
2. Il QR punta a un indirizzo che non cambia: `https://ilcasalepizzoferrato.it/menu.html` (dominio previsto, oggi libero).
3. Il contenuto del menù sta in `js/menu-data.js`.
4. Si aggiornano piatti, testi, foto e — quando ci sono — i prezzi **solo in quel file**. Il QR restà identico.

Il file `assets/qr/menu-qr.svg` è il QR di pubblicazione (dominio previsto). Sulla homepage, se la demo è servita in rete locale, compare anche un QR dell’URL attuale per provarlo dal telefono.

## Cosa è vero / cosa è placeholder

**Dati veri (analisi)**  
Nome, indirizzo Casale Pollice 4, telefono 0872 946242, orari Google (sab 12–23, dom 12–16, lun–ven chiuso), recensioni citate, piatti citati, Carmine / Fernanda / Michele, rating Google 4,6 (661) e Tripadvisor 4,4 (239, 1°/13), Facebook e Tripadvisor linkati.

**Non inventato, quindi assente o dichiarato**  
Anno di apertura, storia di famiglia, email, WhatsApp, handle Instagram, prezzi ufficiali, allergeni, prodotti congelati, carta dei vini, categoria pizze (era un errore di directory), P.IVA.

**Immagini**  
Tutte sostitutive (generate per la direzione visiva). Badge «Immagine sostitutiva». Da rimpiazzare con shooting reale: vetrata, sala, 12 piatti, staff, esterni.

**Modulo prenotazione**  
Non invia nulla. In produzione: WhatsApp Business o mail del titolare.

## Dove si modifica

| Cosa | File |
|---|---|
| Nome, orari, telefono, social | `js/config.js` |
| Piatti, descrizioni, foto, prezzi | `js/menu-data.js` |
| Testi di pagina | `index.html` |
| Stile sito | `css/site.css` |
| Stile menù | `css/menu.css` |
| QR di pubblicazione | `assets/qr/` (rigenerare se cambia il dominio, non se cambia il menù) |
