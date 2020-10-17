// Fancy intro animation
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

// Add sticky class on scroll to the nav
window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Responsive menu
function toggleMenu() {
  var menuToggle = document.querySelector(".toggle");
  var menu = document.querySelector(".menu");
  menuToggle.classList.toggle("active");
  menu.classList.toggle("active");
}; 

// Technologies slider config
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 5,
  spaceBetween: 50,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
});