var index = require('./routes/index');
var users = require('./routes/users');
var test = require('./routes/test');

function setRouts(expressApp) {

    expressApp.use('/', index);
    expressApp.use('/users', users);
    expressApp.use('/test', test);
}

module.exports = setRouts;