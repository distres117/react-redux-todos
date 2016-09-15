var React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtils = require('react-addons-test-utils'),
    TodoList = require('TodoList'),
    Todo = require('Todo');


describe('TodoList', ()=>{
    it('should exist', ()=>{
        expect(TodoList).toExist();
    });
    it('should render one todo for each todo item', ()=>{
        let todos = [
            {id: 1, text: 'do something'},
            {id:2, text: 'do nothing'}
        ];
        let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        let todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo );
        expect(todosComponents.length).toBe(todos.length);
    });
    it('should render empty message if no todos', ()=>{
        let todos = [];
        let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        let el = $(ReactDOM.findDOMNode(todoList));
        expect(el.find('.container__message').length).toBe(1);
    })
});