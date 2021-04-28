(function (){

  // Variables

  const __nav = document.querySelector('nav')

  // Methods

  function adicionarClasse () {
    window.addEventListener('scroll', () => {
      const alturaPagina = window.scrollY
      if (alturaPagina < 10) __nav.classList.remove('scroll')
      else __nav.classList.add('scroll')
    })
  }

  // Start
  adicionarClasse()

}())

