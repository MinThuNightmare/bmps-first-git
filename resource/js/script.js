//contact hide show
const contactText = document.querySelector(".contact_text");
const ccHideShow =document.querySelector(".cc");
const jsNav = document.querySelector(".js--nav");


contactText.addEventListener("click", ()=>{
        // ccHideShow.classList.toggle("show");
        // if(ccHideShow.classList.contains("show")){
        //         jsNav.style.top ="55px";
               
        // }else{
        //         jsNav.style.top ="-55px";
                

        // }
        
})

const mobleMenuCover =document.querySelector(".moble_menu_cover");

// mobleMenuCover.classList.toggle("show1");
// mobleMenuCover.style.transform = "rotate(-180deg)";


const mobileMenuHome =document.querySelector(".mobile_menu_home");
const mobileMainLiHome =document.querySelector(".mobile_main_li_home");

mobileMainLiHome.addEventListener("click", ()=>{
  mobileMenuHome.classList.toggle("show");
mobleMenuCover.classList.toggle("show1");

})

const mobileMenuService =document.querySelector(".mobile_menu_service");
const mobileMainLiService =document.querySelector(".mobile_main_li_service");
const service =document.querySelector(".service");


mobileMainLiService.addEventListener("click", ()=>{
  mobileMenuService.classList.toggle("show");
mobleMenuCover.classList.toggle("show2");

})

const mobileMenuPage =document.querySelector(".mobile_menu_page");
const mobileMainLiPage =document.querySelector(".mobile_main_li_page");

mobileMainLiPage.addEventListener("click", ()=>{
  mobileMenuPage.classList.toggle("show");
mobleMenuCover.classList.toggle("show3");

})

const mobileMenuGallery =document.querySelector(".mobile_menu_gallery");
const mobileMainLiGallery =document.querySelector(".mobile_main_li_gallery");

mobileMainLiGallery.addEventListener("click", ()=>{
  mobileMenuGallery.classList.toggle("show");
  mobleMenuCover.classList.toggle("show4");

})

const mobileMenuBlog =document.querySelector(".mobile_menu_blog");
const mobileMainLiBlog =document.querySelector(".mobile_main_li_blog");

mobileMainLiBlog.addEventListener("click", ()=>{
  mobileMenuBlog.classList.toggle("show");
  mobleMenuCover.classList.toggle("show5");

})

const bxMenu = document.querySelector(".bx-menu");

bxMenu.addEventListener("click", ()=>{
  mobleMenuCover.classList.toggle("show");
  
})


// contactText.addEventListener("click", ()=>{
//                 ccHideShow.classList.add("animate__animated", "animate__fadeInDown");   
//                 ccHideShow.classList.toggle("show");
                
               
                

        
        
// })
// contactText.addEventListener("click", ()=>{
        
        

//         if(jsNav.classList.contains("animate__fadeInDown")){
//                 jsNav.classList.remove("animate__animated", "animate__fadeInDown");        
//                  jsNav.classList.add("animate__animated", "animate__fadeInUp");
//         }else{
//                 jsNav.classList.remove("animate__animated", "animate__fadeInUp");
//                 jsNav.classList.add("animate__animated", "animate__fadeInDown");
                
                        
//         }
        
        
// })

$('.curosel').slick({
        autoplay: true,

        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
      });





      wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      wow.init();

      $(document).ready(function(){
        $('.venobox').venobox({
          framewidth : '400px',                            // default: ''
          frameheight: 'auto',                            // default: ''
          titleattr  : 'data-title',                       // default: 'title'
          numeratio  : true,                               // default: false
          infinigall : true, 
          spinner: 'Wave',                              // default: false
          share      : [ 'download'] // default: []
      }); 
    });

    $('.counter').counterUp({
      delay: 10,
      time: 1000
  });

  
  // slick
  $('.slick_vvv').slick({
    autoplay:true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });