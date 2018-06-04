let topmenu = document.querySelector('.hidden-menu')

document.addEventListener('scroll', () => {
  if (window.pageYOffset >= 100) {
    topmenu.classList.add('hidden-menu_visible')
  } else {
    topmenu.classList.remove('hidden-menu_visible')
  }
})