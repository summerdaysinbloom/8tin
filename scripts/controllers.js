var app = angular.module('ngControllers', []);

app
.controller('MainCtrl', ['$scope', '$location', '$http',
    function($scope, $location, $http) {
        // $scope.playfilm = function() {
        //     console.log('playfilm');
        // }

        // var data = {name:'Afghanistan'};
        // var objVal = {value:"en-row", 'data-country':"am", title:"18"};
        // var final = {};
        // var index = 1;
        // for(var key in data)
        // {
        //     final[index] = data[key];
        //     index = index + 1;
        // }
        // final[index] = objVal;
        // JSON.stringify(final);
        // console.log('@@@',JSON.stringify(final));
    }
])
.controller('DineinCtrl',['$scope', '$location',
	function($scope, $location) {
		console.log('DineinCtrl');
	}
])
.controller('DineoutCtrl', ['$scope', '$timeout', 
    function($scope, $timeout) {
        console.log('DineoutCtrl');

        window.slider = new Swipe(document.getElementById('slider'), {
          auto: false,
          continuous: true,
          disableScroll: false,
          speed: 300,
          startSlide: 1,
          stopPropagation: false,
      });

        // var slider =
        //     Swipe(document.getElementById('slider'), {
        //         // startSlide: 2,
        //         auto: false,
        //         continuous: true,
        //         disableScroll: false,
        //         stopPropagation: false,
        //         speed: 400,
        //         callback: function(pos) {
        //             // var i = bullets.length;
        //             // while (i--) {
        //             //     bullets[i].className = 'icon-circle-blank';
        //             // }
        //             // bullets[pos].className = 'icon-circle';
        //         }
        //     });
      
        // // var bullets = document.getElementById('position').getElementsByTagName('span');

    }
]);