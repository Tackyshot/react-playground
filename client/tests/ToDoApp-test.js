import React    from 'react/addons';
//import Server   from '../../server/server.js';
//import Rewire   from 'rewire';
import Request  from '../scripts/test.request.js';

import ToDoApp  from '../components/ToDoList/ToDoApp.jsx';

const TestUtils = React.addons.TestUtils;
var todos = {
    "todos":[
        {
            "_id": 1,
            "text": "Pick up milk from the grocery store",
            "completed": false
        },
        {
            "_id": 2,
            "text": "Drop the parking pass off at the parking lot",
            "completed": false
        },
        {
            "_id": 3,
            "text": "Buy new Crockpot",
            "completed": true
        }
    ]
};

describe("ToDoApp Component", ()=>{
    beforeEach(()=>{
        jasmine.Ajax.install();
     });

    afterEach(()=>{
        jasmine.Ajax.uninstall();
    });

    it("should exist", (done)=>{
        let element = TestUtils.renderIntoDocument(<ToDoApp />);

        expect(jasmine.Ajax.requests.mostRecent().url).toBe('/todos');
        expect(element).toBeTruthy();
        done();
    });
});