/*
============================================================
PASTIME — FILE: script.js

Comportamento condiviso da tutte le pagine.
Ogni funzionalità è una funzione indipendente, avviata da init().

Moduli:
  1. Lettura configurazione (getConfigValue)
  2. Binding testi, link e pulsanti da config.js
  3. Logo con fallback testuale
  4. Header sticky + navigazione mobile (drawer accessibile)
  5. Voce di menu attiva
  6. Rendering homepage: tre anime, specialità, galleria, recensioni
  7. Lightbox galleria
  8. Visibilità sezioni
  9. Animazioni di ingresso
 10. Utilità (anno corrente, supporto WebP)
============================================================
*/

(function () {
    "use strict";

    /* config.js dichiara restaurantConfig con const: non è una proprietà di window. */
    const config = typeof restaurantConfig !== "undefined" ? restaurantConfig : {};

    /* ------------------------------------------------------------
       1. CONFIGURAZIONE
    ------------------------------------------------------------ */

    function getConfigValue(path) {
        return path.split(".").reduce(function (object, key) {
            return object == null ? undefined : object[key];
        }, config);
    }

    function isEmpty(value) {
        return value === null || value === undefined || value === "";
    }

    /* Nasconde l'elemento (o il contenitore marcato) quando un valore manca. */
    function hideForMissingValue(element) {
        const wrapper = element.closest("[data-hide-if-empty]") || element;
        wrapper.hidden = true;
    }

    /* ------------------------------------------------------------
       2. BINDING DA CONFIG
    ------------------------------------------------------------ */

    function bindTexts() {
        document.querySelectorAll("[data-config]").forEach(function (element) {
            const value = getConfigValue(element.dataset.config);

            if (isEmpty(value)) {
                if (value === null || element.closest("[data-hide-if-empty]")) {
                    hideForMissingValue(element);
                }
                return;
            }

            if (typeof value === "string" || typeof value === "number") {
                element.textContent = value;
            }
        });
    }

    function bindHrefs() {
        document.querySelectorAll("[data-href]").forEach(function (element) {
            const value = getConfigValue(element.dataset.href);

            if (isEmpty(value)) {
                hideForMissingValue(element);
                return;
            }

            element.href = value;
        });
    }

    function bindContactLinks() {
        const phone = getConfigValue("contact.phoneInternational") || getConfigValue("contact.phone");
        const email = getConfigValue("contact.email");
        const instagram = getConfigValue("social.instagram");
        const facebook = getConfigValue("social.facebook");

        const linkMap = [
            [".phone-link", phone ? "tel:" + String(phone).replace(/\s/g, "") : null],
            [".email-link", email ? "mailto:" + email : null],
            [".instagram-link", instagram],
            [".facebook-link", facebook],
            [".menu-link", getConfigValue("links.menu")],
            [".whatsapp-link", getConfigValue("links.whatsapp")],
            [".maps-link", getConfigValue("links.googleMaps")]
        ];

        linkMap.forEach(function (pair) {
            document.querySelectorAll(pair[0]).forEach(function (link) {
                if (isEmpty(pair[1])) {
                    hideForMissingValue(link);
                } else {
                    link.href = pair[1];
                }
            });
        });
    }

    function bindButtons() {
        const groups = [
            ["[data-button]", "button", "buttons."],
            ["[data-navbar-button]", "navbarButton", "navbar."]
        ];

        groups.forEach(function (group) {
            document.querySelectorAll(group[0]).forEach(function (button) {
                const settings = getConfigValue(group[2] + button.dataset[group[1]]);
                if (!settings) {
                    return;
                }

                if (settings.text) {
                    /* Mantiene un'eventuale icona SVG già presente nel pulsante. */
                    const icon = button.querySelector("svg");
                    button.textContent = "";
                    if (icon) {
                        button.appendChild(icon);
                    }
                    button.appendChild(document.createTextNode((icon ? " " : "") + settings.text));
                }

                if (settings.link) {
                    button.href = settings.link;
                }
            });
        });
    }

    function bindSeo() {
        const title = getConfigValue("seo.title");
        const description = getConfigValue("seo.description");
        const meta = document.querySelector('meta[name="description"]');

        /* Le pagine interne definiscono il proprio titolo: non lo sovrascriviamo. */
        if (title && document.body.dataset.page === "home") {
            document.title = title;
            if (meta && description) {
                meta.setAttribute("content", description);
            }
        }
    }

    /* ------------------------------------------------------------
       3. LOGO
    ------------------------------------------------------------ */

    function setupLogo() {
        const image = document.querySelector(".logo-image");
        const text = document.querySelector(".logo-text");
        const path = getConfigValue("images.logo");

        if (!image) {
            return;
        }

        function showTextFallback() {
            image.hidden = true;
            if (text) {
                text.hidden = false;
            }
        }

        if (!path) {
            showTextFallback();
            return;
        }

        if (image.getAttribute("src") !== path) {
            image.src = path;
        }

        image.addEventListener("error", showTextFallback);

        if (image.complete && image.naturalWidth === 0) {
            showTextFallback();
        }
    }

    /* ------------------------------------------------------------
       4. HEADER STICKY + NAVIGAZIONE MOBILE
    ------------------------------------------------------------ */

    function setupHeader() {
        const header = document.querySelector(".site-header");
        if (!header) {
            return;
        }

        function update() {
            header.classList.toggle("is-scrolled", window.scrollY > 8);
        }

        update();
        window.addEventListener("scroll", update, { passive: true });
    }

    function setupMobileMenu() {
        const button = document.querySelector(".mobile-menu-button");
        const menu = document.querySelector(".nav-menu");
        if (!button || !menu) {
            return;
        }

        const mobileQuery = window.matchMedia("(max-width: 900px)");
        let lastFocused = null;

        function focusableItems() {
            return Array.prototype.slice.call(
                menu.querySelectorAll('a[href], button:not([disabled])')
            ).filter(function (el) {
                return el.offsetParent !== null;
            });
        }

        function open() {
            lastFocused = document.activeElement;
            menu.classList.add("mobile-menu-open");
            document.body.classList.add("menu-open");
            button.setAttribute("aria-expanded", "true");
            button.setAttribute("aria-label", "Chiudi il menu di navigazione");

            const items = focusableItems();
            if (items.length) {
                items[0].focus();
            }
        }

        function close(restoreFocus) {
            if (!menu.classList.contains("mobile-menu-open")) {
                return;
            }
            menu.classList.remove("mobile-menu-open");
            document.body.classList.remove("menu-open");
            button.setAttribute("aria-expanded", "false");
            button.setAttribute("aria-label", "Apri il menu di navigazione");

            if (restoreFocus && lastFocused) {
                lastFocused.focus();
            }
        }

        button.addEventListener("click", function () {
            if (menu.classList.contains("mobile-menu-open")) {
                close(true);
            } else {
                open();
            }
        });

        menu.addEventListener("click", function (event) {
            if (event.target.closest("a")) {
                close(false);
            }
        });

        document.addEventListener("keydown", function (event) {
            if (!menu.classList.contains("mobile-menu-open")) {
                return;
            }

            if (event.key === "Escape") {
                close(true);
                return;
            }

            /* Focus trap: il tab resta all'interno del drawer e del pulsante. */
            if (event.key === "Tab") {
                const items = focusableItems().concat(button);
                const first = items[0];
                const last = items[items.length - 1];

                if (event.shiftKey && document.activeElement === first) {
                    event.preventDefault();
                    last.focus();
                } else if (!event.shiftKey && document.activeElement === last) {
                    event.preventDefault();
                    first.focus();
                }
            }
        });

        /* Se si passa a desktop con il drawer aperto, lo chiudiamo. */
        mobileQuery.addEventListener("change", function (event) {
            if (!event.matches) {
                close(false);
            }
        });
    }

    /* ------------------------------------------------------------
       5. VOCE DI MENU ATTIVA
    ------------------------------------------------------------ */

    function markCurrentPage() {
        const page = document.body.dataset.page;
        if (!page) {
            return;
        }

        document.querySelectorAll('.nav-menu a[data-nav="' + page + '"]').forEach(function (link) {
            link.setAttribute("aria-current", "page");
        });
    }

    /* ------------------------------------------------------------
       6. RENDERING HOMEPAGE
    ------------------------------------------------------------ */

    const ICONS = {
        pizza: '<path d="M2.5 9.5C5 6 8.5 4 12 4s7 2 9.5 5.5L12 21 2.5 9.5z"/><path d="M4.8 9.3c2.1-1.2 4.6-1.8 7.2-1.8s5.1.6 7.2 1.8"/><circle cx="9.5" cy="11.5" r="1.1"/><circle cx="14.5" cy="11.5" r="1.1"/><circle cx="12" cy="15.5" r="1.1"/>',
        pasta: '<path d="M7 3v7a3 3 0 0 0 6 0V3"/><path d="M10 3v18"/><path d="M17.5 3c-1.5 2-2.5 4-2.5 7 0 2 .8 3 2.5 3v8"/>',
        cup: '<path d="M4 8h12v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8z"/><path d="M16 10h2a2.5 2.5 0 0 1 0 5h-2"/><path d="M8 4c0 1-1 1.5-1 2.5M11.5 3c0 1-1 1.5-1 2.5"/>',
        leaf: '<path d="M20 4c-8 0-14 5-14 12 0 1.5.3 2.7.8 3.8C9 16 13 12 18 10c-4 2.5-7.5 6.5-9.5 10.5 1 .3 2 .5 3 .5 7 0 9.5-8 8.5-17z"/>',
        star: '<path d="M12 2.5l2.9 6.2 6.6.8-4.9 4.6 1.3 6.6L12 17.4l-5.9 3.3 1.3-6.6L2.5 9.5l6.6-.8z"/>'
    };

    function svgIcon(name) {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("viewBox", "0 0 24 24");
        svg.setAttribute("aria-hidden", "true");
        svg.innerHTML = ICONS[name] || ICONS.leaf;
        return svg;
    }

    function create(tag, className, text) {
        const element = document.createElement(tag);
        if (className) {
            element.className = className;
        }
        if (text !== undefined) {
            element.textContent = text;
        }
        return element;
    }

    function renderFeatures() {
        const container = document.getElementById("features-container");
        const items = getConfigValue("features.items");
        if (!container || !Array.isArray(items)) {
            return;
        }

        container.textContent = "";

        items.forEach(function (feature) {
            const card = create("article", "feature-card");
            card.setAttribute("role", "listitem");

            const icon = create("div", "feature-icon");
            icon.appendChild(svgIcon(feature.icon));

            card.appendChild(icon);
            card.appendChild(create("h3", null, feature.title || ""));
            card.appendChild(create("p", null, feature.description || ""));
            container.appendChild(card);
        });
    }

    function renderFeaturedMenu() {
        const container = document.getElementById("featured-menu-container");
        const items = getConfigValue("featuredMenu.items");
        if (!container || !Array.isArray(items)) {
            return;
        }

        container.textContent = "";

        items.forEach(function (item) {
            const card = create("article", "dish-card");
            card.setAttribute("role", "listitem");

            if (item.category) {
                card.appendChild(create("span", "dish-category", item.category));
            }

            const header = create("div", "dish-header");
            header.appendChild(create("h3", null, item.name || ""));
            header.appendChild(create("span", "dish-leader"));
            header.appendChild(create("span", "dish-price", item.price || ""));
            card.appendChild(header);

            if (item.description) {
                card.appendChild(create("p", null, item.description));
            }

            container.appendChild(card);
        });
    }

    function renderGallery() {
        const container = document.getElementById("gallery-container");
        const images = getConfigValue("gallery.images");
        if (!container || !Array.isArray(images)) {
            return;
        }

        container.textContent = "";

        images.forEach(function (item, index) {
            const figure = create("figure");
            figure.setAttribute("role", "listitem");

            const button = create("button", "gallery-button");
            button.type = "button";
            button.dataset.index = String(index);
            button.setAttribute("aria-label", "Apri immagine: " + (item.alt || "foto del locale"));

            const picture = document.createElement("picture");
            if (item.webp) {
                const source = document.createElement("source");
                source.type = "image/webp";
                source.srcset = item.webp;
                picture.appendChild(source);
            }

            const img = document.createElement("img");
            img.src = item.src;
            img.alt = item.alt || "";
            img.loading = "lazy";
            img.decoding = "async";
            if (item.width && item.height) {
                img.width = item.width;
                img.height = item.height;
            }

            picture.appendChild(img);
            button.appendChild(picture);
            figure.appendChild(button);
            container.appendChild(figure);
        });

        setupLightbox(images);
    }

    function renderReviews() {
        const container = document.getElementById("reviews-container");
        const items = getConfigValue("reviews.items");
        if (!container || !Array.isArray(items)) {
            return;
        }

        container.textContent = "";

        items.forEach(function (review) {
            const card = create("article", "review-card");
            card.setAttribute("role", "listitem");

            const count = Math.min(5, Math.max(0, Number(review.stars) || 0));
            const stars = create("div", "review-stars");
            stars.setAttribute("role", "img");
            stars.setAttribute("aria-label", count + " stelle su 5");
            for (let i = 0; i < count; i += 1) {
                stars.appendChild(svgIcon("star"));
            }

            const quote = create("blockquote");
            quote.appendChild(create("p", null, review.text || ""));

            card.appendChild(stars);
            card.appendChild(quote);
            card.appendChild(create("span", "review-author", review.author || ""));
            container.appendChild(card);
        });
    }

    /* ------------------------------------------------------------
       7. LIGHTBOX
    ------------------------------------------------------------ */

    function setupLightbox(images) {
        const dialog = document.getElementById("lightbox");
        const container = document.getElementById("gallery-container");
        if (!dialog || !container || typeof dialog.showModal !== "function") {
            return;
        }

        const image = document.getElementById("lightbox-image");
        const caption = document.getElementById("lightbox-caption");
        let current = 0;

        function show(index) {
            current = (index + images.length) % images.length;
            const item = images[current];
            image.src = item.webp || item.src;
            image.alt = item.alt || "";
            caption.textContent = item.alt || "";
        }

        container.addEventListener("click", function (event) {
            const button = event.target.closest(".gallery-button");
            if (!button) {
                return;
            }
            show(Number(button.dataset.index));
            dialog.showModal();
        });

        dialog.addEventListener("click", function (event) {
            const control = event.target.closest("[data-lightbox]");

            if (control) {
                const action = control.dataset.lightbox;
                if (action === "prev") { show(current - 1); }
                if (action === "next") { show(current + 1); }
                if (action === "close") { dialog.close(); }
                return;
            }

            /* Click sullo sfondo (fuori dall'immagine) chiude il lightbox. */
            if (event.target === dialog) {
                dialog.close();
            }
        });

        dialog.addEventListener("keydown", function (event) {
            if (event.key === "ArrowLeft") { show(current - 1); }
            if (event.key === "ArrowRight") { show(current + 1); }
        });

        dialog.addEventListener("close", function () {
            image.removeAttribute("src");
        });
    }

    /* ------------------------------------------------------------
       8. VISIBILITÀ SEZIONI
    ------------------------------------------------------------ */

    function setupSectionVisibility() {
        const sections = config.sections || {};
        const map = {
            about: ".about",
            features: ".features",
            featuredMenu: ".featured-menu",
            gallery: ".gallery",
            reviews: ".reviews",
            reservation: ".reservation-cta"
        };

        Object.keys(map).forEach(function (name) {
            if (sections[name] !== false) {
                return;
            }

            document.querySelectorAll(map[name]).forEach(function (section) {
                section.hidden = true;
            });

            document.querySelectorAll('[data-section-link="' + name + '"]').forEach(function (link) {
                (link.closest("li") || link).hidden = true;
            });
        });
    }

    /* ------------------------------------------------------------
       9. ANIMAZIONI DI INGRESSO
    ------------------------------------------------------------ */

    function setupReveal() {
        const targets = document.querySelectorAll(".reveal, .reveal-stagger");
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (!("IntersectionObserver" in window) || reduceMotion) {
            targets.forEach(function (el) { el.classList.add("is-visible"); });
            return;
        }

        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

        targets.forEach(function (el) { observer.observe(el); });
    }

    /* ------------------------------------------------------------
       10. UTILITÀ
    ------------------------------------------------------------ */

    function setCurrentYear() {
        const year = String(new Date().getFullYear());
        document.querySelectorAll(".current-year").forEach(function (el) {
            el.textContent = year;
        });
    }

    /* Aggiunge .no-webp a <html> quando il browser non supporta WebP,
       così il CSS usa le versioni JPG delle texture decorative. */
    function detectWebp() {
        const probe = new Image();
        probe.onerror = function () {
            document.documentElement.classList.add("no-webp");
        };
        probe.src = "data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==";
    }

    /* ------------------------------------------------------------
       AVVIO
    ------------------------------------------------------------ */

    function init() {
        detectWebp();
        bindTexts();
        bindHrefs();
        bindContactLinks();
        bindButtons();
        bindSeo();
        setupLogo();
        setupHeader();
        setupMobileMenu();
        markCurrentPage();
        renderFeatures();
        renderFeaturedMenu();
        renderGallery();
        renderReviews();
        setupSectionVisibility();
        setupReveal();
        setCurrentYear();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
