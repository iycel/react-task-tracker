import { TaskItem } from './TaskItem';

const TaskList = ({ tasks, onDelete, toggleDone }) => {
    return (
        <div>
            {tasks.map((task) => {
                return (
                    <TaskItem key={task.id} taskSend={task} onDelete={onDelete} toggleDone={toggleDone} />
                )
            })}
        </div>
    )
};

export default TaskList;