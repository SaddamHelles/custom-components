import React, { useState } from 'react';
import BookEdit from './BookEdit';
import { useBooksContext } from '../../hooks/use-books-context';

const BookShow = ({ book }) => {
  const { deleteBook } = useBooksContext();

  const [showEdit, setShowEdite] = useState(false);
  const handleDelete = id => {
    deleteBook(id);
  };

  const handleEdit = () => {
    setShowEdite(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdite(false);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }
  return (
    <div className="book-show">
      <img
        src={`https://picsum.photos/seed/${book.id}/300/200`}
        alt={book.title}
      />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEdit}>
          Edit
        </button>
        <button className="delete" onClick={() => handleDelete(book.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
