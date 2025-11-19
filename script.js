function checkEligibility() {
  let age = parseInt(prompt("What is your age? "));
  let language = prompt("What programming language do you know");

  if (age >= 18 && language.toLowerCase() === "javascript") {
    alert("You're eligible to apply!\nWelcome, JavaScript Developer!")
  } else if (age < 18) {
    alert("You must be at least 18.")
  } else if (language.toLowerCase() != "javascript") {
    alert("We are only hiring JavaScript developers at the moment.")
  }
}