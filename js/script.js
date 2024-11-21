

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
/////////////////////////////////
// CUSTOM SCRIPT FOR TEACHER'S CAROUSEL /////
/////////////////////////////////
const wrapper = document.querySelector(".wrapper"); /* Here, I might have to change the class name*/
const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".wrapper i");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const carouselChildrens = [...carousel.children];

let isDragging = false, startX, startScrollLeft, timeoutId;

//Get the number of cards that can fit in the "carousel" at once- 
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

//Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

//Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

//Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? - firstCardWidth : firstCardWidth;
    })
})

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; //if isDragging is false, return from here
    //Updates the scroll left position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft- (e.pageX - startX);
}
const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const autoPlay = () => {
    if(window.innerWidth < 800) return;// Return if window is below 800
    //Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

const infiniteScroll = () => {
    //If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        //Removing the smooth animation, to look proper infinite scrolling effect
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - ( 2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    // If the carousel is at the end, scroll to the beginning
    } else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth){
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    //Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", ()=> clearTimeout(timeoutId));
carousel.addEventListener("mouseleave", autoPlay);

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