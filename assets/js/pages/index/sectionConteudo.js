(function (){

  // Global

  const section = document.querySelector('section[name="conteudo"]')

  // Slide

  const slide = section.querySelector('div[name="slide"]')
  const buttonAvancar = section.querySelector('button[name="avancar"]')
  const buttonVoltar = section.querySelector('button[name="voltar"]')
  const tamanhoElemento = 400
  let __indice = 1

  function botaoAvancarSlide () {
    buttonAvancar.addEventListener('click', () => {
      const numeroLinks = slide.children.length
      if (__indice === numeroLinks) return

      __indice = __indice + 1
      rolarSlide(__indice)
    })
  }

  function botaoVoltarSlide () {
    buttonVoltar.addEventListener('click', () => {
      if (__indice === 1) return

      __indice = __indice - 1
      rolarSlide(__indice)
    })
  }

  function rolarSlide (indice) {
    const deslocamento = tamanhoElemento * (indice - 1)
    slide.style.transform = `translateX(-${deslocamento}px)`
  }

  botaoAvancarSlide()
  botaoVoltarSlide()

}())
