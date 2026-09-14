/*
============================================================
FC STUDIO — RESTAURANT TEMPLATE V1.0
FILE: script.js

Questo file contiene la LOGICA del sito.

REGOLA PRINCIPALE:
- index.html = struttura
- config.js = contenuti e impostazioni
- script.js = comportamento e collegamento tra i due

Per un nuovo cliente, nella maggior parte dei casi NON è
necessario modificare questo file.
============================================================
*/


/* ============================================================
   1. FUNZIONE DI LETTURA DELLA CONFIGURAZIONE

   Permette di leggere anche proprietà annidate di config.js.

   Esempio:
   getConfigValue("contact.phone")
   restituisce il numero di telefono.
============================================================ */

function getConfigValue(path) {

    return path
        .split(".")
        .reduce(
            function (object, key) {

                return object
                    ? object[key]
                    : undefined;

            },
            restaurantConfig
        );
}


/* ============================================================
   2. TESTI DINAMICI

   Cerca tutti gli elementi che possiedono:
   data-config="..."

   e inserisce automaticamente il valore corrispondente
   presente in config.js.
============================================================ */

const configElements =
    document.querySelectorAll("[data-config]");

configElements.forEach(function (element) {

    const configPath =
        element.dataset.config;

    const value =
        getConfigValue(configPath);

    if (value !== undefined) {

        element.textContent = value;
    }
});


/* ============================================================
   3. SEO

   Aggiorna automaticamente:
   - titolo della scheda del browser
   - meta description

   I dati vengono presi dalla sezione seo di config.js.
============================================================ */

const seoTitle =
    getConfigValue("seo.title");

const seoDescription =
    getConfigValue("seo.description");

if (seoTitle) {

    document.title = seoTitle;
}

const metaDescription =
    document.querySelector(
        'meta[name="description"]'
    );

if (
    metaDescription &&
    seoDescription
) {

    metaDescription.setAttribute(
        "content",
        seoDescription
    );
}


/* ============================================================
   4. LOGO

   Se config.js contiene un'immagine logo:
   - mostra il logo
   - nasconde il testo di fallback

   Se l'immagine non viene caricata, viene mostrato
   nuovamente il nome del locale.
============================================================ */

const logoText =
    document.querySelector(".logo-text");

const logoImage =
    document.querySelector(".logo-image");

const logoPath =
    getConfigValue("images.logo");

if (
    logoImage &&
    logoPath
) {

    logoImage.src = logoPath;

    logoImage.alt =
        getConfigValue("name") || "Logo";

    logoImage.style.display = "block";

    if (logoText) {

        logoText.style.display = "none";
    }

    logoImage.addEventListener(
        "error",
        function () {

            logoImage.style.display = "none";

            if (logoText) {

                logoText.textContent =
                    getConfigValue("name") ||
                    "Nome del locale";

                logoText.style.display = "block";
            }
        }
    );
}


/* ============================================================
   5. IMMAGINE ABOUT

   Inserisce automaticamente la fotografia configurata
   nella sezione "Chi siamo".

   Se l'immagine non esiste, utilizza il fallback.
============================================================ */

const aboutImage =
    document.querySelector(
        ".about-image-element"
    );

const aboutImagePath =
    getConfigValue("images.about");

const fallbackImage =
    getConfigValue("images.fallback");

if (
    aboutImage &&
    aboutImagePath
) {

    aboutImage.src =
        aboutImagePath;

    aboutImage.alt =
        (getConfigValue("name") || "Locale") +
        " - " +
        (getConfigValue("about.title") || "Chi siamo");

    aboutImage.addEventListener(
        "error",
        function () {

            if (fallbackImage) {

                aboutImage.src =
                    fallbackImage;
            }
        }
    );
}


/* ============================================================
   6. HERO

   Imposta automaticamente l'immagine di sfondo del Hero.

   Prima verifica che l'immagine configurata esista.
   Se non viene caricata, utilizza automaticamente il fallback.

   L'overlay scuro viene applicato sopra la fotografia
   per mantenere leggibili i testi.
============================================================ */

const hero =
    document.querySelector(".hero");

const heroImage =
    getConfigValue("images.hero");

if (
    hero &&
    heroImage
) {

    const testImage =
        new Image();

    testImage.onload =
        function () {

            hero.style.backgroundImage =
                `
                linear-gradient(
                    rgba(0, 0, 0, 0.48),
                    rgba(0, 0, 0, 0.48)
                ),
                url("${heroImage}")
                `;
        };

    testImage.onerror =
        function () {

            if (fallbackImage) {

                hero.style.backgroundImage =
                    `
                    linear-gradient(
                        rgba(0, 0, 0, 0.48),
                        rgba(0, 0, 0, 0.48)
                    ),
                    url("${fallbackImage}")
                    `;
            }
        };

    testImage.src =
        heroImage;
}

/* ============================================================
   7. COLORI

   Trasforma automaticamente i colori presenti in config.js
   nelle variabili CSS --color-*.

   Esempio:

   primaryDark
   diventa:
   --color-primary-dark
============================================================ */

const root =
    document.documentElement;

const colors =
    restaurantConfig.colors;

if (colors) {

    Object.keys(colors).forEach(
        function (colorName) {

            const cssVariable =
                "--color-" +
                colorName
                    .replace(
                        /([A-Z])/g,
                        "-$1"
                    )
                    .toLowerCase();

            root.style.setProperty(
                cssVariable,
                colors[colorName]
            );
        }
    );
}


/* ============================================================
   8. PUNTI DI FORZA

   Genera automaticamente le card della sezione Features.

   Ogni card può contenere:
   - immagine/icona
   - titolo
   - descrizione
============================================================ */

const featuresContainer =
    document.querySelector(
        ".features-grid"
    );

const featuresItems =
    getConfigValue(
        "features.items"
    );

if (
    featuresContainer &&
    Array.isArray(featuresItems)
) {

    featuresContainer.innerHTML = "";

    featuresItems.forEach(
        function (feature) {

            const article =
                document.createElement(
                    "article"
                );

            article.className =
                "feature-card";


            /* Immagine / icona */

            const icon =
                document.createElement(
                    "div"
                );

            icon.className =
                "feature-icon";

            const iconImage =
                document.createElement(
                    "img"
                );

            iconImage.src =
                feature.icon ||
                fallbackImage ||
                "";

            iconImage.alt =
                feature.title ||
                "Icona";

            iconImage.addEventListener(
                "error",
                function () {

                    if (fallbackImage) {

                        iconImage.src =
                            fallbackImage;
                    }
                }
            );

            icon.appendChild(
                iconImage
            );


            /* Titolo */

            const title =
                document.createElement(
                    "h3"
                );

            title.textContent =
                feature.title || "";


            /* Descrizione */

            const description =
                document.createElement(
                    "p"
                );

            description.textContent =
                feature.description || "";


            /* Inserimento nella card */

            article.appendChild(icon);

            article.appendChild(title);

            article.appendChild(
                description
            );

            featuresContainer.appendChild(
                article
            );
        }
    );
}


/* ============================================================
   9. MENU IN EVIDENZA

   Genera le card dei piatti/prodotti presenti nella
   configurazione.

   Il menu completo rimane separato nella pagina menu.html.
============================================================ */

const featuredMenuContainer =
    document.querySelector(
        ".featured-menu-grid"
    );

const featuredMenuItems =
    getConfigValue(
        "featuredMenu.items"
    );

if (
    featuredMenuContainer &&
    Array.isArray(featuredMenuItems)
) {

    featuredMenuContainer.innerHTML = "";

    featuredMenuItems.forEach(
        function (item) {

            const article =
                document.createElement(
                    "article"
                );

            article.className =
                "menu-card";


            /* Immagine del piatto */

            const imageWrapper =
                document.createElement(
                    "div"
                );

            imageWrapper.className =
                "menu-card-image";

            const image =
                document.createElement(
                    "img"
                );

            image.src =
                item.image ||
                fallbackImage ||
                "";

            image.alt =
                item.imageAlt ||
                item.name ||
                "Immagine del piatto";

            image.addEventListener(
                "error",
                function () {

                    if (fallbackImage) {

                        image.src =
                            fallbackImage;
                    }
                }
            );

            imageWrapper.appendChild(
                image
            );


            /* Contenuto */

            const content =
                document.createElement(
                    "div"
                );

            content.className =
                "menu-card-content";


            /* Nome */

            const title =
                document.createElement(
                    "h3"
                );

            title.textContent =
                item.name || "";


            /* Descrizione */

            const description =
                document.createElement(
                    "p"
                );

            description.textContent =
                item.description || "";


            /* Prezzo */

            const price =
                document.createElement(
                    "span"
                );

            price.className =
                "price";

            price.textContent =
                item.price || "";


            /* Costruzione della card */

            content.appendChild(title);

            content.appendChild(
                description
            );

            content.appendChild(price);

            article.appendChild(
                imageWrapper
            );

            article.appendChild(
                content
            );

            featuredMenuContainer.appendChild(
                article
            );
        }
    );
}


/* ============================================================
   10. GALLERIA

   Genera automaticamente le immagini della galleria
   a partire da config.js.
============================================================ */

const galleryContainer =
    document.querySelector(
        ".gallery-grid"
    );

const galleryImages =
    getConfigValue(
        "gallery.images"
    );

if (
    galleryContainer &&
    Array.isArray(galleryImages)
) {

    galleryContainer.innerHTML = "";

    galleryImages.forEach(
        function (galleryItem) {

            const figure =
                document.createElement(
                    "figure"
                );

            const image =
                document.createElement(
                    "img"
                );

            image.src =
                galleryItem.src ||
                fallbackImage ||
                "";

            image.alt =
                galleryItem.alt ||
                "Immagine del locale";

            image.addEventListener(
                "error",
                function () {

                    if (fallbackImage) {

                        image.src =
                            fallbackImage;
                    }
                }
            );

            figure.appendChild(
                image
            );

            galleryContainer.appendChild(
                figure
            );
        }
    );
}


/* ============================================================
   11. RECENSIONI

   Genera automaticamente le recensioni.

   Le stelle vengono create in base al numero configurato
   da 1 a 5.
============================================================ */

const reviewsContainer =
    document.querySelector(
        ".reviews-grid"
    );

const reviewItems =
    getConfigValue(
        "reviews.items"
    );

if (
    reviewsContainer &&
    Array.isArray(reviewItems)
) {

    reviewsContainer.innerHTML = "";

    reviewItems.forEach(
        function (review) {

            const article =
                document.createElement(
                    "article"
                );

            article.className =
                "review-card";


            /* Stelle */

            const stars =
                document.createElement(
                    "div"
                );

            stars.className =
                "review-stars";

            const starCount =
                Math.min(
                    5,
                    Math.max(
                        0,
                        Number(
                            review.stars
                        ) || 0
                    )
                );

            stars.textContent =
                "★".repeat(
                    starCount
                );


            /* Testo */

            const text =
                document.createElement(
                    "p"
                );

            text.textContent =
                review.text || "";


            /* Autore */

            const author =
                document.createElement(
                    "span"
                );

            author.className =
                "review-author";

            author.textContent =
                review.author || "";


            /* Costruzione della recensione */

            article.appendChild(stars);

            article.appendChild(text);

            article.appendChild(author);

            reviewsContainer.appendChild(
                article
            );
        }
    );
}


/* ============================================================
   12. TELEFONO

   Trasforma automaticamente il numero configurato in un
   link "tel:".

   Sul telefono il cliente potrà quindi toccare il numero
   per avviare una chiamata.
============================================================ */

const phoneLink =
    document.querySelector(
        ".phone-link"
    );

const phone =
    getConfigValue(
        "contact.phone"
    );

if (
    phoneLink &&
    phone
) {

    phoneLink.href =
        "tel:" +
        phone.replace(
            /\s/g,
            ""
        );
}


/* ============================================================
   13. EMAIL

   Trasforma l'indirizzo configurato in un link "mailto:".
============================================================ */

const emailLink =
    document.querySelector(
        ".email-link"
    );

const email =
    getConfigValue(
        "contact.email"
    );

if (
    emailLink &&
    email
) {

    emailLink.href =
        "mailto:" +
        email;
}


/* ============================================================
   14. SOCIAL

   Collega automaticamente i pulsanti Instagram e Facebook
   agli account configurati.
============================================================ */

const instagramLink =
    document.querySelector(
        ".instagram-link"
    );

const instagram =
    getConfigValue(
        "social.instagram"
    );

if (
    instagramLink &&
    instagram
) {

    instagramLink.href =
        instagram;
}


const facebookLink =
    document.querySelector(
        ".facebook-link"
    );

const facebook =
    getConfigValue(
        "social.facebook"
    );

if (
    facebookLink &&
    facebook
) {

    facebookLink.href =
        facebook;
}


/* ============================================================
   15. PULSANTI CONFIGURABILI

   Collega i pulsanti HTML alle impostazioni presenti
   in config.js.

   HTML:
   data-button="heroPrimary"

   Config:
   buttons.heroPrimary
============================================================ */

function setupButtons() {

    if (
        !restaurantConfig.buttons
    ) {

        return;
    }

    const buttons =
        document.querySelectorAll(
            "[data-button]"
        );

    buttons.forEach(
        function (button) {

            const buttonName =
                button.dataset.button;

            const config =
                restaurantConfig.buttons[
                    buttonName
                ];

            if (!config) {

                return;
            }

            if (config.text) {

                button.textContent =
                    config.text;
            }

            if (config.link) {

                button.href =
                    config.link;
            }
        }
    );
}

setupButtons();


/* ============================================================
   16. PULSANTE PRENOTAZIONE NAVBAR

   Gestisce separatamente il pulsante presente nella navbar.

   HTML:
   data-navbar-button="reservation"

   Config:
   navbar.reservation
============================================================ */

function setupNavbarButtons() {

    const navbarButtons =
        document.querySelectorAll(
            "[data-navbar-button]"
        );

    navbarButtons.forEach(
        function (button) {

            const buttonName =
                button.dataset.navbarButton;

            const config =
                getConfigValue(
                    "navbar." +
                    buttonName
                );

            if (!config) {

                return;
            }

            if (config.text) {

                button.textContent =
                    config.text;
            }

            if (config.link) {

                button.href =
                    config.link;
            }
        }
    );
}

setupNavbarButtons();


/* ============================================================
   17. MOBILE MENU

   Gestisce:
   - apertura del menu
   - chiusura
   - click fuori dal menu
   - tasto Escape
   - blocco dello scroll della pagina
============================================================ */

const mobileMenuButton =
    document.querySelector(
        ".mobile-menu-button"
    );

const navMenu =
    document.querySelector(
        ".nav-menu"
    );


function closeMobileMenu() {

    if (!navMenu) {

        return;
    }

    navMenu.classList.remove(
        "mobile-menu-open"
    );

    document.body.classList.remove(
        "menu-open"
    );

    if (mobileMenuButton) {

        mobileMenuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        mobileMenuButton.setAttribute(
            "aria-label",
            "Apri menu"
        );
    }
}


function openMobileMenu() {

    if (!navMenu) {

        return;
    }

    navMenu.classList.add(
        "mobile-menu-open"
    );

    document.body.classList.add(
        "menu-open"
    );

    if (mobileMenuButton) {

        mobileMenuButton.setAttribute(
            "aria-expanded",
            "true"
        );

        mobileMenuButton.setAttribute(
            "aria-label",
            "Chiudi menu"
        );
    }
}


if (
    mobileMenuButton &&
    navMenu
) {

    mobileMenuButton.addEventListener(
        "click",
        function () {

            const isOpen =
                navMenu.classList.contains(
                    "mobile-menu-open"
                );

            if (isOpen) {

                closeMobileMenu();

            } else {

                openMobileMenu();
            }
        }
    );


    /* Chiude il menu quando viene selezionata una voce. */

    const menuLinks =
        navMenu.querySelectorAll("a");

    menuLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    closeMobileMenu();
                }
            );
        }
    );


    /* Chiude il menu cliccando fuori dal menu. */

    document.addEventListener(
        "click",
        function (event) {

            const clickedInsideMenu =
                navMenu.contains(
                    event.target
                );

            const clickedButton =
                mobileMenuButton.contains(
                    event.target
                );

            if (
                !clickedInsideMenu &&
                !clickedButton
            ) {

                closeMobileMenu();
            }
        }
    );


    /* Chiude il menu con il tasto Escape. */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape"
            ) {

                closeMobileMenu();
            }
        }
    );
}


/* ============================================================
   18. SCROLL REVEAL

   Le sezioni vengono mostrate con una piccola animazione
   quando entrano nella viewport.

   IntersectionObserver è più efficiente rispetto a controllare
   continuamente la posizione con lo scroll.
============================================================ */

const revealSections =
    document.querySelectorAll(
        `
        .about,
        .features,
        .featured-menu,
        .gallery,
        .reviews,
        .reservation-cta
        `
    );

if (
    "IntersectionObserver" in window
) {

    const revealObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "section-visible"
                            );

                            revealObserver.unobserve(
                                entry.target
                            );
                        }
                    }
                );
            },
            {
                threshold: 0.12
            }
        );


    revealSections.forEach(
        function (section) {

            revealObserver.observe(
                section
            );
        }
    );

} else {

    /* Fallback per browser molto vecchi. */

    revealSections.forEach(
        function (section) {

            section.classList.add(
                "section-visible"
            );
        }
    );
}


/* ============================================================
   19. VISIBILITÀ DELLE SEZIONI

   Legge restaurantConfig.sections e nasconde automaticamente
   le sezioni impostate su false.

   Questo permette di usare lo stesso template anche per
   clienti che non vogliono determinate sezioni.
============================================================ */

function setupSectionVisibility() {

    const sectionMap = {

        about: ".about",

        features: ".features",

        featuredMenu: ".featured-menu",

        gallery: ".gallery",

        reviews: ".reviews",

        reservation: ".reservation-cta"
    };


    Object.keys(sectionMap).forEach(
        function (sectionName) {

            const enabled =
                restaurantConfig.sections &&
                restaurantConfig.sections[
                    sectionName
                ];

            const section =
                document.querySelector(
                    sectionMap[sectionName]
                );

            if (
                section &&
                enabled === false
            ) {

                section.style.display =
                    "none";
            }
        }
    );
}

setupSectionVisibility();


/* ============================================================
   20. LINK DELLE SEZIONI

   Se una sezione è disattivata, nasconde anche la relativa
   voce nella navbar.
============================================================ */

function setupSectionLinks() {

    const sectionLinks =
        document.querySelectorAll(
            "[data-section-link]"
        );

    sectionLinks.forEach(
        function (link) {

            const sectionName =
                link.dataset.sectionLink;

            const enabled =
                restaurantConfig.sections &&
                restaurantConfig.sections[
                    sectionName
                ];

            if (
                enabled === false
            ) {

                const parentItem =
                    link.closest("li");

                if (parentItem) {

                    parentItem.style.display =
                        "none";

                } else {

                    link.style.display =
                        "none";
                }
            }
        }
    );
}

setupSectionLinks();


/* ============================================================
   21. LINK WHATSAPP

   Predisposizione già presente nel template.

   Funziona automaticamente se viene utilizzato un elemento
   con classe .whatsapp-link.
============================================================ */

const whatsappLinks =
    document.querySelectorAll(
        ".whatsapp-link"
    );

const whatsapp =
    getConfigValue(
        "links.whatsapp"
    );

if (
    whatsappLinks.length > 0 &&
    whatsapp
) {

    whatsappLinks.forEach(
        function (link) {

            link.href =
                whatsapp;
        }
    );
}


/* ============================================================
   22. GOOGLE MAPS

   Predisposizione per eventuali elementi .maps-link.
============================================================ */

const mapsLinks =
    document.querySelectorAll(
        ".maps-link"
    );

const googleMaps =
    getConfigValue(
        "links.googleMaps"
    );

if (
    mapsLinks.length > 0 &&
    googleMaps
) {

    mapsLinks.forEach(
        function (link) {

            link.href =
                googleMaps;
        }
    );
}


/* ============================================================
   23. LINK MENU

   Collega automaticamente gli elementi .menu-link
   al percorso configurato.
============================================================ */

const menuLinks =
    document.querySelectorAll(
        ".menu-link"
    );

const menuLink =
    getConfigValue(
        "links.menu"
    );

if (
    menuLinks.length > 0 &&
    menuLink
) {

    menuLinks.forEach(
        function (link) {

            link.href =
                menuLink;
        }
    );
}


/* ============================================================
   24. LINK PRENOTAZIONE

   Collega automaticamente gli elementi .reservation-link
   alla pagina di prenotazione.
============================================================ */

const reservationLinks =
    document.querySelectorAll(
        ".reservation-link"
    );

const reservationLink =
    getConfigValue(
        "links.reservation"
    );

if (
    reservationLinks.length > 0 &&
    reservationLink
) {

    reservationLinks.forEach(
        function (link) {

            link.href =
                reservationLink;
        }
    );
}


/* ============================================================
   25. ANNO AUTOMATICO DEL FOOTER

   Evita di dover modificare manualmente l'anno ogni anno.

   HTML:
   <span class="current-year"></span>
============================================================ */

const currentYearElements =
    document.querySelectorAll(
        ".current-year"
    );

currentYearElements.forEach(
    function (element) {

        element.textContent =
            new Date().getFullYear();
    }
);


/* ============================================================
   FINE SCRIPT.JS V1.0

   Per un nuovo cliente, normalmente non è necessario
   modificare questo file.

   La personalizzazione principale avviene in:

   js/config.js

   e nella sostituzione delle immagini in:

   assets/
============================================================ */