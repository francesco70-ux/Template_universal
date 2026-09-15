/* ============================================================
   FC STUDIO — UNIVERSAL TEMPLATE V2.0 · script.js
   Collega js/config.js al DOM tramite attributi data-*.
   Contratto: data-config, data-button, data-navbar-button,
   data-section-link, data-social, .menu-link, .phone-link,
   .email-link, .maps-link, .whatsapp-link, #menu-container,
   #booking-form. Vedi README.md.
   ============================================================ */
document.documentElement.classList.add("js");

(function () {
    "use strict";

    /* ---------- 0. GUARD CONFIGURAZIONE ---------- */
    if (typeof restaurantConfig === "undefined" || restaurantConfig === null) {
        console.error(
            "[FC Studio] restaurantConfig non trovato. " +
            "Verifica che js/config.js sia caricato prima di js/script.js " +
            "e che non contenga errori di sintassi."
        );
        document.documentElement.classList.remove("js");
        return;
    }

    function get(path, fallback) {
        var value = String(path).split(".").reduce(function (obj, key) {
            return obj != null ? obj[key] : undefined;
        }, restaurantConfig);
        return value === undefined ? fallback : value;
    }

    function onImgError(img, fallbackSrc) {
        img.addEventListener("error", function handle() {
            img.removeEventListener("error", handle);
            if (fallbackSrc && img.src !== fallbackSrc) img.src = fallbackSrc;
        });
    }

    var prefersReducedMotion =
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* ---------- 1. TESTI DINAMICI (data-config) ---------- */
    document.querySelectorAll("[data-config]").forEach(function (el) {
        var value = get(el.dataset.config);
        if (value !== undefined && value !== "") el.textContent = value;
    });

    /* ---------- 2. SEO PER PAGINA ---------- */
    var pageSeo = null;
    if (document.getElementById("menu-container")) {
        pageSeo = get("menu.seo", null);
    } else if (document.getElementById("booking-form")) {
        pageSeo = get("contactPage.seo", null);
    }
    if (!pageSeo) pageSeo = { title: get("seo.title"), description: get("seo.description") };

    if (pageSeo && pageSeo.title) {
        document.title = pageSeo.title;
        var ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute("content", pageSeo.title);
    }
    if (pageSeo && pageSeo.description) {
        var metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute("content", pageSeo.description);
        var ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute("content", pageSeo.description);
    }

    /* ---------- 3. JSON-LD DINAMICO ---------- */
    document.querySelectorAll('script[type="application/ld+json"]').forEach(function (tag) {
        try {
            var data = JSON.parse(tag.textContent);
            if (data.name) data.name = get("name", data.name);
            if (data.telephone) data.telephone = get("contact.phone", data.telephone);
            if (data.address) {
                data.address.streetAddress = get("contact.address", data.address.streetAddress);
                data.address.addressLocality = get("contact.city", data.address.addressLocality);
            }
            tag.textContent = JSON.stringify(data);
        } catch (e) {
            console.warn("[FC Studio] JSON-LD non valido in", tag.id || "script inline");
        }
    });

    /* ---------- 4. LOGO ---------- */
    var logoText = document.querySelector(".logo-text");
    var logoImage = document.querySelector(".logo-image");
    var logoPath = get("images.logo", "");
    if (logoImage && logoPath) {
        logoImage.addEventListener("error", function handle() {
            logoImage.removeEventListener("error", handle);
            logoImage.style.display = "none";
            if (logoText) {
                logoText.textContent = get("name", "Nome del Locale");
                logoText.style.display = "";
            }
        });
        if (logoImage.getAttribute("src") !== logoPath) logoImage.src = logoPath;
        logoImage.alt = get("name", "Locale") + " — logo";
        logoImage.style.display = "block";
        if (logoText) logoText.style.display = "none";
    }

    /* ---------- 5. IMMAGINI ABOUT + HERO ---------- */
    var fallbackImage = get("images.fallback", "");
    var aboutImage = document.querySelector(".about-image-element");
    var aboutPath = get("images.about", "");
    if (aboutImage && aboutPath) {
        if (aboutImage.getAttribute("src") !== aboutPath) aboutImage.src = aboutPath;
        aboutImage.alt = get("name", "Locale") + " — " + get("about.title", "Chi siamo");
        onImgError(aboutImage, fallbackImage);
    }

    var hero = document.querySelector(".hero");
    var heroPath = get("images.hero", "");
    if (hero && heroPath && !heroPath.endsWith("hero.jpg")) {
        var probe = new Image();
        probe.onload = function () {
            hero.style.backgroundImage =
                'linear-gradient(rgba(16,36,28,.62),rgba(16,36,28,.45)),url("' + heroPath + '")';
        };
        probe.src = heroPath;
    }

    /* ---------- 6. COLORI → VARIABILI CSS ---------- */
    var colors = get("colors", null);
    if (colors) {
        Object.keys(colors).forEach(function (name) {
            var variable = "--color-" + name.replace(/([A-Z])/g, "-$1").toLowerCase();
            document.documentElement.style.setProperty(variable, colors[name]);
        });
    }

    /* ---------- 7. FEATURES ---------- */
    var featuresBox = document.getElementById("features-container");
    var features = get("features.items", []);
    if (featuresBox && Array.isArray(features) && features.length) {
        featuresBox.innerHTML = "";
        features.forEach(function (feature) {
            var card = document.createElement("article");
            card.className = "feature-card";

            var icon = document.createElement("div");
            icon.className = "feature-icon";
            var iconImg = document.createElement("img");
            iconImg.src = feature.icon || fallbackImage || "";
            iconImg.alt = "";
            iconImg.setAttribute("aria-hidden", "true");
            iconImg.loading = "lazy";
            iconImg.decoding = "async";
            onImgError(iconImg, fallbackImage);
            icon.appendChild(iconImg);

            var title = document.createElement("h3");
            title.textContent = feature.title || "";
            var desc = document.createElement("p");
            desc.textContent = feature.description || "";

            card.append(icon, title, desc);
            featuresBox.appendChild(card);
        });
    }

    /* ---------- 8. MENU IN EVIDENZA ---------- */
    var featuredBox = document.getElementById("featured-menu-container");
    var featured = get("featuredMenu.items", []);
    if (featuredBox && Array.isArray(featured) && featured.length) {
        featuredBox.innerHTML = "";
        featured.forEach(function (item) {
            var card = document.createElement("article");
            card.className = "menu-card";

            var imgWrap = document.createElement("div");
            imgWrap.className = "menu-card-image";
            var img = document.createElement("img");
            img.src = item.image || fallbackImage || "";
            img.alt = item.imageAlt || item.name || "Piatto del locale";
            img.loading = "lazy";
            img.decoding = "async";
            onImgError(img, fallbackImage);
            imgWrap.appendChild(img);

            var content = document.createElement("div");
            content.className = "menu-card-content";
            var title = document.createElement("h3");
            title.textContent = item.name || "";
            var desc = document.createElement("p");
            desc.textContent = item.description || "";
            var price = document.createElement("span");
            price.className = "price";
            price.textContent = item.price || "";

            content.append(title, desc, price);
            card.append(imgWrap, content);
            featuredBox.appendChild(card);
        });
    }

    /* ---------- 9. GALLERIA ---------- */
    var galleryBox = document.getElementById("gallery-container");
    var gallery = get("gallery.images", []);
    if (galleryBox && Array.isArray(gallery) && gallery.length) {
        galleryBox.innerHTML = "";
        gallery.forEach(function (entry) {
            var figure = document.createElement("figure");
            var img = document.createElement("img");
            img.src = entry.src || fallbackImage || "";
            img.alt = entry.alt || "Immagine del locale";
            img.loading = "lazy";
            img.decoding = "async";
            onImgError(img, fallbackImage);
            figure.appendChild(img);
            galleryBox.appendChild(figure);
        });
    }

    /* ---------- 10. RECENSIONI ---------- */
    var reviewsBox = document.getElementById("reviews-container");
    var reviews = get("reviews.items", []);
    if (reviewsBox && Array.isArray(reviews) && reviews.length) {
        reviewsBox.innerHTML = "";
        reviews.forEach(function (review) {
            var card = document.createElement("article");
            card.className = "review-card";

            var count = Math.min(5, Math.max(0, Number(review.stars) || 0));
            var stars = document.createElement("div");
            stars.className = "review-stars";
            stars.setAttribute("role", "img");
            stars.setAttribute("aria-label", "Valutazione: " + count + " su 5 stelle");
            stars.textContent = "★".repeat(count) + "☆".repeat(5 - count);

            var text = document.createElement("blockquote");
            var quote = document.createElement("p");
            quote.textContent = review.text || "";
            text.appendChild(quote);

            var author = document.createElement("span");
            author.className = "review-author";
            author.textContent = review.author || "";

            card.append(stars, text, author);
            reviewsBox.appendChild(card);
        });
    }

    /* ---------- 11. PAGINA MENU (data-driven) ---------- */
    var menuBox = document.getElementById("menu-container");
    var categories = get("menu.categories", []);
    if (menuBox && Array.isArray(categories) && categories.length) {
        var noscript = menuBox.querySelector("noscript");
        if (noscript) noscript.remove();
        menuBox.innerHTML = "";
        categories.forEach(function (cat, index) {
            var section = document.createElement("section");
            section.className = "menu-category";
            section.setAttribute("aria-label", cat.name || ("Categoria " + (index + 1)));

            var header = document.createElement("div");
            header.className = "menu-category-header";
            var label = document.createElement("p");
            label.className = "section-label";
            label.textContent = "0" + (index + 1);
            var h2 = document.createElement("h2");
            h2.textContent = cat.name || "";
            header.append(label, h2);
            if (cat.note) {
                var note = document.createElement("p");
                note.className = "menu-category-note";
                note.textContent = cat.note;
                header.appendChild(note);
            }
            section.appendChild(header);

            var list = document.createElement("div");
            list.className = "menu-list";
            (cat.items || []).forEach(function (dish) {
                var article = document.createElement("article");
                article.className = "menu-item";

                var head = document.createElement("div");
                head.className = "menu-item-head";
                var name = document.createElement("h3");
                name.textContent = dish.name || "";
                var dots = document.createElement("span");
                dots.className = "menu-dots";
                dots.setAttribute("aria-hidden", "true");
                head.append(name, dots);

                var price = document.createElement("span");
                price.className = "price";
                price.textContent = dish.price || "";

                article.append(head, price);

                if (dish.description) {
                    var desc = document.createElement("p");
                    desc.className = "menu-item-desc";
                    desc.textContent = dish.description;
                    article.appendChild(desc);
                }
                if (Array.isArray(dish.tags) && dish.tags.length) {
                    var tags = document.createElement("div");
                    tags.className = "menu-tags";
                    dish.tags.forEach(function (tag) {
                        var badge = document.createElement("span");
                        badge.className = "menu-tag";
                        badge.textContent = tag;
                        tags.appendChild(badge);
                    });
                    article.appendChild(tags);
                }
                list.appendChild(article);
            });
            section.appendChild(list);
            menuBox.appendChild(section);
        });
    }

    /* ---------- 12. CONTATTI: tel / mail / mappe / whatsapp ---------- */
    var phone = get("contact.phone", "");
    document.querySelectorAll(".phone-link").forEach(function (a) {
        if (phone) a.href = "tel:" + phone.replace(/[\s/-]/g, "");
    });
    var email = get("contact.email", "");
    document.querySelectorAll(".email-link").forEach(function (a) {
        if (email) a.href = "mailto:" + email;
    });
    var maps = get("links.googleMaps", "") || get("contact.mapsUrl", "");
    document.querySelectorAll(".maps-link").forEach(function (a) {
        if (maps) a.href = maps;
    });
    var whatsapp = get("links.whatsapp", "") || get("contact.whatsapp", "");
    var whatsappReady = Boolean(whatsapp) && !/000000/.test(whatsapp);
    document.querySelectorAll(".whatsapp-link").forEach(function (a) {
        if (whatsapp) a.href = whatsapp;
    });

    /* ---------- 13. SOCIAL (data-social, generico) ---------- */
    var social = get("social", {});
    document.querySelectorAll("[data-social]").forEach(function (a) {
        var network = a.dataset.social;
        var url = social ? social[network] : "";
        if (url) {
            a.href = url;
            a.style.display = "";
        } else {
            a.style.display = "none";
        }
    });
    /* Retro-compatibilità v1 */
    [["instagram", ".instagram-link"], ["facebook", ".facebook-link"]].forEach(function (pair) {
        var link = document.querySelector(pair[1]);
        if (link && social && social[pair[0]]) link.href = social[pair[0]];
    });

    /* ---------- 14. PULSANTI ---------- */
    var buttons = get("buttons", {});
    document.querySelectorAll("[data-button]").forEach(function (btn) {
        var cfg = buttons[btn.dataset.button];
        if (!cfg) return;
        if (cfg.text) btn.textContent = cfg.text;
        if (cfg.link) btn.href = cfg.link;
    });
    var navbarBtns = get("navbar", {});
    document.querySelectorAll("[data-navbar-button]").forEach(function (btn) {
        var cfg = navbarBtns[btn.dataset.navbarButton];
        if (!cfg) return;
        if (cfg.text) btn.textContent = cfg.text;
        if (cfg.link) btn.href = cfg.link;
    });
    var menuUrl = get("links.menu", "");
    if (menuUrl) {
        document.querySelectorAll(".menu-link").forEach(function (a) {
            if (!a.hasAttribute("aria-current")) a.href = menuUrl;
        });
    }

    /* ---------- 15. P.IVA FOOTER ---------- */
    var vat = get("contact.vat", "");
    if (vat) {
        document.querySelectorAll("[data-vat-line]").forEach(function (el) {
            el.style.display = "";
        });
    }

    /* ---------- 16. MENU MOBILE ---------- */
    var burger = document.querySelector(".mobile-menu-button");
    var navMenu = document.querySelector(".nav-menu");

    function closeMobileMenu(returnFocus) {
        if (!navMenu) return;
        navMenu.classList.remove("mobile-menu-open");
        document.body.classList.remove("menu-open");
        if (burger) {
            burger.setAttribute("aria-expanded", "false");
            burger.setAttribute("aria-label", "Apri menu");
            if (returnFocus) burger.focus();
        }
    }
    function openMobileMenu() {
        if (!navMenu) return;
        navMenu.classList.add("mobile-menu-open");
        document.body.classList.add("menu-open");
        if (burger) {
            burger.setAttribute("aria-expanded", "true");
            burger.setAttribute("aria-label", "Chiudi menu");
        }
    }

    if (burger && navMenu) {
        burger.addEventListener("click", function () {
            if (navMenu.classList.contains("mobile-menu-open")) closeMobileMenu(false);
            else openMobileMenu();
        });
        navMenu.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () { closeMobileMenu(false); });
        });
        document.addEventListener("click", function (event) {
            if (!navMenu.classList.contains("mobile-menu-open")) return;
            if (!navMenu.contains(event.target) && !burger.contains(event.target)) {
                closeMobileMenu(false);
            }
        });
        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") closeMobileMenu(true);
        });
    }

    /* ---------- 17. REVEAL ON SCROLL ---------- */
    var revealSections = document.querySelectorAll(
        ".about, .features, .featured-menu, .gallery, .reviews, .reservation-cta"
    );
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
        revealSections.forEach(function (s) { s.classList.add("section-visible"); });
    } else {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("section-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        revealSections.forEach(function (s) { observer.observe(s); });
    }

    /* ---------- 18. VISIBILITÀ SEZIONI + VOCI NAVBAR ---------- */
    var sectionMap = {
        about: ".about",
        features: ".features",
        featuredMenu: ".featured-menu",
        gallery: ".gallery",
        reviews: ".reviews",
        reservation: ".reservation-cta"
    };
    var sectionsCfg = get("sections", {});
    Object.keys(sectionMap).forEach(function (name) {
        if (sectionsCfg && sectionsCfg[name] === false) {
            var section = document.querySelector(sectionMap[name]);
            if (section) section.style.display = "none";
        }
    });
    document.querySelectorAll("[data-section-link]").forEach(function (link) {
        var name = link.dataset.sectionLink;
        if (sectionsCfg && sectionsCfg[name] === false) {
            var item = link.closest("li");
            if (item) item.style.display = "none";
            else link.style.display = "none";
        }
    });

    /* ---------- 19. FORM PRENOTAZIONE ---------- */
    var form = document.getElementById("booking-form");
    if (form) {
        var dateInput = form.querySelector("#f-data");
        if (dateInput) {
            var today = new Date();
            var iso = today.toISOString().split("T")[0];
            dateInput.min = iso;
        }

        function setError(input, messageId, invalid) {
            var message = messageId ? document.getElementById(messageId) : null;
            if (invalid) {
                input.setAttribute("aria-invalid", "true");
                if (message) message.classList.add("field-error--visible");
            } else {
                input.removeAttribute("aria-invalid");
                if (message) message.classList.remove("field-error--visible");
            }
            return !invalid;
        }

        ["nome", "telefono", "data", "ora", "ospiti"].forEach(function (fieldName) {
            var input = form.elements[fieldName];
            if (input) {
                input.addEventListener("input", function () {
                    setError(input, input.getAttribute("aria-describedby"), false);
                });
                input.addEventListener("change", function () {
                    setError(input, input.getAttribute("aria-describedby"), false);
                });
            }
        });

        form.addEventListener("submit", function (event) {
            event.preventDefault();
            var nome = form.elements.nome.value.trim();
            var telefono = form.elements.telefono.value.trim();
            var data = form.elements.data.value;
            var ora = form.elements.ora.value;
            var ospiti = form.elements.ospiti.value;
            var note = form.elements.note ? form.elements.note.value.trim() : "";
            var status = document.getElementById("form-status");

            var valid = true;
            valid = setError(form.elements.nome, "e-nome", nome.length < 2) && valid;
            valid = setError(
                form.elements.telefono, "e-tel",
                !/^[+0-9][0-9\s./-]{5,}$/.test(telefono)
            ) && valid;
            var dataOk = Boolean(data) && (!dateInput || !dateInput.min || data >= dateInput.min);
            valid = setError(form.elements.data, "e-data", !dataOk) && valid;
            valid = setError(form.elements.ora, "e-ora", !ora) && valid;
            valid = setError(form.elements.ospiti, "e-ospiti", !ospiti) && valid;

            if (!valid) {
                if (status) {
                    status.hidden = false;
                    status.className = "form-status form-status--error";
                    status.textContent = "Controlla i campi evidenziati e riprova.";
                }
                var firstInvalid = form.querySelector('[aria-invalid="true"]');
                if (firstInvalid) firstInvalid.focus();
                return;
            }

            var readableDate = data.split("-").reverse().join("/");
            var message =
                "Nuova richiesta dal sito " + get("name", "") + "\n" +
                "Nome: " + nome + "\n" +
                "Telefono: " + telefono + "\n" +
                "Data: " + readableDate + "\n" +
                "Ora: " + ora + "\n" +
                "Ospiti: " + ospiti +
                (note ? "\nNote: " + note : "");

            if (whatsappReady) {
                window.open(whatsapp + "?text=" + encodeURIComponent(message), "_blank", "noopener");
            }
            if (status) {
                status.hidden = false;
                status.className = "form-status form-status--success";
                status.textContent = whatsappReady
                    ? "Grazie, " + nome + "! Si è aperta WhatsApp con la tua richiesta: premi invio per confermarla."
                    : "Grazie, " + nome + "! Abbiamo ricevuto la tua richiesta per " + readableDate +
                      " alle " + ora + ": ti ricontatteremo al " + telefono + " per confermare.";
            }
            form.reset();
        });
    }

    /* ---------- 20. ANNO FOOTER ---------- */
    document.querySelectorAll(".current-year").forEach(function (el) {
        el.textContent = String(new Date().getFullYear());
    });
})();
