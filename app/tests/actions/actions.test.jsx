var expect = require('expect'),
    actions = require('actions');

describe('Actions', ()=>{
    it('should generate searchText action', ()=>{
        let action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'some text'
        };
        let res = actions.setSearchText(action.searchText);
        expect(res).toEqual(action);
    });
    it('should generate addTodo action', ()=>{
        let action = {
            type: 'ADD_TODO',
            text: 'Thing to do'
        };
        let res = actions.addTodo(action.text);
        expect(res).toEqual(action);
    });
})