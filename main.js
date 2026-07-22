// make the link button dynamics
//make the emergency arrow button dynamic
//animate the webpage

//try to make hamburger button work with javascript

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.hidden');


hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    console.log("Side Bar Opened");
});

const navLinks = document.querySelectorAll('.hidden a');

// Remove active classes when any link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    console.log("Side Bar Closed");
  });
});

window.addEventListener("load", function() {
    // Hide the loader
    document.getElementById("loader").style.display = "none";
    
    // Show the main content
    document.getElementById("main-content").style.display = "block";
  });

const c1 = document.getElementById("c-1");
const c2 = document.getElementById("c-2");
const c3 = document.getElementById("c-3");
const c4 = document.getElementById("c-4");
const c5 = document.getElementById("c-5");
const c6 = document.getElementById("c-6");
const c7 = document.getElementById("c-7");
const c8 = document.getElementById("c-8");
const c9 = document.getElementById("c-9");
const c10 = document.getElementById("c-10");
const c11 = document.getElementById("c-11");
const c12 = document.getElementById("c-12");

const carousel = document.querySelector(".carousel-contr");

c7.innerHTML = c1.innerHTML;
c8.innerHTML = c2.innerHTML;
c9.innerHTML = c3.innerHTML;
c10.innerHTML = c4.innerHTML;
c11.innerHTML = c5.innerHTML;
c12.innerHTML = c6.innerHTML;

const observer = new MutationObserver((mutations) => {
    console.log("A comment was updated")
});

observer.observe(carousel, { childList: true, characterData: true });