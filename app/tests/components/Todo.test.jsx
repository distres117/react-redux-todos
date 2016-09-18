var React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jquery'),
    TestUtils = require('react-addons-test-utils');
import {startToggleTodo} from 'actions';
import {Todo} from 'Todo';


describe('Todo', ()=>{
    it('should exist', ()=>{
        expect(Todo).toExist();
    });
    it('should dispatch UPDATE_TODO action on click', ()=>{
        let todo = {id:11, text: 'test features', completed: true};
        let action = startToggleTodo(todo.id, !todo.completed);
        let spy = expect.createSpy();
        let todoApp = TestUtils.renderIntoDocument(<Todo {...todo} dispatch={spy}/>);
        let el = $(ReactDOM.findDOMNode(todoApp));
        TestUtils.Simulate.click(el.find('input[type="checkbox"]')[0]);
        expect(spy).toHaveBeenCalledWith(action);
    });
})