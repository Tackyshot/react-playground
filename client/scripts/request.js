"use strict";
import request from 'superagent';

module.exports = new class Request {
    get(callback){
        request
            .get('/todos')
            .query()
            .end(callback);
    }
};