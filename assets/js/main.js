// Small helpers for the menu and the publication filters.
(function () {
  // Mobile menu
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Publication filters
  var chips = document.querySelectorAll(".chip");
  var firstOnly = document.getElementById("first-only");
  var pubs = document.querySelectorAll(".pub");
  var groups = document.querySelectorAll(".year-group");
  var empty = document.querySelector(".empty");
  var current = "all";

  function apply() {
    var shown = 0;
    pubs.forEach(function (li) {
      var okType = current === "all" || li.dataset.type === current;
      var okFirst = !firstOnly || !firstOnly.checked || li.dataset.first === "true";
      var show = okType && okFirst;
      li.hidden = !show;
      if (show) shown++;
    });
    groups.forEach(function (g) {
      g.hidden = !g.querySelector(".pub:not([hidden])");
    });
    if (empty) empty.hidden = shown > 0;
  }

  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      current = chip.dataset.filter;
      chips.forEach(function (c) {
        var on = c === chip;
        c.classList.toggle("is-on", on);
        c.setAttribute("aria-pressed", on ? "true" : "false");
      });
      apply();
    });
  });
  if (firstOnly) firstOnly.addEventListener("change", apply);

  // Abstract / BibTeX buttons
  document.querySelectorAll("[data-toggle]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var box = document.getElementById(btn.dataset.toggle);
      if (!box) return;
      box.hidden = !box.hidden;
      btn.setAttribute("aria-expanded", box.hidden ? "false" : "true");
    });
  });
  document.querySelectorAll(".copy-bib").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var pre = btn.parentElement.querySelector("pre");
      if (!pre || !navigator.clipboard) return;
      navigator.clipboard.writeText(pre.textContent).then(function () {
        btn.textContent = "Copied";
        setTimeout(function () { btn.textContent = "Copy BibTeX"; }, 1500);
      });
    });
  });
})();
