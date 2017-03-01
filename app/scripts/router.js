/* global app */
'use strict';
(function (app) {
    app.config(['$stateProvider','$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/searchGit');

            $stateProvider
                .state('searchGit', {
                    url: '/searchGit',
                    templateUrl: 'sections/search-git/searchGit.html',
                    controller:'SearchGitCtrl'
                });
        }
    ]);
}(app));
