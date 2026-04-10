function guessNumberGame() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  let guess = 0;

  while (guess !== randomNumber) {
    let input = prompt("Guess a number between 1 and 10:");


    if (input === null) {
      alert("Game cancelled.");
      return; 
    }

    guess = Number(input);

    if (guess > randomNumber) {
      alert("Too high! Try again.");
    } else if (guess < randomNumber) {
      alert("Too low! Try again.");
    } else {
      alert("Correct! You guessed the number!");
    }
  }
}

/* Second exercise */

function generateRandomArray(){
     let input = prompt("Enter the array length (example: 5):");

     if (input === null) {
        document.getElementById("result").textContent = "Cancelled";
        return;
     }

     let length = Number(input);
     
     if (isNaN(length) || length <= 0){
         document.getElementById("result").textContent = "Invalid Number, Enter Valid Number";
        return;
     }
     const numbers = []

     for (let i = 0; i < length; i ++){
        numbers.push(Math.floor(Math.random()*100) + 1);
     }
     
     document.getElementById("result").textContent = "Array : " +  numbers;

}

/* Third Exercise */

function generateRandomArraySum(){
    let input = prompt("Enter the numbers you like (example: 10, 15, 20, 7, 8):");

    if (input === null){
         document.getElementById("output").textContent = "Cancelled";
        return;
    }

    let arr =input.split(",").map(num => Number(num.trim()));

    let sum = 0;

    for(let i=0; i < arr.length; i++){
        if (arr[i] %2 === 0){
            sum += arr[i];
        }
    }
   document.getElementById("output").textContent =
        "Sum of even numbers : " + sum;
}