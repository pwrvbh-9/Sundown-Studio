
// locomotive scroll code 

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

// page-3 animation code 

const mediaQuery = window.matchMedia('(min-width: 991px)');


function page3Anime(mediaQuery) {
  var container = document.querySelector("#elem-container");
  var image = document.querySelector("#fixed-img");

  if(mediaQuery.matches){
    container.addEventListener("mouseenter", function () {
      image.style.display = "block";
    });
  
    container.addEventListener("mouseleave", function () {
      image.style.display = "none";
    });
  
    var element = document.querySelectorAll(".elements");
    element.forEach(function (e) {
      e.addEventListener("mouseenter", function () {
        var image1 = e.getAttribute("image-link");
        image.style.backgroundImage = `url(${image1})`;
      });
    });
  } else {
    image.style.display = "block";
  }
}

page3Anime(mediaQuery);

mediaQuery.addEventListener('change', function(){
  page3Anime(mediaQuery)
})

// swiper js code 

function SwiperAnime() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
  });
}

// hamburger menu code 

function menuAnime() {
  var menu = document.querySelector("nav p");
  var icon = document.querySelector("nav p i");
  var hamMenu = document.querySelector("#open-menu");
  var navlogo = document.querySelector("nav img");
  var flag = 0;

  menu.addEventListener("click", function () {
    if (flag == 0) {
      hamMenu.style.top = 0;
      navlogo.style.opacity = 0;
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-xmark');
      flag = 1;
    } else {
      hamMenu.style.top = "-100%";
      navlogo.style.opacity = 1;
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
      flag = 0;
    }
  });
}

// starting animation 

function loadAnime() {
    var load = document.querySelector("#loader");

    setTimeout(function () {
      load.style.top = "-100%";
    }, 2500);
    
}


SwiperAnime();
menuAnime();
loadAnime();
