const btn = document.querySelectorAll(".modal");
const modalWrapper = document.querySelector(".modalWrapper");
const body = document.querySelector("body");




/// ********************************
function makeClick(el) {
  //console.log(modalWrapper)
  el.addEventListener("click", function () {
    //console.log(el)


    modalWrapper.classList.add("showModal");
    const closeButton = document.querySelector(".close");

    closeButton.addEventListener("click", function () {
      console.log("clicked +  closebtn")
      return modalWrapper.classList.remove("showModal");
    });
    modalWrapper.addEventListener("click", function () {
      console.log("clicked +  modalW")
      return modalWrapper.classList.remove("showModal");
    });
    body.addEventListener("keydown", function (e) {
      console.log("clicked +  keyD")
      console.log(e.keyCode);

      if (e.keyCode === 27) {
        return modalWrapper.classList.remove("showModal");
      }
    })

  })

}

/// *******************************
btn.forEach(function (btn) {
  makeClick(btn);
});


