var React = require('react');

/*Controller*/
var Container = React.createClass({
    getInitialState: function(){
        return {}
    },
    render: function(){
        return(
            <div className="container-fluid no-side-padding">

                <div className="col-md-8">
                    <h1> Hello World </h1>
                </div>
                <div className="col-md-4">
                    <p> {this.props.fruit} </p>
                </div>

            </div>
        )
    }

});

module.exports = Container;

