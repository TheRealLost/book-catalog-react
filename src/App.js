import React, { useState } from 'react';
import BookCatalog from './components/BookCatalog';
import Cart from './components/Cart';
import NavBar from './components/NavBar';

    
function App() {
    const z = 5;
    const a = 3;

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