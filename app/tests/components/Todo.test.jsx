var React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtils = require('react-addons-test-utils'),
    Todo= require('Todo');


describe('Todo', ()=>{
    it('should exist', ()=>{
        expect(Todo).toExist();
    });
    it('should call onToggle prop with id on click', ()=>{
        let todo = {id:11, text: 'test features', completed: true};
        let spy = expect.createSpy();
        let todoApp = TestUtils.renderIntoDocument(<Todo {...todo} onToggle={spy}/>);
        let el = $(ReactDOM.findDOMNode(todoApp));
        TestUtils.Simulate.click(el.find('input[type="checkbox"]')[0]);
        expect(spy).toHaveBeenCalledWith(11);
    });
})