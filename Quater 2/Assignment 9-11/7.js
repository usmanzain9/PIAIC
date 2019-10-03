let random = Math.random() * 100;
let guess = prompt("Enter a number");

if (guess === random) alert("Bingo! Correct answer");
else if (guess + 1 === random) alert("Close enough to the correct answer");
else alert("Wrong");
