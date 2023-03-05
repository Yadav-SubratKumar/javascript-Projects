let string = "";
let buttons = document.querySelectorAll(".calc");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.toString().slice(0, -1);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "-/+") {
      string = -1 * string;
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "sqrt") {
      string = Math.sqrt(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "sqr") {
      string = string * string;
      document.querySelector("input").value = string;
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});
