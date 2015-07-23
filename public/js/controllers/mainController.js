angular.module("ticTacToe").controller("mainController", function ($scope) {
  $scope.app = "Tic Tac Toe JS";

  $scope.initTicTacToe = function(player1, player2) {
    player1.winners = 0;
    player1.symbol = 'X';

    player2.winners = 0;
    player2.symbol = 'O';

    $scope.tictactoe = new TicTacToe(player1, player2);
    $scope.tictactoe.init();
  }
});
