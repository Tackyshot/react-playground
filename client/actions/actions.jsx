import alt      from '../alt';
import request  from '../scripts/request.js';

const Request = request;


class TodoActions {
    loadTodos(callback){
        return (dispatch) => {
            Request.get((err, res) => {
                console.log(res.text);

                dispatch(JSON.parse(res.text).todos);
                callback();
            });
        }
    }

    updateTodo(id, text){
        return {id, text}
    }
}

export default alt.createActions(TodoActions);