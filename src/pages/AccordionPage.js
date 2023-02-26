import React from 'react';
import Acordion from '../components/acordion/Acordion';

const DUMMY_DATA = [
  {
    id: 'i1',
    label: 'Seraj',
    content: 'Seraj is the mose beautefull kid in the world!',
  },
  { id: 'i2', label: 'Feras', content: 'Feras is my lettel borther' },
  { id: 'i3', label: 'Ali', content: 'Ali is a good person in Gaza city!' },
];
const AccordionPage = () => {
  return (
    <div>
      {true}
      <Acordion items={DUMMY_DATA} />
    </div>
  );
};

export default AccordionPage;
