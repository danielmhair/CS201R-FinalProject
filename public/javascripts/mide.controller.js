var mideApp = angular.module('mideApp',[]);

mideApp.controller('mideController', ['$scope', '$http', function($scope, $http) {
    $scope.html = "";
    $scope.css = "";
    $scope.js = "";
    $scope.combinedData = "";
    
    $scope.combineCode = function() {
        $scope.combinedData = "<html><head><script src='https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js'></script><link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css' integrity='sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==' crossorigin='anonymous'><style>" + $scope.css + "</style></head><body>" + $scope.html + "<script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js' integrity='sha512-K1qjQ+NcF2TYO/eI3M6v8EiNYZfA95pQumfvcVrTHtwQVDG+aHRqLi/ETn2uB+1JqwYqVG3LIvdm9lj6imS/pQ==' crossorigin='anonymous'></script><script defer>" + $scope.js + "</script></body></html>";    
    }
}]);

mideApp.filter('trustEditorHTML', ['$sce', function($sce) {
    return function(html) {
      return $sce.trustAs('html', html);
    };
}]);