var React = require('react'),
    Router = require('react-router'),
    Link = Router.Link,
    RouteHandler = Router.RouteHandler;


var Home = React.createClass({
    getInitialState: function(){

        return null;

    },
    shouldComponentUpdate: function(){

    },
    render: function(){

        return (
            <div className="row">
                <h1>
                    Welcome Home, User!
                </h1>
                <RouteHandler />
            </div>

        )

    }

});

module.exports = Home;