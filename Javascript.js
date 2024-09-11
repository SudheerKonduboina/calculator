

const display = document.getElementById("display");

function appendToDisplay(input){ // This function is to take the values
    display.value += input;
}

function clearDisplay(){    // This function is to clear the display
    display.value = "";
}

// to calculate the given numbers 
function calculate(){

    try{
        display.value = eval(display.value); // eval function to evaluate the answer
    }
    catch(error){
        display.value = "Error";  // if any arror occurs "Error" message will display
    }
}