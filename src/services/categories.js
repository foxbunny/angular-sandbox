var angular = require('angular');

angular
  .module('services.categories', [])
  .factory('categoriesService', categoriesService);

function categoriesService() {
  var categories = [
    {id: 0, name: 'First category'},
    {id: 1, name: 'Second category'}
  ];

  return {
    get: function (id) {
      return categories.filter(function (c) {
        return c.id === id;
      })[0]
    },

    add: function (id, name) {
      categories.push({id: id, name: name});
    },

    update: function (id, name) {
      categories = categories.map(function (c) {
        if (c.id !== id) return c;
        return {id: id, name: name};
      });
    },

    all: function () {
      return categories;
    }
  };
}
