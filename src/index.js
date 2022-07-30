// // const phoneNo = document.querySelector(".number");
// // const submitBtn = document.querySelector(".submit-btn");
// const mtnWord = "+225 Everywhere you go";

// //  A regex starting that a string must start with a "+234"
// const mtnRegex = /^\+234/;

// // A regex starting that a string must start with a "+" and must be either "234"
// // or "223" or "224" or "225", | starts for "or"

// const mtnReGex = /^\+(?=234|223|224|225)/;

// const mtn = mtnWord.match(mtnReGex);
// console.log(mtn);
// // console.log(phoneNo.startsWith("0"));
// // submitBtn.addEventListener("click", () => {
// //   let digit = phoneNo.value;
// //   console.log(digit);
// // });

// // console.log(phoneNo);

// let oranges = ["ripe orange A ", "orange ripe B", "ripe orange C"];

// let ripe_oranges = oranges.filter((fruit) => fruit.match(/(?<=ripe )orange/));
// console.log(ripe_oranges); // [ 'ripe orange A ', 'ripe orange C' ]

// const aliceExcerpt =
//   "I'm sure I'm not Ada,' she said, 'for her hair goes in such long ringlets, and mine doesn't go in ringlets at all.";
// const regexpWordStartingWithA = /\b[aA]\w+/g;
// // \b indicates a boundary (i.e. do not start matching in the middle of a word)
// // [aA] indicates the letter a or A
// // \w+ indicates any character *from the latin alphabet*, multiple times

// console.table(aliceExcerpt.match(regexpWordStartingWithA));
// // ['Ada', 'and', 'at', 'all']

const phoneNo = document.querySelector(".number");
const submitBtn = document.querySelector(".check-btn");
const message = document.querySelector(".message");
const body = document.querySelector("body");
const phoneNoLogo = document.querySelector(".logo-ctn");
const initalsRegex = /^\+(?=234)/;
const mtnNumbersRegex =
  /^(\+234|0)(?=803|806|810|813|814|816|703|706|903|906)\d{10}/;
const airtelNumbersRegex =
  /^(\+234|0)(?=802|808|812|708|701|901|902|907)\d{10}/;
const etisalatNumbersRegex = /^(\+234|0)(?=809|817|818|908|909)\d{10}/;
const gloNumbersRegex = /^(\+234|0)(?=805|807|811|815|705|905)\d{10}/;
const visafoneNumbersRegex = /^(\+234|0)(?=7025|7026|704)\d{10}/;
const ntelNumbersRegex = /^(\+234|0)(?=804)\d{10}/;
const smileNumbersRegex = /^(\+234|0)(?=702)\d{10}/;
const multilinksNumbersRegex = /^(\+234|0)(?=709)\d{10}/;

// let mtnNumbers = [
//   "+2348061334218",
//   "08025480555",
//   "+2347061334218",
//   "+2348065480555",
// ];
// for (let i = 0; i < mtnNumbers.length; i++) {
//   let mtnMatchNumbers = mtnNumbers[i].match(mtnNumbersRegex);

//   console.log(mtnMatchNumbers);
// }

// function onlyNumberKeys(evt) {
//   var ASCIICode = evt.which ? evt.which : evt.keyCode;
//   if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;
//   return true;
// }
function isWhatCarrier() {
  let number = phoneNo.value;
  let mtn = mtnNumbersRegex.test(number);
  let airtel = airtelNumbersRegex.test(number);
  let etisalat = etisalatNumbersRegex.test(number);
  let glo = gloNumbersRegex.test(number);
  let ntel = ntelNumbersRegex.test(number);
  let smile = smileNumbersRegex.test(number);
  let multilinks = multilinksNumbersRegex.test(number);
  let visafone = visafoneNumbersRegex.test(number);
  if (mtn == true) {
    message.textContent = "This is a MTN number";
    // body.style.background = "yellow";
    phoneNoLogo.innerHTML = `<img src="/mtn.png" alt="carrier-logo" class="logo" />`;
    console.log("This is a MTN number");
  } else if (airtel == true) {
    message.textContent = "This is an airtel number";
    // body.style.background = "red";
    phoneNoLogo.innerHTML = `<img src="/airtel.png" alt="carrier-logo" class="logo" />`;
    console.log("This is an airtel number");
  } else if (etisalat == true) {
    message.textContent = "This is an etisalat number";
    // body.style.background = "rgb(4, 33, 4)";
    phoneNoLogo.innerHTML = `<img src="/mobile9.png" alt="carrier-logo" class="logo" />`;
    console.log("This is an etisalat number");
  } else if (glo == true) {
    message.textContent = "This is a glo number";
    // body.style.background = "rgb(186, 254, 59)";
    phoneNoLogo.innerHTML = `<img src="/glo.jpg" alt="carrier-logo" class="logo" />`;
    console.log("This is a glo number");
  } else if (ntel == true) {
    message.textContent = "This is an ntel number";
    // body.style.background = "rgb(0, 105, 0)";
    phoneNoLogo.innerHTML = `<img src="/ntel.png" alt="carrier-logo" class="logo" />`;
    console.log("This is an ntel number");
  } else if (smile == true) {
    message.textContent = "This is a smile number";
    // body.style.background = "rgb(137, 211, 137)";
    phoneNoLogo.innerHTML = `<img src="/smile-.jpg" alt="carrier-logo" class="logo" />`;
    console.log("This is a smile number");
  } else if (multilinks == true) {
    message.textContent = "This is a multilinks number";
    // body.style.background = "rgb(1, 35, 1)";
    phoneNoLogo.innerHTML = `<img src="/multilinks.webp" alt="carrier-logo" class="logo" />`;
    console.log("This is a multilinks number");
  } else if (visafone == true) {
    message.textContent = "This is a visafone number";
    // body.style.background = "rgb(166, 30, 30)";
    phoneNoLogo.innerHTML = `<img src="/visafone.png" alt="carrier-logo" class="logo" />`;
    console.log("This is a visafone number");
  } else {
    message.textContent = "Don't know what carrier is this number";
    console.log("Don't know what carrier is this number");
    // body.style.background = "black";
  }
}

function noStartsWith0() {
  let number = phoneNo.value;
  let phoneNoLenght = number.length;
  if (phoneNoLenght == 11) {
    message.textContent = "Valid number";
    console.log("Valid number");
    isWhatCarrier();
  } else {
    message.textContent = "Invalid number";
    console.log("Invalid number");
    return;
  }
}

function noStartsWith234() {
  let number = phoneNo.value;
  let phoneNoLenght = number.length;
  if (phoneNoLenght == 14) {
    message.textContent = "Valid number";
    console.log("Valid number");
    isWhatCarrier();
  } else {
    message.textContent = "Invalid number";
    console.log("Invalid number");
    return;
  }
}

function phoneNoInitializer() {
  let number = phoneNo.value;
  let digit = initalsRegex.test(number);
  let shortHandInitializer = number.startsWith("0");

  // console.log(digit);
  // console.log(number);
  if (number == "") {
    message.textContent = "Please enter a number first!";
    console.log("Please enter a number first");
    return null;
  } else if (shortHandInitializer == true) {
    console.log(shortHandInitializer);
    message.textContent = "This is a valid Nigeria short Hand Initializer";
    noStartsWith0();
  } else if (digit) {
    console.log(digit);
    message.textContent = "This is a valid Nigeria country code";
    console.log("This is a valid country code");
    noStartsWith234();
  } else {
    // console.log(digit);
    message.textContent = "Not a Nigeria country code/short Hand Initializer";

    console.log("Not a NIgeria country code/short Hand Initializer");
    return;
  }
  // let startWith0 = number.prototype.startsWith("0");
  let phoneNoLenght = number.length;
  console.log(phoneNoLenght);
}

submitBtn.addEventListener("click", () => phoneNoInitializer());

// submitBtn.addEventListener("click", ());
// let phoneNoLenght = number.length;
// console.log(phoneNoLenght);
// if ()

// phoneNo.addEventListener("keypress", () => {
//   phoneNoLogo.style.display = "none";
// });

// while ((number.value = "")) {
//   phoneNoLogo.innerHTML = `<img src="/white.jpg" alt="carrier-logo" class="logo" />`;
// }
phoneNo.addEventListener("keypress", () => {
  phoneNoLogo.innerHTML = `<img src="/white.jpg" alt="carrier-logo" class="logo" />`;
});
// addEventListener("focusin");
