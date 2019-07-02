    // triggers the function to run when the document finishes loading
$(document).ready(function(){

    // create variables to store base values
var totalScore = "";
var wins = 0;
var losses = 0;
var targetNum = "";

    // the function to generate a random number within any specific range
function randTotal(minimum, maximum) {
   return Math.floor((Math.random()*(maximum - minimum + 1) + minimum));
}

    // giving the variable for our "Random Number" a value using the function above
targetNum = randTotal(19, 120);
console.log(targetNum)
$("#randomNum").text(targetNum)

    // creating variables for each jewel respectively using the function above
var jewel1Val = randTotal(1, 12);
var jewel2Val = randTotal(1, 12);
var jewel3Val = randTotal(1, 12);
var jewel4Val = randTotal(1, 12);

    // creating a function to dump the values of jewels, random num, and your score after a game reaches its conclusion and reset
function reset(){
    totalScore = "";
    $("#totalScore").empty();
    jewel1Val = randTotal(1, 12);
    jewel2Val = randTotal(1, 12);
    jewel3Val = randTotal(1, 12);
    jewel4Val = randTotal(1, 12);
    targetNum = randTotal(19, 120);
   $("#randomNum").text(targetNum)
}
    // the compiled piles of messes that give each jewel a click function that tracks the score and will determine the game state
$("#jewel1").click(function(){
    totalScore = +totalScore + +jewel1Val
    var realScore = parseInt(totalScore)
    $("#totalScore").text(totalScore)
    // testing console purposes
    console.log("jewel 1 value is " +jewel1Val)
    console.log("total score is now " + totalScore)
    // game logic here
    if (realScore === targetNum) {
        wins++
        $("#Wins").text("Wins: " +wins)
        alert("You got a win! Good Job!")
        reset();
    } else if (realScore > targetNum) {
        losses++
        $("#Losses").text("Losses: " +losses)
        alert("You got a loss! Too bad!")
        reset();
    } else {
    
    }
})

$("#jewel2").click(function(){
    totalScore = +totalScore + +jewel2Val
    var realScore = parseInt(totalScore)
    $("#totalScore").text(totalScore)
    // console testing
    console.log("jewel 2 value is " +jewel2Val)
    console.log("total score is now " + totalScore)
    //game logic
    if (realScore === targetNum) {
        wins++
        $("#Wins").text("Wins: " +wins)
        alert("You got a win! Good Job!")
        reset();
    } else if (realScore > targetNum) {
        losses++
        $("#Losses").text("Losses: " +losses)
        alert("You got a loss! Too bad!")
        reset();
    } else {
    
    }
})

$("#jewel3").click(function(){
    totalScore = +totalScore + jewel3Val
    var realScore = parseInt(totalScore)
    $("#totalScore").text(totalScore)
    // console testing
    console.log("jewel 3 value is " +jewel3Val)
    console.log("total score is now " + totalScore)
    // game logic
    if (realScore === targetNum) {
        wins++
        $("#Wins").text("Wins: " +wins)
        alert("You got a win! Good Job!")
        reset();
    } else if (realScore > targetNum) {
        losses++
        $("#Losses").text("Losses: " +losses)
        alert("You got a loss! Too bad!")
        reset();
    } else {
    
    }
})

$("#jewel4").click(function(){
    totalScore = +totalScore + jewel4Val
    var realScore = parseInt(totalScore)
    $("#totalScore").text(totalScore)
    // console testing
    console.log("jewel 4 value is " + jewel4Val)
    console.log("total score is now " + totalScore)
    // game logic
    if (realScore === targetNum) {
        wins++
        $("#Wins").text("Wins: " +wins)
        alert("You got a win! Good Job!")
        reset();
    } else if (realScore > targetNum) {
        losses++
        $("#Losses").text("Losses: " +losses)
        alert("You got a loss! Too bad!")
        reset();
    } else {
    
    }
})

}) 