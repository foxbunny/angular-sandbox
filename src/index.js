var angular = require('angular');

require('./services/store');
require('./services/categories');
require('./components/state');
require('./components/categories');
require('./components/category');

angular.module('todoApp', [
  'state',
  'categories',
  'category']);
