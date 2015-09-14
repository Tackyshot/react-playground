import React    from 'react';

export default class ToDoList extends React.Component{
     render(){

         return (
             <table>
                 {
                     this.props.todos.map((todoItem)=>{
                        return (
                            <tr>
                                <td>{todoItem.text}</td>
                                <td><input type="checkbox" defaultChecked={todoItem.completed}/></td>
                            </tr>
                        )
                     })
                 }
             </table>
         )
     }
}