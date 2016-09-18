var expect = require('expect');

import {setSearchText, startAddTodo, addTodo, updateTodo} from 'actions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const createMockStore = configureMockStore([thunk]);

describe('Actions', ()=>{
    it('should generate searchText action', ()=>{
        let action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'some text'
        };
        let res = setSearchText(action.searchText);
        expect(res).toEqual(action);
    });
    it('should generate addTodo action', ()=>{
        let action = {
            type: 'ADD_TODO',
            todo:{
                id: '123',
                text: 'anything',
                completed: false,
                createdAt: 0
            }
        };
        let res = addTodo(action.todo);
        expect(res).toEqual(action);
    });
    it('should create todo and dispatch addTodo', (done)=>{
        const store = createMockStore({});
        const todoText = 'My todo text';
        store.dispatch(startAddTodo(todoText))
        .then(()=>{
            const actions = store.getActions();
            expect(actions[0]).toInclude({
                type: 'ADD_TODO'
            });
            expect(actions[0].todo).toInclude({
                text: todoText
            });
            done();
        })
        .catch(done);
    });
    it('should generate UPDATE_TODO action', ()=>{
        let action = {
            type:'UPDATE_TODO',
            id: '123',
            updates: {
                completed: false
            }
        }
        let res = updateTodo(action.id, action.updates);
        expect(res).toEqual(action);
    });
})