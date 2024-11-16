

////////////////////////////////////////
//Make mobile navigation work
const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function(){
    headerEl.classList.toggle('nav-open');
})

// Select all navigation links inside the main-nav element
const navLinks = document.querySelectorAll('.main-nav .main-nav-links');

// Close the mobile menu when any nav link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Remove the nav-open class to close the menu
    headerEl.classList.remove('nav-open');
  });
});
/////////////////////////////////
/// STICKY NAVIGATION
const sectionHeroEl = document.querySelector('.hero');

const obs = new IntersectionObserver(
    function (entries){
    const ent = entries[0];
    console.log(ent);

    if(ent.isIntersecting === false){
        document.body.classList.add('stickey');  
    }

    if(ent.isIntersecting ===true){
        document.body.classList.remove('stickey');  
    }
}, 
    {
    //In the viewport
    root: null,
    threshold: 0,
    rootMargin: '-80px',  //in this code only px is accepted (height of the- .sticky.header class i.e. 5rem)
});
obs.observe(sectionHeroEl);

///////HERRO TTILE typing....
// Text to type out
const text = "Service and Discipline";
let index = 0;
let currentText = "";

// Function to type each character
function typeText() {
    if (index < text.length) {
        // Typing the full phrase "Service and Discipline"
        currentText += text[index];
        document.getElementById("typed-text").innerText = currentText;
        index++;
        setTimeout(typeText, 150); // Adjust the speed here
    }
}

// Trigger the typing animation once the page loads
window.onload = typeText;
/////////////////////////////////
// CAROUSEL WITH SWIPER JS FOR TEAMS//////
/////////////////////////////////
new Swiper('.cards-wrapper ', {
    loop: true,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    //Pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive Breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
  });


/////////////////////////////////
// CAROUSEL WITH SWIPER JS FOR GALLERY//////
/////////////////////////////////
new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,

    //Pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive Breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
  });

// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//OWL CAROUSEL SCRIPT
$('.testimonials-container').owlCarousel({
    loop:true,
    autoplay: true,
    autoplayTimeout: 4000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
    }
})