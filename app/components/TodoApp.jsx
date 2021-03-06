import React from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import * as Redux from 'react-redux';
import * as actions from 'actions';

export class TodoApp extends React.Component {


    constructor(props) {
        super(props);
        //this.handleSearch = this.handleSearch.bind(this);
    }
    onLogout(e){
        e.preventDefault();
        let {dispatch} = this.props;
        dispatch(actions.startLogout());
    }

    render() {
        return (
            <div>
                <div className="page-actions">
                    <a href="#" onClick={this.onLogout.bind(this)}>Logout</a>
                </div>
                <h1 className="page-title">Todo App</h1>
                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-5">
                        <div className="container">
                            <TodoSearch />
                            <TodoList />
                            <AddTodo />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Redux.connect()(TodoApp);