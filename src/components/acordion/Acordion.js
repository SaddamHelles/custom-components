import React, { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

const Acordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  return (
    <div className="border-x border-t rounded">
      {items.map((item, index) => {
        const isExpaned = index === expandedIndex;
        // console.clear();
        console.log('isExpaned: ', isExpaned);

        const icon = (
          <span key={item.id} className="text-2xl">
            {isExpaned ? <GoChevronDown /> : <GoChevronLeft />}
          </span>
        );

        return (
          <div key={item.id}>
            <div
              className="flex p-3 bg-gray-50 border-b items-center justify-between cursor-pointer"
              onClick={() => {
                index !== expandedIndex
                  ? setExpandedIndex(index)
                  : setExpandedIndex(-1);
              }}
            >
              {[item.label, icon]}
            </div>
            {isExpaned && <div className="border-b p-5">{item.content}</div>}
          </div>
        );
      })}
    </div>
  );
};

export default Acordion;
