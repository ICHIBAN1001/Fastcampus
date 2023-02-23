const searchEl = document.querySelector('.search');
const searchInputeEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function () {
  searchInputeEl.focus();
});

searchInputeEl.addEventListener('focus',function(){
  searchEl.classList.add('focused');
  searchInputeEl.setAttribute('placeholder','thing이야 사랑해');
});

searchInputeEl.addEventListener('blur',function(){
  searchEl.classList.remove('focused');
  searchInputeEl.setAttribute('placeholder','');
});

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll',_.throttle(function(){
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    gsap.to(badgeEl,.4,{
      opacity:0,
      display:'none'
    })
  }else {
    gsap.to(badgeEl,.4,{
      opacity:1,
      display:'block'
  })
  }
},300));



//시간차 요소 나타나게 하기 
const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function(fadeel,index){

  gsap.to(fadeel,1,{
    delay: (index+1)*0.4  ,     /* 0.7 , 1.4 , 2.1  , 2.8*/
    opacity:1
  });
});


new Swiper ('.notice-line .swiper-container', {
  direction:'vertical',
  autoplay: true,
  loop: true,
  mousewheel: true
});

new Swiper ('.promotion .swiper-container' , {
  slidesPerView: 3 ,
  spaceBetween:10,
  centeredSlides:true,
  loop:true,

  autoplay:{
    delay:5000
  },

  pagination:{
    el:'.promotion .swiper-pagination',
    clickable:true
  },

  navigation:{
    prevEl:'.promotion .swiper-prev',
    nextEl:'.promotion .swiper-next'
  }
  
});

