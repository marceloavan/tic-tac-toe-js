/* prototypes */
function TicTacToe(player1, player2) {
  this.player1       = player1;
  this.player2       = player2;
  this.noWinner      = 0;

  var name           = 'tic-tac-toe-js';
  var prettyName     = 'Tic Tac Toe JS';
  var version        = '0.0.1';
  var prefixId       = null;
  var currentPlayer  = null;
  var minMoves       = 5;
  var maxMoves       = 9;
  var qtdMoves       = 0;
  var qtdGames       = 1;
  var mtrz           = [[],[],[]];

  /* functions */
  TicTacToe.prototype.init = function(prefixIdArg) {
    currentPlayer = null;
    qtdMoves      = 0;
    qtdGames      = 1;
    prefixId      = prefixIdArg != null ? prefixIdArg : 'mtrz_';
    this.reset();
  }

  TicTacToe.prototype.select = function(position) {
    qtdMoves++;

    var selected = this.getElementPosition(position);

    this.chooseCurrentPlayer();
    var symbol = currentPlayer.symbol;

    mtrz[position[0]][position[1]] = symbol;
    selected.textContent = symbol;

    selected.setAttribute('style', 'pointer-events: none;');

    var gameOver = false;
    if (qtdMoves >= minMoves && this.checkGame()) {
      currentPlayer.winners++;
      this.showMessage('Jogador ' + currentPlayer.name + ' ganhou!');
      gameOver = true;
    } else if (qtdMoves == maxMoves) {
      this.noWinner++;
      this.showMessage('Deu velha');
      gameOver = true;
    }

    if (gameOver) {
      this.reset();
      qtdGames++;
    }
  }

  TicTacToe.prototype.chooseCurrentPlayer = function() {
    if (!currentPlayer) {
      if (qtdGames % 2 == 0) {
        currentPlayer = this.player2;
      } else {
        currentPlayer = this.player1;
      }
    } else {
      if (currentPlayer === this.player1) {
        currentPlayer = this.player2;
      } else if (currentPlayer === this.player2) {
        currentPlayer = this.player1;
      }
    }
  }

  TicTacToe.prototype.checkGame = function() {
    var currSymbol = currentPlayer.symbol;

    var parallelOneMatched = 0;
    var parallelTwoMatched = 0;

    for (var i = 0; i < 3; i++) {
      var rowsMatched = 0;
      var columnsMatched = 0;

      for (var j = 0; j < 3; j++) {
        //check rows and parallels
        if (mtrz[i][j] === currSymbol) {
          rowsMatched++;
          if (i - j === 0) {
            parallelOneMatched++;
          }
          if (i + j === 2) {
            parallelTwoMatched++;
          }
        }
        //check columns
        if (mtrz[j][i] === currSymbol) {
          columnsMatched++;
        }
      }

      if (rowsMatched === 3 || columnsMatched === 3
          || parallelOneMatched === 3 || parallelTwoMatched === 3 ) {
        return true;
      }
    }
    return false;
  }

  TicTacToe.prototype.getElementPosition = function(position) {
    return document.getElementById('' + prefixId + position);
  }

  TicTacToe.prototype.showMessage = function(message) {
    alert(message);
  }

  TicTacToe.prototype.reset = function() {
    mtrz = [[],[],[]];
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        this.resetPosition('' + i + j);
      }
    }
    qtdMoves = 0;
  }

  TicTacToe.prototype.resetPosition = function(position) {
    var element = this.getElementPosition(position);
    element.textContent = '';
    element.setAttribute('style', 'pointer-events: auto;');
  }
}
