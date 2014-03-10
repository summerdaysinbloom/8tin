'use strict';

/* App Module */
var app = angular.module('ffApp', [
    'ngRoute',
    'ngControllers',
    'ngAnimate'
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
    
            if($location.path() == '/dine-in') {
                $rootScope.hideIn = true;
                $rootScope.hideStickyBar = false;
            } else {
                $rootScope.hideIn = false;
                $rootScope.hideStickyBar = false;
            }
            if($location.path() == '/dine-out') {
                $rootScope.hideOut = true;
                $rootScope.hideStickyBar = false;
            } else {
                $rootScope.hideOut = false;
                $rootScope.hideStickyBar = false;
            }
            if($location.path() == '/') {
                $rootScope.hideIn = true;
                $rootScope.hideOut = true;
                $rootScope.hideStickyBar = true;
            } 
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
            depth: 2,
            title: 'DEMO',
            keywords: 'DEMO',
            description: 'DEMO'
        })
        .when('/dine-in', {
            templateUrl: 'views/dine-in.html',
            controller: 'DineinCtrl',
            depth: 1,
            title: '',
            keywords: '',
            description: ''
        })
        .when('/dine-out', {
            templateUrl: 'views/dine-out.html',
            controller: 'DineoutCtrl',
            depth: 3,
            title: '',
            keywords: '',
            description: ''
        })
	   .otherwise({
        	redirectTo: '/'
        });
    }]);