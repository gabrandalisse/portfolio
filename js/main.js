
//* On document load
$(document).ready(() => {
  
  // Form elements
  const notification = $("#notification");
  const spinner = $(".sk-folding-cube");

  notification.hide();
  spinner.hide();
});

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
$("#contact-form").on("submit", function (e) {
  e.preventDefault();

  // Send button
  const sendBtn = $("#sendBtn");

  // Divs
  const notification = $("#notification");
  const spinner = $(".sk-folding-cube");

  // Data
  const name = $("#name").val().trim();
  const email = $("#email").val().trim();
  const msg = $("#message").val().trim();

  // Verify if the data is correct
  if (name === "" || email === "" || email.indexOf("@") === -1 || msg === "") {
    notification.show();
    notification.text("Todos los campos son obligatorios.");
    notification.css("border", "1px solid red");
    setTimeout(() => {
      notification.hide();
    }, 3000);
    return;
  }

  // Hide the btn and show a loader
  sendBtn.hide();
  spinner.show();

  // Put all the form data in an array
  const allFormData = $(this).serializeArray();

  // Send all the info to the backend to send the email.
  $.ajax({
    type: $(this).attr("method"),
    data: allFormData,
    url: $(this).attr("action"),
    dataType: "json",
    success: function (data) {
      if (data.response == "success") {
        spinner.hide();
        notification.text("Mensaje enviado con éxito.");
        notification.css("border", "1px solid green");
        notification.show();
        sendBtn.show();

        setTimeout(() => {
          notification.hide();
        }, 5000);
      } else {
        spinner.hide();
        notification.text("Hubo un error, el mensaje no se pudo enviar.");
        notification.css("border", "1px solid red");
        notification.show();
        sendBtn.show();
        setTimeout(() => {
          notification.hide();
        }, 5000);
      }
    },
  });
});

//* Dinamic year
const currentYear = new Date().getFullYear();  
const yearSite = document.querySelector(".year");
yearSite.innerText = currentYear;