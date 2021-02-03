/// **************************************
const button = document.querySelector("button");
const bark = new Audio('sounds/bark.mp3');


const animals = document.querySelectorAll(".animal");

/// **************************************
for (let i = 0; i < animals.length; i++) {
  animals[i].addEventListener("click", function () {
    let animal = this.innerHTML;
    console.log(animal);
  });
}

/*
button.addEventListener('click', function () {
  let duration = bark.duration;
  let muted = bark.muted;

  bark.play();
  console.log(muted);
});
*/