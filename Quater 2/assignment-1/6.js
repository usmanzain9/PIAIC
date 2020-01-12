var tmarks = prompt("Enter your total marks");
var omarks = prompt("Enter your obtained marks");
var inp = (omarks / tmarks) * 100;
var grade = "";
var remarks = "";

if (inp >= 80) {
  grade = "A+";
  remarks = "Excellent";
} else if (inp >= 70 && inp < 80) {
  grade = "A";
  remarks = "Good";
} else if (inp >= 60 && inp < 70) {
  grade = "B";
  remarks = "You need to improve";
} else {
  grade = "Fail";
  remarks = "Sorry";
}
document.getElementById("tmarks").innerHTML = tmarks;
document.getElementById("omarks").innerHTML = omarks;
document.getElementById("percentage").innerHTML = inp;
document.getElementById("grade").innerHTML = grade;
document.getElementById("remarks").innerHTML = remarks;
