(function(angular) {
  angular.module('player.svc', ['ngResource']).factory('PlayerService',
  function($resource) {
    return $resource('data/players.json', null, {'query':  {method:'GET', isArray:true}});
  });
})(angular);
