const chalk = require('chalk');
var readlineSync = require('readline-sync');
var score =0;
var highScores =[{
  name :"jyoti",
  score :10
}]
function welcome(){
var userName = readlineSync.question(chalk.yellow.bold('What is your name ?'));
console.log(chalk.cyanBright.italic("welcome "+userName+" To Do You Know shaktiman Challeng"));
}
var questions =[{
question :
`Who played Shaktiman's role?
 a.Mukesh Khanna             
 b.Rakesh Khanna             
 c.Rajesh Khanna\n`,
answere :"a"
},
{
  
  question :
`What was the full name of Gangadhar Rao?
 a.Pandit Gangadhar Omkarnath Shastri
 b.Pandit Gangadhar  Mayadhar Omkarnath Shastri
 c.Pandit Gangadhar Vidhyadhar Mayadhar Omkarnath Shastri\n`,
answere :"c"
  
},
{
question :
`Gangadhar is a ?
 a.Writer
 b.Poet
 c.photographer\n`,
answere :"c"
},{
  question :
`Who is  a main villan of Shaktiman?
 a.Dr. Jackal
 b.Tamraj Kilvish
 c.Sahab\n`,
answere :"b"
},{
  question :
`Geeta Vishwas is a ?
 a.photographer
 b.News reporte
 c.Actore\n`,
answere :"b"
},{
  question :
`Geeta Vishwas was in love with?
 a.Gangadhar
 b.Dr. Jackal
 c.Shaktiman\n`,
answere :"c"
},{
  question :
`Shaktiman had attained superhuman powers through ?
 a.invention
 b.Meditation
 c.By Accident\n`,
answere :"b"
},{
 question :
`Kilvish's trademark quote is?
 a.Ahinsa Kaayam Rahe
 b.Apradh Kaayam Rahe
 c.Andhera Kaayam Rahe\n`,
answere :"c"
},{
 question :
`Shaktimaan has superhuman powers that lie in?
 a.In shakti punj
 b.Inside his body
 c.In Gangadhar \n`,
answere :"b"
},{
 question :
`How many chakras in his body which give him powers ?
 `,
answere :"7"
}];
function play(question,answere){
  var userAns = readlineSync.question(chalk.blue.bold(question));
  if(userAns === answere){
    console.log(chalk.green.bold("Yes! U Were Right"));
       score =score+1;
    console.log(chalk.yellow.bold("Your Score Is "+score) );
  }else{
    console.log (chalk.redBright.bold("opps! U Were Wrong")
        ) ;
           console.log (chalk.red.dim("The Right Ans Is "+answere) )
    score =score-1;
    console.log (chalk.yellow.bold("Your Score Is "+score) );
 }
 console.log("************************");
}
function show(){
  for(var i=0;i<questions.length;i++){
    var currentQuestions = questions[i];
    play(currentQuestions.question,currentQuestions.answere);
  }
}
function showScore(){
  console.log (chalk.yellow.bold("Your total score is "+score));
  console.log (chalk.greenBright.bold("If u have beaten the highscore send me a screen shot i will update here"));

}
function showHighScor(){
   for(var i=0;i<highScores.length;i++){
  var currentScores =highScores[i];
  console.log (chalk.yellow.bold(currentScores.name+" : "+currentScores.score) );
}
}
welcome();
show();
showScore();
showHighScor();
