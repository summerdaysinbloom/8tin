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
    }
]);