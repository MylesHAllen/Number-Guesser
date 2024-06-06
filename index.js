// Generates a random number between 0 and 100 (including 0 and 100).
let num = Math.floor(Math.random() * 100);
console.log(num);

// Variables declared for use in function below
let myBtn = document.getElementById("btn")
let guess;
let tries = 0;

// Generates a message based on the users input as to how close they are to the number.
myBtn.onclick = function(){
    guess = document.getElementById("inpt").value;
    if (guess < num){
        document.getElementById("message").textContent = ("Your guess is too low, try again!")
        tries = tries + 1;
    }
    else if (guess > num){
        document.getElementById("message").textContent = ("Your guess is too high, try again!")
        tries = tries + 1;
    }
    else{
        document.getElementById("message").textContent = (`Well done you guessed right! It took you ${tries} tries.`)
    }
}

