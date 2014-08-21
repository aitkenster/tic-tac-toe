function Game(){
	this.Grid = ['', '', '',
							 '', '', '',
							 '', '', ''];
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
	var emptySquares = [];
	for(var i=0; i<this.Grid.length; i++){
		if(this.Grid[i] === "") {
			emptySquares.push(i);
		}
	}
	return emptySquares
}

// Game.prototype.generateMove = function(){
// 	var emptySquares = [];
// 	for(var=0; i<this.Grid.length; i++){
// 		if(this.grid.length[i] === "") emptySquares.push(i);
// 	}
// }

