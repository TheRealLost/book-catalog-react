import React, { useState } from 'react';
import FinanceForm from './components/FinanceForm';
import Cart from './components/Cart';

function App() {
    const [operations, setOperations] = useState([]);

    const addOperation = (operation) => {
        setOperations((prev) => [...prev, operation]);
    };

    return (
        <div style={styles.app}>
            <h1 style={styles.title}>Учёт личных финансов</h1>

            <FinanceForm onAdd={addOperation} />

            <Cart operations={operations} />
        </div>
    );
}

const styles = {
    app: {
        fontFamily: 'Arial, sans-serif',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        padding: '20px'
    },
    title: {
        textAlign: 'center',
        color: '#2c3e50'
    }
};

export default App;