var React = require('react'),
    Container = require('./components/container.jsx'),
    request = require('superagent');


module.exports = {
    run: function() {

        request
            .get("/api")
            .set("Accept", "application/json")
            .end(function (err, res) {
                React.render(<Container fruit={res.text}/>, document.body);
            });

    }

};