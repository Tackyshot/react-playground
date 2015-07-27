var React = require('react'),
    Router = require('react-router'),
    Link = Router.Link;

/*
 * Props:
 * Conditional Backlink,
 * Button or link
 * Conditional Content -- passed in as a prop, but is its own component.
 * Title
 * Subtitle
 * Subtitle-color
 * Block Tooltip
 * */

var ContentBlock = React.createClass({
    getInitialState: function(){

    },
    shouldComponentUpdate: function(nextState, nextProps){

    },
    hasBacklink: function(){

        if(this.props.backlink){
            return(
                <div className="small-12 columns">
                    <Link to="home"> &larr; Back to List</Link>
                </div>
            );
        }

    },
    render: function(){
        var subtitleColor = {color:this.props.color};

        return (
            <div className="small-12 columns">
                <div className="row accent-bar"></div>
                {this.hasBacklink}
                <div className="small-12 columns">
                    <h3 className="content-title">{this.props.title}</h3>
                </div>
                <div className="small-12 columns">
                    <div className="row">
                        <div className="small-1 columns">
                            <BubbleToolTip type={this.props.bubbleTip} />
                        </div>
                        <div className="small-9 columns">
                            <p className="contentSubtitle" style={subtitleColor}>{this.props.subtitle}</p>
                        </div>
                        <div className="small-2 columns">
                            <ButtonOrLink type={this.props.btn_link} linkto={this.props.link_to}/>
                        </div>
                    </div>
                    <div className="row">
                        {this.props.conditionalContent} /*display this as a component here*/
                    </div>
                </div>
            </div>
        )


    }
});

module.exports = ContentBlock;