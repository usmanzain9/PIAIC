var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];

let listContainer = document.getElementById("listContainer");

qualification.map(item => {
  let node = document.createElement("li");
  node.innerHTML = item;
  listContainer.appendChild(node);
});
