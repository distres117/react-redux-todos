var React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jquery'),
    TestUtils = require('react-addons-test-utils');
import {TodoSearch} from 'TodoSearch';

describe('TodoSearch', ()=>{
    it('should exist', ()=>{
        expect(TodoSearch).toExist();
    })
    it('Should dispatch setSearchText on text change', ()=>{
        let searchText = 'dog';
        let action = {
            type:'SET_SEARCH_TEXT',
            searchText
        }
        let spy = expect.createSpy();
        let todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
        todoSearch.refs.searchText.value = searchText;
        TestUtils.Simulate.change(todoSearch.refs.searchText);
        expect(spy).toHaveBeenCalledWith(action);
    });
    it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', ()=>{
        let action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        };
        let spy = expect.createSpy();
        let todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
        todoSearch.refs.showCompleted.checked = true;
        TestUtils.Simulate.change(todoSearch.refs.showCompleted);
        expect(spy).toHaveBeenCalledWith(action);
    });
})