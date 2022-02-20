const userInput = document.querySelector("#userInput");
const ulList = document.querySelector(".offset-sm-2");
const enter = document.querySelector("#enter");

function build() {
  if (userInput.value != "") {
    const addLi = document.createElement("li");
    addLi.innerText = userInput.value;
    ulList.appendChild(addLi);
    userInput.value = "";

    addLi.addEventListener("click", function (event) {
      event.target.classList.toggle("done");
    });

    const x = document.createElement("button");
    x.innerText = "x";
    addLi.appendChild(x);

    x.addEventListener('click', function(event) {
        addLi.remove()
    })
  }
}

userInput.focus()

enter.addEventListener("click", build);
document.addEventListener('keypress', function(event) {
    if(event.key == 'Enter') {
        build()
    }
})
