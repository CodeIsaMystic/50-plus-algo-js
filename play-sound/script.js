/// **************************************

const animals = document.querySelectorAll(".animal");




/// **************************************
for (let i = 0; i < animals.length; i++) {
  animals[i].addEventListener("click", function () {
    let animal = this.innerHTML;
    let lowerAnimal = animal.toLowerCase();

    playIt(lowerAnimal);
  });
}





/// **************************************



function playIt(name) {
  let activeElement = document.querySelector("." + name);
  let sound = new Audio("sounds/" + name + ".mp3");
  sound.play();

  activeElement.classList.add("active");
  setTimeout(function () {
    activeElement.classList.remove("active");
  }, 250);
}


function addStyle(name) {
  let activeElement = document.querySelector("." + name);

  activeElement.classList.add("active");
  setTimeout(function () {
    activeElement.classList.remove("active");
  }, 250);
}

function makeSound(name) {
  switch (name) {
    case "lion":

      break;
    case "cougar":
      let sound2 = new Audio("sounds/cougar.mp3");
      sound2.play();
      break;
    case "dog":
      let sound3 = new Audio("sounds/dog.mp3");
      sound3.play();
      break;
  }
}

