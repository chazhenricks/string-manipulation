var textInput = document.getElementById("input-text");
var buttonClick = document.getElementById("input-button");
var inputHere = document.getElementById("put-here");
var wrapper = document.getElementById("wrapper");
var testString = "";
var hasNumber = /\d/;

function reversal(string) {

    inputHere.innerHTML = `<div> ${string} spelled backwards is ${string.split("").reverse().join("")} </div>`;
}

function alphabits(string) {
    inputHere.innerHTML += `<div> ${string} in alphabetical order is ${string.split("").sort().join("")} </div>`;

}

function palindrome(string) {
    if(string === string.split("").reverse().join("")){
        inputHere.innerHTML += `<div>${string} is a palindrome</div>`;
    }else {
        inputHere.innerHTML += `<div>${string} is not a palindrome</div>`;
    }

}


buttonClick.addEventListener("click", function(){
    testString = textInput.value;
    if (hasNumber.test(testString)){
        alert("Please do not enter numbers");
    }else if (testString === ""){
        alert("Please enter something that is not a number");
    }else{
    reversal(testString);
    alphabits(testString);
    palindrome(testString);
    }
});

wrapper.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        testString = textInput.value;
        if (hasNumber.test(testString)){
        alert("Please do not enter numbers");
        }else if(testString === ""){
            alert("Please enter something that is not a number");
        }else{
            reversal(testString);
            alphabits(testString);
            palindrome(testString);
        }
    }
});
