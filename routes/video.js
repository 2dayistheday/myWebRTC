var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:room_id', function(req, res, next) {
    var room_id = req.params.room_id;
    res.render('video', { title: 'My Chamber', room_id: room_id });
});

router.post('/', function (req, res, next) {
    var room_id = req.body.room_id;
    res.redirect('/video/'+room_id);
});

module.exports = router;
