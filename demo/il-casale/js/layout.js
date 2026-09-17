(function () {
  "use strict";

  var page = document.body.getAttribute("data-page") || "";

  function navItem(href, id, label) {
    var cur = page === id ? ' aria-current="page"' : "";
    return "<li><a href=\"" + href + "\"" + cur + ">" + label + "</a></li>";
  }

  var header = document.getElementById("site-header");
  if (header) {
    header.innerHTML =
      '<a class="brand" href="./index.html">' +
      '<span class="brand-name">Il Casale</span>' +
      '<span class="brand-place">PIZZOFERRATO</span></a>' +
      '<input class="nav-check" type="checkbox" id="nav-toggle">' +
      "<nav><ul class=\"nav\" id=\"nav\">" +
      navItem("./index.html", "home", "Home") +
      navItem("./chi-siamo.html", "chi-siamo", "Chi siamo") +
      navItem("./carta.html", "carta", "Menù") +
      navItem("./recensioni.html", "recensioni", "Recensioni") +
      navItem("./contatti.html", "contatti", "Contatti") +
      '<li class="nav-book"><a href="./contatti.html">Prenota</a></li>' +
      "</ul></nav>" +
      '<a class="nav-cta" href="./contatti.html">Prenota</a>' +
      '<label class="menu-toggle" for="nav-toggle" aria-controls="nav" aria-expanded="false">' +
      '<span class="visually-hidden">Apri il menu</span>' +
      '<svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true"><path d="M0 1h22M0 8h22M0 15h22" stroke="#3e2a1b" stroke-width="1.6"/></svg>' +
      "</label>";
  }

  var footer = document.getElementById("site-footer");
  if (footer) {
    footer.innerHTML =
      '<div class="wrap footer-grid">' +
      "<div><div class=\"brand-name\" style=\"color:#e0c98a\">Il Casale</div>" +
      '<div class="brand-place">PIZZOFERRATO</div>' +
      "<p>Casale Pollice, 4 · 66040 Pizzoferrato (CH)<br>" +
      '<a href="tel:+390872946242">0872 946242</a></p></div>' +
      "<div><p>Pagine<br>" +
      '<a href="./index.html">Home</a><br>' +
      '<a href="./chi-siamo.html">Chi siamo</a><br>' +
      '<a href="./carta.html">Menù</a><br>' +
      '<a href="./recensioni.html">Recensioni</a><br>' +
      '<a href="./contatti.html">Contatti</a></p></div>' +
      "<div><p>Tavolo<br>" +
      '<a href="./menu.html">Menù digitale (QR)</a><br>' +
      '<a href="https://www.facebook.com/pages/Ristorante-il-casale-Pizzoferrato/133508856734476" target="_blank" rel="noopener noreferrer">Facebook</a><br>' +
      '<a href="https://www.tripadvisor.it/Restaurant_Review-g1897616-d3484464-Reviews-Il_Casale-Pizzoferrato_Province_of_Chieti_Abruzzo.html" target="_blank" rel="noopener noreferrer">Tripadvisor</a><br>' +
      '<a href="./privacy.html">Privacy</a></p></div></div>' +
      '<div class="wrap legal">Proposta di stile FC Studio · immagini di riferimento · © <span class="y"></span> Il Casale Pizzoferrato</div>';
  }

  var nav = document.getElementById("nav");
  var toggle = document.querySelector(".menu-toggle");
  var navCheck = document.getElementById("nav-toggle");
  function closeNav() {
    if (nav) nav.classList.remove("is-open");
    if (navCheck) navCheck.checked = false;
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  }
  if (navCheck && toggle) {
    navCheck.addEventListener("change", function () {
      toggle.setAttribute("aria-expanded", navCheck.checked ? "true" : "false");
      if (nav) nav.classList.toggle("is-open", navCheck.checked);
    });
  }
  if (nav) {
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeNav);
    });
  }

  var year = String(new Date().getFullYear());
  document.querySelectorAll(".y").forEach(function (el) { el.textContent = year; });

  var form = document.getElementById("form-prenota");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var box = document.getElementById("form-ok");
      box.style.display = "block";
      box.textContent =
        "Richiesta registrata in questa demo. Per prenotare ora chiama 0872 946242.";
      form.reset();
    });
  }
})();
