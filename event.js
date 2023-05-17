// async function fetchData() {
//   let res = await fetch("event.json");
//   let data = await res.json();
//   console.log(data);
// }
// fetchData();

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
button1.textContent = "All";
let button2 = document.createElement("button");
button2.textContent = "Music Party";
let button3 = document.createElement("button");
button3.textContent = "Birthday Party";
let button4 = document.createElement("button");
button4.textContent = "Conference";
let button5 = document.createElement("button");
button5.textContent = "Wedding Party";
let button6 = document.createElement("button");
button6.textContent = "PhotoGraphy Party";

nav.append(button1, button2, button3, button4, button5, button6, button6);
eventNav.append(nav);
