import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Filter from "./components/Filter";

function App() {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("All");

    const addTask = (title, deadline) => {
        const newTask = {
            id: Date.now(),
            title: title,
            deadline: deadline,
            status: "To Do",
        };

        setTasks([...tasks, newTask]);
    };

    const changeStatus = (id, newStatus) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === id) {
                return { ...task, status: newStatus };
            }

            return task;
        });

        setTasks(updatedTasks);
    };

    const deleteTask = (id) => {
        const filteredTasks = tasks.filter((task) => task.id !== id);
        setTasks(filteredTasks);
    };

    const filteredTasks =
        filter === "All"
            ? tasks
            : tasks.filter((task) => task.status === filter);

    return (
        <div className="app">
            <Navbar />

            <div className="container">
                <TaskForm addTask={addTask} />

                <Filter filter={filter} setFilter={setFilter} />

                <TaskList
                    tasks={filteredTasks}
                    changeStatus={changeStatus}
                    deleteTask={deleteTask}
                />
            </div>
        </div>
    );
}

export default App;