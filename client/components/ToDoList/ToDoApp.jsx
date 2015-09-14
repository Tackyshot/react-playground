import React        from 'react';
import Store        from '../../stores/store.jsx'
import Actions      from '../../actions/actions.jsx'

import ToDoList     from './ToDoList.jsx'
//import ToDoInput    from './toDoInput.jsx'

export default class ToDoApp extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            todos: []
        }
    }

    componentWillMount(){
        Actions.loadTodos(() => {
            this.setState({
                todos: Store.getState().todos
            });
        });
    }

    render(){
        return (
            <div>
                <ToDoList todos={this.state.todos} />
            </div>
        )

    }
}