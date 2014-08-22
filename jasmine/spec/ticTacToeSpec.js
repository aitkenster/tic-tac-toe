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

	it("lets the computer place an X on the grid", function(){
		game.placeCross(1);
		expect(game.Grid[1]).toEqual('X');
	});

	it("won't let the player place a O on a square already in use", function(){
		game.placeCross(1);
		game.placeNought(1);
		expect(game.Grid[1]).toEqual('X')
	})

	it("creates an array of empty squares", function(){
		game.placeCross(1);
		game.getEmptySquares();
		expect(game.emptySquares).not.toContain(1);
		expect(game.emptySquares).toContain(5);
	})

	it("generates a random unused square in the grid for the computer to place a piece on", function(){
		game.generateMove();
		expect(game.Grid).toContain('X');
	})

});