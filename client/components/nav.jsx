var React = require('react'),
    Router = require('react-router'),
    Link  = Router.Link;


var Nav = React.createClass({
    getInitialState: function(){
        return {
            isExpanded: false
        };
    },
    toggleExpanded: function(e){
        this.setState({isExpanded: !this.state.isExpanded});
    },
    render: function(){

        var isExpanded = this.state.isExpanded ? "top-bar bg-primary expanded" : "top-bar bg-primary";

        return (
            <nav className={isExpanded} data-topbar role='navgation' >
                <ul className="title-area">
                    <li className="name">
                        <h1><a href="Javascript:void(0)" >Nurture</a></h1>
                    </li>
                    <li className="toggle-topbar menu-icon" onClick={this.toggleExpanded}><a href="#"><span>Menu</span></a></li>
                </ul>

                <section className="top-bar-section">
                    <ul className="right bg-primary">
                        <li className="bg-primary"> <Link to="home" activeClassName="bg-primary">Need Help?</Link> </li>
                        <li className="bg-primary"> <Link to="home" activeClassName="bg-primary">Update Preferences</Link> </li>
                    </ul>
                </section>
            </nav>
        )

    }
});

module.exports = Nav;