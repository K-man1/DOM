/*Step 1: Take user input and set that input to the variable "UserInput"
Step 2: If UserInput was rock, set user input to 1. If UserInput was paper, set UserInput to 2. If UserInput was scissors, set UserInput to 3.
Step 3: Generate a random number 1 thorugh 3 and set value to CompInput.
Step 4: Make an if statment stating that if UserInpt = CompInput, print "You Tied!" and dont give anyone points.
Step 5: Make 3 if statements for user winning. If userInput == 1 and compInput == 3, userInput == 2 and compInput == 1, userInput == 3 and compInput == 2.
Step 6: Set any other cases to computer winning and give computer a point.
Functionalities:
Generating computer input
Comparing between user and computer inputs
changing the score 
ending the game 
*/



const container = document.getElementById("container")
const options = document.getElementById("options")
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const reset = document.getElementById("reset")
const subheading = document.getElementById("subheading")
let userPoints = document.getElementById("userPoints")
let compPoints = document.getElementById("compPoints")
let paragraph = document.createElement("p")
const win = document.createTextNode("You won!")
const tie = document.createTextNode("Tied!")
const loss = document.createTextNode("You lost...")
const end = document.createTextNode("Click a button")
let numOfCompWins = 0
let numOfUserWins = 0


// Alpha Version
function compInput() {
    const option = ["rock", "paper", "scissors"]
    let random = Math.floor(Math.random() * 3)
    return option[random]
}




function resultGenerator(userInput, compInput) {
    if (userInput == compInput) {
        paragraph.appendChild(tie)
        container.appendChild(paragraph)
    } else if (
        (userInput == "rock" && compInput == "scissors") ||
        (userInput == "paper" && compInput == "rock") ||
        (userInput == "scissors" && compInput == "paper")) {
        numOfUserWins++
        userPoints.textContent = numOfUserWins;
        paragraph.appendChild(win)
        container.appendChild(paragraph)

        if (numOfUserWins == 5) {
            options.style.display = "none"
            subheading.textContent = "You won! 🥳"
            subheading.style.color = "green"
            reset.style.display = "block"

            confettis.style.visibility = 'visible';


        }
    } else {
        numOfCompWins++
        compPoints.textContent = numOfCompWins;
        paragraph.appendChild(loss)
        container.appendChild(paragraph)
    }

    if (numOfCompWins == 5) {
        options.style.display = "none"
        subheading.textContent = "You lost! 😢"
        subheading.style.color = "maroon"
        reset.style.display = "block"
    }
}
reset.addEventListener("click", function() {
    numOfUserWins = 0
    numOfCompWins = 0
    compPoints.textContent = numOfCompWins;
    userPoints.textContent = numOfUserWins;
    paragraph.textContent = "";
    options.style.display = "flex"
    subheading.textContent = "Pick a button! 👇"
    subheading.style.color = "black"
    reset.style.display = "none"
    confettis.style.visibility = 'hidden';

})

rock.addEventListener('click', function() {
    paragraph.textContent = "";
    x = compInput()
    resultGenerator("rock", x)
})
paper.addEventListener('click', function() {
    paragraph.textContent = "";
    x = compInput()
    resultGenerator("paper", x)
})
scissors.addEventListener('click', function() {
    paragraph.textContent = "";
    x = compInput()
    resultGenerator("scissors", x)
})


var confettiSettings = {
    target: 'my-canvas'
};
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();
let confettis = document.querySelector("#my-canvas")




// Legacy Version


//function round () {

// rock.addEventListener('click',function() {
//     x = compInput()
//     console.log(x)
//     if (x == "rock"){
//     paragraph.appendChild(tie)
//     container.appendChild(paragraph)}

//     else if (x == "paper"){
//         numOfCompWins++
//     compPoints.textContent = numOfCompWins;
//     paragraph.appendChild(loss)
//     container.appendChild(paragraph)}


//     else if (x == "scissors"){
//         numOfUserWins++
//     userPoints.textContent = numOfUserWins;
//     paragraph.appendChild(win)
//     container.appendChild(paragraph)}

// })

// paper.addEventListener('click',function() {
//     x = compInput()
//     console.log(x)
//     if (x == "rock"){
//     numOfUserWins++
//     userPoints.textContent = numOfUserWins;
//     paragraph.appendChild(win)
//     container.appendChild(paragraph)}

//     else if (x == "paper"){
//     paragraph.appendChild(tie)
//     container.appendChild(paragraph)}

//     else if (x == "scissors"){
//         numOfCompWins++
//     compPoints.textContent = numOfCompWins;
//     paragraph.appendChild(loss)
//     container.appendChild(paragraph)}
// })

// scissors.addEventListener('click',function() {
//     x = compInput()
//     console.log(x)
//     if (x == "rock"){
//         numOfCompWins++
//     compPoints.textContent = numOfCompWins;
//     paragraph.appendChild(loss)
//     container.appendChild(paragraph)}

//     if (x == "paper"){
//     numOfUserWins++
//     userPoints.textContent = numOfUserWins;
//     paragraph.appendChild(win)
//     container.appendChild(paragraph)}

//     if (x == "scissors"){
//     paragraph.appendChild(tie)
//     container.appendChild(paragraph)}


// })}