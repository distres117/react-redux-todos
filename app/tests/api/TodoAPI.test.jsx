var expect = require('expect');

import TodoAPI from 'TodoAPI';

describe('TodoAPI', ()=>{
    
    beforeEach(()=>{
        localStorage.removeItem('todos');
    });
    
    it('should exist', ()=>{
        expect(TodoAPI).toExist();
    });
    describe('setTodos', ()=>{
        it('should set valid todos array', ()=>{
            let todos = [
                {id: 23, text: 'test all files', completed: false}
            ];
            TodoAPI.setTodos(todos);
            expect(JSON.parse(localStorage.getItem('todos'))).toEqual(todos);
        });
        it('should set valid todos array', ()=>{
            let todos = 
                {id: 23, text: 'test all files', completed: false};
            TodoAPI.setTodos(todos);
            expect(localStorage.getItem('todos')).toBe(null);
        });
    });
    describe('getTodos', ()=>{
        it('should return empty array for bad data', ()=>{
            let actual = TodoAPI.getTodos();
            expect(actual).toEqual([]);
        });
        it('should return todos if valid array in storage', ()=>{
            let todos = [
                {id: 23, text: 'test all files', completed: false}
            ];
            localStorage.setItem('todos', JSON.stringify(todos));
            expect(TodoAPI.getTodos()).toEqual(todos);
        });
    });
    describe('filterTodos', ()=>{
        let todos = [
            {id: 1, text:'some text here', completed:true},
            {id: 2, text: 'other text here', completed:false},
            {id:3, text: 'some more text', completed:true}
        ];
        it('should return all items if showCompleted is true', ()=>{
            let filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        });
        it('should return all items if showCompleted is true', ()=>{
            let filteredTodos = TodoAPI.filterTodos(todos, false, '');
            expect(filteredTodos.length).toBe(1);
        });
        it('should sort by completed status', ()=>{
            let filteredTodos = TodoAPI.filterTodos(todos,true,'');
            expect(filteredTodos[0].completed).toBe(false);
        });
        it('should filter todos by search text', ()=>{
            let filteredTodos = TodoAPI.filterTodos(todos, true, 'some');
            expect(filteredTodos.length).toBe(2);
        });

    });
})