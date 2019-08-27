var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: 	"images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
]

function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}


var cardsInPlay = [];

function flipCard() {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	console.log("User flipped " + cards[cardId].cardImage);
	console.log("User flipped " + cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay[0]===cardsInPlay[1]) {
	alert("You found a match!");
	} else alert("Sorry, try again.");
}

function reload() {
	window.location.reload(false);
}

createBoard();

console.log(cardsInPlay);

document.getElementById('refreshButton').onclick = reload;



//function buttonRefresh() {
	//var buttonElement = document.getElementById('refresh-button');
	//document.getElementById('refresh-button').onclick = createBoard();
	//buttonElement.addEventListener('click', createBoard);
//}
