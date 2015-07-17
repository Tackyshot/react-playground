var Server = require("./server/server.js");

Server.Server(function(err){

    err ? console.error("There was an error instantiating the server") : false;

    Server.start(function(err, server){

        err ? console.error("There was an error starting the server", err) : false;

        console.info("The server has been started on", server.info.uri);

    });

});