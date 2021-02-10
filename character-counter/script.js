const output = document.querySelector(".output");
const text = document.querySelector("textarea");

/*
text.addEventListener("change", textCounter);
text.addEventListener("keyup", textCounter);
text.addEventListener("keydown", textCounter);
*/

["keyup", "keydown", "change"].forEach(function (e) {
  text.addEventListener(e, textCounter);
});

const maxLength = 150;
const warnLength = 135;

function textCounter() {
  let count = text.value.length;
  //console.log(count);

  if (count > maxLength) { text.value = text.value.substring(0, maxLength); }
  if (count > warnLength) { output.classList.add("red"); }
  else { output.classList.remove("red"); }

  output.innerHTML = (maxLength - count) + " characters left";

}