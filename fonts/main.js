/* ABRE E FECHA O MENU QUANDO CLICAR NO ICONE */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const div of toggle) {
  div.addEventListener('click', function(){
    nav.classList.toggle('show')
})
}

/* QUANDO CLICAR EM UM ITEM DO MENU, ESCONDER O MENU */

const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
  link.addEventListener('click', function(){
    nav.classList.remove('show')
  })
}

/* MUDAR O HEADER DA PAGINA QUANDO DER O SCROLL */

const header = document.querySelector("#header")
  const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
   
  if(window.scrollY >= navHeight){

    header.classList.add('scroll')
  } else{
    header.classList.remove('scroll')
  }

}

/* ======= Testimonial caourrosel nos depoimentos */
const swiper = new Swiper('.swiper-container', {
  slidesPerView : 1,
  pagination: {
    el: '.swiper-pagination',
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
});

/* -- ScrollReveal: mostrar elementos quando der scroll na pagina */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links, footer .brand, footer .social
  `,
  { interval: 100 }
)

/* botão voltar para o topo/ back-to-top */

const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* ---- menu ativo conforme a seção visivel na pág */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection () {

  const chekpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for( const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const chekpointStart = chekpoint >= sectionTop
    const chekpointEnd = chekpoint <= sectionTop + sectionHeight

    if(chekpointStart && chekpointEnd) {
      document.querySelector('nav ul li a[href*=' + sectionId +']')
      .classList.add('active')
    } else {
      document.querySelector('nav ul li a[href*=' + sectionId +']')
      .classList.remove('active')
    }
  }

}

/* when scroll */
window.addEventListener('scroll', function(){
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection ()
})


