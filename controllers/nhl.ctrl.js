/**
 * Controller for basic patient form
 */
;
(function(angular) {

	angular
		.module('app')
		.controller("PlayerCtrl", [
		'$scope',
    'PlayerService',
		'$filter',
		function($scope, PlayerService, $filter) {
      var self = this;
      $scope.players = PlayerService.query();
			$scope.rosterPlayers = [];
			$scope.centers = [];
			$scope.rightWingers = [];
			$scope.leftWingers = [];
			$scope.defensemen = [];

			$scope.querySearch = function(query) {
				var results = $scope.players.filter($scope.createFilterFor(query));
	      return results;
	    }

			$scope.createFilterFor = function(query) {
				var lowercaseQuery = angular.lowercase(query);
				return function filterFn(player) {
					return(angular.lowercase(player.firstName + ' ' + player.lastName).indexOf(query) === 0);
				};
			}

			$scope.selectedItemChange = function(item) {
				if(item) {
					if(item.position == 0) {
						$scope.leftWingers.push(item);
					}
					else if(item.position == 1) {
						$scope.centers.push(item);
					}
					else if(item.position == 2) {
						$scope.rightWingers.push(item);
					}
					else if(item.position == 3) {
						$scope.defensemen.push(item);
					}
					$scope.rosterPlayers.push(item)
					$scope.searchText = '';
				}
			}

		}])
})(angular);
