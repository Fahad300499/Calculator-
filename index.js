const calc-body = document.getElementById(calc-body); 

function appendToDisplay(input){
    calc-body.value += input;
}

function clearDisplay(){
calc-body.value = "";
}

function calculate(){
    try{
        calc-body.value = eval(calc-body.value);
    }
    catch(error){
        calc-body.value = "Error";
    }
}