document.addEventListener("DOMContentLoaded", function () {
  let Btn = document.createElement("Button");
  let BtnText = document.createTextNode("Add Square");
  Btn.appendChild(BtnText);
  document.body.appendChild(Btn);
  let divContainer = document.createElement("div");
  document.body.appendChild(divContainer);
  divContainer.classList.add("divContainer");

  let idCounter = 0;

  Btn.addEventListener("click", function () {
    let newDiv = document.createElement("div");
    idCounter++;

    newDiv.classList.add("divs");
    newDiv.id = idCounter;

    newDiv.addEventListener("mouseover", Over);
    newDiv.addEventListener("mouseout", Out);
    newDiv.addEventListener("click", changeColor);
    newDiv.addEventListener("dblclick", removeSquare);
    function removeSquare() {
      let array = document.getElementsByClassName("divs");
      let next = newDiv.nextSibling;
      let prev = newDiv.previousSibling;
      if (isEven(newDiv.id)) {
        if (!newDiv.nextSibling) {
          // If there is no square after the one being clicked
          alert("There is no square to remove!");
        } else {
          divContainer.removeChild(next);
        }
      } else {
        if (prev < 1) {
          // If there is no square before the one being clicked
          alert("There is no square to remove!");
        } else {
          divContainer.removeChild(prev);
        }
      }
    }
    divContainer.appendChild(newDiv);
  });

  function Over() {
    let div = document.getElementById(this.id);
    div.innerText = this.id;
  }

  function Out() {
    let div = document.getElementById(this.id);
    div.innerText = "";
  }

  let colors = [
    "red",
    "black",
    "blue",
    "purple",
    "grey",
    "pink",
    "green",
    "darkgrey",
  ];

  function changeColor() {
    let num = Math.floor(Math.random() * colors.length);
    let div = document.getElementById(this.id);
    div.style.backgroundColor = colors[num];
  }

  function isEven(num) {
    return num % 2 == 0;
  }
});
