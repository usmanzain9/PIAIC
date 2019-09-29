window.localStorage.setItem("visits", "0");
let num = localStorage.getItem("visits");
alert("You have visited this website " + num + " time");
num++;
localStorage.setItem("visits", num);

console.log("connected");
