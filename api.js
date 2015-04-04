var express = require('express'),
    Bourne = require('bourne'),
    bodyParser = require('body-parser'),

    userDataDB = new Bourne('data/user-data.json'),         //User data containing one 'board'
    userBoardsDB = new Bourne('data/user-boards.json'),     //Contains 3 'boards'
    router = express.Router();

/*router
    .use(bodyParser.json())
    .route('/bookmark')
    .get(function (req, res) {
        db.find(function (err, data) {
            res.json(data)
        });
    })
    .post(function (req, res) {
        var bookmark = req.body;
        bookmark.id = req.body.id;

        db.insert(bookmark, function (err, data) {
            res.json(data);
        });
    });*/

router
    .use(bodyParser.json())
    .route('/board')
    .get(function (req, res) {
        userDataDB.find(function (err, data) {
            res.json(data)
        });
    })
    .post(function (req, res) {
        var board = req.body;
        board.id = req.body.id;

        userDataDB.insert(board, function (err, data) {
            res.json(data);
        });
    });

router
    .route('/boards')
    .get(function (req, res) {
        userBoardsDB.findOne(function (err, data) {
            res.json(data);
        })
    });

/*router
    .use(bodyParser.json())
    .route('/clearbookmarks')
    .delete(function (req, res) {
        db.destroy();
        db = new Bourne('bookmarks.json');
        res.json(null);
    });

router
    .use(bodyParser.json())
    .route('/addbookmarks/:bookmarks')
    .post(function (req, res) {

        db.insertAll(req.bookmarks, function (err, data) {
            res.json(data);
        })
    });

router
    .param('id', function (req, res, next) {
        req.dbQuery = {
            url: req.params.id
        };
        next();
    })
    .route('/bookmark/:id')
    .get(function (req, res) {
        db.findOne(req.dbQuery, function (err, data) {
            res.json(data);
        })
    })
    .put(function (req, res) {
        var bookmark = req.body;
        delete bookmark.$promise;
        delete bookmark.$resolved;
        db.update(req.dbQuery, bookmark, function (err, data) {
            res.json(data[0]);
        });
    })
    .delete(function (req, res) {
        db.delete(req.dbQuery, function () {
            res.json(null);
        });
    });*/

module.exports = router;
