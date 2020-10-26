//JQuery Module Pattern
"use strict";

// An object literal
const app = {
  init() {
    app.functionOne();
  },
  functionOne() {
  }
};

$("document").ready(() => {
  app.init();
});


// menu togler 
if(document.querySelector(".openButton")) {
  document.querySelector(".openButton").onclick = () => {
    document.querySelector(".nav-menu").classList.add("active");
  };
}

if(document.querySelector(".closeButton")) {
  document.querySelector(".closeButton").onclick = () => {
    document.querySelector(".nav-menu").classList.remove("active");
  };
}

if(document.querySelector(".menuButton1")) {
  document.querySelector(".menuButton1").onclick = () => {
    document.querySelector(".nav-menu").classList.remove("active");
  }
}

if(document.querySelector(".menuButton2")) {
  document.querySelector(".menuButton2").onclick = () => {
    document.querySelector(".nav-menu").classList.remove("active");
  }
}

if(document.querySelector(".menuButton3")) {
  document.querySelector(".menuButton3").onclick = () => {
    document.querySelector(".nav-menu").classList.remove("active");
  }
}
if(document.querySelector(".menuButton4")) {
  document.querySelector(".menuButton4").onclick = () => {
    document.querySelector(".nav-menu").classList.remove("active");
  }
}
// slider

new Glider(document.querySelector('.carousel'), {
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: '#dots',
  draggable: true,
  scrollLock: true,
  duration: .8,
});

// scrolling 

const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800,
  header: null,
});
