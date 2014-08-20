function Game(){
	this.Grid = [' ', ' ', ' ',
							 ' ', ' ', ' ',
							 ' ', ' ', ' '];
};

Game.prototype.placeNought = function(position){
	for(var i=0; i<this.Grid.length;i++ ){
	if (this.Grid[i]==this.Grid[position])
		this.Grid.splice(i,1,'O');
	}
};
