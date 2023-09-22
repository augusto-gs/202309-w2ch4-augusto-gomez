const formElement = document.querySelector(".form-data");
const nameInputElement = formElement.querySelector("#name");
const birthdateInputElement = formElement.querySelector("#birthdate");
const pictureInputElement = formElement.querySelector("#picture");
const javascriptInputElement = formElement.querySelector("#javascript");
const sufferingInputElement = formElement.querySelector("#suffering");

const setName = (name) => {
  const nameClassElement = document.querySelector(".name");
  const greetingOffClass = document.querySelector("h2.off");
  greetingOffClass.classList.remove("off");
  nameClassElement.textContent = name;
  const imageSearch = document.querySelector("img");
  imageSearch.alt = name;
};

const setAge = (birthDate) => {
  const nameAgeElement = document.querySelector(".age-number");
  const birthDateDisected = birthDate.split();
  const yearDate = birthDateDisected.splice(5, 2);
  console.log(yearDate.join());
};

const setPicture = (url) => {
  const avatarOffClass = document.querySelector("img.off");
  avatarOffClass.classList.remove("off");
  const imageSearch = document.querySelector("img");
  imageSearch.src = url;
};

const setJavaScript = (boolean) => {
  const sufferingOffClass = document.querySelector(".javascript-yes");
  sufferingOffClass.classList.remove("off");
  if (boolean) {
    const yesJavaScript = document.querySelector(".javascript-si");
    const afirmationText = yesJavaScript.textContent;
    console.log(afirmationText);
  } else {
    const noJavaScript = document.querySelector(".javascript-no");
    const negationText = noJavaScript.textContent;
  }
};

formElement.addEventListener("change", (event) => {
  switch (event.target) {
    case nameInputElement:
      setName(event.target.value);
      break;
    case birthdateInputElement:
      setAge(event.target.value);
      break;
    case pictureInputElement:
      setPicture(event.target.value);
      break;
    case javascriptInputElement:
      setJavaScript(event.target.value);
      break;
    case sufferingInputElement:
      // Invoca a la función para poner el grado de sufrimiento
      break;
  }
});
