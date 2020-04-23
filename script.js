//variables
var count = 70;
var counter; //1000 will  run it every 1 second

var questionOne = {
	question: 'What primate is the most endangered?',
	choices: [ ':Orangutans', 'Gorillas', 'Lemurs', 'All Primates' ],
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
	answer: [ '75%', '20%', '43%', '86%' ],

	correctAnswer: '86%'
};

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

function startGame() {
	//start the timer
	counter = setInterval(timer, 1000);
	startBtn.classList.add('hide');
	//set the first question//
	document.querySelector('#question').innerHTML = questionOne.question;
	//unhide choices//
	choices.classList.remove('hide');
}
//Questions//
// var questions = [
// 		{
// 			question: 'What primate is the most endangered?',
// 			answer: [ ':Orangutans', 'Gorillas', 'Lemurs', 'All Primates' ],
// 			correctAnswer: 'All Primates'
// 		}
// 	],
// 	questions = [
// 		{
// 			question: 'Which zoo animal is endangered, that is a African artiodactyl mammal?',
// 			answer: [ 'Polar bear', 'Siberian tiger', 'Giraffe', 'Elephant' ],

// 			correctAnswer: 'Giraffe'
// 		}
// 	],
// 	questions = [
// 		{
// 			question:
// 				'All the animals in the Artic Tundra region are endangered due to its habitat, but which one of these animals is the closest to extincion in the Artic?',
// 			answer: [ 'Artic fox', 'Polar bear', 'Narwhal', 'Musk Ox' ],

// 			correctAnswer: 'Artic fox'
// 		}
// 	],
// 	questions = [
// 		{
// 			question: 'What is the percentage of large animals in the Sahara Desert going extinct?',
// 			answer: [ '75%', '20%', '43%', '86%' ],

// 			correctAnswer: '86%'
// 		}
// 	];

//Starts game//
// var timer;
// var game = {
// 	questions: questions,
// 	currentQuestions: 0,
// 	counter: countStart,
// 	correct: 0,
// 	incorrect: 0,

// 	count: function() {}
// };
