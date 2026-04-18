import React from 'react';

const Cart = ({ operations }) => {
    return (
        <div style={styles.container}>
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
                                <p style={styles.category}>Категория: {operation.category}</p>
                            </div>

                            <div
                                style={{
                                    ...styles.amount,
                                    color: operation.type === 'income' ? '#27ae60' : '#e74c3c'
                                }}
                            >
                                {operation.type === 'income' ? '+' : '-'} {operation.amount} ₽
                            </div>
                        </div>
                    ))}
                </div>
            )}
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
        border: '1px solid #e0e0e0'
    },
    type: {
        margin: '0 0 5px 0',
        color: '#2c3e50'
    },
    category: {
        margin: 0,
        color: '#555'
    },
    amount: {
        fontWeight: 'bold',
        fontSize: '18px'
    }
};

export default Cart;