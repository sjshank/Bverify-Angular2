const http = require('http'),
    chalk = require('chalk'),
    debug = require('debug')('bverify-node');


module.exports = function(app){

/**
 * make a log directory, just in case it isn't there.
 */
try {
  require('fs').mkdirSync('../../log');
} catch (e) {
  if (e.code != 'EEXIST') {
    console.error("Could not set up log directory, error was: ", e);
    process.exit(1);
  }
}

/**
 * Initialise log4js first, so we don't miss any log messages
 */
var log4js = require('log4js');
log4js.configure('server/src/app/config/log4js.json');

var log = log4js.getLogger("startup");

/**
 * Get port from environment and store in Express.
 */
var port = process.env.PORT || '4000';
app.set('port', port);

/*
*  Create server
*/
var server = http.createServer(app);
server.listen(port);
    console.log(
        chalk.red('\nExpress server listening on port ')
        + chalk.yellow('%d')
        + chalk.red(', in ')
        + chalk.yellow('%s')
        + chalk.red(' mode.\n'),
        port
    );

}
