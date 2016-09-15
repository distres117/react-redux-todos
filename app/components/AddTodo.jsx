import React from 'react';

class AddTodo extends React.Component{

    onSubmit(e){
        e.preventDefault();
        let todo = this.refs.newTodo.value;
        if (!todo) return;
        console.log('ok')
        this.refs.newTodo.value = '';
        this.props.onAddTodo(todo);
    }
    render(){  
        return (
            <div className="container__footer">
                <form onSubmit={this.onSubmit.bind(this)} >
                    <input type="text" ref="newTodo" placeholder="enter an new item"/>
                    <button className="button expanded">+Add</button>
                </form>
            </div>
        );
    }
}

module.exports = AddTodo;