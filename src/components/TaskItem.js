function TaskItem({ task, changeStatus, deleteTask }) {
    const today = new Date();
    const deadlineDate = new Date(task.deadline);

    today.setHours(0, 0, 0, 0);
    deadlineDate.setHours(0, 0, 0, 0);

    const isExpired = deadlineDate < today && task.status !== "Done";

    return (
        <div className={isExpired ? "task-item expired" : "task-item"}>
            <div>
                <h3>{task.title}</h3>
                <p>Дедлайн: {task.deadline}</p>
                <p>Статус: {task.status}</p>

                {isExpired && <p className="expired-text">Задача просрочена</p>}
            </div>

            <div className="task-actions">
                <select
                    value={task.status}
                    onChange={(event) => changeStatus(task.id, event.target.value)}
                >
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                </select>

                <button onClick={() => deleteTask(task.id)}>Удалить</button>
            </div>
        </div>
    );
}

export default TaskItem;