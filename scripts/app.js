'use strict';

/* App Module */
var app = angular.module('angularApp', [
    'ngRoute',
    'ngControllers',
    'duScroll',
    'ngFilters'
    // 'ngServices'
    // 'duScroll'
    // 'ngServices',
]);

app.run(['$location', '$rootScope', '$timeout', '$routeParams', 
    function($location, $rootScope, $timeout, $routeParams) {
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            // when change route, page always goes top (jquery attached)
            $(window).scrollTop(0);
            
            // console.log('app is running ', $(window).height());
            // $(window).scroll(function(){ 
            //     console.log('scrolling');
            //     if ($(window).scrollTop() > offset) {
            //         $('#header').addClass('fixed');
            //     } else {
            //         $('#header').removeClass('fixed');
            //     }
            // });

            // metadata
            // $rootScope.title = current.$$route.title;
            // $rootScope.keywords = current.$$route.keywords;
            // $rootScope.description = current.$$route.description;
            // $rootScope.navclass = current.$$route.navclass;
            // $rootScope.sidebarclass = current.$$route.sidebarclass;
            $rootScope.hideLanding = current.$$route.hideLanding;
            $rootScope.containerPadding = current.$$route.containerPadding;
    
            // // navigation button
            // $rootScope.hideNav = false;
            // $rootScope.showNav = false;

            // $rootScope.showWork = true;

            // // inside sidebar
            // $rootScope.showWorkG = false;
            // $rootScope.showWorkN = false;
            // $rootScope.showAboutG = false;
            // $rootScope.showAboutN = false;
            // $rootScope.showCvG = false;
            // $rootScope.showCvN = false;
        
            // if($location.path() != current.$$route.originalPath ) {
            //     $rootScope.showNav = false;
            // }

            // if ($location.url().match('works/')) {
            //     $rootScope.hideNav = true;
            //     $rootScope.showWork = true;
            // }

            // if ($location.url().match('work/gary')) {
            //     $rootScope.hideNav = false;
            //     $rootScope.showWorkG = true;
            //     $rootScope.showWork = false;
            //     $rootScope.showWork = false;
            // }

            // if ($location.url().match('work/nikhil')) {
            //     $rootScope.hideNav = false;
            //     $rootScope.showWorkN = true;
            //     $rootScope.showWorkG = false;
            //     $rootScope.showWork = false;
            // }

            // if ($location.url().match('work/gary/')) {
            //     $rootScope.hideNav = true;
            // }
            
            // if ($location.url().match('work/nikhil/')) {
            //     $rootScope.hideNav = true;
            // }

            // if ($location.url().match('about/gary-lim')) {
            //     $rootScope.hideNav = false;
            //     $rootScope.showAboutG = true;
            //     $rootScope.showAboutN = false;
            //     $rootScope.showWork = false;
            // }

            // if ($location.url().match('about/nikhil')) {
            //     $rootScope.hideNav = false;
            //     $rootScope.showAboutG = false;
            //     $rootScope.showAboutN = true;
            //     $rootScope.showWork = false;
            // }

            // if ($location.url().match('cv/gary-lim')) {
            //     $rootScope.hideNav = false;
            //     $rootScope.showCvG = true;
            //     $rootScope.showCvN = false;
            //     $rootScope.showWork = false;
            // }

            // if ($location.url().match('cv/nikhil')) {
            //     $rootScope.hideNav = false;
            //     $rootScope.showCvG = false;
            //     $rootScope.showCvN = true;
            //     $rootScope.showWork = false;
            // }
        });
}]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    
    // $locationProvider.html5Mode(true);

    $routeProvider
	    .when('/', {
            templateUrl: 'views/main.html',
            title: '',
            keywords: '',
            description: '',
            hideLanding: '',
            containerPadding: ''
        })
        .when('/hardwares', {
            templateUrl: 'views/hardwares.html',
            controller: 'hardwaresCtrl',
            title: '',
            keywords: '',
            description: '',
            hideLanding: 'hide',
            containerPadding: 'padding'
        })
        .when('/hardwares/:params', {
            templateUrl: 'views/hardware-category1.html',
            controller: 'hwCate1Ctrl',
            title: '',
            keywords: '',
            description: '',
            hideLanding: 'hide',
            containerPadding: 'padding'
        })
        .when('/hardwares/:params/:subparams', {
            templateUrl: 'views/hardware-category2.html',
            controller: 'hwCate2Ctrl',
            title: '',
            keywords: '',
            description: '',
            hideLanding: 'hide',
            containerPadding: 'padding'
        })
        .when('/hardwares/:params/:subparams/:subcate', {
            templateUrl: 'views/hardware-category3.html',
            controller: 'hwCate3Ctrl',
            title: '',
            keywords: '',
            description: '',
            hideLanding: 'hide',
            containerPadding: 'padding'
        })
        .when('/engineering', {
            templateUrl: 'views/engineering.html',
            controller: 'engineeringCtrl',
            title: '',
            keywords: '',
            description: '',
            hideLanding: '',
            containerPadding: 'padding'
        })
        .when('/construction', {
            templateUrl: 'views/construction.html',
            controller: 'constructionCtrl',
            title: '',
            keywords: '',
            description: '',
            hideLanding: '',
            containerPadding: 'padding'
        })
        .when('/search', {
            templateUrl: 'views/search.html',
            title: '',
            keywords: '',
            description: '',
            hideLanding: '',
            containerPadding: 'padding'
        })
	    .otherwise({
         	redirectTo: '/'
        });
    }]);