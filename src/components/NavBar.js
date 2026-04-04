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
    }
};

export default NavBar;