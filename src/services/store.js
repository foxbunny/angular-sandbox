var angular = require('angular');

angular.module('services.store', [])
  .factory('stateStoreService', ['$rootScope', function ($rootScope) {
    $rootScope.state = {};
    $rootScope.update = updateState;
    $rootScope.map = mapStateToController;

    function updateState(updater) {
      $rootScope.state = updater($rootScope.state);
    }

    function mapStateToController(mapper) {
      $rootScope.$watch('state', function(newState) {
        mapper(newState);
      });
      mapper($rootScope.state);
    }

    return function initState(defaultState) {
      $rootScope.state = defaultState;
    }
  }]);
