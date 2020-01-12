var colors = ["blue", "black", "purple"];

var add = promot("What color you want to add in the front of the array?");

colors.unshift(add);

/// SHOW THE ARRAY ON THE BROWSER

var add = promot("What color you want to add in the back of the array?");

colors.push(add);

/// SHOW THE ARRAY ON THE BROWSER
colors.unshift("pink");
colors.unshift("yellow");

/// SHOW THE ARRAY ON THE BROWSER

colors.shift();
/// SHOW THE ARRAY ON THE BROWSER

colors.pop();
/// SHOW THE ARRAY ON THE BROWSER

var index = promot("Which index you want to add the color?");
var add = promot("What color you want to add in the array?");

colors.slice(index, 0, add);
/// SHOW THE ARRAY ON THE BROWSER

var index = promot("Which index you want to delete the color?");
var num = promot("How many colors you want to remove?");

colors.splice(index, num);
