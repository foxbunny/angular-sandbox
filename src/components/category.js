var angular = require('angular');
var R = require('ramda');

var categoryItem = require('./category-item.html');

angular.module('category', ['services.categories'])
  .directive('categoryItem', function () {
    return {
      restrict: 'E',
      template: categoryItem,
      controller: [
        '$scope',
        'categoriesService',
        CategoryController
      ],
      controllerAs: 'category'
    };
  });

function CategoryController($scope, categoriesService) {
  var category = this;

  category.editing = null;
  category.startEditing = startEditing;
  category.finishEditing = finishEditing;
  category.selectCategory = selectCategory;

  $scope.map(function (state) {
    this.selected = state.selected;
  });

  function startEditing(id, name) {
    category.editing = {
      id: id,
      name: name
    };
  }

  function finishEditing() {
    categoriesService.update(category.editing.id, category.editing.name);
    category.editing = null;
    $scope.$emit('updateList');
  }

  function selectCategory(id) {
    $scope.update(R.assoc('selected', id));
  }
}
