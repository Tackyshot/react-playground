var React = require('react'),
    Router = require('react-router'),
    Nav = require("./nav.jsx"),
    NotificationBox = require("./notificationBox.jsx"),
    RouteHandler = Router.RouteHandler,
    Link = Router.Link;

/*Controller*/
var Container = React.createClass({
    getInitialState: function() {
        return null;
    },
    render: function(){
        return(
            <div className="row full-width small-collapse">

                <div className="small-12 columns">
                    <Nav />
                </div>
                <div className="small-12 columns">
                    <NotificationBox />
                </div>
                <div className="small-12 columns margin-top" >
                    <div className="row">
                        <div className="small-10 small-centered columns app-content drop-shadow">
                            <RouteHandler {... this.props} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

});

module.exports = Container;

