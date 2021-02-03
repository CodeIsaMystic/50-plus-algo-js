/// **************************************
const button = document.querySelector("button");
const bark = new Audio('sounds/bark.mp3');


const animals = document.querySelectorAll(".animal");




/// **************************************
for (let i = 0; i < animals.length; i++) {
  animals[i].addEventListener("click", function () {
    let animal = this.innerHTML;
    let lowerAnimal = animal.toLowerCase();
    makeSound(lowerAnimal)
    //console.log(animal);
  });
}



/// **************************************
function makeSound(name) {
  //console.log(name);

  switch (name) {
    case "lion":
      let sound1 = new Audio("sounds/lion.mp3");
      sound1.play();
      break;
    case "cougar":
      let sound2 = new Audio("sounds/cougar.mp3");
      sound2.play();
      break;
    case "dog":
      let sound3 = new Audio("sounds/bark.mp3");
      sound3.play();
      break;
    /*default
      break;*/
  }
}




/*
button.addEventListener('click', function () {
  let duration = bark.duration;
  let muted = bark.muted;

  bark.play();
  console.log(muted);
});
*/