document.addEventListener("DOMContentLoaded", () => {
  fetch("/components/menu.html")
    .then(res => res.text())
    .then(html => {
      // Injeta o HTML do menu no início do <body>
      document.body.insertAdjacentHTML("afterbegin", html);
      initMenuToggle();
    })
    .catch(err => console.error("Erro ao carregar menu:", err));
});

function initMenuToggle() {
  const toggle = document.getElementById("menu-toggle");
  const list = document.getElementById("menu-list");

  toggle.addEventListener("click", () => {
    // Alterna visibilidade do menu em mobile
    list.classList.toggle("menu__list--active");
    toggle.classList.toggle("menu__toggle--active");
  });
}
