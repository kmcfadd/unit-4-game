$(document).ready(function(){




var totalScore = "";
var wins = 0;
var losses = 0;


function randTotal(minimum, maximum) {
   return Math.floor((Math.random()*(maximum - minimum + 1) + minimum));
}

var targetNum = randTotal(19, 120);
console.log(targetNum)

var jewel1Val = randTotal(1, 12);
var jewel2Val = randTotal(1, 12);
var jewel3Val = randTotal(1, 12);
var jewel4Val = randTotal(1, 12);

function reset(){
    $("#totalScore").empty();
    targetNum = randTotal(19, 120);
    jewel1Val = randTotal(1, 12);
    jewel2Val = randTotal(1, 12);
    jewel3Val = randTotal(1, 12);
    jewel4Val = randTotal(1, 12);
}

$("#randomNum").text(randTotal(19,120))

$("#jewel1").click(function(){
    totalScore = +totalScore + +jewel1Val
    $("#totalScore").text(totalScore)
    console.log(jewel1Val)
})

$("#jewel2").click(function(){
    totalScore = +totalScore + +jewel2Val
    $("#totalScore").text(totalScore)
    console.log(jewel2Val)
})

$("#jewel3").click(function(){
    totalScore = +totalScore + jewel3Val
    $("#totalScore").text(totalScore)
    console.log(jewel3Val)
})

$("#jewel4").click(function(){
    totalScore = +totalScore + jewel4Val
    $("#totalScore").text(totalScore)
    console.log(jewel4Val)
})



var RealScore = parseInt(totalScore)

if (RealScore === targetNum) {
    wins++
    $("#Wins").text("Wins: " +wins)
    alert("You got a win! Good Job!")
    reset();
} else if (RealScore > targetNum) {
    losses++
    $("#Losses").text("Losses: " +losses)
    alert("You got a loss! Too bad!")
    reset();
} else {

}


}) 