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
		function($scope, PlayerService) {
      var self = this;
      $scope.players = PlayerService.query();

			$scope.querySearch = function(query) {
				console.log($scope.players)
				var results = $scope.players.filter($scope.createFilterFor(query));
				console.log(results);
	      return results;
	    }

			$scope.createFilterFor = function(query) {
				var lowercaseQuery = angular.lowercase(query);
				return function filterFn(player) {
					return(angular.lowercase(player.firstName+' '+player.lastName).indexOf(query)!=-1);
				};
			}

		}])
})(angular);
