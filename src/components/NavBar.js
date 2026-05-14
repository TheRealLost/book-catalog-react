function Navbar() {
    const currentDate = new Date().toLocaleDateString("ru-RU");

    return (
        <header className="navbar">
            <h1>Менеджер задач</h1>
            <p>Текущая дата: {currentDate}</p>
        </header>
    );
}

export default Navbar;