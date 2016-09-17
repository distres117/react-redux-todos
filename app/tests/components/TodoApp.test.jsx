var React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jquery'),
    TestUtils = require('react-addons-test-utils'),
    TodoApp = require('TodoApp');

import {Provider} from 'react-redux';
import TodoList from 'TodoList';
import {configure} from 'configureStore';


describe('TodoApp', ()=>{
    it('should exist', ()=>{
        expect(TodoApp).toExist();
    });
    it('should render todoList', ()=>{
        let store = configure();
        let provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <TodoApp/>
            </Provider>);
        let todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
        let todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);
        expect(todoList.length).toEqual(1);


    });

})