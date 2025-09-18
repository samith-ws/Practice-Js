function addNumbers() {
  let numberOne = document.getElementById("num1");
  let getNumberOne = numberOne.value;
  let numberTwo = document.getElementById("num2");
  let getNumberTwo = numberTwo.value;
  let sum = parseInt(getNumberOne) + parseInt(getNumberTwo);
  document.getElementById("result").innerHTML = "Result: " + sum;
}
