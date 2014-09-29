	$(document).ready(function(){
		var game = new Game();

		function updateBoard(){
			$('.a1').text(game.Grid[0])
			$('.a2').text(game.Grid[1])
			$('.a3').text(game.Grid[2])
			$('.b1').text(game.Grid[3])
			$('.b2').text(game.Grid[4])
			$('.b3').text(game.Grid[5])
			$('.c1').text(game.Grid[6])
			$('.c2').text(game.Grid[7])
			$('.c3').text(game.Grid[8])
			$('.winner').text(game.Winner)
		}
		
		updateBoard()

		$('.a1').on('click', function(){
			game.gameSequence(0)
			updateBoard();
		})
		$('.a2').on('click', function(){
			game.gameSequence(1);
			updateBoard();
		})
		$('.a3').on('click', function(){
			game.gameSequence(2);
			updateBoard();
		})
		$('.b1').on('click', function(){
			game.gameSequence(3);
			updateBoard();
		})
		$('.b2').on('click', function(){
			game.gameSequence(4);
			updateBoard();
		})
		$('.b3').on('click', function(){
			game.gameSequence(5);
			updateBoard();
		})
		$('.c1').on('click', function(){
			game.gameSequence(6);
			updateBoard();
		})
		$('.c2').on('click', function(){
			game.gameSequence(7);
			updateBoard();
		})
		$('.c3').on('click', function(){
			game.gameSequence(8);
			updateBoard();
		})

		$('.reset').on('click', function(){
			game = new Game();
			updateBoard();
		})

	})