(function(angular) {
  angular.module('player.svc', ['ngResource']).factory('PlayerService',
  function($resource) {
    return $resource('data/data.json', null, {'query':  {method:'GET', isArray:true}});
  });
})(angular);
