import React from 'react';
import {connect} from 'react-redux';
import {startAddTodo} from 'actions';


export class AddTodo extends React.Component{

    onSubmit(e){
        e.preventDefault();
        let {dispatch} = this.props;
        let todo = this.refs.newTodo.value;
        if (!todo) return;
        this.refs.newTodo.value = '';
        dispatch(startAddTodo(todo));
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

export default connect()(AddTodo);