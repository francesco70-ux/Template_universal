(function () {
  "use strict";
  var root = document.getElementById("carta");
  if (!root || !window.MENU) return;

  var catImg = {
    antipasti: "assets/img/ref/bruschetta.jpg",
    primi: "assets/img/ref/pasta.jpg",
    secondi: "assets/img/ref/griglia.jpg",
    dolci: "assets/img/ref/tiramisu.jpg",
    bevande: "assets/img/ref/vino.jpg"
  };

  function itemHtml(item) {
    var tag = (item.tags || []).indexOf("firma") >= 0
      ? '<span class="tag">Firma</span> '
      : "";
    return (
      '<article class="carta-item"><div>' +
      tag + "<h3>" + item.name + "</h3><p>" + item.description + "</p></div>" +
      '<span class="tag">' + (item.priceLabel || "") + "</span></article>"
    );
  }

  root.innerHTML = MENU.categories.map(function (cat) {
    var img = catImg[cat.id] || catImg.primi;
    return (
      '<section class="carta-cat" id="' + cat.id + '">' +
      "<h2>" + cat.name + "</h2>" +
      '<p class="carta-note">' + cat.note + "</p>" +
      '<div class="carta-grid">' +
      '<img src="' + img + '" alt="' + cat.name + ' — immagine di riferimento da un altro ristorante">' +
      '<div class="carta-list">' + cat.items.map(itemHtml).join("") + "</div>" +
      "</div></section>"
    );
  }).join("");
})();
