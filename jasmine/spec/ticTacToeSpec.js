describe('tic-tac-toe', function(){
	beforeEach(function(){
		game = new Game
	});

	it("always starts with an empty grid", function(){
		expect(game.Grid).not.toContain('X');
		expect(game.Grid).not.toContain('O');
	});
});