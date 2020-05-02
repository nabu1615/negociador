const elem = document.querySelector(".testimonies");
const flkty = new Flickity(elem, {
  wrapAround: true,
  prevNextButtons: false,
});

const $form = document.getElementById("newsletter-form"),
  url =
    "https://script.google.com/macros/s/AKfycbyuGe7F61RCg-N2f2U06kubLpemmEh9TAB6TRu5Bdps4QX1_8I/exec";

$form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(url, { method: "POST", mode: "no-cors", body: new FormData($form) })
    .then(() => {
      alert("Registro Exitoso");
      $form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

const playButton = document.querySelector(".play");
const videoDialog = document.querySelector(".props__video");
const closeButton = document.querySelector(".close");
const body = document.querySelector("body");

// "Update details" button opens the <dialog> modally
playButton.addEventListener("click", function onOpen() {
  if (typeof videoDialog.showModal === "function") {
    videoDialog.showModal();
    window.scrollTo(500, 0);
    body.classList.add("block");
  } else {
    alert("The <dialog> API is not supported by this browser");
  }
});

// "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
videoDialog.addEventListener("close", () => {
  body.classList.remove("block");
});

// "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
closeButton.addEventListener("click", () => {
  videoDialog.close();
});
