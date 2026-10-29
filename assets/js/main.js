(function () {
  // Mobile nav
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  // Portfolio full-page viewer
  var dialog = document.getElementById("viewer");
  if (dialog && typeof dialog.showModal === "function") {
    var img = dialog.querySelector("img");
    var title = dialog.querySelector("h2");
    document.querySelectorAll("[data-full]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        img.src = btn.getAttribute("data-full");
        img.alt = btn.getAttribute("data-alt");
        title.textContent = btn.getAttribute("data-title");
        dialog.showModal();
        dialog.querySelector(".viewer-body").scrollTop = 0;
      });
    });
    dialog.querySelector(".viewer-close").addEventListener("click", function () { dialog.close(); });
    dialog.addEventListener("click", function (e) { if (e.target === dialog) dialog.close(); });
  }
})();
