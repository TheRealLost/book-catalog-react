import TaskItem from "./TaskItem";

function TaskList({ tasks, changeStatus, deleteTask }) {
    if (tasks.length === 0) {
        return <p className="empty">Задач пока нет</p>;
    }

    return (
        <div className="task-list">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    changeStatus={changeStatus}
                    deleteTask={deleteTask}
                />
            ))}
        </div>
    );
}

export default TaskList;