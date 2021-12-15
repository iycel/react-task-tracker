import Task from './Task';

const Tasks = ({ tasks }) => {

    return (
        <div>
            {tasks.map((task) => {
                return (
                    <Task key={task.id} taskSend={task} />
                )
            })}
        </div>
    )
};

export default Tasks;