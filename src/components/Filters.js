function Filter({ filter, setFilter }) {
    return (
        <div className="filter">
            <label>Фильтр по статусу: </label>

            <select value={filter} onChange={(event) => setFilter(event.target.value)}>
                <option value="All">Все</option>
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
            </select>
        </div>
    );
}

export default Filter;