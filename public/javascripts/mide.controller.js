var mideApp = angular.module('mideApp',[]);

mideApp.controller('mideController', ['$scope', '$http', function($scope, $http) {
    $scope.html = "<div contenteditable='true'>Testing</div>";
    
    
}]);

mideApp.filter('trustEditorAsHTML', ['$sce', function($sce) {
    return function(text) {
      return $sce.trustAsHtml(text);
    };
}]);