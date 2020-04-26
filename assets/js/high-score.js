// function stores score, recieving from local storage and compares//
function storeScore() {
	var highScore = JSON.parse(window.localStorage.getItem('highScore'));
	highScore.sort(function(a, b) {
		return a.score - b.score;
	});

	highScore.forEach(function(score) {
		var ulTag = document.createElement('ul');
		ulTag.textContent = score.initals + ' ' + score.score;
	});
}
//enter initals//
// enter initals and score into table
