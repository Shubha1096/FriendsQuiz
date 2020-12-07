var readlineSync = require("readline-sync");

var score = 0;

var friend = readlineSync.question("What's your name? ");

console.log("Welcome "+ friend + "!  Lets see how well you knows me !");


function friedsnQuiz(question, answer) {
  var friendsanswer = readlineSync.question(question);

  if (friendsanswer === answer) {
    console.log( friendsanswer + " is correct");
    score = score + 2;
    
  } else {
    console.log( friendsanswer + " is wrong");
   
  }

  console.log("score is  ", score);
  console.log("-------------------------")
}

var questions = [{
  question: "1.Where shubham Works?",
		answer: "tcs",

}, {
  question: "2.What is shubham's favourite Food?",
	answer: "burger",
},{
  question: "3.What is shubham's Birthday month?",
		answer: "october",
},{
  question:"4.where Shubham Lives?",
		answer: "pune",
},{
  question:"5.which is shubham's current country of staying?",
		answer: "japan",
}];

for (var i=0; i<questions.length; i++) {
  var newQuestion = questions[i];
  friedsnQuiz(newQuestion.question, newQuestion.answer)
}

console.log("Hey " + friend + "!  you scored " + score );

if (score === "6"){

  console.log("You knows Shubham very Well !")
}else{
  console.log("You knows Shubham better !")
}