import { useState } from "react";

function TaskForm({ addTask }) {
    const [title, setTitle] = useState("");
    const [deadline, setDeadline] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (title.trim() === "" || deadline === "") {
            alert("Заполните название задачи и дедлайн");
            return;
        }

        addTask(title, deadline);

        setTitle("");
        setDeadline("");
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Название задачи"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />

            <input
                type="date"
                value={deadline}
                onChange={(event) => setDeadline(event.target.value)}
            />

            <button type="submit">Добавить задачу</button>
        </form>
    );
}

export default TaskForm;