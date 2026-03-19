function priceFunction() {
  let amount = prompt("Please enter the price of the item (ex:- $ 100.00)");
  // reomove $ and spaces
  amount = amount.replace("$", "").trim();
  // convert to number
  let newAmount = parseFloat(amount);
  // add discount
  let discountedPrice = newAmount - newAmount * 0.1;
  // controls decimal places
  document.getElementById("price").innerHTML =
    `Your New Price is ${discountedPrice.toFixed(2)}`;
}
