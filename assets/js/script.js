const choice1 = document.querySelector('#choice1');
const choice2 = document.querySelector('#choice2');
const choice3 = document.querySelector('#choice3');
const choice4 = document.querySelector('#choice4');

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
		//counter ended, do something here
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
	var choiceButton = event.srcElement.id;
	console.log(radioButtton);
}
// //checks if answers are correct//
// function checkAnswers(question) {
// 	console.log('checked');
// 	var correctAnswer = question.correctAnswer;
// 	if (check1.checked && correctAnswer === check1.value) {
// 		console.log('checked');
// 		score += 10;
// 	} else if (check2.checked) {
// 		console.log('checked');
// 		score += 10;
// 	} else if (check3.checked) {
// 		score += 10;
// 	} else if (check4.checked) {
// 		score += 10;
// 	} else {
// 		score -= 10;
// 	}
// }
//checks if answers are correct//
