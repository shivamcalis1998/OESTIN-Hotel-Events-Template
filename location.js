import navbar from './navbar.js'
document.getElementById("homepage-section1").innerHTML= navbar() 

import footer from './footer.js'
document.getElementById("footer").innerHTML= footer() 


import secondfooter from './secondfooter.js'
document.getElementById("secondfooter").innerHTML= secondfooter() 

import infiniteSlider from './infiniteSlidelogo.js'
document.getElementById("logos").innerHTML= infiniteSlider() 


// navbar css

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

// navbar css ends


let dehli = [
  {
    id: 1,
    city: "Delhi",
    heading1: "Le Meridien New Delhi",
    headig2: "New Delhi",
    img1: "https://images.trvl-media.com/hotels/1000000/540000/531700/531648/0be7b7bd.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img3: "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/1000000/540000/531700/531648/db6e3fdf_b.jpg",
    img2: "https://images.trvl-media.com/hotels/5000000/4850000/4849400/4849391/c97a1e5e.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img4: "https://images.trvl-media.com/hotels/1000000/540000/531700/531648/55467e67.jpg?impolicy=resizecrop&rw=455&ra=fit",
    text1: "The Capital’s Only Modern Palace Hotel",
    text2:
      "In AC Hotel Genova we know what need: AC Lounge and delicious breakfast, comfy rooms, common areas and the best rates.",
    text3: "Fully refundable",
    text4: "Reserve now, pay later",
    rating: "4.3",
    review: "Excellent",
    no_of_reviews: "(523 reviews)",
    heading3: "We have 5 left at",
    price1: "Rs8,650",
    price2: "10207",
  },
  {
    id: 2,
    city: "Delhi",
    heading1: "The Leela Palace New Delhi",
    headig2: "New Delhi",
    img1: "https://images.trvl-media.com/hotels/4000000/3860000/3851700/3851663/bada04cf.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img2: "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/4000000/3860000/3851700/3851663/958ad657_b.jpg",
    img4: "https://images.trvl-media.com/hotels/4000000/3860000/3851700/3851663/c1013ae8.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img3: "https://images.trvl-media.com/hotels/4000000/3860000/3851700/3851663/5cc49445.jpg?impolicy=resizecrop&rw=455&ra=fit",
    text1: "The Capital’s Only Modern Palace Hotel",
    text2: "1 bedroom, 1 bathroom",
    text3: "Fully refundable",
    text4: "Reserve now, pay later",
    rating: "4.8",
    review: "Exceptional",
    no_of_reviews: "(997 reviews)",
    heading3: "",
    price1: "Rs15,000",
    price2: "17700",
  },
  {
    id: 3,
    city: "Delhi",
    heading1: "Sheraton New Delhi Hotel",
    headig2: "Saket",
    img3: "https://images.trvl-media.com/hotels/1000000/800000/790500/790474/a99d01d2.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img2: "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/1000000/800000/790500/790474/acc5ae1c_b.jpg",
    img3: "https://images.trvl-media.com/hotels/4000000/3860000/3851700/3851663/c1013ae8.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img1: "https://images.trvl-media.com/hotels/1000000/800000/790500/790474/5ac085fe.jpg?impolicy=resizecrop&rw=455&ra=fit",
    text1: "Book in Advance to Save 10%",
    text2:
      "In AC Hotel Genova we know what need: AC Lounge and delicious breakfast, comfy rooms, common areas and the best rates.",
    text3: "Fully refundable",
    text4: "Reserve now, pay later",
    rating: "4.2",
    review: "Very good",
    no_of_reviews: "(356 reviews)",
    heading3: "We have 5 left at",
    price1: "Rs7,171",
    price2: "8032",
  },
  {
    id: 4,
    city: "Delhi",
    heading1: "Pullman New Delhi Aerocity Hotel",
    headig2: "Aerocity",
    img1: "https://images.trvl-media.com/hotels/10000000/10000000/9994600/9994586/5e2b2a09.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img3: "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/10000000/10000000/9994600/9994586/99a27f9a_b.jpg",
    img4: "https://images.trvl-media.com/hotels/4000000/3860000/3851700/3851663/c1013ae8.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img2: "https://images.trvl-media.com/hotels/10000000/10000000/9994600/9994586/99a27f9a.jpg?impolicy=resizecrop&rw=455&ra=fit",
    text1: "Book in Advance to Save 10%",
    text2: "1 bedroom, 1 bathroom",
    text3: "Fully refundable",
    text4: "Reserve now, pay later",
    rating: "4.2",
    review: "Very good",
    no_of_reviews: "(222 reviews)",
    heading3: "",
    price1: "Rs8,075",
    price2: "9528",
  },
  {
    id: 5,
    city: "Delhi",
    heading1: "The Leela Ambience Gurugram Hotel & Residences",
    headig2: "Gurugram",
    img1: "https://images.trvl-media.com/hotels/3000000/2280000/2270400/2270398/cb4fe763.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img3: "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/3000000/2280000/2270400/2270398/fb475959_b.jpg",
    img2: "https://images.trvl-media.com/hotels/4000000/3860000/3851700/3851663/c1013ae8.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img4: "https://images.trvl-media.com/hotels/3000000/2280000/2270400/2270398/d97ef008.jpg?impolicy=resizecrop&rw=455&ra=fit",
    text1: "15 Min drive from IGI Airport",
    text2: "2 bedroom, 1 bathroom",
    text3: "Fully refundable",
    text4: "Reserve now, pay later",
    rating: "4.3",
    review: "Excellent",
    no_of_reviews: "(474 reviews)",
    heading3: "",
    price1: "Rs11,000",
    price2: "12980",
  },
  {
    id: 6,
    city: "Delhi",
    heading1: "The Leela Palace New Delhi",
    headig2: "New Delhi",
    img3: "https://images.trvl-media.com/hotels/4000000/3860000/3851700/3851663/bada04cf.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img2: "https://images.trvl-media.com/hotels/4000000/3860000/3851700/3851663/958ad657.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img1: "https://images.trvl-media.com/hotels/4000000/3860000/3851700/3851663/c1013ae8.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img4: "https://images.trvl-media.com/hotels/4000000/3860000/3851700/3851663/5cc49445.jpg?impolicy=resizecrop&rw=455&ra=fit",
    text1: "16 Min drive from IGI Airport",
    text2: "3 bedroom, 1 bathroom",
    text3: "Fully refundable",
    text4: "Reserve now, pay later",
    rating: "4.8",
    review: "Exceptional",
    no_of_reviews: "(997 reviews)",
    heading3: "",
    price1: "Rs15,000",
    price2: "17700",
  },
];

let Goa = [
  {
    id: 1,
    city: "Goa",
    heading1: "AC Hotel Genova by Marriott",
    heading2: "Quarto dei Mille",
    img1: "https://images.trvl-media.com/hotels/1000000/910000/908400/908326/47ff2fab.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img2: "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/1000000/910000/908400/908326/3b5ede8b_b.jpg",
    img3: "https://images.trvl-media.com/hotels/1000000/910000/908400/908326/a31b8a9e.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img4: "https://images.trvl-media.com/hotels/1000000/910000/908400/908326/a805f1ba.jpg?impolicy=resizecrop&rw=455&ra=fit",
    text1: "Design Hotel in Genoa",
    text2:
      "In AC Hotel Genova we know what need: AC Lounge and delicious breakfast, comfy rooms, common areas and the best rates.",
    rating: "4.1",
    review: "Very good",
    no_of_reviews: "(474 reviews)",
    heading3: "We have 5 left at",
    price1: "Rs9,901",
    text4: "Reserve now, pay later",
    text3: "Fully refundable",
    price2: "11378",
  },
  {
    id: 2,
    city: "Goa",
    heading1: "Tower Genova Airport Hotel ",
    heading2: "Sestri Ponente",
    img1: "https://images.trvl-media.com/hotels/1000000/30000/21000/20923/f547f19a.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img2: "https://images.trvl-media.com/hotels/1000000/30000/21000/20923/e8fa1812.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img3: "https://images.trvl-media.com/hotels/1000000/30000/21000/20923/6024182e.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img4: "https://images.trvl-media.com/hotels/1000000/30000/21000/20923/10878b5e.jpg?impolicy=resizecrop&rw=455&ra=fit",
    text1: "Indulgent Escapes",
    text2: "1 bedroom, 1 bathroom",
    rating: "3.8",
    review: "Good",
    no_of_reviews: "(626 reviews)",
    heading3: "",
    price1: "Rs7,383",
    text4: "Reserve now, pay later",
    text3: "Fully refundable",
    price2: "8609",
  },
  {
    id: 3,
    city: "Goa",
    heading1: "Best Western Premier CHC Airport",
    heading2: "Sestri Ponente",
    img1: "https://images.trvl-media.com/hotels/6000000/5360000/5352500/5352453/52659d56.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img2: "https://images.trvl-media.com/hotels/6000000/5360000/5352500/5352453/8ce0af7e.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img3: "https://images.trvl-media.com/hotels/6000000/5360000/5352500/5352453/cab2979c.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img4: "https://images.trvl-media.com/hotels/6000000/5360000/5352500/5352453/b69b5d2c.jpg?impolicy=resizecrop&rw=455&ra=fit",
    text1: "Great Small Breaks. Book now.",
    text2:
      "In AC Hotel Genova we know what need: AC Lounge and delicious breakfast, comfy rooms, common areas and the best rates.",
    rating: "4.3",
    review: "Excellent",
    no_of_reviews: "(440 reviews)",
    heading3: "",
    price1: "Rs9,081",
    text4: "Reserve now, pay later",
    text3: "Fully refundable",
    price2: "10476",
  },
  {
    id: 4,
    city: "Goa",
    heading1: "MarinaPlace Resort & Spa",
    heading2: "Sestri Ponente",
    img1: "https://images.trvl-media.com/hotels/4000000/3410000/3406600/3406557/5e16ec38.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img2: "https://images.trvl-media.com/hotels/4000000/3410000/3406600/3406557/c65d4872.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img3: "https://images.trvl-media.com/hotels/4000000/3410000/3406600/3406557/052ff7e5.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img4: "https://images.trvl-media.com/hotels/4000000/3410000/3406600/3406557/9c1b098b.jpg?impolicy=resizecrop&rw=455&ra=fit",
    text1: "Limited time offer - Grand Getaways",
    text2: "1 bedroom, 1 bathroom",
    rating: "4.4",
    review: "Excellent",
    no_of_reviews: "(288 reviews)",
    heading3: "We have 8 left at 10% off at",
    price1: "Rs12,558",
    text4: "Reserve now, pay later",
    text3: "Fully refundable",
    price2: "14302",
  },
  {
    id: 5,
    city: "Goa",
    heading1: "Grand Hotel Mediterranée",
    heading2: "Pegli",
    img1: "https://images.trvl-media.com/hotels/1000000/920000/915400/915364/b0fe6b88.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img2: "https://images.trvl-media.com/hotels/1000000/920000/915400/915364/431d2d54.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img3: "https://images.trvl-media.com/hotels/1000000/920000/915400/915364/2f4dca80.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img4: "https://images.trvl-media.com/hotels/1000000/920000/915400/915364/a462fdfc.jpg?impolicy=resizecrop&rw=455&ra=fit",
    text1: "Reserve A Luxe Urban Escape",
    text2: "2 bedroom, 1 bathroom",
    rating: "3.8",
    review: "Good",
    no_of_reviews: "(557 reviews)",
    heading3: "We have 2 left at 10% off at",
    price1: "Rs7,475",
    text4: "Reserve now, pay later",
    text3: "Fully refundable",
    price2: "8466",
  },
  {
    id: 6,
    city: "Goa",
    heading1: "Novotel Genova City",
    heading2: "Genoa",
    img3: "https://images.trvl-media.com/hotels/1000000/30000/21900/21874/de8155fd.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img1: "https://images.trvl-media.com/hotels/1000000/30000/21900/21874/f97a53c1.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img4: "https://images.trvl-media.com/hotels/1000000/30000/21900/21874/a5bbc033.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img2: "https://images.trvl-media.com/hotels/1000000/30000/21900/21874/f22dc145.jpg?impolicy=resizecrop&rw=455&ra=fit",
    text1: "Stay For Breakfast",
    text2: "3 bedroom, 1 bathroom",
    rating: "3.7",
    review: "Good",
    no_of_reviews: "(916 reviews)",
    heading3: "",
    price1: "Rs9,376",
    text4: "Reserve now, pay later",
    text3: "Fully refundable",
    price2: "10801",
  },
];

let Mumbai = [
  {
    id: 1,
    city: "Mumbai",
    heading1: "The St. Regis Mumbai",
    heading2: "Mumbai",
    img1: "https://images.trvl-media.com/hotels/6000000/5310000/5301700/5301691/cea6d2e2.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img2: "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/6000000/5310000/5301700/5301691/000ae696_b.jpg",
    img3: "https://images.trvl-media.com/hotels/6000000/5310000/5301700/5301691/80859cbb.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img4: "https://images.trvl-media.com/hotels/6000000/5310000/5301700/5301691/88d6a345.jpg?impolicy=resizecrop&rw=455&ra=fit",
    text1: "Indulgent Staycation at The Best Address",
    text2:
      "Luxuriate in our curated Staycation offering. Enjoy breakfast, a curated dinner & an upgrade while 2 kids below 12 eat & stay free",
    text3: "Fully refundable",
    text4: "Reserve now, pay later",
    rating: "4.6",
    review: "Wonderful",
    no_of_reviews: "(459 reviews)",
    heading3: "We have 5 left at",
    price1: "Rs13,500",
    price2: "15930",
  },
  {
    id: 2,
    city: "Mumbai",
    heading1: "Lakeside Chalet - Mumbai, Marriott Executive Apartments",
    heading2: "Powai",
    img1: "https://images.trvl-media.com/hotels/1000000/790000/788800/788780/a37ee8e7.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img2: "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/1000000/790000/788800/788780/ec5af013_b.jpg",
    img3: "https://images.trvl-media.com/hotels/1000000/790000/788800/788780/7ab9dfad.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img4: "https://images.trvl-media.com/hotels/1000000/790000/788800/788780/6830b175.jpg?impolicy=resizecrop&rw=455&ra=fit",
    text1: "Limited period pet staycation offer",
    text2:
      "Allow us to pamper you and your pooch at our spacious apartments, with an exclusive welcome amenity and in-room pet breakfast.",
    text3: "Fully refundable",
    text4: "Reserve now, pay later",
    rating: "4.0",
    review: "Very good",
    no_of_reviews: "(48 reviews)",
    heading3: "We have 5 left at",
    price1: "Rs10,500",
    price2: "12390",
  },
  {
    id: 3,
    city: "Mumbai",
    heading1: "The Westin Mumbai Garden City",
    heading2: "Goregaon",
    img1: "https://images.trvl-media.com/hotels/4000000/3030000/3021000/3020992/30009e10.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img2: "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/4000000/3030000/3021000/3020992/60cc7eb1_b.jpg",
    img3: "https://images.trvl-media.com/hotels/4000000/3030000/3021000/3020992/bd8f1693.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img4: "https://images.trvl-media.com/hotels/4000000/3030000/3021000/3020992/54c42030.jpg?impolicy=resizecrop&rw=455&ra=fit",
    text1: "Handcrafted Urban Getaways within Mumbai",
    text2:
      "INR 3000 Hotel Credit, Complimentary Breakfast, 20% Discount on Spa, 15% off Food & Beverage, Laundry & more.",
    text3: "Fully refundable",
    text4: "Reserve now, pay later",
    rating: "4.6",
    review: "Wonderful",
    no_of_reviews: "(309 reviews)",
    heading3: "We have 2 left at",
    price1: "Rs13,000",
    price2: "15340",
  },
  {
    id: 4,
    city: "Mumbai",
    heading1: "ITC Maratha Mumbai, a Luxury Collection Hotel, Mumbai",
    heading2: "Mumbai",
    img1: "https://images.trvl-media.com/hotels/1000000/580000/577900/577808/ce6b7c15.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img2: "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/1000000/580000/577900/577808/2b755052_b.jpg",
    img3: "https://images.trvl-media.com/hotels/1000000/580000/577900/577808/12ab1c31.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img4: "https://images.trvl-media.com/hotels/1000000/580000/577900/577808/df08ed8d.jpg?impolicy=resizecrop&rw=455&ra=fit",
    text1: "Indulgent Staycation at The Best Address",
    text2:
      "INR 3000 Hotel Credit, Complimentary Breakfast, 20% Discount on Spa, 15% off Food & Beverage, Laundry & more.",
    text3: "Fully refundable",
    text4: "Reserve now, pay later",
    rating: "4.3",
    review: "Excellent",
    no_of_reviews: "(454 reviews)",
    heading3: "We have 5 left at",
    price1: "Rs11,500",
    price2: "13570",
  },
  {
    id: 5,
    city: "Mumbai",
    heading1: "JW Marriott Mumbai Juhu",
    heading2: "Mumbai",
    img1: "https://images.trvl-media.com/hotels/1000000/870000/860900/860842/cff670cd.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img2: "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/1000000/870000/860900/860842/a29095cb_b.jpg",
    img3: "https://images.trvl-media.com/hotels/1000000/870000/860900/860842/8b377bf1.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img4: "https://images.trvl-media.com/hotels/1000000/870000/860900/860842/a3962528.jpg?impolicy=resizecrop&rw=455&ra=fit",
    text1: "Limited period pet staycation offer",
    text2:
      "Enjoy views of the Arabian Sea, free breakfast & dinner, free stay & meals for 2 kids below 12 years of age & kids' activities.",
    text3: "Fully refundable",
    text4: "Reserve now, pay later",
    rating: "4.3",
    review: "Excellent",
    no_of_reviews: "(675 reviews)",
    heading3: "We have 5 left at",
    price1: "Rs12,870",
    price2: "15187",
  },
  {
    id: 6,
    city: "Mumbai",
    heading1: "Taj Mahal Tower, Mumbai",
    heading2: "Mumbai",
    img1: "https://images.trvl-media.com/hotels/2000000/1360000/1351900/1351876/a80151c4.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img2: "https://images.trvl-media.com/hotels/2000000/1360000/1351900/1351876/1ac59945.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img3: "https://images.trvl-media.com/hotels/2000000/1360000/1351900/1351876/db2752bd.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img4: "https://images.trvl-media.com/hotels/2000000/1360000/1351900/1351876/e7496f6d.jpg?impolicy=resizecrop&rw=455&ra=fit",
    text1: "Handcrafted Urban Getaways within Mumbai",
    text2:
      "Enjoy views of the Arabian Sea, free breakfast & dinner, free stay & meals for 2 kids below 12 years of age & kids' activities.",
    text3: "Fully refundable",
    text4: "Reserve now, pay later",
    rating: "4.8",
    review: "Exceptional",
    no_of_reviews: "(997 reviews)",
    heading3: "We have 2 left at",
    price1: "Rs13,500",
    price2: "15930",
  },
];

let pune = [
  {
    id: 1,
    city: "Pune",
    heading1: "JW Marriott Hotel Pune",
    heading2: "Model Colony",
    img1: "https://images.trvl-media.com/hotels/4000000/3880000/3877900/3877863/040393f6.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img2: "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/4000000/3880000/3877900/3877863/ec49e68e_b.jpg",
    img3: "https://images.trvl-media.com/hotels/4000000/3880000/3877900/3877863/0294393b.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img4: "https://images.trvl-media.com/hotels/4000000/3880000/3877900/3877863/6a162897.jpg?impolicy=resizecrop&rw=455&ra=fit",
    text1: "Indulgent Escapes",
    text2:
      "Revel in exceptional dining and intuitive service with a suite upgrade, a pint of house wine, Chef-curated meals and much more",
    text3: "Fully refundable",
    text4: "Reserve now, pay later",
    rating: "4.6",
    review: "Wonderful",
    no_of_reviews: "(339 reviews)",
    heading3: "We have 2 left at",
    price1: "Rs11,500",
    price2: "13570",
  },
  {
    id: 2,
    city: "Pune",
    heading1: "Conrad Pune by Hilton",
    heading2: "Pune",
    img1: "https://images.trvl-media.com/hotels/13000000/12280000/12270500/12270445/3a0dffb7.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img3: "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/13000000/12280000/12270500/12270445/abdf5e78_b.jpg",
    img2: "https://images.trvl-media.com/hotels/13000000/12280000/12270500/12270445/f91c1db1.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img4: "https://images.trvl-media.com/hotels/13000000/12280000/12270500/12270445/6a6abc6b.jpg?impolicy=resizecrop&rw=455&ra=fit",
    text1: "Great Small Breaks. Book now.",
    text2:
      "Includes 3 meals, Free Stay and Meals up to 2 Kids, Kids Amenities, Airport Transfers, Wifi, 20% off Food,Soft Beverages & Laundry",
    text3: "Fully refundable",
    text4: "Reserve now, pay later",
    rating: "4.7",
    review: "Exceptional",
    no_of_reviews: "(150 reviews)",
    heading3: "",
    price1: "Rs11,500",
    price2: "13570",
  },
  {
    id: 3,
    city: "Pune",
    heading1: "Sheraton Grand Pune Bund Garden Hotel",
    heading2: "Pune",
    img1: "https://images.trvl-media.com/hotels/1000000/520000/519000/518997/da66353e.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img2: "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/1000000/520000/519000/518997/019e5f7f_b.jpg",
    img3: "https://images.trvl-media.com/hotels/1000000/520000/519000/518997/8ad5a965.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img4: "https://images.trvl-media.com/hotels/1000000/520000/519000/518997/3fb17876.jpg?impolicy=resizecrop&rw=455&ra=fit",
    text1: "Limited time offer - Grand Getaways",
    text2:
      "Enjoy exceptional hospitality with buffet breakfast, specially curated meal, themed hi-tea & Kids up to 12 stay and dine for free",
    text3: "Fully refundable",
    text4: "Reserve now, pay later",
    rating: "4.4",
    review: "Excellent",
    no_of_reviews: "(177 reviews)",
    heading3: "We have 5 left at",
    price1: "Rs9,000",
    price2: "10620",
  },
  {
    id: 4,
    city: "Pune",
    heading1: "The Ritz-Carlton, Pune",
    heading2: "Yerawada",
    img1: "https://images.trvl-media.com/hotels/40000000/39460000/39453000/39452997/d350173e.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img2: "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/40000000/39460000/39453000/39452997/74a5e76b_b.jpg",
    img3: "https://images.trvl-media.com/hotels/40000000/39460000/39453000/39452997/51db1e6d.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img4: "https://images.trvl-media.com/hotels/40000000/39460000/39453000/39452997/2b34a8f8.jpg?impolicy=resizecrop&rw=455&ra=fit",
    text1: "Reserve A Luxe Urban Escape",
    text2:
      "Revel in quintessential luxury with a private yoga session, spa credit, limousine transfers, Ritz Kids activities and much more.",
    text3: "Fully refundable",
    text4: "Reserve now, pay later",
    rating: "4.8",
    review: "Exceptional",
    no_of_reviews: "(27 reviews)",
    heading3: "We have 5 left at",
    price1: "Rs14,500",
    price2: "17110",
  },
  {
    id: 5,
    city: "Pune",
    heading1: "The Westin Pune Koregaon Park",
    heading2: "Mundhwa",
    img1: "https://images.trvl-media.com/hotels/4000000/3010000/3003800/3003784/a5fbbb2a.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img2: "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/4000000/3010000/3003800/3003784/06b44a17_b.jpg",
    img3: "https://images.trvl-media.com/hotels/4000000/3010000/3003800/3003784/016afcda.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img4: "https://images.trvl-media.com/hotels/4000000/3010000/3003800/3003784/0917b41f.jpg?impolicy=resizecrop&rw=455&ra=fit",
    text1: "Stay For Breakfast",
    text2:
      "Limited Time Offer - Start your day sunny side up with Complimentary Breakfast, Wi-Fi, Gym & Pool access.",
    text3: "Fully refundable",
    text4: "Reserve now, pay later",
    rating: "4.3",
    review: "Excellent",
    no_of_reviews: "(133 reviews)",
    heading3: "We have 5 left at",
    price1: "Rs10,100",
    price2: "11918",
  },
  {
    id: 6,
    city: "Pune",
    heading1: "Pride Hotel",
    heading2: "Pune",
    img1: "https://images.trvl-media.com/hotels/1000000/450000/447300/447235/3f3d7248.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img2: "https://images.trvl-media.com/hotels/1000000/450000/447300/447235/f9c671be.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img3: "https://images.trvl-media.com/hotels/1000000/450000/447300/447235/96c9e57d.jpg?impolicy=resizecrop&rw=455&ra=fit",
    img4: "https://images.trvl-media.com/hotels/1000000/450000/447300/447235/0efd5b08.jpg?impolicy=resizecrop&rw=455&ra=fit",
    text1: "The price was Rs6,332",
    text2: "Rs6,332",
    text3: "Fully refundable",
    text4: "Reserve now, pay later",
    rating: "3.6",
    review: "Good",
    no_of_reviews: "(57 reviews)",
    heading3: "10% off",
    price1: "Rs5,699",
    price2: "6383",
  },
];

let mainContainer = document.getElementById("mainContainer");

let h1 = document.createElement("h1");
h1.textContent = "NEAR NICE PLACES";

let p = document.createElement("p");
p.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellente sque vel volutpat felis, eu condimentum massa. Pellentesque mollis eros vel mattis tempor. Aliquam";

mainContainer.append(h1, p);

let eventNav = document.getElementById("evenNav");

let nav = document.createElement("div");
nav.setAttribute("id", "nvbar");
let button1 = document.createElement("button");
button1.setAttribute("id", "btn1");
button1.textContent = "1";
let button2 = document.createElement("button");
button2.setAttribute("id", "btn2");
button2.textContent = "2";
let button3 = document.createElement("button");
button3.setAttribute("id", "btn3");
button3.textContent = "3";
let button4 = document.createElement("button");
button4.setAttribute("id", "btn4");
button4.textContent = "4";

nav.append(button1, button2, button3, button4);
eventNav.append(nav);
let btn1 = document.getElementById("btn1");
btn1.style.fontSize = "2.8em";
btn1.style.color = " rgb(189, 176, 160)";
document.getElementById("btn1").addEventListener("click", display1);

function display1() {
  let btn1 = document.getElementById("btn1");
  btn1.style.fontSize = "2.8em";
  btn1.style.color = " rgb(189, 176, 160)";
  let btn2 = document.getElementById("btn2");
  btn2.style.fontSize = "25px";
  btn2.style.color = "black";
  let btn3 = document.getElementById("btn3");
  btn3.style.fontSize = "25px";
  btn3.style.color = "black";
  let btn4 = document.getElementById("btn4");
  btn4.style.fontSize = "25px";
  btn4.style.color = "black";

  let mainDiv = document.getElementById("container");
  mainDiv.innerHTML = "";
  dehli.map(function (el) {
    let main = document.createElement("div");
    main.className = "main";
    let mainBox = document.createElement("div");
    mainBox.className = "box";
    let imageBox = document.createElement("div");
    imageBox.className = "imgBox";
    let image = document.createElement("img");
    image.src = el.img3;
    image.width = "370";
    image.height = "250";
    imageBox.append(image);
    let detailDiv = document.createElement("div");
    detailDiv.className = "detalis";
    let contentDiv = document.createElement("div");
    contentDiv.className = "content";
    let anchor = document.createElement("a");
    anchor.href = "event.html";
    let iconImage = document.createElement("img");
    iconImage.src = "icon1 (2).png";
    anchor.append(iconImage);
    contentDiv.append(anchor);
    detailDiv.append(contentDiv);
    mainBox.append(imageBox, detailDiv);

    let addDiv = document.createElement("div");
    addDiv.className = "address";

    let p1 = document.createElement("p");

    p1.textContent = el.heading1.slice(0, 23);
    addDiv.append(p1);

    let other = document.createElement("div");
    other.className = "other";

    let p2 = document.createElement("p");
    p2.textContent = `West Road, ${el.headig2}`;

    let p3 = document.createElement("p");
    p3.textContent = `${Math.floor(Math.random() * 10 + 1)} kilometer`;
    other.append(p2, p3);
    main.append(mainBox, addDiv, other);
    mainDiv.append(main);
  });
}
document.getElementById("btn2").addEventListener("click", display2);

function display2() {
  let btn2 = document.getElementById("btn2");
  btn2.style.fontSize = "2.8em";
  btn2.style.color = " rgb(189, 176, 160)";
  let btn1 = document.getElementById("btn1");
  btn1.style.fontSize = "25px";
  btn1.style.color = "black";
  let btn3 = document.getElementById("btn3");
  btn3.style.fontSize = "25px";
  btn3.style.color = "black";
  let btn4 = document.getElementById("btn4");
  btn4.style.fontSize = "25px";
  btn4.style.color = "black";

  let mainDiv = document.getElementById("container");
  mainDiv.innerHTML = "";
  Goa.map(function (el) {
    let main = document.createElement("div");
    main.className = "main";
    let mainBox = document.createElement("div");
    mainBox.className = "box";
    let imageBox = document.createElement("div");
    imageBox.className = "imgBox";
    let image = document.createElement("img");
    image.src = el.img3;
    image.width = "370";
    image.height = "250";
    imageBox.append(image);
    let detailDiv = document.createElement("div");
    detailDiv.className = "detalis";
    let contentDiv = document.createElement("div");
    contentDiv.className = "content";
    let anchor = document.createElement("a");
    anchor.href = "event.html";
    let iconImage = document.createElement("img");
    iconImage.src = "icon1 (2).png";
    anchor.append(iconImage);
    contentDiv.append(anchor);
    detailDiv.append(contentDiv);
    mainBox.append(imageBox, detailDiv);

    let addDiv = document.createElement("div");
    addDiv.className = "address";

    let p1 = document.createElement("p");

    p1.textContent = el.heading1.slice(0, 26);
    addDiv.append(p1);

    let other = document.createElement("div");
    other.className = "other";

    let p2 = document.createElement("p");
    p2.textContent = `West Road, ${el.heading2}`;

    let p3 = document.createElement("p");
    p3.textContent = `${Math.floor(Math.random() * 10 + 1)} kilometer`;
    other.append(p2, p3);
    main.append(mainBox, addDiv, other);
    mainDiv.append(main);
  });
}
document.getElementById("btn3").addEventListener("click", display3);

function display3() {
  let btn3 = document.getElementById("btn3");
  btn3.style.fontSize = "2.8em";
  btn3.style.color = " rgb(189, 176, 160)";
  let btn2 = document.getElementById("btn2");
  btn2.style.fontSize = "25px";
  btn2.style.color = "black";
  let btn1 = document.getElementById("btn1");
  btn1.style.fontSize = "25px";
  btn1.style.color = "black";
  let btn4 = document.getElementById("btn4");
  btn4.style.fontSize = "25px";
  btn4.style.color = "black";

  let mainDiv = document.getElementById("container");
  mainDiv.innerHTML = "";
  Mumbai.map(function (el) {
    let main = document.createElement("div");
    main.className = "main";
    let mainBox = document.createElement("div");
    mainBox.className = "box";
    let imageBox = document.createElement("div");
    imageBox.className = "imgBox";
    let image = document.createElement("img");
    image.src = el.img3;
    image.width = "370";
    image.height = "250";
    imageBox.append(image);
    let detailDiv = document.createElement("div");
    detailDiv.className = "detalis";
    let contentDiv = document.createElement("div");
    contentDiv.className = "content";
    let anchor = document.createElement("a");
    anchor.href = "event.html";
    let iconImage = document.createElement("img");
    iconImage.src = "icon1 (2).png";
    anchor.append(iconImage);
    contentDiv.append(anchor);
    detailDiv.append(contentDiv);
    mainBox.append(imageBox, detailDiv);

    let addDiv = document.createElement("div");
    addDiv.className = "address";

    let p1 = document.createElement("p");

    p1.textContent = el.heading1.slice(0, 25);
    addDiv.append(p1);

    let other = document.createElement("div");
    other.className = "other";

    let p2 = document.createElement("p");
    p2.textContent = `West Road, ${el.heading2}`;

    let p3 = document.createElement("p");
    p3.textContent = `${Math.floor(Math.random() * 10 + 1)} kilometer`;
    other.append(p2, p3);
    main.append(mainBox, addDiv, other);
    mainDiv.append(main);
  });
}
document.getElementById("btn4").addEventListener("click", display4);

function display4() {
  let btn4 = document.getElementById("btn4");
  btn4.style.fontSize = "2.8em";
  btn4.style.color = " rgb(189, 176, 160)";
  let btn2 = document.getElementById("btn2");
  btn2.style.fontSize = "25px";
  btn2.style.color = "black";
  let btn1 = document.getElementById("btn1");
  btn1.style.fontSize = "25px";
  btn1.style.color = "black";
  let btn3 = document.getElementById("btn3");
  btn3.style.fontSize = "25px";
  btn3.style.color = "black";

  let mainDiv = document.getElementById("container");
  mainDiv.innerHTML = "";
  pune.map(function (el) {
    let main = document.createElement("div");
    main.className = "main";
    let mainBox = document.createElement("div");
    mainBox.className = "box";
    let imageBox = document.createElement("div");
    imageBox.className = "imgBox";
    let image = document.createElement("img");
    image.src = el.img3;
    image.width = "370";
    image.height = "250";
    imageBox.append(image);
    let detailDiv = document.createElement("div");
    detailDiv.className = "detalis";
    let contentDiv = document.createElement("div");
    contentDiv.className = "content";
    let anchor = document.createElement("a");
    anchor.href = "event.html";
    let iconImage = document.createElement("img");
    iconImage.src = "icon1 (2).png";
    anchor.append(iconImage);
    contentDiv.append(anchor);
    detailDiv.append(contentDiv);
    mainBox.append(imageBox, detailDiv);

    let addDiv = document.createElement("div");
    addDiv.className = "address";

    let p1 = document.createElement("p");
    p1.textContent = el.heading1.slice(0, 26);
    addDiv.append(p1);

    let other = document.createElement("div");
    other.className = "other";

    let p2 = document.createElement("p");
    p2.textContent = `West Road, ${el.heading2}`;

    let p3 = document.createElement("p");
    p3.textContent = `${Math.floor(Math.random() * 10 + 1)} kilometer`;
    other.append(p2, p3);
    main.append(mainBox, addDiv, other);
    mainDiv.append(main);
  });
}
