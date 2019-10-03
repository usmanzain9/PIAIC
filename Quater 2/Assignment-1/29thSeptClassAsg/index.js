var inp = prompt("Enter your Percentage");

if (inp >= 80) {
  alert("A+");
} else if (inp >= 70 && inp < 80) {
  alert("A");
}
if (inp >= 60 && inp < 70) {
  alert("A-");
} else if (inp >= 50 && inp < 60) {
  alert("B+");
}
if (inp >= 40 && inp < 50) {
  alert("C");
} else if (inp < 40) {
  alert("Fail");
}
