const choice1 = document.querySelector('#choice1');
const choice2 = document.querySelector('#choice2');
const choice3 = document.querySelector('#choice3');
const choice4 = document.querySelector('#choice4');

//for saving scores
scores = [];
scoresKey = 0;

//Holds score//
var score = 0;

//Timer variable//
var count = 70;
var counter;

//Objects that hold questions, choices and answers//
var questionOne = {
	question: 'What primate is the most endangered?',
	choices: [ 'Orangutans', 'Gorillas', 'Lemurs', 'All Primates' ],
	correctAnswer: 'All Primates'
};
var questionTwo = {
	question: 'Which zoo animal is endangered, that is a African artiodactyl mammal?',
	choices: [ 'Polar bear', 'Siberian tiger', 'Giraffe', 'Elephant' ],

	correctAnswer: 'Giraffe'
};

var questionThree = {
	question: 'How many Siberian tigers left in the world?',
	choices: [ '3,900', '100', '5,000', '8,000' ],

	correctAnswer: '3,900'
};

var questionFour = {
	question: 'What is the percentage of large animals in the Sahara Desert going extinct?',
	choices: [ '75%', '20%', '43%', '86%' ],

	correctAnswer: '86%'
};

//Array to call my questions//
var questionObjectArray = [ questionOne, questionTwo, questionThree, questionFour ];
var questionPosition = 0;

//Timer function//
function timer() {
	count = count - 1;
	if (count < 0) {
		clearInterval(counter);
		//counter ended
		endGame(true);
		return;
	}
	document.querySelector('#timer').innerHTML = count + ' secs';
}

//Starts the Quiz game//
function startGame() {
	//start the timer
	counter = setInterval(timer, 1000);
	//adds class hide to div for button//
	startBtn.classList.add('hide');
	//set the first question//
	document.querySelector('#question').innerHTML = questionObjectArray[questionPosition].question;
	//unhide choices buttons//
	choices.classList.remove('hide');

	//Calling the function populate choice and passing in question one//
	populateChoice(questionObjectArray[questionPosition]);
}

//End game function//
function endGame(timeIsUp) {
	if (timeIsUp) {
		choices.classList.add('hide');
		inputForm.classList.remove('hide');
		document.querySelector('#question').innerHTML = 'GAME OVER! Score: ' + score;
	} else {
		choices.classList.add('hide');
		inputForm.classList.remove('hide');
		document.querySelector('#question').innerHTML = 'YOU WIN! Score: ' + score;
		clearInterval(counter);
	}
}

//Populate choice passes in a question object (aQuestion) so we can load choices to HTML//
function populateChoice(aQuestion) {
	console.log(aQuestion);
	choice1.innerHTML = aQuestion.choices[0];
	choice2.innerHTML = aQuestion.choices[1];
	choice3.innerHTML = aQuestion.choices[2];
	choice4.innerHTML = aQuestion.choices[3];
}

function checkAnswer() {
	console.log('onclick worked');
	var choiceButtonId = event.srcElement.id;
	var choiceButton = document.getElementById(choiceButtonId);

	//If the answer is right + 25 to the score, and if the answer is wrong deduct 15 seconds and -10 points/
	if (choiceButton.textContent === questionObjectArray[questionPosition].correctAnswer) {
		score = score + 25;
		validateAnswer('Correct!');
		playSound('/assets/sounds/yes-correct.mp3');
	} else {
		score = score - 10;
		count = count - 15;
		validateAnswer('Incorrect!');
		playSound('/assets/sounds/no-incorrect.mp3');
	}

	//Transition to the next question//
	questionPosition = questionPosition + 1;
	if (questionPosition === questionObjectArray.length) {
		//allow 2 seconds to show correct/incorrect before ending the game
		setTimeout(function() {
			endGame();
		}, 1500);
	} else {
		populateChoice(questionObjectArray[questionPosition]);
		document.querySelector('#question').innerHTML = questionObjectArray[questionPosition].question;
	}
}

function saveScore() {
	var initials = document.querySelector('#scoreInitals').value;

	//if the initials is empty exot the function
	if (initials === '') {
		alert('Please enter your initals for scoring.');
		return;
	}

	//Initialzing the high score array if not in local storage//
	if (JSON.parse(localStorage.getItem('highScore'))) {
		var highscoreArray = JSON.parse(localStorage.getItem('highScore'));
	} else {
		var highscoreArray = [];
	}
	//Object that holds data for name and score//
	var nameScore = {
		name: initials,
		score: score
	};
	// Putting namescore object into the highscore array//
	highscoreArray.push(nameScore);
	//sorting array by highest score//
	highscoreArray.sort(function(a, b) {
		return b.score - a.score;
	});
	localStorage.setItem('highScore', JSON.stringify(highscoreArray));
	restartGame();
}

//resets the game back to the begining//
function restartGame() {
	//setting question position back to zero and setting timer back to 70 seconds//
	questionPosition = 0;
	count = 70;
	//brings back start game screen//
	document.querySelector('#question').innerHTML = 'Think you know your animal?<br> Take this quiz!';
	startBtn.classList.remove('hide');
	inputForm.classList.add('hide');
}

//Sends a message if answer is correct or incorrect//
function validateAnswer(msg) {
	validateanswer.classList.remove('hide');
	document.querySelector('#validateanswer').innerHTML = '<hr>' + msg;
	//Puts validate answer back into hide//
	setTimeout(function() {
		validateanswer.classList.add('hide');
	}, 1500);
}
//sets volume for yes and nos//
function playSound(audioFile) {
	var playSound = new Audio(audioFile);
	playSound.volume = 0.6;
	playSound.play();
}
//sets the lvl of background music//
document.querySelector('#audiolvl').volume = 0.2;

$(document).ready(function() {
	$('.sidenav').sidenav();
});
