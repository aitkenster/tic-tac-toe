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
	});

	it("lets the computer place a X on the grid", function(){
		game.placeCross(1);
		expect(game.Grid[1]).toEqual('X')
	})

	it("won't let the player place a O on a square already in use", function(){
		game.placeCross(1);
		game.placeNought(1);
		expect(game.Grid[1]).toEqual('X')
	})
});