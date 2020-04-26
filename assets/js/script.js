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
	question:
		'All the animals in the Artic Tundra region are endangered due to its habitat, but which one of these animals is the closest to extincion in the Artic?',
	choices: [ 'Artic fox', 'Polar bear', 'Narwhal', 'Musk Ox' ],

	correctAnswer: 'Artic fox'
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
	if (count <= 0) {
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

	//If the answer is right + 25 to the score, and if the answer is wrong deduct 10 seconds and -10 points/
	if (choiceButton.textContent === questionObjectArray[questionPosition].correctAnswer) {
		score = score + 25;
	} else {
		score = score - 10;
		count = count - 10;
	}

	//Transition to the next question//
	questionPosition = questionPosition + 1;
	if (questionPosition === questionObjectArray.length) {
		endGame();
	} else {
		populateChoice(questionObjectArray[questionPosition]);
		document.querySelector('#question').innerHTML = questionObjectArray[questionPosition].question;
	}
}

function saveScore() {
	console.log('in svae score');
	var initials = document.querySelector('#scoreInitals').value;

	var nameScore = {
		name: initials,
		score: score
	};

	localStorage.setItem(scoresKey++, JSON.stringify(nameScore));

	//const store = JSON.parse(localStorage.getItem(0));
	//console.log(store);
}

function restartGame() {
	questionPosition = 0;
	count = 70;
}

$(document).ready(function() {
	$('.sidenav').sidenav();
});
