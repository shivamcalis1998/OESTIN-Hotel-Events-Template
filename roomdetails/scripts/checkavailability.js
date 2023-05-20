// Retrieve the room details from localStorage
var roomDetailsall = JSON.parse(localStorage.getItem("Details"));

// Function to calculate the price based on the selected dates
function calculatePrice(arriveDate, departureDate) {
  // Calculate the number of nights
  var oneDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
  var arrive = new Date(arriveDate);
  var departure = new Date(departureDate);
  var numberOfNights = Math.round(Math.abs((arrive - departure) / oneDay));

  // Determine if it's a weekday or weekend
  var isWeekday = isWeekdayStay(arrive, departure);

  // Retrieve the price per night from localStorage
  var pricePerNight = parseFloat(roomDetailsall.price1.replace(/[^0-9.]/g, ''));

  // Get the number of adults from the form
  var numberOfAdults = parseInt(document.getElementsByName("adults")[0].value);

  // Calculate the number of rooms needed
  var numberOfRooms = Math.ceil(numberOfAdults / 2);

  // Calculate the total price including taxes
  var taxRate = 0.28; // 28% tax rate
  var totalPrice = pricePerNight * numberOfNights * numberOfRooms;
  var totalWithTaxes = totalPrice + (totalPrice * taxRate);

  // Display the room quantity and price with or without taxes
  var roomText = numberOfRooms + " x room = Rs." + pricePerNight + '<p style="fontSize:5px">INR/night</p>';
  var totalPriceText = "Total Price";
  if (taxRate > 0) {
    totalPriceText += " (incl. taxes)";
  }
  totalPriceText += "= Rs." + totalWithTaxes;

  // Update the price element
  var priceElement = document.getElementById("price2");
  priceElement.innerHTML = roomText + totalPriceText;

  // Update the price element styling
  priceElement.style.fontWeight = "bold";
  priceElement.style.color = "#444";
  priceElement.style.textAlign = "center";
  priceElement.style.fontSize = "24px";
  priceElement.style.marginTop = "10px";

  // Show the "Book Now" button
  var bookNowButton = document.getElementById("bookNowButton");
  bookNowButton.style.display = "block";

  // Add event listener to the "Book Now" button
  bookNowButton.addEventListener("mouseenter", function() {
    bookNowButton.style.transition = "background-color 0.3s ease";
    bookNowButton.style.backgroundColor = "black";
  });

  bookNowButton.addEventListener("mouseleave", function() {
    bookNowButton.style.transition = "background-color 0.3s ease";
    bookNowButton.style.backgroundColor = "brown";
  });

  bookNowButton.addEventListener("click", function() {
    // Redirect to the payment page
    window.location.href = "/Oestin/payment gateway/payment.html";
  });
}

// Function to check if the stay includes any weekends
function isWeekdayStay(arriveDate, departureDate) {
  var currentDay = new Date(arriveDate);
  var lastDay = new Date(departureDate);

  while (currentDay <= lastDay) {
    // Check if the current day is a Saturday (6) or Sunday (0)
    if (currentDay.getDay() === 6 || currentDay.getDay() === 0) {
      return false; // Weekend day found
    }

    // Move to the next day
    currentDay.setDate(currentDay.getDate() + 1);
  }

  return true; // No weekend day found
}

// Function to handle the form submission
function checkAvailability(event) {
  event.preventDefault(); // Prevent form submission

  // Get the selected dates from the form
  var arriveDate = document.getElementsByName("arrive")[0].value;
  var departureDate = document.getElementsByName("departure")[0].value;

  // Perform availability check (e.g., check if rooms are available for the selected dates)

  // Update the price based on the selected dates
  calculatePrice(arriveDate, departureDate);
}

// Add event listener to the form submit button
var searchForm = document.querySelector(".search-form");
searchForm.addEventListener("submit", checkAvailability);
