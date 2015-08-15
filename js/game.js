var Question = function (answer, question,message) {
  this.guess = 0;
  this.answer = answer;
  this.question = question;
  this.message = message;
  // this.play = true;

this.run = function(){
this.guess = prompt(question);
addToGuessList(this.guess);
this.guess = parseInt(this.guess);

while(this.guess != this.answer) {
  if(this.guess > 10) {
    alert('Nice try! Try again with a number between 5 and 9');
    this.guess = prompt('Here we go - enter a new guess');
    addToGuessList(this.guess);
 } else if (this.guess < 5) {
  alert ('Nice try but pick a larger number');
   this.guess = prompt('Guess again');
   addToGuessList(this.guess);
 }
 else {
    alert('Incorrect. Try again');
    this.guess = prompt('Your last guess was ' + this.guess);
    addToGuessList(this.guess);
  }
}
if (this.guess == this.answer) {
  alert(this.message);
}
};
}

var addToGuessList = function (x) {
  var guessListItem = document.createElement('li');
  var guessNode = document.createTextNode(x);
  guessListItem.appendChild(guessNode);
  document.getElementById('guess-list').appendChild(guessListItem);
}

var mindRead = new Question (5, 'In My Minds Eye, How Many Eagles do I see? Enter a number', 'You are correct!');

var fingerMind = new Question (6, 'How many fingers am I holding up', 'You are correct');




mindRead.run();

fingerMind.run();
