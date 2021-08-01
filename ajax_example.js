var animal = document.getElementById("animal-info");
var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open(
    "GET",
    "https://learnwebcode.github.io/json-example/animals-1.json"
  );
  ourRequest.onload = function () {
    var ourData = JSON.parse(ourRequest.responseText);

    renderHTML(ourData);
  };
  ourRequest.send();
});
function renderHTML(data) {
  var a = "";
  for (i = 0; i < data.length; i++) {
    a += "<p>" + data[i].name + "," + data[i].species + "</p>";
  }
  animal.insertAdjacentHTML("beforeend", a);
}
