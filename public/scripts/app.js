const app = angular.module('myApp', ['ngRoute']);

app.config(($routeProvider)=> {
  $routeProvider
    .when('/', {
      templateUrl: 'views/partials/login.html',
      controller: 'loginController as lc'
    })
    .when('/profile', {
      templateUrl: 'views/partials/profile.html',
      controller: 'profileController as pc'
    })
});
