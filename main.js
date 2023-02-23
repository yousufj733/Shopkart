// /Mobile Nav manu 
const menu =document.querySelector('#nav__items');
const openBtn =document.querySelector('#open__nav-btn');
const closeBtn =document.querySelector('#close__nav-btn');
 

openBtn.addEventListener('click',()=>{

    menu.style.display='flex';
    closeBtn.style.display='inline-block';
    openBtn.style.display='none';
 
 })


const closeNav = () =>{

    menu.style.display='';
    closeBtn.style.display='none';
    openBtn.style.display='';
 
 }
 closeBtn.addEventListener('click',closeNav);


// sticky menu 
window.addEventListener('scroll', ()=> {

document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
document.querySelector('nav').classList.toggle('nav__height', window.scrollY > 0);

})



  
   //close when a menu is clicked
  if(window.innerWidth < 1024)
  {
    document.querySelectorAll('#nav__items li a ').forEach(menu => {
      menu.addEventListener('click',()=>{
        closeNav();
      })
    })
  }
  

   //    <!-- Initialize Swiper -->
  
 var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,

  speed: 1000,
  loop: true,
  setInitialSlide: 0,
  spaceBetween: 10,

  pagination: {
    el: ".swiper-pagination ",
    clickable: true,
  },
  autoplay: {
      delay: 2000,
  },
  // break points width >=600
breakpoints: 
{
  600:{
      slidesPerView:1
  }
}

});