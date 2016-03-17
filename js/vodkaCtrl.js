 var vodkaApp = angular.module('vodkaApp', []);

vodkaApp.controller('vodkaCtrl', function ($scope, $http) {

	$scope.categorySelected = null;
	$scope.callSelected = null;

	$http.get('json/categories.json').then(function(res){
    	$scope.categories = res.data;                
    });

    $http.get('json/calls.json').then(function(res){
    	$scope.calls = res.data;                
    });

    $scope.changeView = function(category){	
    	if ( $scope.categories.indexOf( category ) !== -1 ) {
    		$scope.categorySelected = category;
			$scope.callSelected = $scope.calls[category];
    	} else {
			$scope.categorySelected = null;
			$scope.callSelected = null;
    	}
    };


}).directive("callContainer", function() {

	function link(scope) {

		scope.simpleParams = true;
		scope.url = "https://api.mysite.com";

		if( typeof( scope.call.params ) === 'object' ){
			// list of list
			scope.simpleParams = false;
		}

	}

	return {
		restrict: 'E',
		scope: {
			call : '='
		},
		templateUrl: 'callContainer.html',
		link:link
	}

});
