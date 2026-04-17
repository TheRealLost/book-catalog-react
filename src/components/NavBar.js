import React from 'react';

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
                    Каталог книг
                </button>

                <button
                    onClick={() => onPageChange('cart')}
                    style={{
                        ...styles.navButton,
                        ...(currentPage === 'cart' ? styles.activeNav : {})
                    }}
                >
                    Корзина
                    {cartItemCount > 0 && (
                        <span style={styles.cartBadge}>{cartItemCount}</span>
                    )}
                </button>

                <button
                    onClick={() => onPageChange('finance')}
                    style={{
                        ...styles.navButton,
                        ...(currentPage === 'finance' ? styles.activeNav : {})
                    }}
                >
                    Финансы
                </button>
            </div>
        </nav>
    );
};

const styles = {
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
        gap: '1rem',
        flexWrap: 'wrap'
    },
    navButton: {
        backgroundColor: 'transparent',
        color: 'white',
        border: 'none',
        padding: '0.5rem 1rem',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        borderRadius: '4px',
        cursor: 'pointer',
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
    }
};

export default NavBar;