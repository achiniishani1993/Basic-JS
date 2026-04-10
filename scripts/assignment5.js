const account = {
     accountName:"Achini Ishani", 
     balance: 10000, 
     getBalance: function(){
     document.getElementById("atmOutPut").innerHTML = `Your balance is: ${this.balance}`;
     },
     
     deposit: function (){
        const amount = parseFloat(prompt("Enter your amount to deposit:"));

        if (isNaN (amount) || amount <= 0){
            this.accountError("Invalid amount");
        }else {
            this.balance += amount;
            document.getElementById("atmOutPut").innerHTML = `Deposit successful. New balance: ${this.balance}`;
        }
     },

     withdrawal: function (){
        const withdraw = parseFloat(prompt("Enter your amount you want to withdraw:"));

        if (isNaN(withdraw) || withdraw <= 0){
            this.accountError("Invalid withdrawal amount");
        }else if (this.balance = 0) {
           this.accountError("Your account not have enough money to withdraw")
        }else {
            this.balance -= withdraw;
            document.getElementById("atmOutPut").innerHTML = `Withdrawal successful. New balance: ${this.balance}`;
        }
        
     },

     getAccountName: function (){
        document.getElementById("atmOutPut").innerHTML = `Account Holder: ${this.accountName}`;
     },
    
    accountError: function (error){
     document.getElementById("atmOutPut").innerHTML = `Error: ${error}`;
    },

    exitAccount: function(){
         document.getElementById("atmOutPut").innerHTML = `Thank you for choosing us... Have a great day!`;
    }

    }