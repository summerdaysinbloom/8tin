'use strict';

angular.module('ngFilters', []).filter('checkmark', function() {
	return function(input) {
	  	console.log('input',input);
	  	// var now = new Date();
    // 	var month = (now.getMonth() + 1);      
    // 	var day = now.getDate();
    // 	console.log('now',now);
    // 	console.log('day',day);

  //   var m = input.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/)
  //   , d = (m) ? new Date(m[3], m[2]-1, m[1]) : null
  //   , nonRolling = (d&&(str==[d.getDate(),d.getMonth()+1,d.getFullYear()].join('/')));
  // return (nonRolling) ? d : null;


	};
});