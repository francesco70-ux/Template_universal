(function () {
  "use strict";

  var header = document.getElementById("header");
  var nav = document.getElementById("nav");
  var toggle = document.querySelector(".menu-toggle");
  var navCheck = document.getElementById("nav-toggle");
  var form = document.getElementById("form-prenota");
  var lite = document.getElementById("lite");

  window.addEventListener("scroll", function () {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
  });

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
  } else if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
  if (nav) {
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeNav);
    });
  }

  var y = document.getElementById("y");
  if (y) y.textContent = String(new Date().getFullYear());

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var box = document.getElementById("form-ok");
      box.style.display = "block";
      box.textContent =
        "Richiesta registrata in questa demo. In produzione partirebbe verso il ristorante. Per prenotare ora chiama 0872 946242.";
      form.reset();
    });
  }

  if (lite) {
    var img = lite.querySelector("img");
    var close = lite.querySelector("button");
    document.querySelectorAll(".js-lite").forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        img.src = a.getAttribute("href");
        img.alt = a.querySelector("img").alt || "";
        lite.hidden = false;
        lite.classList.add("is-open");
      });
    });
    function hide() {
      lite.hidden = true;
      lite.classList.remove("is-open");
      img.src = "";
    }
    close.addEventListener("click", hide);
    lite.addEventListener("click", function (e) {
      if (e.target === lite) hide();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") hide();
    });
  }

  /* QR live: se la demo è servita in locale, mostra anche il QR dell’URL attuale
     (così si può scansionare dal telefono sulla stessa rete). */
  var live = document.getElementById("live-qr");
  var cap = document.getElementById("live-qr-caption");
  if (live && typeof qrcode === "function") {
    var menuUrl = window.location.origin + window.location.pathname.replace(/index\.html$/i, "") + "menu.html";
    try {
      var qr = qrcode(0, "M");
      qr.addData(menuUrl);
      qr.make();
      live.innerHTML = qr.createImgTag(4, 4);
      live.hidden = false;
      cap.hidden = false;
      cap.textContent = "QR di questa demo: " + menuUrl;
    } catch (err) {
      live.hidden = true;
    }
  }
})();
