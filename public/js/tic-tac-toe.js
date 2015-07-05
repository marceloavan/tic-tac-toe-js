/* prototypes */
function Player(name, symbol) {
  this.name   = name;
  this.symbol = symbol;
}

function TicTacToe(player1, player2) {
  this.player1        = player1;
  this.player2        = player2;

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

    if (qtdMoves % 2 == 0) {
      currentPlayer = this.player1;
    } else {
      currentPlayer = this.player2;
    }

    var symbol = currentPlayer.symbol;

    mtrz[position[0]][position[1]] = symbol;
    selected.textContent = symbol;

    selected.setAttribute('style', 'pointer-events: none;');

    if (qtdMoves >= minMoves && this.checkGame()) {
      this.showMessage('Jogador ' + currentPlayer.name + ' ganhou!');
      this.reset();
    } else if (qtdMoves == maxMoves) {
      this.showMessage('Deu velha');
      this.reset();
    }
  }

  TicTacToe.prototype.checkGame = function() {
    var currSymbol = currentPlayer.symbol;

    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        mtrz[i][j];
      }
    }
  }

  TicTacToe.prototype.getElementPosition = function(position) {
    return document.getElementById('' + prefixId + position);
  }

  TicTacToe.prototype.showMessage = function(message) {
    alert(message);
  }

  TicTacToe.prototype.reset = function() {
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        this.resetPosition('' + i + j);
      }
    }
    qtdMoves = 0;
    qtdGames++;
  }

  TicTacToe.prototype.resetPosition = function(position) {
    var element = this.getElementPosition(position);
    element.textContent = '';
    element.setAttribute('style', 'pointer-events: auto;');
  }
}

/* init */
function __init__() {
  var inptPlayer1 = document.getElementById('input-player1');
  var inptPlayer2 = document.getElementById('input-player2');

  if (inptPlayer1.value === '' || inptPlayer2.value === '' ) {
    alert('Informe um nome para os dois jogadores');
    return;
  }

  player1 = new Player(inptPlayer1.value, 'X');
  inptPlayer1.value = '';

  player2 = new Player(inptPlayer2.value, 'O');
  inptPlayer2.value = '';

  tictactoe = new TicTacToe(player1, player2);
  tictactoe.init();
}
