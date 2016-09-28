import firebase, {firebaseRef, githubProvider} from 'app/firebase/';
import moment from 'moment';

export const setSearchText = (searchText) => {
    return {
        type: 'SET_SEARCH_TEXT',
        searchText
    }
}
export const addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        todo
    }
}
export const startAddTodo = (text) => {
    return (dispatch, getState) => {
        let todo = {
            text,
            completed: false,
            createdAt: moment().unix(),
            completedAt: null
        };
        let todoRef = firebaseRef.child(`users/${getState().auth.uid}/todos`).push(todo)
        return todoRef.then(()=>{
            console.log(todoRef.key);
            dispatch(addTodo({
                ...todo,
                id:todoRef.key
            }))
        });
    }
}

export const toggleShowCompleted = () => {
    return { type: 'TOGGLE_SHOW_COMPLETED' }
}

export const updateTodo = (id, updates) => {
    return {
        type: 'UPDATE_TODO',
        id,
        updates
    }
}

export const startToggleTodo = (id, completed)=>{
    return (dispatch, getState)=>{
        let todoRef = firebaseRef.child(`users/${getState().auth.uid}/todos/${id}`);
        let updates = {
            completed,
            completedAt: completed ? moment().unix(): null 
        };
        return todoRef.update(updates)
        .then(()=>{
            dispatch(updateTodo(id, updates))
        })
    }
};
export const addTodos = (todos) => {
    return {
        type: 'ADD_TODOS',
        todos
    }
};

export const startGetTodos = ()=>{
    return (dispatch, getState) =>{
        return firebaseRef.child(`users/${getState().auth.uid}/todos`).once('value')
        .then((data)=>{
            let todosData = data.val() || {};
            let todos = Object.keys(todosData).map((key)=>{
                return {
                    ...todosData[key],
                    id:key
                };
            });
            dispatch(addTodos(todos));
        });

    };
};

export const login = (id)=>{
    return {
        type:'LOGIN',
        uid: id
    };
}
export const logout = ()=>{
    return {
        type: 'LOGOUT'
    };
}

export const startLogin = ()=>{
    return (dispatch, getState)=>{
        return firebase.auth().signInWithPopup(githubProvider)
        .then((result)=>{
            console.log('logged in', result);
        },(err)=>{
            console.log('unable to auth', err);
        });
    };
};

export const startLogout = ()=>{
    return (dispatch, getState)=>{
        return firebase.auth().signOut()
        .then(()=>{
            console.log('logged out');
        });
    };
};