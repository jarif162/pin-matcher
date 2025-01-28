//selectors
const generatePinBtn = document.querySelector(".generate-btn");
const generatedPinInput = document.querySelector(".generated-Pin");
const keypadValue = document.querySelector(".show-value");
const wrongPin = document.querySelector(".wrong-pin");
const correctPin = document.querySelector(".correct-pin");
const submitbtn = document.querySelector(".submit-btn");
const tryLeft = document.getElementById("tryLeft");
//hide notification
hideNotification();

//gen 4 digit pin
function generatePin() {
  const pin = Math.floor(Math.random() * 4999) + 1000;
  //   console.log(pin);
  generatedPinInput.value = pin;
}
//generatePin();
generatePinBtn.addEventListener("click", generatePin);

//take the keypad functional
function keypad(number) {
  if (generatedPinInput === "") {
    alert("Generate a pin first");
  } else {
    keypadValue.value += number;
  }

  if (number === "C") {
    keypadValue.value = "";
  }
}
//remove a single digit from the keypad
function removeSingleDigit() {
  let currentValue = keypadValue.value;
  if (generatedPinInput === "") {
    alert("Generate a pin first");
  }

  if (currentValue === "") {
    alert("Nothing to remove");
  }
  keypadValue.value = currentValue.slice(0, -1);
}

function hideNotification() {
  wrongPin.style.display = "none";
  correctPin.style.display = "none";
}

function checkPin() {
  if (generatedPinInput.value === keypadValue.value) {
    console.log("matched");
    correctPin.style.display = "block";
    submitbtn.style.backgroundColor = "green";
    submitbtn.disabled = true;
    generatePinBtn.disabled = true;
  } else if (generatedPinInput.value === "" && keypadValue.value) {
    wrongPin.style.display = "block";
    submitbtn.style.backgroundColor = "red";
    handleTryLeft();
  } else {
    console.log("wrong pin");
    wrongPin.style.display = "block";
    submitbtn.style.backgroundColor = "red";
    handleTryLeft();
  }
}

function handleTryLeft() {
  let value = parseInt(tryLeft.innerText);
  if (0 < value) {
    tryLeft.innerText = value - 1;
  } else {
    alert("please try again");
    submitbtn.disabled = true;
  }
}

submitbtn.addEventListener("click", checkPin);
