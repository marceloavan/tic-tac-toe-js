/* prototypes */
function Player(name, symbol) {
  this.name   = name;
  this.symbol = symbol;
}

function TicTacToe(player1, player2) {
  this.name           = 'tic-tac-toe-js';
  this.prettyName     = 'Tic Tac Toe JS';
  this.version        = '0.0.1';
  this.prefixId       = '';
  this.player1        = player1;
  this.player2        = player2;
  this.currentPlayer  = null;
  this.minMoves       = 5;
  this.maxMoves       = 9;
  this.qtdMoves       = 0;
  this.qtdGames       = 1;

  /* functions */
  TicTacToe.prototype.init = function(prefixId) {
    this.currentPlayer = null;
    this.qtdMoves      = 0;
    this.qtdGames      = 1;
    this.prefixId      = prefixId != null ? prefixId : 'mtrz_';
    this.reset();
  }

  TicTacToe.prototype.select = function(position) {
    this.qtdMoves++;

    var selected = this.getElementPosition(position);

    if (this.qtdMoves % 2 == 0) {
      this.currentPlayer = this.player1;
    } else {
      this.currentPlayer = this.player2;
    }

    selected.textContent = this.currentPlayer.symbol;

    selected.setAttribute('style', 'pointer-events: none;');

    if (this.qtdMoves >= this.minMoves && this.checkGame()) {
      this.showMessage('Jogador ' + this.currentPlayer.name + ' ganhou!');
      this.reset();
    } else if (this.qtdMoves == this.maxMoves) {
      this.showMessage('Deu velha');
      this.reset();
    }
  }

  TicTacToe.prototype.checkGame = function() {
    currSymbol = this.currentPlayer.symbol;

  }

  TicTacToe.prototype.getElementPosition = function(position) {
    return document.getElementById('' + this.prefixId + position);
  }

  TicTacToe.prototype.showMessage = function(message) {
    alert(message);
  }

  TicTacToe.prototype.reset = function() {
    this.resetPosition('00');
    this.resetPosition('01');
    this.resetPosition('02');

    this.resetPosition('10');
    this.resetPosition('11');
    this.resetPosition('12');

    this.resetPosition('20');
    this.resetPosition('21');
    this.resetPosition('22');

    this.qtdMoves = 0;
    this.qtdGames++;
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
