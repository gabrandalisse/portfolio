//* Fancy intro animation
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("header", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".textBx", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".btn", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".about", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".technologies", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".work", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".contact", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

//* Add sticky class on scroll to the nav
window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

//* Responsive menu
function toggleMenu() {
  var menuToggle = document.querySelector(".toggle");
  var menu = document.querySelector(".menu");
  menuToggle.classList.toggle("active");
  menu.classList.toggle("active");
}; 

//* Technologies slider config
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  mousewheel: true,
  breakpoints: {
    700: { // When the window size is >= 700 px
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 10,
    }
  }
});

//* Form validation
document.addEventListener("DOMContentLoaded",function() {
  document.getElementById('contact-form').addEventListener("submit",function(e) {
    e.preventDefault(); 

    // Data
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const msg = document.getElementById("message");

    // Div
    const notification = document.querySelector(".notification-div");


    // After send the email
    notification.innerText = "Mensaje enviado con éxito.";
    notification.style.border = "1px solid green";
    notification.style.marginBottom = "10px";
    notification.style.padding = "20px";
    notification.style.color = "#fff";
    notification.style.textAlign = "center";

    setTimeout(() => {
      notification.style.display = "none";
    }, 3000);

    



  });
});


//* Dinamic year
const currentYear = new Date().getFullYear();  
const yearSite = document.querySelector(".year");
yearSite.innerText = currentYear;