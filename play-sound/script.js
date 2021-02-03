

/// **************************************
document.addEventListener("DOMContentLoaded", init);

/// **************************************
const myAnimalArr = ["lion", "cougar", "dog"];




/// **************************************
function init() {
  //console.log("page ready");

  myAnimalArr.forEach(function (item) {
    //console.log(item);
    let div = document.createElement("div");
    div.setAttribute("class", "animal " + item);
    div.innerText = item.toUpperCase();
    div.addEventListener("click", function () {
      playIt(item);
    })
    document.body.appendChild(div);
  })
}



function playIt(name) {
  let activeElement = document.querySelector("." + name);
  let sound = new Audio("sounds/" + name + ".mp3");
  sound.play();

  activeElement.classList.add("active");
  setTimeout(function () {
    activeElement.classList.remove("active");
  }, 250);
}

