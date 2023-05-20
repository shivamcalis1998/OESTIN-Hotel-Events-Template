import navbar from ''
document.getElementById("homepage-section1").innerHTML= navbar() 

import footer from '../components/footer.js'
document.getElementById("footer").innerHTML= footer() 

import infiniteSlider from '../components/infiniteSlidelogo.js'
document.getElementById("logos").innerHTML= infiniteSlider() 

import secondfooter from '../components/secondfooter.js'
document.getElementById("secondfooter").innerHTML= secondfooter() 
 
 
 
 
 
 


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






  var copy = document.querySelector(".logos-slide").cloneNode(true);
      document.querySelector(".logos").appendChild(copy);