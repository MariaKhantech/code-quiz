console.log('is this working');
//grab the highscore list element <ul>
const highScoreList = document.querySelector('#highScoreList');
//getting highscore list from local storage//
var highScore = JSON.parse(localStorage.getItem('highScore'));
var innerListContent = '';
var rank = 1;

for (var i = 0; i < highScore.length; i++) {
	var liTag = document.createElement('li');
	liTag.textContent = rank + '. ' + highScore[i].name + ' ' + highScore[i].score;
	//innerListContent = innerListContent + append.textContent;
	highScoreList.append(liTag);
	rank = rank + 1;
}

//highScoreList.app innerHTML = innerListContent;
