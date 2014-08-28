function Game(){
	this.Grid = ['', '', '',
							 '', '', '',
							 '', '', ''];
	this.emptySquares = []
	this.Winner = null;
};

Game.prototype.placeNought = function(position){
	this.placePiece(position, 'O');
}

Game.prototype.placeCross = function(position){
	this.placePiece(position, 'X');
}

Game.prototype.placePiece = function(position, piece){
	if (this.Grid[position] === '' ){
				this.Grid.splice(position,1,piece);
	}
}

Game.prototype.getEmptySquares = function(){
	for(var i=0; i<this.Grid.length; i++){
		if(this.Grid[i] === "") {
			this.emptySquares.push(i);
		}
	}
}

Game.prototype.generateMove = function(getEmptySquares){
	this.getEmptySquares();
	var computerMove = this.emptySquares[Math.floor(Math.random()*this.emptySquares.length)];
	this.placeCross(computerMove);
}

Game.prototype.checkForWinners = function(){
	for(var i=0; i<this.Grid.length; i++){
		if(this.Grid[i] != ''){
			this.checkHorizontalWinner(i);
			this.checkVerticalWinner(i);
			this.checkDiagonalWinner(i);
		}
	}
	this.checkDraw();
} 

Game.prototype.checkHorizontalWinner = function(square){
		if(square % 3 === 0){
			firstSquare = square;
			secondSquare = (square+1);
			thirdSquare = (square+2);
			this.checkEqual(firstSquare, secondSquare, thirdSquare);
		}
}

Game.prototype.checkVerticalWinner = function(square){
		if(square <=2){
			firstSquare = square; 
			secondSquare = (square+3);
			thirdSquare = (square+6);
			this.checkEqual(firstSquare,secondSquare,thirdSquare);
		}
}

Game.prototype.checkDiagonalWinner = function(square){
		if((square===0) || (square===2)){
				if(square===0){
					firstSquare = square; 
					secondSquare = (square+4);
					thirdSquare = (square+8);
			} else {
				firstSquare = square; 
				secondSquare = (square+2);
				thirdSquare = (square+4);
			}
			this.checkEqual(firstSquare,secondSquare,thirdSquare);
		}
}

Game.prototype.checkEqual = function(firstSquare, secondSquare, thirdSquare){
	if ((this.Grid[firstSquare] === this.Grid[secondSquare]) && (this.Grid[firstSquare] === this.Grid[thirdSquare])){
		this.getWinner(firstSquare)
	}
}

Game.prototype.getWinner = function(firstSquare){
	if(this.Grid[firstSquare] === "O"){
		this.Winner = "Player"
	} else {
		this.Winner = "Computer"
	}
}

Game.prototype.checkDraw = function(){
	if((this.emptySquares.length === 0) && (this.Winner === null)){
		this.Winner = "Draw";
	}

}