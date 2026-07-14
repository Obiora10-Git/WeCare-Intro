// make the link button dynamics
//make the emergency arrow button dynamic
//animate the webpage

//try to make hamburger button work with javascript

const btnContr = document.querySelector(".hamburger-btn");
const button = document.querySelector(".hamburger");
const buttonLine = document.querySelector(".line");
const btnTransLineOne = document.querySelectorAll(".hamburger.open .line:nth-child(1)");
const btnTransLineTwo = document.querySelectorAll(".hamburger.open .line:nth-child(2)");
const btnTransLineThree = document.querySelectorAll(".hamburger.open .line:nth-child(3)");
const navBox = document.querySelector(".nav");
const header = document.querySelector(".header");
const headerBoxTwo = document.querySelector("#header-div-2");
const navTag = document.querySelector(".Nav")
const navUnordered = document.querySelectorAll("nav ul");
const navUnorderedDirectLink = document.querySelectorAll("nav ul a");
const navUnorderedDirectLinkVisited = document.querySelectorAll("nav ul a:visited");
const navUnorderedList = document.querySelectorAll("nav ul li");
const navUnorderedListFirstChild = document.querySelectorAll("nav ul li:first-child");
const navUnorderedListLastChild = document.querySelectorAll("nav ul li:last-child");
const navUnorderedListHover = document.querySelectorAll("nav ul li:hover");
const navUnorderedListFocus = document.querySelectorAll("nav ul li:focus");
const navUnorderedListLink = document.querySelectorAll("nav ul li a");
const navUnorderedListLinkVisited = document.querySelectorAll("nav ul li a:visited");
const navUnorderedListLinkHover = document.querySelectorAll("nav ul li a:hover");
const navUnorderedListLinkFocus = document.querySelectorAll("nav ul li a:focus");
const navUnorderedListLinkActive = document.querySelectorAll("nav ul li a:active");
const navUnorderedListHoverLink = document.querySelectorAll("nav ul li:hover a");
const lastLastLink = document.querySelectorAll("nav ul li:last-child a");
const navUnorderedListLastChildLinkHover = document.querySelectorAll("nav ul li:last-child a:hover");
const navUnorderedListLastChildLinkFocus = document.querySelectorAll("nav ul li:last-child a:focus");




navUnorderedList.forEach(element => {
  element.addEventListener('mouseenter', () => {
    console.log('User is hovering!');
  });
});

// Repeat this pattern for your other collections
navUnorderedDirectLink.forEach(link => {
  link.addEventListener('mouseenter', () => {
    console.log('User is hovering!');
  });
});

navUnorderedListLink.forEach(link => {
  link.addEventListener('mouseenter', () => {
    console.log('User is hovering!');
  });
});


const resizeObserver = new ResizeObserver((entries) => {
    for (let entry of entries) {
      // Get width of the nav-container element
      const width = entry.contentRect.width;
      

      if (width <= 850) {
        // --- MOBILE STATE ---
       btnContr.style.cssText = "min-width: 2.314814815vw; min-height: 1.736111111vw;";
       button.style.cssText =   "display: grid; grid-template-rows: repeat(3, 1fr); grid-auto-columns:minmax(0, 2.314814815vw) ; justify-content: space-evenly; gap: 0.2vw; width: 2.314814815vw; height: 1.736111111vw; background: transparent; border: none; cursor: pointer; padding: 0;";
       buttonLine.style.cssText =   "width: 100%; min-height: 0.289351851vw; background-color: black; transition: all 0.3s ease; transform-origin: 0.25vw center;";
       btnTransLineOne.style.cssText =   "transform: rotate(45deg);";
       btnTransLineTwo.style.cssText =   "opacity: 0;  width: 0;";
       btnTransLineThree.style.cssText =  "transform: rotate(-45deg);";
       header.style.cssText =     "grid-template-columns: 1fr 1fr;";
       headerBoxTwo.style.cssText =   "justify-content: flex-end;";
       navBox.style.cssText =   "position: absolute; top: 8.969907407vw; width: 30vw; right: 0;";
       navTag.style.cssText = "border-radius: 0 0 1.851851852vw 1.851851852vw; margin: 0 auto 0.925925925vw; font-size: var(--nav-bg-font-size); line-height: 1.8vw; text-align: center; background: white;";
       navUnordered.style.cssText = "list-style-type: none;";
       navUnorderedDirectLink.style.cssText =   "text-decoration: none; color: var(--nav-font-color);";
       navUnorderedDirectLinkVisited.style.cssText =   "text-decoration: none; color: var(--nav-font-color);";
       navUnorderedList.style.cssText =  "display: block; border-top: 0.05787037vw solid #4444443d; margin-inline: 0; padding: 0.75vw 0;";
       navUnorderedListFirstChild.style.cssText =  "border-top: unset;";
       navUnorderedListLastChild.style.cssText =   "background-color: #333; border-radius: 0 0 1.651851852vw 1.651851852vw; padding: 1.5vw 0;";
       navUnorderedListHover.style.cssText =   "background: var(--nav-btn-color); color: whitesmoke;";
       navUnorderedListFocus.style.cssText =   "background: var(--nav-btn-color); color: whitesmoke;";
       navUnorderedListHoverLink.style.cssText =   "background: var(--nav-btn-color); color: whitesmoke;";
       lastLastLink.style.cssText =  "width: 14.46759259vw; color: var(--logo-icon-fill-color); padding: 0; background-color: transparent;";


       

      } else {
        // --- DESKTOP STATE ---
        navUnordered.style.cssText = " list-style: none;";
        navUnorderedDirectLink.style.cssText =  "text-decoration: none; color: var(--nav-font-color);";
        navUnorderedList.style.cssText =  "display: inline-block; white-space: nowrap; margin-inline: 1.35vw; font-size: var(--nav-font-size); font-weight: var(--medium);";
       navUnorderedListLink.style.cssText =   "text-decoration: none;";
       navUnorderedListLastChildLink.style.cssText =  "width: var(--nav-btn-width);  padding: var(--nav-btn-padding);  border-radius: var(--nav-btn-br);  background-color: var(--nav-btn-color);  color: var(--nav-btn-font-color); font-size: var(--nav-font-size);";
       navUnorderedListLastChildLinkHover.style.cssText =   "color: var(--nav-btn-font-color); opacity: 90%;";
       navUnorderedListLastChildLinkFocus.style.cssText =   "color: var(--nav-btn-font-color); opacity: 90%;";
       navUnorderedListLinkVisited.style.cssText =   "opacity: 50%;";
       navUnorderedListLinkHover.style.cssText =  "color: var(--h-extra-primary-color);";
       navUnorderedListLinkFocus.style.cssText =  "color: var(--h-extra-primary-color);";
       navUnorderedListLinkActive.style.cssText =  "opacity: 90%;";

        
      }
    }
})

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