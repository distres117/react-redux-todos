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
                todo:{
                    id:'123',
                    text: 'something',
                    completed: false,
                    createdAt: 1234
                }
            };
            let res = reducers.todosReducer(df([]), df(action));
            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(action.todo);
        });
        it('should update a todo given an id', ()=>{
            let todos = [{
                id: 2,
                text: 'Walk the dog',
                completed:false,
                completedAt: undefined
            }];
            let updates = {completed: false, completedAt:null}
            let action = {
                type: 'UPDATE_TODO',
                id: 2,
                updates 
            };
            let res = reducers.todosReducer(df(todos), df(action));
            expect(res.length).toEqual(1);
            expect(res[0].completed).toEqual(updates.completed);
            expect(res[0].completedAt).toEqual(updates.completedAt);
            expect(res[0].text).toEqual(todos[0].text);
        });
    });
    describe('auth reducer', ()=>{
        it('should store uid on LOGIN', ()=>{
            let action = {
                type: 'LOGIN',
                uid: 'abc123'
            };
            let res = reducers.authReducer(undefined, df(action))
            expect(res.uid).toEqual(action.uid);
        });
        it('should wipe auth on LOGOUT', ()=>{
            let authData = {uid: '1234abc'};
            let action = {type:'LOGOUT'};
            let res = reducers.authReducer(df(authData), df(action));
            expect(res).toEqual({});
        })
    })
});