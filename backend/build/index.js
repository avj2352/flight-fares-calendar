'use strict';

var _appRoutes = require('./routes/app.routes.js');

var _appRoutes2 = _interopRequireDefault(_appRoutes);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var PORT = process.env.PORT || 5000;

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(_express2.default.urlencoded({ extended: false }));

// Parse JSON bodies (as sent by API clients)
app.use(_express2.default.json());

// Testing
app.get('/hello', function (req, res) {
    res.send('Hello There !');
});

//Serving static files
app.use('/', _express2.default.static(_path2.default.join(__dirname, 'public')));

//Routes
(0, _appRoutes2.default)(app);

var server = app.listen(PORT, function () {
    console.log('Server listening at ' + server.address().port);
});

module.exports = server;
//# sourceMappingURL=index.js.map