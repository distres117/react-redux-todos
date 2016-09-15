import React from 'react';
import moment from 'moment';

class Todo extends React.Component {
    render() {
        let {text, id, completed, createdAt, completedAt} = this.props;
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
            <div className={todoClassName} onClick={() => this.props.onToggle(id) }>
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

module.exports = Todo;