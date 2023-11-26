const menuNav = document.querySelectorAll('[data-menu="menu-nav"] a[href^="#"')

function initScrollSuave(e) {
  e.preventDefault()
  const href = e.currentTarget.getAttribute('href')
  const article = document.querySelector(href)
  article.scrollIntoView({
    block: 'start',
    behavior: 'smooth'
  })
}

menuNav.forEach((link) => {
  link.addEventListener('click', initScrollSuave)
})

function menuMobile() {
  const menuMobile = document.querySelector(".menu-mobile");
  function toggleMenuMobile() {
    const nav = document.querySelector(".nav-menu");
    nav.classList.toggle("ativo");
  }
  menuMobile.addEventListener("click", toggleMenuMobile);
}
menuMobile();