import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Task = ({ taskSend }) => {
    return (
        <div className={'task'}>
            <h3>
                {taskSend.text}
            <FaTimes style={{ color: 'red', cursor: 'pointer' }} />
            </h3>
            <p>{taskSend.day}</p>
        </div>

    )
};

export default Task;