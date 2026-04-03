import React, { useState } from 'react';

const initialBooks = [
    { id: 1, title: "Animal Farm", author: "George Orwell", price: 100 },
    { id: 2, title: "Slaughterhouse", author: "Kurt Vonnegut", price: 200 },
    { id: 3, title: "The Old Man", author: "Ernest Hemingway", price: 300 }
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

const styles = {
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
    }
};

export default BookCatalog;