import React from 'react';
import Todo from 'Todo';
import TodoAPI from 'TodoAPI';
import {connect} from 'react-redux';

export class TodoList extends React.Component{
    render(){
        let {todos, showCompleted, searchText} = this.props;
        let renderTodos = ()=>{
            if (!todos.length){
                return <p className="container__message">Nothing to do</p>
            }
            return TodoAPI.filterTodos(todos, showCompleted, searchText).map((item)=>{
                return <Todo key={item.id} {...item} />
            });
        };
        return (
            <div>
                {renderTodos()}
            </div>
        )
    }
}

export default connect(state=>state)(TodoList)