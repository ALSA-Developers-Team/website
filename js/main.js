/* ---- vanta.js config ---- */
 VANTA.NET({
  el: document.getElementById("vanta-bg"), 
  mouseControls: true,
  touchControls: true,
  gyroControls: true,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.0,
  scaleMobile: 1.00,
  color: 0xDEF2F1,
  backgroundColor: 0x17252A,
  points: window.innerWidth > 568 ? 20 : 25,
  maxDistance: window.innerWidth > 568 ? 18 : 22,
  spacing: window.innerWidth > 568 ? 15.50 : 30.50
  });

  const swiper = new Swiper('.swiper-container', {
    speed: 600,
        parallax: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
    },
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
      },
    mousewheelControl: true
});

swiper.on('transitionEnd', function() {
  if (swiper.realIndex === 1){
    var an1 = document.getElementById('an-1')
    an1.style.display = 'inline'
    an1.classList.add('animate__fadeIn')
    var an2 = document.getElementById('an-2')
    an2.classList.add('animate__headShake')

    const an_slide1 = ()=>{
      return new Promise(() => {
        setTimeout(() =>{
          var an3 = document.getElementById('an-3')
          an3.style.display = 'inline'
          an3.classList.add('animate__fadeInTopLeft')
          an3.setAttribute('data-tilt', '')
          var an4 = document.getElementById('an-4')
          an4.style.display = 'inline'
          an4.classList.add('animate__fadeInTopRight')
        },500)
      });
    }
    async function anim(){
      await an_slide1()
    }
    anim()
  }
  if (swiper.realIndex === 2){

  }
  if (swiper.realIndex === 3){

  }
});

