'use strict';

/* App Module */
var app = angular.module('ffApp', [
    'ngRoute',
    'ngControllers',
    'ngAnimate',
    'ngDirectives',
    'ngServices'
]);

app
.run(['$templateCache', function($templateCache) {
    // $templateCache.put('change.html', '<p>Oh, you changed your mind !</p>');
    $templateCache.put('change.html', '<div class="spinner"><div class="spinner-container container1"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container2"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container3"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div></div>');
}])
.run(['$location', '$rootScope', '$timeout', 
    function($location, $rootScope, $timeout) {
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            // metadata
            $rootScope.title = current.$$route.title;
            $rootScope.keywords = current.$$route.keywords;        
            $rootScope.description = current.$$route.description;
    
            // Hidden footer effect on main page

            // if($location.path() == '/') {
            //     $rootScope.hideHomeButton = true;
            // } else {
            //     $rootScope.hideHomeButton = false;
            // }

            // if($location.path() == '/dine-in') {
            //     $rootScope.hideIn = true;
            //     $rootScope.hideStickyBar = false;
            // } else {
            //     $rootScope.hideIn = false;
            //     $rootScope.hideStickyBar = false;
            // }
            // if($location.path() == '/dine-out') {
            //     $rootScope.hideOut = true;
            //     $rootScope.hideStickyBar = false;
            // } else {
            //     $rootScope.hideOut = false;
            //     $rootScope.hideStickyBar = false;
            // }
            // if($location.path() == '/') {
            //     $rootScope.hideIn = true;
            //     $rootScope.hideOut = true;
            //     $rootScope.hideStickyBar = true;
            // }

            // //  demo2

            // if($location.path() == '/delivery') {
            //     $rootScope.hideIn = true;
            //     $rootScope.hideStickyBar = false;
            // } else {
            //     $rootScope.hideIn = false;
            //     $rootScope.hideStickyBar = false;
            // }
            // if($location.path() == '/eatout') {
            //     $rootScope.hideOut = true;
            //     $rootScope.hideStickyBar = false;
            // } else {
            //     $rootScope.hideOut = false;
            //     $rootScope.hideStickyBar = false;
            // }
            // if($location.path() == '/main') {
            //     $rootScope.hideIn = true;
            //     $rootScope.hideOut = true;
            //     $rootScope.hideStickyBar = true;
            // } 
        });
    }
]);

app.run(function($rootScope, $window) {
    // publish current transition direction on rootScope

    $rootScope.direction = 'left';

    // listen change start events
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
        $rootScope.direction = 'right';

        // transition effect for individual pages
        if (current && next && (current.depth > next.depth)) {
            $rootScope.direction = 'left';
        } else if (current && next) {
            $rootScope.direction = 'right';
        }
        // back
        $rootScope.back = function() {
          $window.history.back();
        }
    });
});

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    
    // $locationProvider.html5Mode(true);

    $routeProvider
	    .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            depth: 1,
            title: 'demo',
            keywords: 'demo',
            description: 'lets eat out'
        })
        .when('/dishes', {
            templateUrl: 'views/dishes.html',
            controller: 'DishesCtrl',
            depth: 2,
            title: 'dishes',
            keywords: 'dishes',
            description: 'By random dishes'
        })
        .when('/asian', {
            templateUrl: 'views/cuisine-asian.html',
            controller: 'CuisineAsianCtrl',
            depth: 2,
            title: 'asian',
            keywords: 'asian',
            description: 'asian'
        })
        .when('/local', {
            templateUrl: 'views/cuisine-local.html',
            controller: 'CuisineLocalCtrl',
            depth: 2,
            title: 'local',
            keywords: 'local',
            description: 'local'
        })
        .when('/western', {
            templateUrl: 'views/cuisine-western.html',
            controller: 'CuisineWesternCtrl',
            depth: 2,
            title: 'western',
            keywords: 'western',
            description: 'western'
        })
        .when('/restaurant', {
            templateUrl: 'views/restaurant.html',
            controller: 'RestaurantCtrl',
            depth: 2,
            title: 'restaurant',
            keywords: 'restaurant',
            description: 'restaurant'
        })
	   .otherwise({
        	redirectTo: '/'
        });
    }]);