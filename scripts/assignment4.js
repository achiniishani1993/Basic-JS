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

     const numbers = []

     for (let i = 0; i < length; i ++){
        numbers.push(Math.floor(Math.random()*100) + 1);
     }
     
     document.getElementById("result").textContent = "Array : " +  numbers;

}

