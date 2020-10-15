
	// create array that contains all cards
  	const cardArray = [
		{
			name: 'facebook',
			img: 'images/facebook.jpg'
		},
		{
			name: 'facebook',
			img: 'images/facebook.jpg'
		},
		{
			name: 'apple',
			img: 'images/apple.jpg'
		},
		{
			name: 'apple',
			img: 'images/apple.jpg'
		},
		{
			name: 'google',
			img: 'images/google.jpg'
		},
		{
			name: 'google',
			img: 'images/google.jpg'
		},
		{
			name: 'pinterest',
			img: 'images/pinterest.jpg'
		},
		{
			name: 'pinterest',
			img: 'images/pinterest.jpg'
		},
		{
			name: 'snapchat',
			img: 'images/snapchat.jpg'
		},
		{
			name: 'snapchat',
			img: 'images/snapchat.jpg'
		},
	];

  	cardArray.sort(() => 0.5 - Math.random());

	const container = document.querySelector('.container ');
	const resultDisplay = document.querySelector('#game-over')
	let cardsChosen = [];
	let cardsChosenId = [];
	let cardsWon = [];              
	
	// create the grid board that player can see

	function cardGameBoard() {
		for(let i =0; i < cardArray.length; i++) {
		let card = document.createElement('img');
		card.setAttribute('src', 'images/back.jpg');
		card.setAttribute('data-id', i);
		card.classList ='image-size';
		card.addEventListener('click', turnCard);
		container.appendChild(card);
		}
	};

	// check for matching cards function
	function doCardsMatch() {
		let cards = document.querySelectorAll('img');
		const optionOneId = cardsChosenId[0];
		const optionTwoId = cardsChosenId[1];
		
		if(cardsChosen[0] === cardsChosen[1]) {
			// alert("you've found a match");
			cards[optionOneId].setAttribute('src', 'images/empty.png');
			cards[optionTwoId].setAttribute('src', 'images/empty.png');
			cardsWon.push(cardsChosen); 
		} else {
			cards[optionOneId].setAttribute('src', 'images/back.jpg');
			cards[optionTwoId].setAttribute('src', 'images/back.jpg');
		 }
		 
		cardsChosen = [];
		cardsChosenId = [];
		resultDisplay.textContent = cardsWon.length;
		if (cardsWon.length === cardArray.length/2) {
		resultDisplay.textContent = 'Game Over';
		let reset = document.createElement('button');
		reset.textContent = 'start again';
		reset.classList = 'start-again'
		resultDisplay.append(reset);
		reset.addEventListener('click', () => {
			location.reload();
		})

			// setTimeout(location.reload(), 2000);

		}
	}

	// turn the card function
	function turnCard() {
		let cardId = this.getAttribute('data-id');
		cardsChosen.push(cardArray[cardId].name);
		cardsChosenId.push(cardId);
		this.setAttribute('src', cardArray[cardId].img);
		if (cardsChosen.length === 2) {
			setTimeout(doCardsMatch, 500);
		}
	}

	cardGameBoard();

