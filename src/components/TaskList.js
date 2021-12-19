import { TaskItem } from './TaskItem';

const TaskList = ({ tasks, onDelete }) => {
    return (
        <div>
            {tasks.map((task) => {
                return (
                    <TaskItem key={task.id} taskSend={task} onDelete={onDelete} />
                )
            })}
        </div>
    )
};

export default TaskList;