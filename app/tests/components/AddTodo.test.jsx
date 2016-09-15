var React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtils = require('react-addons-test-utils'),
    AddTodo = require('AddTodo');


describe('AddTodo', ()=>{
    it('should exist', ()=>{
        expect(AddTodo).toExist();
    });
    it('should call onSubmit when valid data is submitted', ()=>{
        let todoText = 'walk the dog';
        let spy = expect.createSpy();
        let addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
        addTodo.refs.newTodo.value = todoText;
        let el = $(ReactDOM.findDOMNode(addTodo));
        TestUtils.Simulate.submit(el.find('form')[0]);
        expect(spy).toHaveBeenCalledWith(todoText);
    });
    it('should not call onSubmit when invalid data is submitted', ()=>{
        let todoText = '';
        let spy = expect.createSpy();
        let addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
        addTodo.refs.newTodo.value = todoText;
        let el = $(ReactDOM.findDOMNode(addTodo));
        TestUtils.Simulate.submit(el.find('form')[0]);
        expect(spy).toNotHaveBeenCalled();
    });

});