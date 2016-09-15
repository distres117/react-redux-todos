var React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtils = require('react-addons-test-utils'),
    TodoSearch = require('TodoSearch');

describe('TodoSearch', ()=>{
    it('should exist', ()=>{
        expect(TodoSearch).toExist();
    })
    it('Should call onSearch with entered input text', ()=>{
        let searchText = 'dog';
        let spy = expect.createSpy();
        let todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
        todoSearch.refs.searchText.value = searchText;
        TestUtils.Simulate.change(todoSearch.refs.searchText);
        expect(spy).toHaveBeenCalledWith(false, searchText);
    });
    it('should call onSearch with checked value', ()=>{
        let spy = expect.createSpy();
        let todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
        todoSearch.refs.showCompleted.checked = true;
        TestUtils.Simulate.change(todoSearch.refs.showCompleted);
        expect(spy).toHaveBeenCalledWith(true, '');
    });
})