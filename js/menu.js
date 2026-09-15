/*
============================================================
PASTIME — FILE: menu.js

Renderizza il menu completo (js/menu-data.js) in menu.html:
- navigazione per categorie con evidenziazione allo scroll
- card per ogni piatto (nome, prezzo, descrizione, note)
- card con varianti per i piatti con più condimenti
- legenda dei simboli
============================================================
*/

(function () {
    "use strict";

    const data = typeof menuData !== "undefined" ? menuData : null;
    const nav = document.getElementById("menu-nav-list");
    const container = document.getElementById("menu-categories");
    const legendContainer = document.getElementById("menu-legend");

    if (!data || !container) {
        return;
    }

    const LEAF_ICON = '<path d="M20 4c-8 0-14 5-14 12 0 1.5.3 2.7.8 3.8C9 16 13 12 18 10c-4 2.5-7.5 6.5-9.5 10.5 1 .3 2 .5 3 .5 7 0 9.5-8 8.5-17z"/>';
    const SPRIG_ICON = '<path d="M6 12h68"/><path d="M20 12c0-5 3-8 7-8-1 5-3 7-7 8z"/><path d="M32 12c0 5 3 8 7 8-1-5-3-7-7-8z"/><path d="M44 12c0-5 3-8 7-8-1 5-3 7-7 8z"/><path d="M56 12c0 5 3 8 7 8-1-5-3-7-7-8z"/>';

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

    function svg(path, className) {
        const element = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        element.setAttribute("viewBox", "0 0 24 24");
        element.setAttribute("aria-hidden", "true");
        if (className) {
            element.setAttribute("class", className);
        }
        element.innerHTML = path;
        return element;
    }

    function ornament() {
        const wrapper = create("div", "ornament");
        wrapper.setAttribute("aria-hidden", "true");
        const icon = svg(SPRIG_ICON);
        icon.setAttribute("viewBox", "0 0 80 24");
        wrapper.appendChild(icon);
        return wrapper;
    }

    /* Simboli della legenda (es. ** surgelato) accanto al nome. */
    function appendNoteMarks(target, notes) {
        if (!Array.isArray(notes)) {
            return;
        }
        notes.forEach(function (key) {
            const legend = data.legend && data.legend[key];
            if (!legend) {
                return;
            }
            const mark = create("span", "menu-note-mark", legend.symbol);
            mark.setAttribute("title", legend.text);
            mark.setAttribute("aria-label", legend.text);
            target.appendChild(mark);
        });
    }

    function price(value) {
        const element = create("span", "menu-card-price");
        const currency = create("small", null, "€");
        element.appendChild(currency);
        element.appendChild(document.createTextNode(value));
        return element;
    }

    function nameWithNotes(text, notes, className) {
        const element = create("span", className, text);
        appendNoteMarks(element, notes);
        return element;
    }

    function itemCard(item) {
        const card = create("article", "menu-card" + (item.highlight ? " menu-card--highlight" : ""));
        card.setAttribute("role", "listitem");

        if (item.highlight) {
            const badge = create("span", "menu-card-badge");
            badge.appendChild(svg(LEAF_ICON));
            badge.appendChild(document.createTextNode("Specialità della casa"));
            card.appendChild(badge);
        }

        const header = create("div", "menu-card-header");
        const heading = create("h3");
        heading.appendChild(nameWithNotes(item.name, item.notes, "menu-card-name"));
        header.appendChild(heading);
        header.appendChild(create("span", "menu-card-leader"));
        header.appendChild(price(item.price));
        card.appendChild(header);

        if (item.description) {
            card.appendChild(create("p", "menu-card-description", item.description));
        }

        return card;
    }

    function groupCard(group) {
        const card = create("article", "menu-card menu-card--group");
        card.setAttribute("role", "listitem");

        const heading = create("h3");
        heading.appendChild(nameWithNotes(group.name, group.notes, "menu-card-name"));
        card.appendChild(heading);

        if (group.description) {
            card.appendChild(create("p", "menu-card-description", group.description));
        }

        const variants = create("ul", "menu-variants");
        group.items.forEach(function (item) {
            const row = create("li", "menu-variant");
            row.appendChild(nameWithNotes(item.name, item.notes, "menu-variant-name"));
            row.appendChild(create("span", "menu-card-leader"));
            row.appendChild(price(item.price));
            variants.appendChild(row);
        });
        card.appendChild(variants);

        return card;
    }

    function renderCategory(category) {
        const section = create("section", "menu-category");
        section.id = category.id;
        section.setAttribute("aria-labelledby", "titolo-" + category.id);

        const heading = create("div", "menu-category-heading reveal");
        const title = create("h2", null, category.name);
        title.id = "titolo-" + category.id;
        heading.appendChild(title);
        heading.appendChild(ornament());
        if (category.note) {
            heading.appendChild(create("p", "menu-category-note", category.note));
        }
        section.appendChild(heading);

        const grid = create("div", "menu-grid reveal-stagger");
        grid.setAttribute("role", "list");

        (category.groups || []).forEach(function (group) {
            grid.appendChild(groupCard(group));
        });
        (category.items || []).forEach(function (item) {
            grid.appendChild(itemCard(item));
        });

        section.appendChild(grid);
        return section;
    }

    function renderNav(categories) {
        if (!nav) {
            return;
        }
        categories.forEach(function (category) {
            const li = create("li");
            const link = create("a", null, category.name);
            link.href = "#" + category.id;
            link.dataset.target = category.id;
            li.appendChild(link);
            nav.appendChild(li);
        });
    }

    function renderLegend() {
        if (!legendContainer || !data.legend) {
            return;
        }
        Object.keys(data.legend).forEach(function (key) {
            const entry = data.legend[key];
            const li = create("li");
            li.appendChild(create("span", "menu-note-mark", entry.symbol));
            li.appendChild(document.createTextNode(entry.text));
            legendContainer.appendChild(li);
        });
    }

    /* Evidenzia la categoria visibile e mantiene il link a vista nella barra. */
    function setupScrollSpy() {
        if (!nav || !("IntersectionObserver" in window)) {
            return;
        }

        const links = {};
        nav.querySelectorAll("a").forEach(function (link) {
            links[link.dataset.target] = link;
        });

        let active = null;

        /* Centra il link attivo nella barra scorrendo SOLO la barra in orizzontale:
           scrollIntoView() qui interromperebbe lo scroll fluido della pagina. */
        function revealLink(link) {
            const target = link.offsetLeft - (nav.clientWidth - link.offsetWidth) / 2;
            nav.scrollTo({ left: Math.max(0, target), behavior: "smooth" });
        }

        function activate(id) {
            if (active === id) {
                return;
            }
            active = id;
            Object.keys(links).forEach(function (key) {
                if (key === id) {
                    links[key].setAttribute("aria-current", "true");
                    revealLink(links[key]);
                } else {
                    links[key].removeAttribute("aria-current");
                }
            });
        }

        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    activate(entry.target.id);
                }
            });
        }, {
            rootMargin: "-40% 0px -55% 0px",
            threshold: 0
        });

        container.querySelectorAll(".menu-category").forEach(function (section) {
            observer.observe(section);
        });
    }

    /* Le animazioni .reveal vengono gestite da script.js: qui ci assicuriamo
       che gli elementi creati dopo il caricamento vengano osservati. */
    function revealDynamicContent() {
        const targets = container.querySelectorAll(".reveal, .reveal-stagger");
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
        }, { threshold: 0.08 });

        targets.forEach(function (el) { observer.observe(el); });
    }

    function init() {
        renderNav(data.categories);
        data.categories.forEach(function (category) {
            container.appendChild(renderCategory(category));
        });
        renderLegend();
        setupScrollSpy();
        revealDynamicContent();

        /* Se la pagina è stata aperta con un'ancora (#pizze-rosse), scorre alla sezione. */
        if (window.location.hash) {
            const target = document.getElementById(window.location.hash.slice(1));
            if (target) {
                target.scrollIntoView({ behavior: "instant", block: "start" });
            }
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
