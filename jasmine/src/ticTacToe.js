function Game(){
	this.Grid = ['', '', '',
							 '', '', '',
							 '', '', ''];
	this.emptySquares = []
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

