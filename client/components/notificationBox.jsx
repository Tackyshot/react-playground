var React = require('react'),
    Router = require('react-router'),
    Link = Router.Link;

var NotificationBox = React.createClass({
    getInitialState: function(){
        return null;

    },
    shouldComponentUpdate: function(nextState, nextProps){

    },
    getNotifications: function(){

        return (
            <li className="hide">hellooo</li>
        )

    },
    render: function(){

        return(
            <div className="row">
                {this.getNotifications}
            </div>
        )

    }
});

module.exports = NotificationBox;