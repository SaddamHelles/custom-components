import * as React from 'react';

const SearchBar = ({ setSearchTerm, onSubmit }) => {
  const [term, setTerm] = React.useState('');
  const handleSubmit = event => {
    event.preventDefault();
    console.log('object: ', term);
    onSubmit(term);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search-about">Search About: </label>
        <input
          value={term}
          // onChange={e => setSearchTerm(e.target.value)}
          onChange={e => setTerm(e.target.value)}
          type="text"
          name="search-about"
          placeholder="Search..."
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
