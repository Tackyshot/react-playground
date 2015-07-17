/*
 * name: server.js
 * version: 0.0.1
 * created: June 9th, 2015
 * last modified: June 11th, 2015
 * author: Dillon Osman
 *
 * purpose: this is the core of the application it builds the server based on dynamic
 * and enviornment variables. It integrates any and all methods, routes, and authentication methods.
 *
 */

var path = require('path'),
    hapi = require('hapi'),
    fs = require('fs'),
    exports = {};

//set Exports
exports.Server = function(next) {

    //create server.
    var Server = new hapi.Server(),
        Routes = fs.readdirSync(__dirname +"/routes"),
        routes = [];

    Routes.forEach(function(filename){
        routes.push(JSON.parse(fs.readFileSync(__dirname + '/routes/' + filename)));
    });

    //register configuration
    Server.register({
        register: require("./config.js"),
        options: {
            decorate: true
        }
    }, function(err){
        if(err){
            console.log("config error: ", err);
            return next(err);
        }
    });

    //define server connections.
    Server.connection({
        host: Server.config.server.host,
        port: Server.config.server.port

    });


    routes.forEach(function(route){

        Server.route({
            method: route.method,
            path: route.path,
            handler: function(request, reply){

                reply(route.data);

            }
        });

    });

    //start the server
    exports.start = function(next){

        Server.start(function(err){

            if(err) return next(err, Server);
            return next(null, Server);

        });
    };

    //stop the server
    exports.stop = function(next){

        Server.stop({}, function(){

            next(null, Server);

        });

    };

    return next(null);

};

module.exports = exports;