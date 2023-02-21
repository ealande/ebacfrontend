
const form = document.getElementById("javaForm");

form.addEventListener("submit", function(e){
    e.preventDefault()
    let firstNumber = document.getElementById("firstNumber");
    let secondNumber = document.getElementById("secondNumber");
    if (firstNumber.value > secondNumber.value){
        alert("The number B must be greater than number A, correct this information to proceed.")
    }else {
        alert("The number B is greater than number A, you can proceed!")
    }

})