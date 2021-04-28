(function (){

  // Global

  const section = document.querySelector('section[name="depoimentos"]')

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

  // Modals 1
  
  const div1 = section.querySelector('div[name="aluno1"]')
  const modal1 = section.querySelector('div[name="modal1"]')
  const button1 = modal1.querySelector('button[name="fechar"]')
  const iframe1 = modal1.querySelector('iframe')

  function abrirModal1 () {
    div1.addEventListener('click', () => {
      modal1.classList.add('mostrar')
      iframe1.src = 'https://www.youtube-nocookie.com/embed/-_6_T-mvPog'
    })
  }

  function fecharModal1 () {
    button1.addEventListener('click', () => {
      modal1.classList.remove('mostrar')
      iframe1.src = ''
    })
  }

  abrirModal1()
  fecharModal1()

  // Modals 2
  
  const div2 = section.querySelector('div[name="aluno2"]')
  const modal2 = section.querySelector('div[name="modal2"]')
  const button2 = modal2.querySelector('button[name="fechar"]')
  const iframe2 = modal2.querySelector('iframe')

  function abrirModal2 () {
    div2.addEventListener('click', () => {
      modal2.classList.add('mostrar')
      iframe2.src = 'https://www.youtube-nocookie.com/embed/-_6_T-mvPog'
    })
  }

  function fecharModal2 () {
    button2.addEventListener('click', () => {
      modal2.classList.remove('mostrar')
      iframe2.src = ''
    })
  }

  abrirModal2()
  fecharModal2()

  // Modals 3
  
  const div3 = section.querySelector('div[name="aluno3"]')
  const modal3 = section.querySelector('div[name="modal3"]')
  const button3 = modal3.querySelector('button[name="fechar"]')
  const iframe3 = modal3.querySelector('iframe')

  function abrirModal3 () {
    div3.addEventListener('click', () => {
      modal3.classList.add('mostrar')
      iframe3.src = 'https://www.youtube-nocookie.com/embed/-_6_T-mvPog'
    })
  }

  function fecharModal3 () {
    button3.addEventListener('click', () => {
      modal3.classList.remove('mostrar')
      iframe3.src = ''
    })
  }

  abrirModal3()
  fecharModal3()

  // Modals 4
  
  const div4 = section.querySelector('div[name="aluno4"]')
  const modal4 = section.querySelector('div[name="modal4"]')
  const button4 = modal4.querySelector('button[name="fechar"]')
  const iframe4 = modal4.querySelector('iframe')

  function abrirModal4 () {
    div4.addEventListener('click', () => {
      modal4.classList.add('mostrar')
      iframe4.src = 'https://www.youtube-nocookie.com/embed/-_6_T-mvPog'
    })
  }

  function fecharModal4 () {
    button4.addEventListener('click', () => {
      modal4.classList.remove('mostrar')
      iframe4.src = ''
    })
  }

  abrirModal4()
  fecharModal4()

}())
