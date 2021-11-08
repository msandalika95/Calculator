let userInput = document.getElementById("calculate");

function btnClick(input){
    let input1 = userInput.value;
    let input2 = input1 + "" + input;
    userInput.value = input2;
}

function getAnswer(){ 
    let ans = userInput.value;
    let output = eval(ans);
    // let output = `${ans}`;
    userInput.value = output;  
}

function clearAnswer(){
    userInput.value = "";
}