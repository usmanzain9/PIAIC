var tmarks = prompt("Enter your total marks");
var omarks = prompt("Enter your obtained marks");
var inp = omarks / tmarks;
inp *= 100;
var grade = "";
var remarks = "";

if (inp >= 80) {
  alert("A+ Excellent");
  grade = "A+";
  remarks = "Excellent";
} else if (inp >= 70 && inp < 80) {
  grade = "A";
  remarks = "Good";
}
if (inp >= 60 && inp < 70) {
  grade = "B";
  remarks = "You need to improve";
} else {
  grade = "Fail";
  remarks = "Sorry";
}

document.getElementById("tmarks").innerHTML = tmarks;
document.getElementById("omarks").innerHTML = omarks;
document.getElementById("percentage").innerHTML = inp.toString();
document.getElementById("grade").innerHTML = tmarks;
document.getElementById("remarks").innerHTML = tmarks;
