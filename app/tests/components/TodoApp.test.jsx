var React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtils = require('react-addons-test-utils'),
    TodoApp = require('TodoApp');


describe('TodoApp', ()=>{
    it('should exist', ()=>{
        expect(TodoApp).toExist();
    });
    it('should add todo to the todos state onHandleAddTodo', ()=>{
        let todoText = 'test text';
        let todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({todos: []});
        todoApp.handleAddTodo(todoText);
        expect(todoApp.state.todos[0].text).toBe(todoText);
        expect(todoApp.state.todos[0].createdAt).toBeA('number');
    });
    it('should toggle completed value when handleToggle called', ()=>{
        let todo = {id:11, text: 'test features', completed: false, createdAt:0, completedAt:undefined};
        let todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({todos: [todo]});
        expect(todoApp.state.todos[0].completed).toBe(false);
        todoApp.handleToggle(11);
        expect(todoApp.state.todos[0].completed).toBe(true);
        expect(todoApp.state.todos[0].completedAt).toBeA('number');
    });
    it('should verify that when toggled  from true to false, completeAt gets removed', ()=>{
        let todo = {id:11, text: 'test features', completed: true, createdAt:1, completedAt:2};
        let todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({todos: [todo]});
        expect(todoApp.state.todos[0].completed).toBe(true);
        todoApp.handleToggle(11);
        expect(todoApp.state.todos[0].completed).toBe(false);
        expect(todoApp.state.todos[0].completedAt).toBe(undefined);
    });

})