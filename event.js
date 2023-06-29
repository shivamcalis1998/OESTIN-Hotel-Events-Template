import navbar from './navbar.js'
document.getElementById("homepage-section1").innerHTML= navbar() 

import footer from './footer.js'
document.getElementById("footer").innerHTML= footer() 


import secondfooter from './secondfooter.js'
document.getElementById("secondfooter").innerHTML= secondfooter() 

import infiniteSlider from './infiniteSlidelogo.js'
document.getElementById("logos").innerHTML= infiniteSlider() 




window.addEventListener("scroll",()=>{
  var scrolled  = window.scrollY;
  // console.log(scrolled)
  if(scrolled>150){

      document.querySelector(".wrapperH").style.display= "none"
      document.querySelector(".wrapperH").style.transition= "0.7s ease"
      document.querySelector(".wrapper").style.height="80px"
      document.querySelector(".wrapper").style.transition= "0.5s ease"
      document.querySelector(".wrapper").style.backgroundColor= "black"
      document.getElementById("changelogo").textContent= "OESTIN"
      // document.getElementById("changelogo").style.backgroundColor= "rgba(0,0,0,.7)"
      document.querySelector("#changelogo").style.transition= "0.5s ease"

      // var arhant =document.getElementById("arhant")
      // var sticky = navbar.offsetTop;
      // navbar.classList.add("sticky")
  }
  if(scrolled<100){
      document.querySelector(".wrapperH").style.display= "flex"
      document.querySelector(".wrapper").style.height=""
      document.querySelector(".wrapper").style.backgroundColor= " rgba(0,0,0,.7)"
      document.getElementById("changelogo").textContent= "MENU"
  }

})







import event from "./event.json" assert { type: "json" };
// console.log(event);
let { events } = event;
console.log(events);

let mainContainer = document.getElementById("mainContainer");

let h1 = document.createElement("h1");
h1.textContent = "UPCOMING EVENTS";

let p = document.createElement("p");
p.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellente sque vel volutpat felis, eu condimentum massa. Pellentesque mollis eros vel mattis tempor. Aliquam";

mainContainer.append(h1, p);

let eventNav = document.getElementById("evenNav");

let nav = document.createElement("div");
nav.setAttribute("id", "navbar");
let button1 = document.createElement("button");
button1.setAttribute("id", "btn1");
button1.textContent = "All";
let button2 = document.createElement("button");
button2.setAttribute("id", "btn2");
button2.textContent = "Music Party";
let button3 = document.createElement("button");
button3.setAttribute("id", "btn3");
button3.textContent = "Birthday Party";
let button4 = document.createElement("button");
button4.setAttribute("id", "btn4");
button4.textContent = "Conference";
let button5 = document.createElement("button");
button5.setAttribute("id", "btn5");
button5.textContent = "Wedding Party";
let button6 = document.createElement("button");
button6.setAttribute("id", "btn6");
button6.textContent = "PhotoGraphy Party";

nav.append(button1, button2, button3, button4, button5, button6, button6);
eventNav.append(nav);

document.getElementById("btn1").addEventListener("click", all);

function all() {
  document.getElementById("main").innerHTML = "";
  let mainDiv = document.createElement("div");
  mainDiv.setAttribute("id", "div1");
  let divimg1 = document.createElement("div");
  divimg1.setAttribute("class", "image");
  let image = document.createElement("img");
  image.setAttribute("class", "image__img");
  image.src = `${events[0].image}`;
  let subDiv = document.createElement("div");
  subDiv.setAttribute("class", "image__overlay");
  let div1 = document.createElement("div");
  let a1 = document.createElement("a");
  a1.append(div1);
  a1.href = "location.html";
  div1.setAttribute("class", "image__title");
  div1.textContent = events[0].tag;
  a1.append(div1);
  let div2 = document.createElement("div");
  div2.setAttribute("class", "image__title2");
  div2.textContent = `By: ${events[0].By}`;
  let p = document.createElement("p");
  p.setAttribute("class", "image__description");
  p.textContent =
    " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt";
  subDiv.append(a1, div2, p);
  divimg1.append(image, subDiv);

  let divimg2 = document.createElement("div");
  divimg2.setAttribute("class", "image");
  let image1 = document.createElement("img");
  image1.setAttribute("class", "image__img");
  image1.src = "2.jpeg";
  let subDiv2 = document.createElement("div");
  subDiv2.setAttribute("class", "image__overlay");

  let div3 = document.createElement("div");
  div3.setAttribute("class", "image__title");
  div3.textContent = events[1].tag;
  let a2 = document.createElement("a");
  a2.append(div3);
  a2.href = "location.html";
  let div4 = document.createElement("div");
  div4.setAttribute("class", "image__title2");
  div4.textContent = `By: ${events[1].By}`;
  let p2 = document.createElement("p");
  p2.setAttribute("class", "image__description");
  p2.textContent =
    " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt";
  subDiv2.append(a2, div4, p2);
  divimg2.append(image1, subDiv2);

  mainDiv.append(divimg1, divimg2);

  let mainDiv2 = document.createElement("div");
  mainDiv2.setAttribute("id", "div1");
  mainDiv2.style.marginTop = "8px";
  let divimg3 = document.createElement("div");
  divimg3.setAttribute("class", "image");
  let image3 = document.createElement("img");
  image3.setAttribute("class", "image__img");
  image3.src = `3.jpeg`;
  let subDiv3 = document.createElement("div");
  subDiv3.setAttribute("class", "image__overlay");
  let div5 = document.createElement("div");
  div5.setAttribute("class", "image__title");
  div5.textContent = `${events[2].tag}`;
  let a3 = document.createElement("a");
  a3.append(div5);
  a3.href = "location.html";
  let div6 = document.createElement("div");
  div6.setAttribute("class", "image__title2");
  div6.textContent = `By: ${events[2].By}`;
  let p3 = document.createElement("p");
  p3.setAttribute("class", "image__description");
  p3.textContent =
    " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt";
  subDiv3.append(a3, div6, p3);
  divimg3.append(image3, subDiv3);

  let divimg4 = document.createElement("div");
  divimg4.setAttribute("class", "image");
  let image4 = document.createElement("img");
  image4.setAttribute("class", "image__img");
  image4.src = `${events[3].image}`;
  let subDiv4 = document.createElement("div");
  subDiv4.setAttribute("class", "image__overlay");
  let div7 = document.createElement("div");
  div7.setAttribute("class", "image__title");
  div7.textContent = events[3].tag;
  let a4 = document.createElement("a");
  a4.append(div7);
  a4.href = "location.html";
  let div8 = document.createElement("div");
  div8.setAttribute("class", "image__title2");
  div8.textContent = `By: ${events[3].By}`;
  let p4 = document.createElement("p");
  p4.setAttribute("class", "image__description");
  p4.textContent =
    " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt";
  subDiv4.append(a4, div8, p4);
  divimg4.append(image4, subDiv4);

  mainDiv2.append(divimg3, divimg4);

  let mainDiv3 = document.createElement("div");
  mainDiv3.setAttribute("id", "div3");
  mainDiv3.style.marginTop = "8px";
  let divimg5 = document.createElement("div");
  divimg5.setAttribute("class", "image");
  let image5 = document.createElement("img");
  image5.setAttribute("class", "image__img");
  image5.src = `${events[4].image}`;
  let subDiv5 = document.createElement("div");
  subDiv5.setAttribute("class", "image__overlay");
  let div9 = document.createElement("div");
  div9.setAttribute("class", "image__title");
  div9.textContent = `${events[4].tag}`;
  let a5 = document.createElement("a");
  a5.append(div9);
  a5.href = "location.html";
  let div10 = document.createElement("div");
  div10.setAttribute("class", "image__title2");
  div10.textContent = `By: ${events[4].By}`;
  let p5 = document.createElement("p");
  p5.setAttribute("class", "image__description");
  p5.textContent =
    " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt";
  subDiv5.append(a5, div10, p5);
  divimg5.append(image5, subDiv5);

  let divimg6 = document.createElement("div");
  divimg6.setAttribute("class", "image");
  let image6 = document.createElement("img");
  image6.setAttribute("class", "image__img");
  image6.src = `6.jpeg`;
  let subDiv6 = document.createElement("div");
  subDiv6.setAttribute("class", "image__overlay");
  let div11 = document.createElement("div");
  div11.setAttribute("class", "image__title");
  div11.textContent = events[5].tag;
  let div12 = document.createElement("div");
  let a6 = document.createElement("a");
  a6.append(div11);
  a6.href = "location.html";
  div12.setAttribute("class", "image__title2");
  div12.textContent = `By: ${events[5].By}`;
  let p6 = document.createElement("p");
  p6.setAttribute("class", "image__description");
  p6.textContent =
    " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt";
  subDiv6.append(a6, div12, p6);
  divimg6.append(image6, subDiv6);

  mainDiv3.append(divimg5, divimg6);

  document.getElementById("main").append(mainDiv, mainDiv2, mainDiv3);
}

document.getElementById("btn2").addEventListener("click", musicParty);

function musicParty() {
  document.getElementById("main").innerHTML = "";
  let mainDiv = document.createElement("div");
  mainDiv.setAttribute("id", "div1");
  mainDiv.style.marginLeft = "-380px";
  let divimg = document.createElement("div");
  divimg.setAttribute("class", "image");
  let image = document.createElement("img");
  image.setAttribute("class", "image__img");
  image.src = "2.jpeg";
  let subDiv = document.createElement("div");
  subDiv.setAttribute("class", "image__overlay");
  let div1 = document.createElement("div");
  div1.setAttribute("class", "image__title");
  div1.textContent = events[1].tag;
  let div2 = document.createElement("div");
  div2.setAttribute("class", "image__title2");
  div2.textContent = `By: ${events[1].By}`;
  let p = document.createElement("p");
  p.setAttribute("class", "image__description");
  p.textContent =
    " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt";
  subDiv.append(div1, div2, p);
  divimg.append(image, subDiv);
  mainDiv.append(divimg);
  document.getElementById("main").append(mainDiv);
}

document.getElementById("btn3").addEventListener("click", birthDay);

function birthDay() {
  document.getElementById("main").innerHTML = "";
  let mainDiv = document.createElement("div");
  mainDiv.style.transform = "2s";
  mainDiv.setAttribute("id", "div1");
  mainDiv.style.marginLeft = "-380px";
  let divimg = document.createElement("div");
  divimg.setAttribute("class", "image");
  let image = document.createElement("img");
  image.setAttribute("class", "image__img");
  image.src = "3.jpeg";
  let subDiv = document.createElement("div");
  subDiv.setAttribute("class", "image__overlay");
  let div1 = document.createElement("div");
  div1.setAttribute("class", "image__title");
  div1.textContent = events[2].tag;
  let div2 = document.createElement("div");
  div2.setAttribute("class", "image__title2");
  div2.textContent = `By: ${events[2].By}`;
  let p = document.createElement("p");
  p.setAttribute("class", "image__description");
  p.textContent =
    " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt";
  subDiv.append(div1, div2, p);
  divimg.append(image, subDiv);
  mainDiv.append(divimg);
  document.getElementById("main").append(mainDiv);
}
document.getElementById("btn4").addEventListener("click", contfrence);

function contfrence() {
  document.getElementById("main").innerHTML = "";
  let mainDiv = document.createElement("div");
  mainDiv.style.transform = "2s";
  mainDiv.setAttribute("id", "div1");
  mainDiv.style.marginLeft = "-200px";
  let divimg = document.createElement("div");
  divimg.setAttribute("class", "image");
  let image = document.createElement("img");
  image.setAttribute("class", "image__img");
  image.src = `${events[0].image}`;
  let subDiv = document.createElement("div");
  subDiv.setAttribute("class", "image__overlay");
  let div1 = document.createElement("div");
  div1.setAttribute("class", "image__title");
  div1.textContent = events[2].tag;
  let div2 = document.createElement("div");
  div2.setAttribute("class", "image__title2");
  div2.textContent = `By: ${events[2].By}`;
  let p = document.createElement("p");
  p.setAttribute("class", "image__description");
  p.textContent =
    " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt";
  subDiv.append(div1, div2, p);
  divimg.append(image, subDiv);
  mainDiv.append(divimg);
  document.getElementById("main").append(mainDiv);
}

document.getElementById("btn5").addEventListener("click", wedding);

function wedding() {
  document.getElementById("main").innerHTML = "";
  let mainDiv = document.createElement("div");
  mainDiv.style.transform = "2s";
  mainDiv.setAttribute("id", "div1");
  mainDiv.style.marginLeft = "-200px";
  let divimg = document.createElement("div");
  divimg.setAttribute("class", "image");
  let image = document.createElement("img");
  image.setAttribute("class", "image__img");
  image.src = `${events[3].image}`;
  let subDiv = document.createElement("div");
  subDiv.setAttribute("class", "image__overlay");
  let div1 = document.createElement("div");
  div1.setAttribute("class", "image__title");
  div1.textContent = events[3].tag;
  let div2 = document.createElement("div");
  div2.setAttribute("class", "image__title2");
  div2.textContent = `By: ${events[3].By}`;
  let p = document.createElement("p");
  p.setAttribute("class", "image__description");
  p.textContent =
    " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt";
  subDiv.append(div1, div2, p);
  divimg.append(image, subDiv);
  mainDiv.append(divimg);
  document.getElementById("main").append(mainDiv);
}

document.getElementById("btn6").addEventListener("click", photoGraphy);

function photoGraphy() {
  document.getElementById("main").innerHTML = "";
  let mainDiv = document.createElement("div");
  mainDiv.setAttribute("id", "div1");
  let divimg1 = document.createElement("div");
  divimg1.setAttribute("class", "image");
  let image = document.createElement("img");
  image.setAttribute("class", "image__img");
  image.src = `${events[4].image}`;
  let subDiv = document.createElement("div");
  subDiv.setAttribute("class", "image__overlay");
  let div1 = document.createElement("div");
  div1.setAttribute("class", "image__title");
  div1.textContent = events[4].tag;
  let div2 = document.createElement("div");
  div2.setAttribute("class", "image__title2");
  div2.textContent = `By: ${events[4].By}`;
  let p = document.createElement("p");
  p.setAttribute("class", "image__description");
  p.textContent =
    " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt";
  subDiv.append(div1, div2, p);
  divimg1.append(image, subDiv);

  let divimg2 = document.createElement("div");
  divimg2.setAttribute("class", "image");
  let image1 = document.createElement("img");
  image1.setAttribute("class", "image__img");
  image1.src = "6.jpeg";
  let subDiv2 = document.createElement("div");
  subDiv2.setAttribute("class", "image__overlay");
  let div3 = document.createElement("div");
  div3.setAttribute("class", "image__title");
  div3.textContent = events[5].tag;
  let div4 = document.createElement("div");
  div4.setAttribute("class", "image__title2");
  div4.textContent = `By: ${events[5].By}`;
  let p2 = document.createElement("p");
  p2.setAttribute("class", "image__description");
  p2.textContent =
    " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt";
  subDiv2.append(div3, div4, p2);
  divimg2.append(image1, subDiv2);

  mainDiv.append(divimg1, divimg2);
  document.getElementById("main").append(mainDiv);
}
