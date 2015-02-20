'use strict';

/* Filters */

angular.module('ngFilters', [])
.filter('desc', function() {
	return function(str) {
		var str = str;
		var res = str.replace(/_/g, "\'");
		return res;
	}
})
.filter('check', function($parse) {
		console.log('$parse',$parse)
    return function(value, path) {
    	console.log('#######',value, path)
        return $parse(path).assign(this, value);
    };
});
