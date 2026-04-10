const account = {
  accountName: "Achini Ishani",
  balance: 10000,

  getBalance: function () {
    document.getElementById("atmOutPut").innerHTML =
      `Your balance is SEK: ${this.balance}`;
  },

  deposit: function () {
    const amount = parseFloat(prompt("Enter your amount to deposit:"));

    if (isNaN(amount) || amount <= 0) {
      this.accountError("Invalid amount");
    } else {
      this.balance += amount;
      document.getElementById("atmOutPut").innerHTML =
        `Deposit successful. New balance SEK: ${this.balance}`;
    }
  },

  withdrawal: function () {
    const withdraw = parseFloat(
      prompt("Enter your amount you want to withdraw:"),
    );

    if (isNaN(withdraw) || withdraw <= 0) {
      this.accountError("Invalid withdrawal amount");
    } else if (withdraw > this.balance) {
      this.accountError("Your account not have enough money to withdraw");
    } else {
      this.balance -= withdraw;
      document.getElementById("atmOutPut").innerHTML =
        `Withdrawal successful. New balance SEK: ${this.balance}`;
    }
  },

  getAccountName: function () {
    document.getElementById("atmOutPut").innerHTML =
      `Account Holder: ${this.accountName}`;
  },

  accountError: function (error) {
    const output = document.getElementById("atmOutPut");
    output.style.color = "red";
    output.innerHTML = `Getting Error: ${error}`;
  },

  exitAccount: function () {
    document.getElementById("atmOutPut").innerHTML =
      `Thank you for choosing us... Have a great day!`;
  },
};

function atm(event) {
  event.preventDefault();
  const choice = parseInt(
    prompt(
      "Select a choice:\n1) See balance\n2) Deposit\n3) Withdraw\n4) Get account name\n5) Exit",
    ),
  );

  switch (choice) {
    case 1:
      account.getBalance();
      break;
    case 2:
      account.deposit();
      break;
    case 3:
      account.withdrawal();
      break;
    case 4:
      account.getAccountName();
      break;
    case 5:
      account.exitAccount();
      break;
    default:
      account.accountError("Invalid choice. Try again");
  }
}
