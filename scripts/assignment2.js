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

// additional exercise 
function discountFunction(){
    let amount = prompt ("Please enter the price of the item (ex:- $ 100.00)");
    amount = amount.replace("$", " ").trim();
    let newAmount = parseFloat(amount);

    let discount = prompt ("Enter discount percentage (ex:10%):");
    discount = discount.replace("%", " ").trim();
    let newDiscount= parseFloat(discount);

    let discountAmount = newAmount * (newDiscount/100);
    
    let priceAmount = newAmount - discountAmount; 

    document.getElementById("discount").innerHTML = 
    `Original Price: ${newAmount.toFixed(2)} <br>
     Discount : ${newDiscount}% <br>
     You save : ${discountAmount.toFixed(2)} <br>
     Your New Price is : ${priceAmount.toFixed(2)}`;

}