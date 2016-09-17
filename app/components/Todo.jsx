import React from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import {toggleTodo} from 'actions';

export class Todo extends React.Component {
    render() {
        let {text, id, completed, createdAt, completedAt, dispatch} = this.props;
        let todoClassName = completed ? 'todo todo-completed' : 'todo';
        let renderDate = () => {
            let message, timestamp;
            if (completed) {
                message = 'Completed';
                timestamp = completedAt;
            } else {
                message = 'Created';
                timestamp = createdAt;
            }
            return `${message} at: ${moment.unix(timestamp).format('MMM Do YYYY @ h:mm a')}`;
        }
        return (
            <div className={todoClassName} onClick={() => dispatch(toggleTodo(id)) }>
                <div>
                    <input type="checkbox"  checked={completed}/>
                </div>
                <div>
                    <p>{text}</p>
                    <p className="todo__subtext">{renderDate() }</p>
                </div>
                
            </div>
        )
    }
}

export default connect()(Todo);