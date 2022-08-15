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
    phoneNoLogo.innerHTML = `<img src="/images/mtn.png" alt="carrier-logo" class="logo" />`;
    console.log("This is a MTN number");
  } else if (airtel == true) {
    message.textContent = "This is an airtel number";
    phoneNoLogo.innerHTML = `<img src="/images/airtel.png" alt="carrier-logo" class="logo" />`;
    console.log("This is an airtel number");
  } else if (etisalat == true) {
    message.textContent = "This is an etisalat number";
    phoneNoLogo.innerHTML = `<img src="/images/mobile9.png" alt="carrier-logo" class="logo" />`;
    console.log("This is an etisalat number");
  } else if (glo == true) {
    message.textContent = "This is a glo number";
    phoneNoLogo.innerHTML = `<img src="/images/glo.jpg" alt="carrier-logo" class="logo" />`;
    console.log("This is a glo number");
  } else if (ntel == true) {
    message.textContent = "This is an ntel number";
    phoneNoLogo.innerHTML = `<img src="/images/ntel.png" alt="carrier-logo" class="logo" />`;
    console.log("This is an ntel number");
  } else if (smile == true) {
    message.textContent = "This is a smile number";
    phoneNoLogo.innerHTML = `<img src="/images/smile-.jpg" alt="carrier-logo" class="logo" />`;
    console.log("This is a smile number");
  } else if (multilinks == true) {
    message.textContent = "This is a multilinks number";
    phoneNoLogo.innerHTML = `<img src="/images/multilinks.webp" alt="carrier-logo" class="logo" />`;
    console.log("This is a multilinks number");
  } else if (visafone == true) {
    message.textContent = "This is a visafone number";
    phoneNoLogo.innerHTML = `<img src="/images/visafone.png" alt="carrier-logo" class="logo" />`;
    console.log("This is a visafone number");
  } else {
    message.textContent = "Don't know what carrier is this number";
    console.log("Don't know what carrier is this number");
    phoneNoLogo.innerHTML = `<img src="/images/white.jpg" alt="carrier-logo" class="logo" />`;

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
    phoneNoLogo.innerHTML = `<img src="/images/white.jpg" alt="carrier-logo" class="logo" />`;

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
    phoneNoLogo.innerHTML = `<img src="/images/white.jpg" alt="carrier-logo" class="logo" />`;
    return;
  }
}

function phoneNoInitializer() {
  let number = phoneNo.value;
  let digit = initalsRegex.test(number);
  let shortHandInitializer = number.startsWith("0");

  if (number == "") {
    message.textContent = "Please enter a number first!";
    console.log("Please enter a number first");
    phoneNoLogo.innerHTML = `<img src="/images/white.jpg" alt="carrier-logo" class="logo" />`;

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
    message.textContent = "Not a Nigeria country code/short Hand Initializer";
    phoneNoLogo.innerHTML = `<img src="/images/white.jpg" alt="carrier-logo" class="logo" />`;
    s;
    console.log("Not a NIgeria country code/short Hand Initializer");
    return;
  }
  let phoneNoLenght = number.length;
  console.log(phoneNoLenght);
}

submitBtn.addEventListener("click", () => phoneNoInitializer());

phoneNo.addEventListener("keypress", () => {
  phoneNoLogo.innerHTML = `<img src="/images/white.jpg" alt="carrier-logo" class="logo" />`;
});
