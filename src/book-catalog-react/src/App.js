import React, { useState } from 'react';

const initialBooks = [
    { id: 1, title: "Animal Farm",         author: "George Orwell",    price: 100 },
    { id: 2, title: "Slaughterhouse-Five", author: "Kurt Vonnegut",    price: 200 },
    { id: 3, title: "The Old Man",         author: "Ernest Hemingway", price: 300 }
];

const BookCatalog = ({ addToCart }) => {
    const [books] = useState(initialBooks);

    return (
        <div style={styles.container}>
            <h2>Book Catalog</h2>
            <div style={styles.bookList}>
                {books.map(book => (
                    <div key={book.id} style={styles.bookCard}>
                        <h3 style={styles.bookTitle}>{book.title}</h3>
                        <p style={styles.bookAuthor}>by {book.author}</p>
                        <p style={styles.bookPrice}>${book.price}</p>
                        <button
                            style={styles.button}
                            onClick={() => addToCart(book)}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

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

const NavBar = ({ cartItemCount, currentPage, onPageChange }) => {
    return (
        <nav style={styles.navbar}>
            <div style={styles.navContainer}>
                <button
                    onClick={() => onPageChange('catalog')}
                    style={{
                        ...styles.navButton,
                        ...(currentPage === 'catalog' ? styles.activeNav : {})
                    }}
                >
                    Book Catalog
                </button>
                <button
                    onClick={() => onPageChange('cart')}
                    style={{
                        ...styles.navButton,
                        ...(currentPage === 'cart' ? styles.activeNav : {})
                    }}
                >
                    Cart
                    {cartItemCount > 0 && <span style={styles.cartBadge}>{cartItemCount}</span>}
                </button>
            </div>
        </nav>
    );
};

function App() {
    const [cart, setCart] = useState([]);
    const [currentPage, setCurrentPage] = useState('catalog');

    const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    const addToCart = (book) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === book.id);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === book.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCart, { ...book, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (id) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id));
    };

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity <= 0) {
            removeFromCart(id);
        } else {
            setCart(prevCart =>
                prevCart.map(item =>
                    item.id === id ? { ...item, quantity: newQuantity } : item
                )
            );
        }
    };

    return (
        <div style={styles.app}>
            <NavBar
                cartItemCount={cartItemCount}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
            />
            {currentPage === 'catalog' ? (
                <BookCatalog addToCart={addToCart} />
            ) : (
                <Cart
                    cart={cart}
                    removeFromCart={removeFromCart}
                    updateQuantity={updateQuantity}
                    onBackToCatalog={() => setCurrentPage('catalog')}
                />
            )}
        </div>
    );
}

const styles = {
    app: {
        fontFamily: 'Arial, sans-serif',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5'
    },
    navbar: {
        backgroundColor: '#2c3e50',
        padding: '1rem 2rem',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    navContainer: {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '1rem'
    },
    navButton: {
        backgroundColor: 'transparent',
        color: 'white',
        border: 'none',
        padding: '0.5rem 1rem',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        position: 'relative'
    },
    activeNav: {
        backgroundColor: '#3498db'
    },
    cartBadge: {
        backgroundColor: '#e74c3c',
        color: 'white',
        borderRadius: '50%',
        padding: '0.2rem 0.6rem',
        fontSize: '0.8rem',
        marginLeft: '0.5rem'
    },
    container: {
        maxWidth: '1200px',
        margin: '2rem auto',
        padding: '0 2rem'
    },
    bookList: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '1.5rem',
        marginTop: '1rem'
    },
    bookCard: {
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '1.5rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        transition: 'transform 0.2s, box-shadow 0.2s'
    },
    bookTitle: {
        margin: '0 0 0.5rem 0',
        color: '#2c3e50',
        fontSize: '1.25rem'
    },
    bookAuthor: {
        margin: '0 0 0.5rem 0',
        color: '#7f8c8d',
        fontSize: '0.9rem'
    },
    bookPrice: {
        margin: '0 0 1rem 0',
        fontSize: '1.3rem',
        fontWeight: 'bold',
        color: '#27ae60'
    },
    button: {
        backgroundColor: '#3498db',
        color: 'white',
        border: 'none',
        padding: '0.6rem 1rem',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '1rem',
        width: '100%',
        transition: 'background-color 0.3s'
    },
    backButton: {
        backgroundColor: '#3498db',
        color: 'white',
        border: 'none',
        padding: '0.6rem 1rem',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '1rem',
        marginTop: '1rem',
        transition: 'background-color 0.3s'
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
    }
};

const styleSheet = document.createElement("style");
styleSheet.textContent = `
  button:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
  div[style*="backgroundColor: white"]:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
`;
document.head.appendChild(styleSheet);

export default App;