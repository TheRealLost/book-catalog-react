import React, { useState } from 'react';

function FinanceForm({ onAdd }) {
    const [type, setType] = useState('income');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!category.trim() || !amount) return;

        const newOperation = {
            id: Date.now(),
            type,
            category,
            amount: Number(amount)
        };

        onAdd(newOperation);

        setType('income');
        setCategory('');
        setAmount('');
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                style={styles.input}
            >
                <option value="income">Доход</option>
                <option value="expense">Расход</option>
            </select>

            <input
                type="text"
                placeholder="Категория"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                style={styles.input}
            />

            <input
                type="number"
                placeholder="Сумма"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                style={styles.input}
            />

            <button type="submit" style={styles.button}>
                Добавить
            </button>
        </form>
    );
}

const styles = {
    form: {
        display: 'flex',
        gap: '10px',
        flexWrap: 'wrap',
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    },
    input: {
        flex: '1',
        minWidth: '160px',
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc'
    },
    button: {
        backgroundColor: '#3498db',
        color: 'white',
        border: 'none',
        padding: '10px 16px',
        borderRadius: '4px',
        cursor: 'pointer'
    }
};

export default FinanceForm;