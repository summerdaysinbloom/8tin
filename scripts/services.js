// 'use strict';

// angular.module('ngServices', []).factory(‘myService’, function(){
//   var _artist = ‘Nelly’;
//   this.getArtist = function(){
//     return _artist;
//   }
// });

'use strict';

var ngServices = angular.module('ngServices', ['ngResource']);

// ngServices.service('dishes', ['$resource', '$http',
//   function($resource, $http){

//     var testData = $http.get('dishes.json').success(function(response) {
//     	console.log('!!!',response);
//         return response;
//     });
// }]);

