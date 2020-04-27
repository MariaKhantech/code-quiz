//grab the highscore list element <ul>
const highScoreTable = document.querySelector('#highScoreTable');
//getting highscore list from local storage//
var highScore = JSON.parse(localStorage.getItem('highScore'));
var innerListContent = '';
var rank = 1;

if (highScore) {
	for (var i = 0; i < highScore.length; i++) {
		var trElement = document.createElement('tr');
		var tdRank = document.createElement('td');
		var tdName = document.createElement('td');
		var tdScore = document.createElement('td');

		tdRank.textContent = rank;
		tdName.textContent = highScore[i].name;
		tdScore.textContent = highScore[i].score;

		trElement.append(tdRank);
		trElement.append(tdName);
		trElement.append(tdScore);

		highScoreTable.append(trElement);
		rank++;
	}
}
