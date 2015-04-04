angular.module('BookmarkVisualizerApp', ['ngRoute', 'ngResource', 'angularFileUpload'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/bookmarks', {
                controller: 'BookmarksListController',
                templateUrl: 'views/main-view.html'
            })
            .otherwise({
                redirectTo: '/bookmarks'
            });
        $locationProvider.html5Mode(true);
    });
