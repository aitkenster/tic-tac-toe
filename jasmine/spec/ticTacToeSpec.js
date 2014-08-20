describe('tic-tac-toe', function(){
	beforeEach(function(){
		game = new Game
	});

	it("always starts with an empty grid", function(){
		expect(game.Grid).not.toContain('X');
		expect(game.Grid).not.toContain('O');
	});

	it("lets the player place a O on the grid", function(){
		game.placeNought(1);
		expect(game.Grid[1]).toEqual('O');
		expect(game.Grid[2]).toEqual(' ');
	});
});