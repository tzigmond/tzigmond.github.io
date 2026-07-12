document.getElementById("year").textContent = new Date().getFullYear();

var toggle = document.getElementById("theme-toggle");
if (toggle) {
  toggle.addEventListener("click", function () {
    var root = document.documentElement;
    var current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
    var next = current === "dark" ? "light" : "dark";
    root.classList.add("theme-switching");
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        root.classList.remove("theme-switching");
      });
    });
  });
}
