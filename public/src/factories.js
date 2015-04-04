angular.module('BookmarkVisualizerApp')
    .factory('Bookmark', function ($resource) {
        return $resource('/api/bookmark/', {}, {
            'update': {
                method: 'PUT'
            }
        });
    })
    .factory('Board', function ($resource) {
        return $resource('/api/board/', {}, {
            'update': {
                method: 'PUT'
            }
        });
    })
    .factory('GetAllBoards', function ($resource) {
        return $resource('/api/boards/', {}, {
            'update': {
                method: 'PUT'
            }
        });
    })
    .factory('ClearAllBookmarks', function ($resource) {
        return $resource('/api/clearbookmarks', {}, {
            'update': {
                method: 'PUT'
            }
        });
    })
    .factory('BookmarkParser', function () {
        var bookmarks = [],
            tagGroups = [];

        var parseChromeBookmarks = function (bookmarkTreeNodes, tags) {
            var node,
                i,
                len,
                tags,
                newTags;

            for (i = 0, len = bookmarkTreeNodes.length; i < len; i++) {
                node = bookmarkTreeNodes[i];

                if (node.url) {
                    bookmarks.push({
                        tags: tags,
                        title: node.title,
                        url: node.url,
                        dateAdded: new Date(node.dateAdded)
                    });
                } else {
                    newTags = angular.clone(tags) || [];
                    newTags.push(node.title);
                    tagGroups.push(newTags);

                    if (node.children) {
                        parseChromeBookmarks(node.children, newTags);
                    }
                }
            }
        
        };
        
        return {
            bookmarks: bookmarks,
            tagGroups: tagGroups
        };

        exports.parseChromeBookmarks = function (bookmarkTreeNodes) {
            parseChromeBookmarks(bookmarkTreeNodes, null);
            return {
                bookmarks: bookmarks,
                tagGroups: tagGroups
            };
        };

    });
