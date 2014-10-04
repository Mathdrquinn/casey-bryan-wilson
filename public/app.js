(function () {
    "use strict";

    angular.module('baby-mean',[
    "ngRoute",
    "ngCookies",
    "ui.bootstrap",
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/',{
                templateUrl: "views/main.html",
                controller: "homeCtrl"
            })
            .when('/posts/new', {
                templateUrl: 'views/create.html',
                controller: 'homeCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

})();