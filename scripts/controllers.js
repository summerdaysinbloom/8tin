var app = angular.module('ngControllers', []);

app
.controller('MainCtrl', ['$scope', '$location', '$http',
    function($scope, $location, $http) {
    }
])
.controller('MenuNearbyCtrl' ['$scope', '$location', '$http',
    function($scope, $location, $http) {
    }
])
.controller('NearbyDishesCtrl',['$scope', '$timeout',
    function($scope, $timeout) {
        console.log('[C] NearbyDishesCtrl');
        
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
.controller('NearbyCuisineCtrl' ['$scope', '$location', '$http',
    function($scope, $location, $http) {
    }
])
.controller('DineinCtrl',['$scope', '$timeout',
	function($scope, $timeout) {
		console.log('DineinCtrl');
        
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
.controller('DineoutCtrl', ['$scope', '$timeout', 
    function($scope, $timeout) {
        console.log('DineoutCtrl');

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
.controller('Main2Ctrl', ['$scope', '$location', '$http',
    function($scope, $location, $http) {
    }
])
.controller('DeliverCtrl',['$scope', '$timeout',
    function($scope, $timeout) {
        console.log('[C] delivery');
        
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
.controller('EatoutCtrl', ['$scope', '$timeout', 
    function($scope, $timeout) {
        console.log('[C] Eatout');

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