var React = require('react'),
    ReactDOM = require('react-dom'),
    {Route, Router, IndexRoute, hashHistory} = require('react-router'),
    TodoApp = require('TodoApp'),
    store = require('configureStore').configure(),
    {Provider}=require('react-redux');
import TodoAPI from 'TodoAPI';
import {addTodos} from 'actions';


//Load Foundation

store.subscribe(()=>{
    let state = store.getState();
    console.log('New state', state);
    TodoAPI.setTodos(state.todos);
});

let initialTodos = TodoAPI.getTodos();
store.dispatch(addTodos(initialTodos));
$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Provider store={store}>
        <TodoApp/>        
    </Provider>,
    document.getElementById('app')
);