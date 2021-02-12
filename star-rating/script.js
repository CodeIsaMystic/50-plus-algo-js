const stars = document.querySelectorAll(".star");
const output = document.querySelector(".output");




/// *****************************************
for (let x = 0; x < stars.length; x++) {
  stars[x].starValue = (x + 1);
  ["mouseover", "mouseout", "click"].forEach(function (e) {
    stars[x].addEventListener(e, starRate);
  })
};



/// *****************************************
function starRate(e) {
  let t = e.type;
  let starValue = this.starValue;

  if (t === "click") {
    if (starValue > 1) { output.innerHTML = "You rated this " + starValue }
  }


  stars.forEach(function (el, ind) {
    if (t === "click") {
      if (ind < starValue) { el.classList.add("orange"); }
      else { el.classList.remove("orange"); }
    }
    if (t === "mouseover") {
      if (ind < starValue) { el.classList.add("yellow"); }
      else { el.classList.remove("yellow"); }
    }
    if (t === "mouseout") {
      el.classList.remove("yellow");
    }
  })

}



