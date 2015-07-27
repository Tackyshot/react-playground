var Biff = require("../biff.js");

var FruitActions = Biff.createActions({
    loadFruits: function(data){
        this.dispatch({
            actionType: "LOAD_FRUITS",
            data: data
        });
    }
});

module.exports = FruitActions;