var expect = require('expect');
import firebase, {firebaseRef} from 'app/firebase';
import {setSearchText, startAddTodo, addTodo, updateTodo, startToggleTodo, startGetTodos, login, logout} from 'actions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
    it('should generate searchText action', () => {
        let action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'some text'
        };
        let res = setSearchText(action.searchText);
        expect(res).toEqual(action);
    });
    it('should generate addTodo action', () => {
        let action = {
            type: 'ADD_TODO',
            todo: {
                id: '123',
                text: 'anything',
                completed: false,
                createdAt: 0
            }
        };
        let res = addTodo(action.todo);
        expect(res).toEqual(action);
    });
    it('should create todo and dispatch addTodo', (done) => {
        const store = createMockStore({});
        const todoText = 'My todo text';
        store.dispatch(startAddTodo(todoText))
            .then(() => {
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
    it('should generate UPDATE_TODO action', () => {
        let action = {
            type: 'UPDATE_TODO',
            id: '123',
            updates: {
                completed: false
            }
        }
        let res = updateTodo(action.id, action.updates);
        expect(res).toEqual(action);
    });
    it('should generate login action object', ()=>{
        const action = {
            type: 'LOGIN',
            uid: '123abc'
        }
        let res = login(action.uid);
        expect(res).toEqual(action);
    });
    describe('tests with Firebase todos', () => {
        let testTodoRef;
        beforeEach((done) => {
            let todosRef = firebaseRef.child('todos');
            todosRef.remove()
                .then(() => {
                    testTodoRef = firebaseRef.child('todos').push();
                    testTodoRef.set({
                        text: 'Something to do',
                        completed: false,
                        createdAt: 23456
                    })
                })
                .then(() => done())
                .catch(done);
        });
        afterEach((done) => {
            testTodoRef.remove().then(() => done());
        });
        it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
            const store = createMockStore();
            const action = startToggleTodo(testTodoRef.key, true);
            store.dispatch(action)
                .then(() => {
                    const mockActions = store.getActions();
                    expect(mockActions[0]).toInclude({
                        type: 'UPDATE_TODO',
                        id: testTodoRef.key,
                    });
                    expect(mockActions[0].updates).toInclude({
                        completed: true
                    });
                    expect(mockActions[0].updates.completedAt).toExist();
                    done();
                }, done);
        });
        it('should fetch all todos from firebase and dispatch ADD_TODOS action', (done)=>{
            const store = createMockStore();
            const action = startGetTodos();
            store.dispatch(action)
            .then(()=>{
                const mockActions = store.getActions();
                expect(mockActions[0].type).toEqual('ADD_TODOS');
                expect(mockActions[0].todos.length).toEqual(1);
                done();
            }, done);
        });
    });
});