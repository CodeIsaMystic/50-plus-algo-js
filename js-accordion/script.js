
/// ********************************
const accordion = document.querySelectorAll(".panel");



/// ********************************
accordion.forEach(function (element) {
  //console.log(element)
  element.addEventListener("click", toggleElements);
});


/// ********************************
function toggleElements(e) {
  /*console.log("event: ", e);
  console.log("this: ", this);
  console.log("target event:", e.target);*/

  accordion.forEach(function (element) {
    element.classList.remove('active');
  });






  this.classList.toggle('active');
} 