import React, { useRef } from 'react';
import { useBooksContext } from '../../hooks/use-books-context';

const BookEdit = ({ book, onSubmit }) => {
  const { editBook } = useBooksContext();

  const titleRef = useRef();
  const handleSubmit = e => {
    e.preventDefault();
    const newTitle = titleRef.current.value;
    onSubmit();
    editBook(book.id, newTitle);
  };
  return (
    <div>
      <form className="book-edit" onSubmit={handleSubmit}>
        <label htmlFor="book-title">Title: </label>
        <input
          className="input"
          ref={titleRef}
          type="text"
          defaultValue={book.title}
          id="book-title"
        />
        <button className="button is-primary">Save</button>
      </form>
    </div>
  );
};

export default BookEdit;
