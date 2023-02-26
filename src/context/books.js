import axios from 'axios';
import { createContext, useState, useCallback } from 'react';

const initialValue = {
  books: [],
  fetchBooks: () => {},
  createBook: title => {},
  deleteBook: id => {},
  editBook: (id, newTitle) => {},
};

const BooksContext = createContext(initialValue);

export const Provider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const response = await axios.get('http://localhost:3005/books');
    setBooks(response.data);
  }, []);

  const handleCreate = async title => {
    const response = await axios.post('http://localhost:3005/books', {
      title,
      date: new Intl.DateTimeFormat('tr-TR', {
        dateStyle: 'full',
        timeStyle: 'long',
      }).format(new Date().getTime()),
    });
    setBooks(prev => [...prev, response.data]);
  };

  const deleteBookById = async id => {
    const response = await axios.delete(`http://localhost:3005/books/${id}`);
    setBooks(books.filter(book => book.id !== id));
    console.log('response of delete operation: ', response);
  };

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3005/books/${id}`, {
      title: newTitle,
    });
    console.log('response of update operation: ', response);
    const updatedBooks = books.map(book =>
      book.id !== id ? book : { ...book, ...response.data }
    );
    setBooks(updatedBooks);
  };

  const contextOperations = {
    books,
    fetchBooks,
    createBook: handleCreate,
    deleteBook: deleteBookById,
    editBook: editBookById,
  };

  return (
    <BooksContext.Provider value={contextOperations}>
      {children}
    </BooksContext.Provider>
  );
};

export default BooksContext;
