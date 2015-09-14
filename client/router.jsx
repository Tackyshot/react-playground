//dependencies
import React        from 'react';
import request      from 'superagent';

//view handlers
import Container    from './components/ToDoList/ToDoApp.jsx';

export default {
    run: function() {

        request
            .get("/api")
            .set("Accept", "application/json")
            .end(function (err, res) {
                React.render(<Container fruit={res.text}/>, document.body);
            });

    }

};