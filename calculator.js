let buttons = document.querySelectorAll(".button");
let string = "";
const currentDisplay = document.querySelector("#display");
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML === "AC") {
            string = " ";
            currentDisplay.value = string;
        } else if (e.target.innerHTML === "CE") {
            string = string.slice(0, -1);
            currentDisplay.value = string;
        } else if (e.target.innerHTML === "%") {
            string = currentDisplay.value / 100;
            currentDisplay.value = string;
        }
        else if (e.target.innerHTML === '=') {
            string = eval(string);
            currentDisplay.value = string;
        } else {
            // console.log(e.target);
            string = string + e.target.innerHTML;
            currentDisplay.value = string;
        }

    })
})


