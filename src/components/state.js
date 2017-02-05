var angular = require('angular');

angular.module('state', ['services.store'])
  .controller('StateController', ['$scope', 'stateStoreService', function ($scope, stateStoreService) {
    stateStoreService({
      categories: [],
      selected: 0
    });
  }]);
