'use strict';

angular.module('ngDirectives', [])
// .directive('whenScrolled', function() {
//     return function(scope, elm, attr) {
//     	console.log('scope, elm, attr',scope, elm, attr);
//         var raw = elm[0];
        
//         elm.bind('scroll', function() {
//             if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
//                 scope.$apply(attr.whenScrolled);
//             }
//         });
//     };
// })
// .directive("inputDate", function($filter) {
//   return {
//     restrict: 'E',
//     require: "?ngModel",
//     link: function(scope, element, attrs, ngModel) {
//       if (!ngModel || attrs["type"].toLowerCase() !== "date") {
//         return;
//       }
//       var date_formatter = function(value) {
//         return $filter("date")(value, "yyyy-MM-dd")
//       }
      
//       ngModel.$formatters.unshift(date_formatter)
//       ngModel.$parsers.unshift(Date)
//     }
//   }
// });

.directive('priceIcon', function() {
   return {
      restrict: 'E',
      template: '<span ng-class="{\'icon-coin\': 3, \'icon-heart\': 2}"></span>',
      scope: {
         value: '='
      }
   };
});