(function () {
  "use strict";

  var cover = document.getElementById("cover");
  var shell = document.getElementById("shell");
  var start = document.getElementById("start-menu");
  var root = document.getElementById("menu");
  var chips = document.getElementById("chips");
  var search = document.getElementById("q");

  if (!window.MENU || !root) return;

  function openMenu() {
    if (cover) cover.classList.add("is-off");
    if (shell) shell.classList.add("is-on");
    if (search) search.focus();
  }

  if (start) {
    start.addEventListener("click", function () {
      openMenu();
    });
  }
  if (window.location.hash && window.location.hash !== "#cover") {
    openMenu();
  }

  function badge(tag) {
    var map = { firma: "Firma", stagione: "Stagione", consigliato: "Consigliato" };
    return '<span class="badge">' + (map[tag] || tag) + "</span>";
  }

  function itemHtml(item) {
    var img = item.image
      ? '<div class="ph"><img src="' + item.image + '" alt="' + item.name + (item.imagePlaceholder ? " — fotografia sostitutiva" : "") + '"></div>'
      : "";
    var tags = (item.tags || []).map(badge).join("");
    var allergens = item.allergens
      ? '<span class="badge">Allergeni: ' + item.allergens + "</span>"
      : "";
    var frozen = item.frozen
      ? '<span class="badge">Prodotto congelato</span>'
      : "";
    var price = item.price
      ? '<span class="price">' + item.price + "</span>"
      : '<span class="price">' + (item.priceLabel || "") + "</span>";
    return (
      '<article class="item' + (item.image ? "" : " has-no-img") + '" id="' + item.id + '">' +
      img +
      "<div><h3>" + item.name + "</h3><p>" + item.description + "</p>" +
      '<div class="meta">' + tags + allergens + frozen + price + "</div></div></article>"
    );
  }

  function formulaHtml() {
    var f = MENU.formula;
    var steps = f.steps.map(function (s) {
      return "<li><strong>" + s.title + ".</strong> " + s.text + "</li>";
    }).join("");
    return (
      '<article class="formula-card" id="formula">' +
      "<h2>" + f.title + "</h2>" +
      "<p>" + f.lead + "</p>" +
      "<ol>" + steps + "</ol>" +
      '<p class="price-line">' + f.priceFromReviews + " " + f.priceLabel + ".</p></article>"
    );
  }

  function render(filter) {
    var q = (filter || "").trim().toLowerCase();
    var html = formulaHtml();
    var chipHtml = '<a href="#formula">La formula</a>';
    var any = false;

    MENU.categories.forEach(function (cat) {
      var items = cat.items.filter(function (it) {
        if (!q) return true;
        return (it.name + " " + it.description + " " + (it.tags || []).join(" ")).toLowerCase().indexOf(q) !== -1;
      });
      chipHtml += '<a href="#' + cat.id + '">' + cat.name + "</a>";
      if (!items.length) return;
      any = true;
      html +=
        '<section class="cat" id="' + cat.id + '">' +
        "<h2>" + cat.name + "</h2>" +
        '<p class="cat-note">' + cat.note + "</p>" +
        items.map(itemHtml).join("") +
        "</section>";
    });

    if (q && !any) html += '<p class="empty">Nessun piatto corrisponde. Prova «ravioli», «tartufo» o «brace».</p>';
    html += '<p class="legal-note">' + MENU.priceDisclaimer + " " + MENU.allergenDisclaimer + "</p>";
    root.innerHTML = html;
    if (chips) chips.innerHTML = chipHtml;
  }

  render("");
  if (search) {
    search.addEventListener("input", function () {
      render(search.value);
    });
  }

  if (window.location.hash && window.location.hash.length > 1) {
    openMenu();
    setTimeout(function () {
      var el = document.getElementById(window.location.hash.slice(1));
      if (el) el.scrollIntoView({ block: "start" });
    }, 50);
  }

  var dockTop = document.getElementById("dock-top");
  if (dockTop) {
    dockTop.addEventListener("click", function () {
      openMenu();
    });
  }
})();
