var vnd = document.querySelector("#vnd");
var usd = document.querySelector("#usd");
var cny = document.querySelector("#cny");

// Cách 1

// vnd.addEventListener("input", function (event) {
//   var value = event.target.value;

//   usd.value = (value * 0.000044).toFixed(2);
//   cny.value = (value * 0.00028).toFixed(2);
// });

// usd.addEventListener("input", function (event) {
//   var value = event.target.value;

//   vnd.value = (value / 0.000044).toFixed(2);
//   cny.value = (value * 6.45).toFixed(2);
// });

// cny.addEventListener("input", function (event) {
//   var value = event.target.value;

//   vnd.value = (value / 0.00028).toFixed(2);
//   usd.value = (value * 6.45).toFixed(2);
// });

// Cách 2: Delegation

var container = document.querySelector(".container");
console.log(container);

container.addEventListener("input", function (event) {
  var target = event.target;

  var value = event.target.value;
  var id = target.id;

  switch (id) {
    case "vnd":
      usd.value = Math.abs((value * 0.000044).toFixed(2));
      cny.value = Math.abs((value * 0.00028).toFixed(2));
      break;

    case "usd":
      vnd.value = Math.abs((value / 0.000044).toFixed(2));
      cny.value = Math.abs((value * 6.45).toFixed(2));
      break;

    case "cny":
      vnd.value = Math.abs((value / 0.00028).toFixed(2));
      usd.value = Math.abs((value * 6.45).toFixed(2));
      break;
  }
});
