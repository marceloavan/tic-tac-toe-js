angular.module("ticTacToe").controller("mainController", function ($scope) {
  $scope.app = "Tic Tac Toe JS";

  $scope.initTicTacToe = function(player1Form, player2Form) {
    player1 = new Player(player1Form.name, 'X');
    player2 = new Player(player2Form.name, 'O');

    player1Form.name = '';
    player2Form.name = '';

    $scope.playerForm.$setPristine();

    $scope.tictactoe = new TicTacToe(player1, player2);
    $scope.tictactoe.init();

    $scope.initialized = true;
  }
});
