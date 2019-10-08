let input = prompt("Enter a letter or a number");

if (input >= 0 && input <= 10) alert("It is a number");
else if (input >= 65 && input <= 90) alert("It is a uppercase letter");
else if (input >= 97 && input <= 122) alert("It is a lowercase letter");
