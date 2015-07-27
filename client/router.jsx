var React = require('react'),
    Router = require('react-router'),
    App = require('./components/app.jsx'),
    Home = require('./components/home.jsx'),
    FruitActions = require('./actions/fruit-actions.jsx'),
    request = require('superagent');

var Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    NotFoundRoute = Router.NotFoundRoute;

var routes = (
    <Route handler={App} path='/'>
        <DefaultRoute name="home" handler={Home} />
    </Route>
);



module.exports = {
    run: function() {

        request
            .get("/api")
            .set("Accept", "application/json")
            .end(function (err, res) {

                FruitActions.loadFruits(JSON.parse(res.text));
                Router.run(routes, function(Handler, state){

                    React.render(<Handler params={state.params}/>, document.getElementById("App"));

                });
            });
    }

};