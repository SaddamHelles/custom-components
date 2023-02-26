import React from 'react';

const Appbar = props => {
  return (
    <header>
      <nav>
        <ul>
          <li>{props.color}</li>
          <li>{props.name}</li>
          <li>{props.title}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Appbar;
