// set price value using Event Bubble

document.getElementById("parent").addEventListener("click", function (event) {
  if (event.target.innerText.includes("memory")) {
    document.getElementById("memory-price").innerText = event.target.value;
  }
  if (event.target.innerText.includes("storage")) {
    document.getElementById("storage-price").innerText = event.target.value;
  }
  if (event.target.innerText.includes("delivery")) {
    document.getElementById("delivery-price").innerText = event.target.value;
  }
  calculate();
});

//                 total price calculation

function calculate() {
  document.getElementById("total").innerText = document.getElementById(
    "total-price"
  ).innerText =
    1299 +
    parseInt(document.getElementById("memory-price").innerText) +
    parseInt(document.getElementById("storage-price").innerText) +
    parseInt(document.getElementById("delivery-price").innerText);
}
///             promo code 20% calculation
function promo(value) {
  if (document.getElementById("promo-code").value.toLowerCase() == value) {
    document.getElementById("total").innerText =
      parseFloat(document.getElementById("total-price").innerText) -
      parseFloat(document.getElementById("total-price").innerText) * 0.2;
    document.getElementById("promo-code").value = "";
  }
}
