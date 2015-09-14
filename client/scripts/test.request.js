module.exports = class Request{
    constructor(object){
        this.object = object;
    }

    get(callback){

        callback(null, JSON.stringify(this.object));

    }

};