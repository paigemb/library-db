var Publisher = require('../models/publisher.model');

// Display list of all Genre.
exports.publisher_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Publisher list');
};

// Display detail page for a specific Genre.
exports.publisher_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: publisher_detail: ' + req.params.Publisher_ID);
};
