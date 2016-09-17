var React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jquery'),
    TestUtils = require('react-addons-test-utils');
import ConnectedTodo from 'Todo';
import {Provider} from 'react-redux';
import ConnectedTodoList, {TodoList} from 'TodoList';
import {configure} from 'configureStore';


describe('TodoList', ()=>{
    it('should exist', ()=>{
        expect(TodoList).toExist();
    });
    it('should render one todo for each todo item', ()=>{
        let todos = [
            {id: 1, text: 'do something', completed:false, completedAt:undefined, createdAt: 500},
            {id:2, text: 'do nothing', completed:false, completedAt:undefined, createdAt: 500}
        ];
        let store = configure({todos});
        let provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <ConnectedTodoList/>
            </Provider>
        );
        let todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
        let todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo );
        expect(todosComponents.length).toBe(todos.length);
    });
    it('should render empty message if no todos', ()=>{
        let todos = [];
        let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        let el = $(ReactDOM.findDOMNode(todoList));
        expect(el.find('.container__message').length).toBe(1);
    })
});