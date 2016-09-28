import uuid from 'node-uuid';
class TodoAPI {
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