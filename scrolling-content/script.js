const button = document.querySelector("button");
const cElement = document.querySelector("#cElement");
const sElement = document.querySelector("#sElement");
const speed = document.querySelector("input");
const output = document.querySelector(".output");

let scroller = true;

const content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe non maiores laborum veniam temporibus dolore cupiditate ad harum tempore impedit, at, adipisci id odio obcaecati corporis deserunt eaque, quisquam quibusdam! Quos inventore qui nesciunt laborum dolore cupiditate reiciendis commodi error sit! Qui fugit vitae aut, amet error quibusdam nesciunt corporis dignissimos mollitia quasi vero quod debitis esse at blanditiis. Natus, rerum nesciunt vitae sit dolores ducimus libero dolore! Consequatur, quos.";



/// ***************************************************************
window.onload = setupScroll;


/// ***************************************************************
button.addEventListener("click", function () {
  //console.log("clicked");
  scroller ^= true;
  button.innerText = !scroller ? "Start" : "Stop";
});

cElement.addEventListener("mouseenter", scrollSpeed);
cElement.addEventListener("mouseleave", scrollSpeed);




/// ***************************************************************
function scrollSpeed(e) {
  //console.log(e.type);
  scroller = (e.type == "mouseenter") ? false : true;
  output.innerHTML = "Mouse stopper";
};


function setupScroll() {
  sElement.innerHTML = content;
  let temp = sElement.getBoundingClientRect();
  cElement.style.height = (temp.height / 2) + "px";
  sElement.style.top = temp.height + "px";
  scrollInt = setInterval(scrollingEle, 50);
}


function scrollingEle() {
  let scrollSpeed = speed.value;

  if (scroller) {
    let posY = parseInt(sElement.style.top);
    if (posY + sElement.clientHeight > 0) {
      sElement.style.top = posY - scrollSpeed + "px";
    } else {
      sElement.style.top = cElement.clientHeight + "px";
    }
    output.innerHTML = "Scroll speed " + scrollSpeed + " Y position " + posY;
    output.style.margin = "20px";
  }
};

