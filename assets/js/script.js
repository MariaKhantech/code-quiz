const choice1 = document.querySelector('#choice1');
const choice2 = document.querySelector('#choice2');
const choice3 = document.querySelector('#choice3');
const choice4 = document.querySelector('#choice4');
//checks value of answer//
const check1 = document.getElementById('check1');
const check2 = document.getElementById('check2');
const check3 = document.getElementById('check3');
const check4 = document.getElementById('check4');

var score = 0;

//variables for questions//
var count = 70;
var counter;

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

var questionObjectArray = [ questionOne, questionTwo, questionThree, questionFour ];

//functions
function timer() {
	count = count - 1;
	if (count <= 0) {
		clearInterval(counter);
		//counter ended, do something here
		return;
	}
	document.querySelector('#timer').innerHTML = count + ' secs';
}

// startGame();

function startGame() {
	//start the timer
	counter = setInterval(timer, 1000);
	startBtn.classList.add('hide');
	//set the first question//
	document.querySelector('#question').innerHTML = questionOne.question;
	//unhide choices//
	choices.classList.remove('hide');

	populateChoice(questionOne);
	// populate Choice(questionTwo);
}

//populates choices//
function populateChoice(question) {
	choice1.innerHTML = question.choices[0];
	choice2.innerHTML = question.choices[1];
	choice3.innerHTML = question.choices[2];
	choice4.innerHTML = question.choices[3];

	checkAnswers(question);
	// checkAnswers(question);
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
