import uuid from 'node-uuid';
class TodoAPI {
    static setTodos(todos) {
        if (Array.isArray(todos)){
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    }

    static getTodos() {
        let stringTodos = localStorage.getItem('todos');
        let todos = [];
        try{
            todos = JSON.parse(stringTodos);
        }catch(e){
            console.log(e);
         }
        return Array.isArray(todos) ? todos : [];
    }

    static filterTodos(todos, showCompleted, searchText){
        let filteredTodos = todos.filter((todo)=>!todo.completed || showCompleted);
        if (searchText){
            filteredTodos = filteredTodos.filter((todo)=>todo.text.indexOf(searchText) > -1);
        }
        filteredTodos.sort((a,b)=>a.completed - b.completed)
        return filteredTodos;
    }
}

export default TodoAPI;