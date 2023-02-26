import React, { useState } from 'react';
import Dropdown from '../components/Dropdown';

const options = [
  { label: 'Red', value: 'red' },
  { label: 'Green', value: 'green' },
  { label: 'Black', value: 'black' },
  { label: 'Yellow', value: 'yellow' },
];

const DropDownPage = () => {
  const [selection, setSelection] = useState(null);

  const hendleSelection = option => {
    setSelection(option);
    console.log('option: ', option);
  };
  return (
    <div className="flex">
      <Dropdown
        options={options}
        onChange={hendleSelection}
        value={selection}
      />
    </div>
  );
};

export default DropDownPage;
