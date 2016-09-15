var expect = require('expect'),
    reducers = require('reducers'),
    df = require('deep-freeze-strict');

describe('Reducers', ()=>{
    describe('searchTextReducer', ()=>{
        it('should set searchText', ()=>{
            let action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'dog'
            };
            let res = reducers.searchTextReducer(df(''), df(action));
            expect(res).toEqual(action.searchText);
        });
    });
    describe('showCompletedReducer', ()=>{
        it('should toggle completed status', ()=>{
            let action = {
                type:'TOGGLE_SHOW_COMPLETED'
            };
            let res = reducers.showCompletedReducer(df(false), df(action));
            expect(res).toEqual(true);
        });
    });
    describe('todosReducer', ()=>{
        it('should add new todo', ()=>{
            let action = {
                type: 'ADD_TODO',
                text: 'blah'
            };
            let res = reducers.todosReducer(df([]), df(action));
            expect(res.length).toEqual(1);
            expect(res[0].text).toEqual(action.text);
        });
        it('should toggle a todo given an id', ()=>{
            let todo = {
                id: 2,
                text: 'Walk the dog',
                completed:false,
                completedAt: undefined
            }
            let action = {
                type: 'TOGGLE_TODO',
                id: 2
            };
            let res = reducers.todosReducer(df([todo]), df(action));
            expect(res.length).toEqual(1);
            expect(res[0].completed).toEqual(true);
            expect(res[0].completedAt).toBeA('number');
        });
    });
});