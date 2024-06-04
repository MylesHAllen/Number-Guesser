// Generates a random number between 0 and 100 (including 0 and 100).
function randomNum(){
    num = Math.floor(Math.random() * 100);
    return num
}

console.log(randomNum());

// Gets the users input.
document.getElementById("btn").onclick = function(){
    guess = document.getElementById("inpt").value;
    console.log(guess);
}

