import React from 'react';

const Cart = ({ cart, removeFromCart, updateQuantity, onBackToCatalog }) => {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    if (cart.length === 0) {
        return (
            <div style={styles.container}>
                <h2>Your Cart</h2>
                <p style={styles.emptyCart}>Your cart is empty!</p>
                <button onClick={onBackToCatalog} style={styles.backButton}>
                    Continue Shopping
                </button>
            </div>
        );
    }

    return (
        <div style={styles.container}>
            <h2>Your Cart</h2>
            <div style={styles.cartSummary}>
                <p>Total items: <strong>{totalItems}</strong></p>
                <p>Total price: <strong>${totalPrice}</strong></p>
            </div>
            <div style={styles.cartList}>
                {cart.map(item => (
                    <div key={item.id} style={styles.cartItem}>
                        <div style={styles.cartItemInfo}>
                            <h3 style={styles.cartItemTitle}>{item.title}</h3>
                            <p>by {item.author}</p>
                            <p>${item.price} each</p>
                        </div>
                        <div style={styles.cartItemControls}>
                            <div style={styles.quantityControl}>
                                <button
                                    style={styles.quantityBtn}
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                >
                                    -
                                </button>
                                <span style={styles.quantity}>{item.quantity}</span>
                                <button
                                    style={styles.quantityBtn}
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                    +
                                </button>
                            </div>
                            <button
                                style={styles.removeBtn}
                                onClick={() => removeFromCart(item.id)}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={onBackToCatalog} style={styles.backButton}>
                Continue Shopping
            </button>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '1200px',
        margin: '2rem auto',
        padding: '0 2rem'
    },
    cartList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        marginTop: '1rem'
    },
    cartItem: {
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '1rem',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    cartItemInfo: {
        flex: 2
    },
    cartItemTitle: {
        margin: '0 0 0.25rem 0',
        color: '#2c3e50'
    },
    cartItemControls: {
        display: 'flex',
        gap: '1rem',
        alignItems: 'center'
    },
    quantityControl: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        backgroundColor: '#ecf0f1',
        borderRadius: '4px',
        padding: '0.25rem'
    },
    quantityBtn: {
        backgroundColor: '#bdc3c7',
        border: 'none',
        width: '30px',
        height: '30px',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '1.1rem',
        fontWeight: 'bold'
    },
    quantity: {
        minWidth: '30px',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    removeBtn: {
        backgroundColor: '#e74c3c',
        color: 'white',
        border: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        cursor: 'pointer'
    },
    cartSummary: {
        backgroundColor: '#ecf0f1',
        padding: '1rem',
        borderRadius: '8px',
        marginBottom: '1rem',
        textAlign: 'right'
    },
    emptyCart: {
        textAlign: 'center',
        fontSize: '1.2rem',
        color: '#7f8c8d',
        margin: '2rem 0'
    },
    backButton: {
        backgroundColor: '#3498db',
        color: 'white',
        border: 'none',
        padding: '0.6rem 1rem',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '1rem',
        marginTop: '1rem'
    }
};

export default Cart;