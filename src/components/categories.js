var angular = require('angular');
var R = require('ramda');

var categoriesList = require('./categories-list.html');

angular.module('categories', ['services.categories'])
  .directive('categoriesList', function () {
    return {
      restrict: 'E',
      template: categoriesList,
      controller: [
        '$scope',
        'categoriesService',
        CategoriesController
      ],
      controllerAs: 'categories'
    };
  });

function CategoriesController($scope, categoriesService) {
  var categories = this;

  $scope.map(function (state) {
    categories.list = state.categories;
  });
  $scope.$on('updateList', updateList);

  updateList();

  function updateList() {
    $scope.update(R.assoc('categories', categoriesService.all()));
  }
}
