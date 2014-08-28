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

Game.prototype.checkHorizontalWinner = function(){
	for(var i=0; i<this.Grid.length; i++){
		if((this.Grid[i] != '')&& (i % 3 === 0)){
			firstSquare = i;
			secondSquare = (i+1);
			thirdSquare = (i+2);
			this.checkEqual(firstSquare, secondSquare, thirdSquare);
		}
	}
}

Game.prototype.checkVerticalWinner = function(){
	for(var i=0; i<this.Grid.length; i++){
		if((this.Grid[i] !='')&&(i <=2)){
			firstSquare = i 
			secondSquare = (i+3);
			thirdSquare = (i+6);
			this.checkEqual(firstSquare,secondSquare,thirdSquare);
		}
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