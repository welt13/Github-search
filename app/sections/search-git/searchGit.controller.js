/*global app*/
'use strict';
(function(app) {
    app.controller('SearchGitCtrl', ['$scope', '$anchorScroll', 'SearchGitSrv',
        function($scope, $anchorScroll, SearchGitSrv) {
            $anchorScroll();
            $scope.repositories = [];

            $scope.getRepositoriesGit = function(framework){
                SearchGitSrv.getRepositoriesGit(framework,10).then(function(data){
                    $scope.repositories = data.data.items;
                });
            };
        }
    ]);
}(app));