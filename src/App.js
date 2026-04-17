import React, { useState, useEffect } from 'react';
import BookCatalog from './components/BookCatalog';
import Cart from './components/Cart';
import NavBar from './components/NavBar';
import FinancePage from './components/FinancePage';

function App() {
    const [cart, setCart] = useState([]);
    const [currentPage, setCurrentPage] = useState('catalog');

    const [operations, setOperations] = useState(() => {
        const savedOperations = localStorage.getItem('operations');
        return savedOperations ? JSON.parse(savedOperations) : [];
    });

    useEffect(() => {
        localStorage.setItem('operations', JSON.stringify(operations));
    }, [operations]);

    const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    const addToCart = (book) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === book.id);

            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === book.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...prevCart, { ...book, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity <= 0) {
            removeFromCart(id);
        } else {
            setCart((prevCart) =>
                prevCart.map((item) =>
                    item.id === id ? { ...item, quantity: newQuantity } : item
                )
            );
        }
    };

    const addOperation = (operation) => {
        setOperations((prev) => [...prev, operation]);
    };

    const removeOperation = (id) => {
        setOperations((prev) => prev.filter((operation) => operation.id !== id));
    };

    return (
        <div style={styles.app}>
            <NavBar
                cartItemCount={cartItemCount}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
            />

            {currentPage === 'catalog' && (
                <BookCatalog addToCart={addToCart} />
            )}

            {currentPage === 'cart' && (
                <Cart
                    cart={cart}
                    removeFromCart={removeFromCart}
                    updateQuantity={updateQuantity}
                    onBackToCatalog={() => setCurrentPage('catalog')}
                />
            )}

            {currentPage === 'finance' && (
                <FinancePage
                    operations={operations}
                    onAddOperation={addOperation}
                    onRemoveOperation={removeOperation}
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

export default App;