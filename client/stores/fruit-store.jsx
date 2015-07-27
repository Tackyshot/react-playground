var Biff = require("../biff.js");

var FruitStore = Biff.createStore({
        _fruits: [],
        loadFruits: function(fruits){
            this._fruits = fruits;
        },
        getFruits: function(){
            return this._fruits;
        }
},
function(payload){

    switch (payload.actionType){
        case "LOAD_FRUITS":
            this.loadFruits(payload.data);
            break;

    }

});

module.exports = FruitStore;