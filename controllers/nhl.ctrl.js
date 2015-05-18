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
				var results = $scope.players.filter($scope.createFilterFor(query));
	      return results;
	    }

			$scope.createFilterFor = function(query) {
				var lowercaseQuery = angular.lowercase(query);
				return function filterFn(player) {
					return(angular.lowercase(player.firstName+' '+player.lastName).indexOf(query)===0);
				};
			}

		}])
})(angular);
