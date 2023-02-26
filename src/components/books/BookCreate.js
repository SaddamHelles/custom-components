import React, { useState } from 'react';
import { useBooksContext } from '../../hooks/use-books-context';

const BookCreate = () => {
  const [title, setTitle] = useState('');
  const { createBook } = useBooksContext();

  const handleSubmit = event => {
    event.preventDefault();
    createBook(title);
    setTitle('');
  };
  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          className="input"
          onChange={e => setTitle(e.target.value)}
          value={title}
          name="title"
        />
        <button className="button">Create!</button>
      </form>
    </div>
  );
};

export default BookCreate;
