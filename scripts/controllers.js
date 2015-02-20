var app = angular.module('ngControllers', []);

app           
.controller('mainCtrl', ['$scope', '$location', '$http', '$anchorScroll', '$timeout', '$document',
    function($scope, $location, $http, $anchorScroll, $timeout, $document) {

        console.log('[C] main');

        $http.get('./hw.json', { cache: true })
        .success(function(data) {
            console.log('data', data);
            $scope.hardwares = data;
        }).error(function(data, status) {
            console.log('error',data);
        });

        $scope.openen = function() {
            console.log('openen')
            $scope.tabId = 1;
            $('#overlay').addClass('show');
            $('#overlay-html').addClass('fixed');
        }

        $scope.openco = function() {
            console.log('openco')
            $scope.tabId = 2;
            $('#overlay').addClass('show');
            $('#overlay-html').addClass('fixed');
        }

        $scope.closeen = function(){
            $scope.tabId = false;
            $('#overlay').removeClass('show');
            $('#overlay-html').removeClass('fixed');
            
            var section3 = angular.element(document.getElementById('section-3'));

            $timeout(function() {
                $document.scrollTo(section3, 0, 500);
            }, 50);
        }

        $scope.closeco = function(){
            $scope.tabId = false;
            $('#overlay').removeClass('show');
            $('#overlay-html').removeClass('fixed');

            var section3 = angular.element(document.getElementById('section-3'));

            $timeout(function() {
                $document.scrollTo(section3, 0, 500);
            }, 50);
        }

    }
])
// .controller('constructionCtrl', ['$scope', '$location', '$http', '$anchorScroll', '$timeout',
//     function($scope, $location, $http, $anchorScroll, $timeout) {
//         console.log('[C] construction');

//     }
// ])
// .controller('engineeringCtrl', ['$scope', '$location', '$http', '$anchorScroll', '$timeout',
//     function($scope, $location, $http, $anchorScroll, $timeout) {

//         console.log('[C] engineering');

//     }
// ])
.controller('hardwaresCtrl', ['$scope', '$location', '$http', '$timeout',
    function($scope, $location, $http, $timeout) {
        
        console.log('[C] H');

        $http.get('./hw.json', { cache: true })
        .success(function(data) {
            // console.log('data', data);
            $scope.hardwares = data;
        }).error(function(data, status) {
            console.log('error',data);
        });

        $scope.submit = function(data) {
            $location.path('/search');
        };

    }
])
.controller('hwCate1Ctrl', ['$scope', '$location', '$http', '$routeParams', '$timeout',
    function($scope, $location, $http, $routeParams, $timeout) {
        
        console.log('[C] H1',$routeParams.params);

        $scope.title = $routeParams.params;
        $scope.titletext = $routeParams.params.replace(/_/g, "\ ");
        console.log('$scope.title', $scope.title);
        $http.get('./'+$routeParams.params+'/list.json', { cache: true })
        .success(function(data) {
            console.log('data', data);
            $scope.hardwares1 = data;
        }).error(function(data, status) {
            console.log('error',data);
        });  

    }
])
.controller('hwCate2Ctrl', ['$scope', '$location', '$http', '$routeParams', '$timeout',
    function($scope, $location, $http, $routeParams, $timeout) {

        console.log('[C] H2');
        
        console.log('hw - cate 2 param ',$routeParams.params);
        console.log('hw - cate 2 subparam',$routeParams.subparams);

        $scope.title = $routeParams.params;
        $scope.titletext = $routeParams.params.replace(/_/g, "\ ");
        $scope.subtitle = $routeParams.subparams;
        $scope.subtitletext = $routeParams.subparams.replace(/_/g, "\ ");
        
        $http.get('./'+$routeParams.params+'/'+$routeParams.subparams+'/sublist.json', { cache: true })
        .success(function(data) {
            console.log('data', data);
            $scope.hardwares2 = data;
        }).error(function(data, status) {
            console.log('error',data);
        });


    }
])
.controller('hwCate3Ctrl', ['$scope', '$location', '$http', '$routeParams', '$timeout',
    function($scope, $location, $http, $routeParams, $timeout) {

        console.log('[C] H3');
        
        console.log('hw - cate 3 param ',$routeParams.params);
        console.log('hw - cate 3 subparam',$routeParams.subparams);
        console.log('hw - cate 3 subparam',$routeParams.subcate);

        $scope.title = $routeParams.params;
        $scope.titletext = $routeParams.params.replace(/_/g, "\ ");
        $scope.subtitle = $routeParams.subparams;
        $scope.subtitletext = $routeParams.subparams.replace(/_/g, "\ ");
        $scope.subcate = $routeParams.subcate;
        $scope.subcatetext = $routeParams.subcate.replace(/_/g, "\ ");


        $http.get('./'+$routeParams.params+'/'+$routeParams.subparams+'/'+$routeParams.subcate + '.json', { cache: true })
        .success(function(data) {
            console.log('data', data);
            $scope.hardware3 = data;
        }).error(function(data, status) {
            console.log('error',data);
        });


    }
])
.controller('scrollCtrl', ['$scope', '$document', '$timeout', '$http', '$location',
    function($scope, $document, $timeout, $http, $location){

        console.log('[C] scroll');

        $http.get('./hw.json', { cache: true })
        .success(function(data) {
            console.log('data', data);
            $scope.hardwares = data;
        }).error(function(data, status) {
            console.log('error',data);
        });

        $scope.openen = function() {
            console.log('openen')
            $scope.tabId = 1;
            $('#overlay').addClass('show');
            $('#overlay-html').addClass('fixed');
        }

        $scope.openco = function() {
            console.log('openco')
            $scope.tabId = 2;
            $('#overlay').addClass('show');
            $('#overlay-html').addClass('fixed');
        }

        $scope.closeen = function(){
            $scope.tabId = false;
            $('#overlay').removeClass('show');
            $('#overlay-html').removeClass('fixed');
            
            var section3 = angular.element(document.getElementById('section-3'));

            $timeout(function() {
                $document.scrollTo(section3, 0, 500);
            }, 50);
        }

        $scope.closeco = function(){
            $scope.tabId = false;
            $('#overlay').removeClass('show');
            $('#overlay-html').removeClass('fixed');

            var section3 = angular.element(document.getElementById('section-3'));

            $timeout(function() {
                $document.scrollTo(section3, 0, 500);
            }, 50);
        }
        

        $http.get('data.json').then(function(res) {
            $scope.Data = res.data;
            console.log(res,'///// length = ', res.data.length)
        })

        $scope.submit = function(data) {
            $location.path('/search');
        };

        $scope.toTheTop = function() {
            $document.scrollTop(0, 5000).then(function() { 
                console && console.log('You just scrolled to the top!');
            });
        }

        var section2 = angular.element(document.getElementById('section-2'));
        
        $scope.toSection2 = function() {
            $document.scrollTo(section2, 0, 1000);
        }
    
        $scope.scrollToMain = function() {
            $timeout(function() {
                // $('#body').removeClass('fixed');
                // $('header').addClass('hide');
                // $('#nav').removeClass('header');
                // $('#nav').addClass('fixed');
            }, 50);
        }
    
        $(window).scroll(function(){ 
            // console.log('scrolling',$(window).scrollTop());
            var height = $(window).height();
            console.log('!', $(window).scrollTop());
            // if ($(window).scrollTop() < height ) {
            //     $('#nav').removeClass('fixed');
            // } else {
            //     $('#nav').addClass('fixed');
            // }

            // if ($(window).scrollTop() < 3 ) {
            //     $('#nav').addClass('header');
            //     $('#nav').removeClass('fixed');
            // } else {
            //     $('#nav').removeClass('header');
            //     $('#nav').addClass('fixed');
            // }
    
        });
  }
])
.controller('testCtrl', ['$scope', '$location', '$http', '$timeout',
    function($scope, $location, $http, $timeout) {
        
        console.log('[C] test');

        $http.get('./hw.json', { cache: true })
        .success(function(data) {
            console.log('data', data);
            $scope.hardwares = data;
        }).error(function(data, status) {
            console.log('error',data);
        });  
    }
])
.controller('test1Ctrl', ['$scope', '$location', '$http', '$routeParams', '$timeout',
    function($scope, $location, $http, $routeParams, $timeout) {
        
        console.log('[C] test1Ctrl',$routeParams.params);

        $scope.title = $routeParams.params;
        $scope.titletext = $routeParams.params.replace(/_/g, "\ ");

        $http.get('./'+$routeParams.params+'/'+$routeParams.params+'.json', { cache: true })
        .success(function(data) {
            console.log('data', data);
            $scope.hardwares = data;
        }).error(function(data, status) {
            console.log('error',data);
        });  

    }
])
.controller('test2Ctrl', ['$scope', '$location', '$http', '$routeParams', '$timeout',
    function($scope, $location, $http, $routeParams, $timeout) {

        console.log('[C] test2Ctrl');
        
        console.log('test - cate 2 param ',$routeParams.params);
        console.log('test - cate 2 subparam',$routeParams.subparams);

        $scope.title = $routeParams.params;
        $scope.subtitle = $routeParams.subparams;
        $scope.subtitletext = $routeParams.subparams.replace(/_/g, "\ ");

        $http.get('./'+$routeParams.params+'/'+$routeParams.subparams+'.json', { cache: true })
        .success(function(data) {
            console.log('data', data);
            $scope.hardware = data;
        }).error(function(data, status) {
            console.log('error',data);
        });  

    }
])
// .controller('SearchCtrl', ['$scope', '$location', '$http', '$routeParams', '$timeout', 
//     function($scope, $location, $http, $routeParams, $timeout) {
//         console.log('SearchCtrl')
//         var x;

//         $http
//             .get('data.json')
//             .success(
//                 function(data){ 
//                     console.log('get', data)
//                     $scope.Data = data;

//                     console.log('$scope', $scope);

//                     x = data;

//                     $scope.data = x.query();

//                     console.log('xxx', x)
//             })
//             .error(
//                 function(error){ 
//                     // console.log(error) 
//             })
//     }
// ]);
// .controller('SearchCtrl', ['$scope', '$location', '$http', '$routeParams', '$timeout', 
//     function($scope, $location, $http, $routeParams, $timeout) {
//         console.log('SearchCtrl')
//         $http.get('data.json').then(function(res) {
//             $scope.Data = res.data;
//         })

//     }           
// ]);
