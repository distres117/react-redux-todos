import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory} from 'react-router';
const store = require('configureStore').configure(),
{Provider}=require('react-redux');
import {startGetTodos, login, logout} from 'actions';
import firebase from 'app/firebase/';
import router from 'app/router';

firebase.auth().onAuthStateChanged((user)=>{
    if (user){
        store.dispatch(login(user.uid));
        store.dispatch(startGetTodos());
        hashHistory.push('/todos');
    }else{
        store.dispatch(logout());
        hashHistory.push('/');
    }
});
$(document).foundation();

require('style!css!sass!applicationStyles');


ReactDOM.render(
    <Provider store={store}>
       {router} 
    </Provider>,
    document.getElementById('app')
);