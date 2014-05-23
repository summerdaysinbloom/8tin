var app = angular.module('ngControllers', ['ngSanitize']);

app
.controller('MainCtrl', ['$scope', '$location', '$http',
    function($scope, $location, $http) {
    }
])
// .controller(‘myServiceCtrl’, function($scope, myService){
//   $scope.artist = myService.getArtist();
// });
.controller('DishesCtrl',['$scope', '$timeout', '$http', '$rootScope',
    function ($scope, $timeout, $http, $rootScope) {

        $http.get('/8tin/dishes.json').then(
            function(response) {    
                // success handler
                console.log('success', response);
                $scope.dishes = response.data;
            }, 
            function(response) {    
                // error handler
                console.log('error');
            }
        );
 
        $scope.changedMind = 'false';

        $timeout(function() {
            $scope.changedMind = 'true';
        }, 1200)

        $timeout(function() {
            window.slider = new Swipe(document.getElementById('slider'), {
                auto: false,
                continuous: true,
                disableScroll: false,
                speed: 300,
                // startSlide: 1,
                stopPropagation: false,
            });
                
        }, 1000);

        $scope.clickHideMenu = function() {
            $scope.showMenu = false;
        }
        console.log('dish > ' , $scope );

    }
])
.controller('bindPriceCtrl', ['$scope', 
    function bindPriceCtrl($scope) {

        $scope.priceHtml = '<span class="icon-coin"></span><span class="icon-coin"></span><span class="icon-coin"></span>';
    }
])
.controller('CuisineAsianCtrl',['$scope', '$timeout',
    function($scope, $timeout) {
        console.log('[C] Asian');
        
        $scope.changedMind = 'false';

        $timeout(function() {
            $scope.changedMind = 'true';
        }, 1200)

        $timeout(function() {
            window.slider = new Swipe(document.getElementById('slider'), {
                auto: false,
                continuous: true,
                disableScroll: false,
                speed: 300,
                // startSlide: 1,
                stopPropagation: false,
            });
                
        }, 1000);
    }
])
.controller('CuisineLocalCtrl',['$scope', '$timeout',
	function($scope, $timeout) {
		console.log('[C] Local');
        
        $scope.changedMind = 'false';

        $timeout(function() {
            $scope.changedMind = 'true';
        }, 1200)

        $timeout(function() {
            window.slider = new Swipe(document.getElementById('slider'), {
                auto: false,
                continuous: true,
                disableScroll: false,
                speed: 300,
                // startSlide: 1,
                stopPropagation: false,
            });
                
        }, 1000);
	}
])
.controller('CuisineWesternCtrl', ['$scope', '$timeout', 
    function($scope, $timeout) {
        console.log('[C] Western');

        $scope.changedMind = 'false';

        $timeout(function() {
            $scope.changedMind = 'true';
        }, 1200)

        $timeout(function() {
            window.slider = new Swipe(document.getElementById('slider'), {
                auto: false,
                continuous: true,
                disableScroll: false,
                speed: 300,
                // startSlide: 1,
                stopPropagation: false,
            });
                
        }, 800);
    }
])
.controller('RestaurantCtrl', ['$scope', '$timeout', 
    function($scope, $timeout) {
        console.log('[C] Restaurant');

        $scope.changedMind = 'false';

        $timeout(function() {
            $scope.changedMind = 'true';
        }, 1200)

        $timeout(function() {
            window.slider = new Swipe(document.getElementById('slider'), {
                auto: false,
                continuous: true,
                disableScroll: false,
                speed: 300,
                // startSlide: 1,
                stopPropagation: false,
            });
                
        }, 800);
    }
]);