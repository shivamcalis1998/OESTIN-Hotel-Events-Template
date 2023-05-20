$(document).ready(function() {
  let roomDetails = localStorage.getItem("Details");
  roomDetails = JSON.parse(roomDetails);

  // Fallback image URL
  const defaultImageUrl = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.peakpx.com%2Fen%2Fhd-wallpaper-desktop-gpuvv&psig=AOvVaw08Pa9T9FXmhyQ4wcevCdG4&ust=1684600781350000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPjKu4vpgf8CFQAAAAAdAAAAABAE";

  // Image container element
  let slider = document.querySelector(".room-slider");

  // Arrow buttons
  let prevButton = document.querySelector(".prev-button");
  let nextButton = document.querySelector(".next-button");

  // Check if roomDetails is defined and has the expected structure
  if (
    roomDetails &&
    roomDetails.img1 &&
    roomDetails.img2 &&
    roomDetails.img3 &&
    roomDetails.img4 &&
    roomDetails.price1 &&
    roomDetails.price2
  ) {
    // New image URLs to add
    const additionalImageUrls = [
      "https://proudly.in/wp-content/uploads/2022/07/Novotel-Hyderabad-Convention-Centre.webp",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzD8zWGFWILydcfgs-mdiiW0w7hN315W7DwCUcbpEBlz9k8w1nmNg9dNCMUr0ORJMI-y8&usqp=CAU",
      "https://media.istockphoto.com/id/1077111606/photo/luxury-five-stars-hotels-lobby.jpg?s=612x612&w=0&k=20&c=mwpeSaBWTre2WEGGd4ubLQVBRValSl40g4ks04nKjnI=",
      "https://c4.wallpaperflare.com/wallpaper/39/785/145/presidential-suite-vacation-resort-tourism-wallpaper-preview.jpg"
    ];

    // Additional prices for the new images
    const additionalPrices = [
      "Rs.9998",
      "Rs.15540",
      "Rs.22300",
      "Rs.25999",
      "Rs.31200",
      "Rs.38999",
      "Rs.22999",
      "Rs.28999",
      "Rs.30999",
      "Rs.33999",
      "Rs.38999",
      "Rs.45999",
      "Rs.50999",
      "Rs.58999",
      "Rs.63999",
      "Rs.77499",
      "Rs.88999"
    ];

    // Display the room images
    let imageUrls = [
      roomDetails.img1,
      roomDetails.img2,
      roomDetails.img3,
      roomDetails.img4,
      ...additionalImageUrls
    ];

    let prices = [roomDetails.price1, roomDetails.price2];

    // Generate random prices for additional images if prices are not fetched from local storage
    if (!prices[0]) {
      const additionalPricesCount = additionalImageUrls.length;
      for (let i = 0; i < additionalPricesCount; i++) {
        const randomPriceIndex = Math.floor(Math.random() * additionalPrices.length);
        prices.push(additionalPrices[randomPriceIndex]);
      }
    }

    imageUrls.forEach((imageUrl, index) => {
      let imageSlide = document.createElement("div");
      imageSlide.classList.add("image-slide");

      let img = document.createElement("img");
      img.src = imageUrl || defaultImageUrl;

      let cost = document.createElement("div");
      cost.classList.add("cost");
      let h2 = document.createElement("h2");
      h2.textContent = prices[index] || additionalPrices[index];
      let span = document.createElement("span");
      span.textContent = "Per Night";

      cost.appendChild(h2);
      cost.appendChild(span);

      imageSlide.appendChild(img);
      imageSlide.appendChild(cost);

      // Initially hide the price element
      cost.style.visibility = "hidden";

      // Add event listener to toggle price visibility on mouse enter/leave
      img.addEventListener("mouseenter", () => {
        cost.style.visibility = "visible";
      });

      img.addEventListener("mouseleave", () => {
        cost.style.visibility = "hidden";
      });

      slider.appendChild(imageSlide);
    });

    // Event listeners for arrow buttons
    prevButton.addEventListener("click", () => {
      slider.scrollBy({
        left: -434, // Scroll by one image width
        behavior: "smooth"
      });
    });

    nextButton.addEventListener("click", () => {
      slider.scrollBy({
        left: 434, // Scroll by one image width
        behavior: "smooth"
      });
    });
  } else {
    console.error("Invalid roomDetails or missing properties. Please check the data structure.");
  }
});

