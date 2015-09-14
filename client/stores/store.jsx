import alt from '../alt';
import Actions from '../actions/actions.jsx'

class TodoStore {
    constructor() {
        this.bindListeners({
            loadTodos: Actions.loadTodos,
            updateTodo: Actions.updateTodo
        });

        this.state = {
            todos: []
        }
    }

    loadTodos(todos){

        this.setState({
            todos: todos
        })
    }

    updateTodo(todo){
        this.setState({
            todos: this.state.todos.concat(todo)
        });
    }

}

export default alt.createStore(TodoStore);