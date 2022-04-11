import $ from "jquery";
import "bootstrap";
import "slick-carousel";
import "./main.scss";

const navBtn = document.querySelector("#nav_button");
const navMenu = document.querySelector("#nav_menu");
const body = document.querySelector("body");
const btnIcon = document.querySelector(".btnicon");

// Mobile navigation
navBtn.addEventListener("click", showHide);

function showHide() {
    if (navMenu.style.display === "block") {
        navMenu.style.display = "none";
        body.classList.remove("overflow-hidden");
        btnIcon.classList.remove("bi-x");

    } else {
        navMenu.style.display = "block";
        body.classList.add("overflow-hidden");
        btnIcon.classList.add("bi-x");
    }
}

// Header sticky
const mobileHeader = document.querySelector(".header");
window.onscroll = function() {
    if (document.documentElement.scrollTop > 20) {
        mobileHeader.classList.add("sticky");
    } else {
        mobileHeader.classList.remove("sticky");
    }
};

//  counter
const counters = document.querySelectorAll('.counter');
const speed = 200;
counters.forEach(counter => {
    const animate = () => {
        const value = +counter.getAttribute('data-number');
        const data = +counter.innerText;
        const time = value / speed;
        if (data < value) {
            counter.innerText = Math.ceil(data + time);
            setTimeout(animate, 1);
        } else {
            counter.innerText = value;
        }
    }
    animate();
});

$('.responsive').slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
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
          slidesToShow: 2,
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
    ]
  });

  $('.testimonials-slider').slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  });