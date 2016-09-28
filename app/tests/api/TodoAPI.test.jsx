var expect = require('expect');

import TodoAPI from 'TodoAPI';

describe('TodoAPI', ()=>{
    
    beforeEach(()=>{
        localStorage.removeItem('todos');
    });
    
    it('should exist', ()=>{
        expect(TodoAPI).toExist();
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