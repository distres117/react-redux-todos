import React from 'react';
import Todo from 'Todo';

class TodoList extends React.Component{
    render(){
        let {todos} = this.props;
        let renderTodos = ()=>{
            if (!todos.length){
                return <p className="container__message">Nothing to do</p>
            }
            return todos.map((item)=>{
                return <Todo key={item.id} {...item} onToggle={this.props.onToggle}/>
            });
        };
        return (
            <div>
                {renderTodos()}
            </div>
        )
    }
}

module.exports = TodoList;