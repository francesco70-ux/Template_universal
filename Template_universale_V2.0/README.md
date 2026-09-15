# FC Studio — Universal Template V2.0

Template base per i siti dei clienti (hospitality / ristorazione).
Zero dipendenze: HTML + CSS + JS vanilla, font auto-ospitati, nessuna build.

## Creare il sito di un cliente in 30 minuti

1. Duplica questa cartella e rinominala con il nome del cliente.
2. Apri `js/config.js`: tutti i campi da personalizzare sono marcati con **✏️**.
   Sostituisci nome, contatti, orari, testi, piatti, prezzi e link.
   **Non inventare dati**: usa solo informazioni fornite dal cliente.
3. Sostituisci gli asset in `assets/` mantenendo nomi e proporzioni:
   - `logo/logo.svg` — logo ufficiale del cliente (non modificare mai un logo fornito)
   - `images/hero.jpg` — min 1600 px di larghezza
   - `images/about.jpg`, `dish-*.jpg`, `gallery-*.jpg`
   - `icons/feature-*.svg` — oppure riusa quelle neutre già presenti
4. Aggiorna `siteUrl` in `config.js`, i `canonical` / `og:url` nelle tre
   pagine HTML, `robots.txt` e `sitemap.xml` con il dominio reale.
5. Verifica la checklist QA qui sotto e pubblica.

## Struttura

```
index.html        homepage (hero, chi siamo, features, menu vetrina, gallery, recensioni, CTA)
menu.html         menu completo, generato da config.menu.categories
contatti.html     recapiti, orari, mappa-link e form di richiesta prenotazione
css/style.css     design system condiviso (+ font self-hosted in assets/fonts/)
css/menu.css      stili dedicati alla pagina menu
js/config.js      UNICO file contenuti: testi, prezzi, contatti, colori, link
js/script.js      logica: popolamento DOM, menu mobile, reveal, form, SEO dinamica
assets/           images · icons · logo · favicon.svg · fonts (Cormorant Garamond + Jost, OFL)
robots.txt        sitemap.xml
```

## Contratto dati (non rompere queste chiavi senza aggiornare script.js)

`sections` · `name/type/slogan/description` · `siteUrl/locale` · `seo`
`about` · `features.items[]` · `featuredMenu.items[]` · `menu.categories[]`
`gallery.images[]` · `reviews.items[]` · `reservation` · `contactPage`
`contact` · `social` · `links` · `buttons` · `navbar` · `openingHours`
`colors` (→ variabili CSS `--color-*`) · `images`

Attributi HTML letti da `script.js`: `data-config` · `data-button`
`data-navbar-button` · `data-section-link` · `data-social` ·
`.menu-link` `.phone-link` `.email-link` `.maps-link` `.whatsapp-link`.

## Note tecniche

- I testi SEO principali sono scritti **anche nell'HTML statico**: i crawler
  che non eseguono JS vedono comunque title, description e contenuti.
  Quando cambi `config.js`, mantieni allineati gli statici nelle pagine.
- Il reveal on scroll è attivo solo con JS (`html.js`): senza JS tutto resta visibile.
- Le animazioni sono disattivate automaticamente con `prefers-reduced-motion`.
- Il form prenotazioni apre WhatsApp se `links.whatsapp` è configurato
  (qualsiasi URL senza "000000"), altrimenti mostra conferma con richiamo.
- Foto segnaposto: piatti e pizza da Unsplash (licenza gratuita,
  da sostituire con scatti reali del cliente prima della consegna).

## Checklist QA prima di consegnare

- [ ] Validazione HTML senza errori (https://validator.w3.org)
- [ ] Console browser senza errori su home, menu e contatti
- [ ] Nessun file a 0 byte in `assets/`
- [ ] Lighthouse mobile ≥ 90 su Performance, A11y, Best Practices, SEO
- [ ] Test tastiera: skip-link, menu mobile, form, focus sempre visibile
- [ ] Responsive 360 / 768 / 1280 px: nessun overflow orizzontale
- [ ] `title`, `description`, canonical e Open Graph con dominio reale
- [ ] Favicon visibile, anno footer automatico, link tel/mail/mappe funzionanti

## Changelog

- **V2.0** — Pagine `menu.html` + `contatti.html`, `menu.css`, SEO statica + JSON-LD,
  form prenotazione accessibile, social estesi, P.IVA footer, font self-hosted,
  reveal sicuro senza JS, `prefers-reduced-motion`, fix footer/`.btn`/hamburger,
  sostituzione asset corrotti, README + robots + sitemap.
- **V1.0** — Homepage configurabile via `config.js` (FC Studio).
