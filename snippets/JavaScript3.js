

'use strict';

// Declare app level module which depends on views, and components
angular
    .module('CS', [
      'ngRoute'	                     
    ])
    .config(config)
    .controller('appCtrl', appCtrl);

config.$inject = ['$routeProvider'];
appCtrl.$inject = ['dependency1', 'dependency2'];

function config($routeProvider) {
	                    