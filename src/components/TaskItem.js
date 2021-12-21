import React from 'react';
import { FaTimes } from 'react-icons/fa';

export const TaskItem = ({ taskSend, onDelete, toggleDone }) => {
    return (
        <div className={taskSend.isDone ? 'task done' : 'task'}/* {`task ${taskSend.isDone ? "done" : ""}`} */ onDoubleClick={() => toggleDone(taskSend.id)}>
            <h3>
                {taskSend.text}
                <FaTimes style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => onDelete(taskSend.id)}
                />
            </h3>
            <p>{taskSend.day}</p>
        </div>

    )
};
