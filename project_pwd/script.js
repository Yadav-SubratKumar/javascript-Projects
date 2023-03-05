const Upperset = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
const Lowerset = "abcdefghijklmnopqrstuvwxyz";
const Numbers = "0123456789";
const Symbols = "!@#$%^&*()";

// selectors
const pwdBox = document.getElementById("pwd");
const pwdLength = document.getElementById("pwd_len");
const UpperInput = document.getElementById("upper");
const LowerInput = document.getElementById("lower");
const SymbolInput = document.getElementById("symbols");
const NumberInput = document.getElementById("numbers");

const getRandomData = (dataset) => {
  return dataset[Math.floor(Math.random() * dataset.length)];
};

const passwordGenerator = (password = "") => {
  if (UpperInput.checked == true) {
    password += getRandomData(Upperset);
  }
  if (LowerInput.checked == true) {
    password += getRandomData(Lowerset);
  }
  if (SymbolInput.checked == true) {
    password += getRandomData(Symbols);
  }
  if (NumberInput.checked == true) {
    password += getRandomData(Numbers);
  }
  if (password.length < pwdLength.value) {
    return passwordGenerator(password);
  }
  pwdBox.value = trimPwd(password, pwdLength.value);
// console.log(trimPwd(password, pwdLength.value))
}

document.querySelector(".btn").addEventListener("click", function () {
  passwordGenerator();
});

function trimPwd(str, num) {
  if (str.length > num) {
    let substr = str.substring(0, num);
    return substr;
  } else {
    return str;
  }
}
