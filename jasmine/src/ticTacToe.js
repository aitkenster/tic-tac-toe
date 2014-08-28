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

// Game.prototype.checkHorizontalWinner = function(){
// 	for(var i=0; i<this.Grid.length; i++){
// 		if(this.Grid[firstSquare] != '' && this.Grid.indexOf(i) % 3 === 0){
// 			this.checkEqual(this.Grid.indexOf(i) (this.Grid.indexOf(i+1), (this.Grid.indexOf(i+2))
// 		}
// 	}
// }

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