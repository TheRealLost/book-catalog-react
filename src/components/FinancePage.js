import React from 'react';
import FinanceForm from './FinanceForm';
import Summary from './Summary';

const FinancePage = ({ operations, onAddOperation, onRemoveOperation }) => {
    const totalIncome = operations
        .filter((operation) => operation.type === 'income')
        .reduce((sum, operation) => sum + operation.amount, 0);

    const totalExpense = operations
        .filter((operation) => operation.type === 'expense')
        .reduce((sum, operation) => sum + operation.amount, 0);

    const balance = totalIncome - totalExpense;

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Учёт личных финансов</h1>

            <FinanceForm onAdd={onAddOperation} />

            <Summary
                totalIncome={totalIncome}
                totalExpense={totalExpense}
                balance={balance}
            />

            <div style={styles.listContainer}>
                <h2>Список операций</h2>

                {operations.length === 0 ? (
                    <p style={styles.emptyText}>Операций пока нет</p>
                ) : (
                    <div style={styles.list}>
                        {operations.map((operation) => (
                            <div key={operation.id} style={styles.card}>
                                <div>
                                    <h3 style={styles.type}>
                                        {operation.type === 'income' ? 'Доход' : 'Расход'}
                                    </h3>
                                    <p style={styles.category}>
                                        Категория: {operation.category}
                                    </p>
                                </div>

                                <div style={styles.rightBlock}>
                                    <div
                                        style={{
                                            ...styles.amount,
                                            color: operation.type === 'income'
                                                ? '#27ae60'
                                                : '#e74c3c'
                                        }}
                                    >
                                        {operation.type === 'income' ? '+' : '-'} {operation.amount} ₽
                                    </div>

                                    <button
                                        style={styles.deleteBtn}
                                        onClick={() => onRemoveOperation(operation.id)}
                                    >
                                        Удалить
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '1200px',
        margin: '2rem auto',
        padding: '0 2rem'
    },
    title: {
        textAlign: 'center',
        color: '#2c3e50',
        marginBottom: '1.5rem'
    },
    listContainer: {
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        marginTop: '20px'
    },
    emptyText: {
        textAlign: 'center',
        color: '#7f8c8d'
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        marginTop: '15px'
    },
    card: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#f8f9fa',
        border: '1px solid #e0e0e0',
        flexWrap: 'wrap',
        gap: '10px'
    },
    type: {
        margin: '0 0 5px 0',
        color: '#2c3e50'
    },
    category: {
        margin: 0,
        color: '#555'
    },
    rightBlock: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
    },
    amount: {
        fontWeight: 'bold',
        fontSize: '18px'
    },
    deleteBtn: {
        backgroundColor: '#e74c3c',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        padding: '8px 12px'
    }
};

export default FinancePage;