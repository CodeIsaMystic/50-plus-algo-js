const popups = document.querySelectorAll(".popup");
const popup = document.querySelector(".output");
const popMessage = document.querySelector(".message");
const closeButton = document.querySelector(".close");
closeButton.addEventListener("click", function () {
  popup.classList.add("hide");
})
for (let x = 0; x < popups.length; x++) {
  console.log(popups[x]);
  popups[x].addEventListener("click", function () {
    let outputText = this.getAttribute("data-message");
    message(outputText);
  })
}

function message(output) {
  popup.classList.remove("hide");
  popMessage.innerText = output;
}