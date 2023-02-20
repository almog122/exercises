
const makeErrorAlert = function( errorMassage ){

    const errorAlert = document.createElement("div");

    errorAlert.textContent = errorMassage;
    errorAlert.style.color = "red";

    document.getElementById("container").appendChild(errorAlert);
}

const validate = function(){
    let name = document.getElementById("name").value;
    let salary = document.getElementById("salary").value;
    let birthday = document.getElementById("birthday").value;
    let phoneNumber = document.getElementById("phone").value;

    if(name.length <= 2){
        makeErrorAlert("Name must be longer than 2 characters ")
    }

    if(10,000 < parseInt(salary) < 16,000 || salary == ""){
        makeErrorAlert("Salary must be greater than 10,000 but less than 16,000 ")
    }

    if(birthday === ""){
        makeErrorAlert("Birthday may not be null ")
    }

    if(phoneNumber.length == 10 || phoneNumber == ""){
        makeErrorAlert("Phone must be 10 digits long")
    }
    
}