angular.module('BookmarkVisualizerApp')
    .controller('BookmarksListController', function ($scope, Board, $location) {
        $scope.boards = Board.query(function() {
            $scope.selectedboard = $scope.boards[0];
        });
    })
    .controller('BoardController', function ($scope, Board, $location) {

        /*$scope.parseBoards = function($scope.boards) {

            angular.forEach($scope.boards, function(value, key){

            });
        }*/



    })

    .controller('NavController', function ($scope, ClearAllBookmarks, Bookmark, $location) {
        $scope.getAllBookmarks = function() {
            $scope.bookmarks = Bookmark.query();
            console.log($scope.bookmarks);
        }
        $scope.deleteAllBookmarks = function () {
            $scope.bookmarks = ClearAllBookmarks.delete();
        };
    })
    .controller('ImportController', function ($scope, Bookmark, $location, BookmarkParser) {
        $scope.onFileSelect = function ($files) {
            $scope.testing = "I am in the onFileSelect method";
            $scope.alerts = [
                {
                    type: 'info',
                    msg: 'Loading bookmarks.'
                }
            ];

            var reader = new FileReader(),
                file = $files[0],
                blob = file.slice(0, file.size);

            reader.onload = function () {
                var result = reader.result,
                    tagsLookup = {};

                if (result.length > 0) {
                    var data = JSON.parse(result); // Presumed content is a json string!

                    angular.forEach(data.tagGroup, function (tagGroup) {
                        tagsLookup[tagGroup.id] = tagGroup.tags;
                    });

                    angular.forEach(data.bookmark, function (bookmark) {
                        $scope.bookmark = new Bookmark({
                            url: bookmark.url,
                            id: bookmark.id,
                            dateAdded: new Date(bookmark.dateAdded),
                            title: bookmark.title
                        });

                        $scope.bookmark.$save();
                        $location.url('/bookmark');
                    });

                    $scope.bookmarks = data;
                    $scope.$apply();

                    /*bookmarkRepo.addAll(data.bookmark, {
                        success: function (results) {
                            $scope.uploadBookmarkVisible = false;
                            $scope.alerts = [
                                {
                                    type: 'success',
                                    msg: 'Loaded bookmarks successfully.'
                                }
                            ];
                            $scope.$apply();
                            hideMsgAfterward($scope);
                        },
                        failure: function (error) {
                            $scope.alerts = [
                                {
                                    type: 'error',
                                    msg: 'Failed to load bookmarks'
                                }
                            ];
                            $scope.$apply();
                        }
                    });*/
                }
            };
            reader.readAsText(blob);
        };
    });
