import React from 'react';

const Summary = ({ totalIncome, totalExpense, balance }) => {
    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Сводка</h2>

            <div style={styles.cards}>
                <div style={styles.card}>
                    <p style={styles.label}>Общий доход</p>
                    <p style={{ ...styles.value, color: '#27ae60' }}>
                        + {totalIncome} ₽
                    </p>
                </div>

                <div style={styles.card}>
                    <p style={styles.label}>Общий расход</p>
                    <p style={{ ...styles.value, color: '#e74c3c' }}>
                        - {totalExpense} ₽
                    </p>
                </div>

                <div style={styles.card}>
                    <p style={styles.label}>Баланс</p>
                    <p
                        style={{
                            ...styles.value,
                            color: balance >= 0 ? '#2980b9' : '#c0392b'
                        }}
                    >
                        {balance} ₽
                    </p>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '800px',
        margin: '20px auto',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    },
    title: {
        marginTop: 0,
        marginBottom: '15px',
        textAlign: 'center',
        color: '#2c3e50'
    },
    cards: {
        display: 'flex',
        gap: '15px',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    card: {
        flex: '1',
        minWidth: '180px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        padding: '15px',
        textAlign: 'center',
        border: '1px solid #e0e0e0'
    },
    label: {
        margin: '0 0 10px 0',
        color: '#555',
        fontSize: '16px'
    },
    value: {
        margin: 0,
        fontSize: '22px',
        fontWeight: 'bold'
    }
};

export default Summary;