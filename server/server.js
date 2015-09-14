"use strict";
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

const   path = require('path'),
        hapi = require('hapi'),
        fs = require('fs');

//set Exports
class Server {

    constructor(){
        this.server = new hapi.Server;
        const server = this.server,
            Routes = fs.readdirSync(__dirname +"/routes"),
            routes = [];

        Routes.forEach(function(filename){
            routes.push(JSON.parse(fs.readFileSync(__dirname + '/routes/' + filename)));
        });

        //register configuration
        server.register({
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
        server.connection({
            host: server.config.server.host,
            port: server.config.server.port

        });

        server.views({
            engines: {
                'html': {
                    module: require('handlebars'),
                    compileMode: 'sync' // engine specific
                }
            },
            path: __dirname + "/templates"
        });


        server.route({
            method: ["GET", "POST"],
            path: '/',
            handler: function(request, reply){

                reply.view('index.html');

            }
        });

        server.route({
            method: ["GET", "POST"],
            path: '/resource/{type}/{file}',
            handler: function(request, reply){

                var file = fs.readFileSync(__dirname + "/sources/" + request.params.type + "/" + request.params.file);

                return reply(file);

            }
        });

        routes.forEach(function(route){

            server.route({
                method: route.method,
                path: route.path,
                handler: function(request, reply){

                    reply(route.data);

                }
            });

        });

    }//constructor

    //start the server
    start(){

        this.server.start((err)=>{

            if(err) return console.log("Server start error:", err);
            return console.log("Server Started at:", this.server.info.uri)

        });
    };

    //stop the server
    stop(){

        this.server.stop({}, function(){

            console.log("Server Stopped");

        });

    };


};

module.exports = new Server;