var React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jquery'),
    TestUtils = require('react-addons-test-utils');
import {AddTodo} from 'AddTodo';


describe('AddTodo', ()=>{
    it('should exist', ()=>{
        expect(AddTodo).toExist();
    });
    it('should dispatch ADD_TODO when valid todo text', ()=>{
        let todoText = 'walk the dog';
        let action ={
            type: 'ADD_TODO',
            text: todoText
        };
        let spy = expect.createSpy();
        let addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
        addTodo.refs.newTodo.value = todoText;
        let el = $(ReactDOM.findDOMNode(addTodo));
        TestUtils.Simulate.submit(el.find('form')[0]);
        expect(spy).toHaveBeenCalledWith(action);
    });
    it('should not call dispatch addTodo when invalid text', ()=>{
        let todoText = '';
        let spy = expect.createSpy();
        let addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
        addTodo.refs.newTodo.value = todoText;
        let el = $(ReactDOM.findDOMNode(addTodo));
        TestUtils.Simulate.submit(el.find('form')[0]);
        expect(spy).toNotHaveBeenCalled();
    });

});