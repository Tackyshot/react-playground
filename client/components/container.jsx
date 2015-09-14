import React from 'react';

/*Controller*/
class Container extends React.Component{

    getInitialState() {
        return null;
    }

    render(){
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

}

export default Container;

