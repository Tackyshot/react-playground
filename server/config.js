/*
 * name: config.js
 * version: 0.0.1
 * created: June 9th, 2015
 * last modified: June 11th, 2015
 * author: Dillon Osman
 *
 * purpose: this file takes all enviornment variables defined during the applications
 * execution and converts them into a useful format. It also appends them to the Server
 * method so that they are accessible throughout the application without multiple requires.
 */

var Confidence = require('confidence');

var register = function(Server, options, next){
    var store = new Confidence.Store(),
        config = {
            server: server,
        };

    store.load(config);

    this.getConfig = function(){
        return config;
    };

    Server.decorate('server', 'config', config);

    next();

};

register.attributes = {
    name: "config",
    version: "1.0.0"
};


var server = {
    host: process.env.HOST || "127.0.0.1",
    port: process.env.PORT || 8005
};

module.exports = register;