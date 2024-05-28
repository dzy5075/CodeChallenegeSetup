//Global currentCatTax variable
let currentCatTax = 0;
let calculateTax = document.getElementById("tax-calculate-btn");
let amountOweP = document.getElementById("amountOwed");
let payBtn = document.querySelector(".payBtn");
let imageContainer = document.querySelector(".imageContainer");
let mainContainer = document.querySelector(".container");

// TODO: calcButtonClick function -completed-
// Function should handle the following items:
// 1) Generate a random, whole number between 0 and 20.
// 2) If the random number is not 0, update the amountOwed div to display "You owe {random number} cat tax! Pay up!"
// 3) If the random number is not 0, update the pay button text to display "Pay Cat Tax"
// 4) If the random number is not 0, update the pay button so that it is no longer hidden
// 5) If the random number is 0, update the amountOwed div to display "You owe {random number} cat tax! You've escaped this time!"
// 6) If the random number is 0, update the pay button so that it is hidden.
// 7) Both the amountOwed and pay amount button should be updated every time the calculate cat tax button is clicked.

function calcButtonClick() {
  currentCatTax = Math.floor(Math.random() * (20 + 1));
  if (currentCatTax === 0) {
    amountOweP.innerHTML = `You owe ${currentCatTax} cat tax! You've escaped this time!`;
    // amountOwed div to display "You owe {random number} cat tax! You've escaped this time!" -completed-
    payBtn.style.display = "none";
    // pay button should be hidden -completed-
  } else if (currentCatTax !== 0) {
    amountOweP.innerHTML = `You owe ${currentCatTax} cat tax! Pay Up`;
    // amount0wed div to display "You owe {random number} cat tax! Pay up" -completed-
    payBtn.innerHTML = "Pay Cat Tax";
    // pay button to display text "Pay Cat Tax" -completed-
    payBtn.style.display = "block";
    // pay button to display -completed-
  }
}
// TODO: payButton function
// Function should handle the following items:
// 1) Decrement the currentCatTax amount by 1 -completed-
// 2) If the remaining cat tax is greater than zero, update the amountOwed div to display "You still owe {remaining amount} cat tax! Pay up!" -completed-
// 3) If the remaining cat tax is zero or fewer, update the amountOwed div to display "Your debts are paid..." -completed-
// 4) If the cat tax was payable (amount was greater than 0) when the button was clicked, make a call to the cat api to get a cat image (https://api.thecatapi.com/v1/images/search) -completed-
// 5) Once the cat image is retrieved, append the image to the image container -completed-
// 6) If the cat tax was not payable (amount was less than or equal to 0) when the button was clicked, replace the entire contents of the container with the gif found here (https://media.tenor.com/QMQmyssO0UMAAAAM/cat-wiggle.gif) -completed-

function payButton() {
  //  #1 Decrement currentCatTax
  currentCatTax = currentCatTax - 1;
  amountOweP.innerHTML = `You owe ${currentCatTax} cat tax! Pay Up`;

  if (currentCatTax > 0) {
    // #2 display you still owe tax to amount0wed if cat tax greater than 0
    amountOweP.innerHTML = `You owe ${currentCatTax} cat tax! Pay Up`;
    // #4 get cat image from url if currentCatTax > 0 when clicked
    function getCatImage() {
      fetch("https://api.thecatapi.com/v1/images/search")
        .then((res) => res.json())
        .then((cat) => displayCat(cat));
    }
    getCatImage();
    // #3 display no tax is owed
  } else {
    amountOweP.innerHTML = "Your debts are paid...";
  }
  // # 6 if Cat tax is less than or equal 0 when clicked, replace content and display final cat GIF
  if (currentCatTax < 0) {
    let finalImageURL =
      "https://media.tenor.com/QMQmyssO0UMAAAAM/cat-wiggle.gif";
    mainContainer.innerHTML = `<img src="${finalImageURL}">`;
  }
}
// #5 display Cat image from Url and append to image container
function displayCat(cat) {
  const img = document.createElement("img");
  imageContainer.appendChild(img);
  img.src = cat[0].url;
}
