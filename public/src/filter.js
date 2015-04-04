angular.module("BookmarkVisualizerApp")
    .filter('removeSpaces', function() {
        return function(input) {
            return input;
            //return input.replace(/\s+/g, '').toLowerCase();
        };
    })
    .filter('filterBookmarks', function() {
    	return function(input) {
    		return input;
    	};
    });
