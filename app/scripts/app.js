'use strict';

/**
 * @ngdoc overview
 * @name yeomanAngularApp
 * @description
 * # yeomanAngularApp
 *
 * Main module of the application.
 */
angular
  .module('yeomanAngularApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/index");
  //
  // Now set up the states
  $stateProvider
    .state('index', {
      url: "/index",
      views:{
        "":{
           templateUrl: "views/home.html"
        },
        "main@index":{
           templateUrl: "views/login.html"
        }
      },
    })
    .state('bookList', {
      url: "/{bookType:[0-9]{1,4}}",
      views:{
        "":{
           templateUrl: "views/bookList.html"
        },
        "bookType@bookList":{
           templateUrl: "views/bookType.html"
        },
        "bookgrid@bookList":{
           templateUrl: "views/bookgrid.html"
        },
      }
    })
    .state('state1', {
      url: "/state1",
      templateUrl: "views/state1.html"
    })
    .state('state1.list', {
      url: "/list",
      templateUrl: "views/state1.list.html",
      controller: function($scope) {
        $scope.items = ["A", "List", "Of", "Items"];
      }
    })
    .state('state2', {
      url: "/state2",
      templateUrl: "views/state2.html"
    })
    .state('state2.list', {
      url: "/list",
      templateUrl: "views/state2.list.html",
      controller: function($scope) {
        $scope.things = ["A", "Set", "Of", "Things"];
      }
    });
   
  });