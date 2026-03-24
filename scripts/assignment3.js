function isValidPassword(password , username){
    if (password.length < 8) return false;
    if (password.includes(" ")) return false;
    if (password.includes(username)) return false;

    return true;
}

function formSubmit(e){
    e.preventDefault();
    
    let username = document.getElementById("exampleInputName").value;
    let password = document.getElementById("exampleInputPassword1").value;

    if (isValidPassword(password,username)){
        alert ("password is valid");
    }else {
        alert ("Invaild Password");
    }
}