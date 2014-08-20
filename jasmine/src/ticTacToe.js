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
		for(var i=0; i<this.Grid.length;i++ ){
			if (this.Grid[i]==this.Grid[position]){
				this.Grid.splice(i,1,piece);
			}
		}
	}

}
