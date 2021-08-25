var readlineSync = require('readline-sync');
const chalk = require('chalk');

var score = 0;
var userName = readlineSync.question(chalk.green("May i have your name? "));

console.log(chalk.blue("Welcome " + userName + " to Avengers Quiz!"))

var questions = [{
  question:`Who is Jon Snow’s mother?
             a: lysa arryn  
             b: cersei lannister
             c: lyanna stark\n`,
  answer:"c"
},{
  question:` Jamie Lannister has a golden ___.

             a: hand  
             b: tongue
             c: sword\n`,
  answer:"a"
},{
  question:` valar morghulis means?
             a: "all men must serve"
             b: “all men must die”\n`
             ,
  answer:"b"
},{
  question:` Besides dragonglass, what is the only other substance capable of defeating White Walkers?
             a: wildfire
             b: snowballs
             c: valyrian steel\n`,
  answer:"c"
},{
  question:` Which of these characters has dragons?
             a: jon snow
             b: ned stark
             c: daenerys targaryen\n`,
  answer:"c"
},];



function play(question, answer){

  var userAnswer = readlineSync.question(question);

  if(userAnswer===answer){
    console.log(chalk.green.bold("Right!"))
    score = score + 1;
    console.log(chalk.blue.bold("Current Score: " + score))
  }else {
    console.log(chalk.red.bold("Wrong!"))
    score = score ;
    console.log(chalk.blue.bold("Current Score: " + score))
  }
}


for(var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

if(score>3){
  console.log(chalk.blue.bold("you did good!"))
}else {
  console.log(chalk.blue.bold("go watch it again! "))
}
console.log(chalk.red.bold("Final Score: " + score))
