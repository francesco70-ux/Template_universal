(function () {
  "use strict";

  function menuPreviewUrl() {
    var u = new URL(window.location.href);
    if (u.port === "8080") {
      u.port = "8081";
      u.pathname = "/";
      u.search = "";
      u.hash = "";
      return u.toString();
    }
    if (u.port === "8081") {
      u.pathname = "/";
      u.search = "";
      u.hash = "";
      return u.toString();
    }
    var path = u.pathname.replace(/[^/]*$/, "");
    return u.origin + path + "menu.html";
  }

  var url = menuPreviewUrl();
  document.querySelectorAll("[data-menu-url]").forEach(function (el) {
    if (el.tagName === "A") el.setAttribute("href", url);
    if (el.hasAttribute("data-menu-url-text")) el.textContent = url;
  });

  var live = document.getElementById("live-qr");
  var cap = document.getElementById("live-qr-caption");
  if (live && typeof qrcode === "function") {
    try {
      var qr = qrcode(0, "M");
      qr.addData(url);
      qr.make();
      live.innerHTML = qr.createImgTag(4, 4);
      live.hidden = false;
      if (cap) {
        cap.hidden = false;
        cap.textContent = "QR di questa anteprima: " + url;
      }
    } catch (err) {
      live.hidden = true;
    }
  }
})();
