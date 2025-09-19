function compareValues() {
  let number1 = document.getElementById("numb1").value;
  let number2 = document.getElementById("numb2").value;
  let answer = parseInt(number1) + parseInt(number2);
  document.getElementById("result").innerText = "Result: " + answer;

  let final;
  if (answer > 10) {
    final = document.getElementById("result").style.color = "green";
  } else if (answer < 10) {
    final = document.getElementById("result").style.color = "red";
  }
}
