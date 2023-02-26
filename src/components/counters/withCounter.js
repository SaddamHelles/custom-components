import React, { useState } from 'react';

const UpdatedComponent = (OriginalComponent, increaseCount) => {
  function NewComponent(props) {
    const [counter, setCounter] = useState(10);
    return (
      <OriginalComponent
        counter={counter}
        setCounter={() => setCounter(prev => prev + increaseCount)}
        name="Seraj Helles"
        {...props}
      />
    );
  }
  return NewComponent;
};

export default UpdatedComponent;
