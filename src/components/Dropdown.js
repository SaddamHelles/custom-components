import React, { useRef, useEffect, useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';
import Panel from './Panel';

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  const handleOpenMenu = event => {
    // event.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleOptionClick = option => {
    onChange(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const closeMenu = event => {
      if (!dropdownRef.current?.contains(event.target)) setIsOpen(false);
    };
    document.addEventListener('click', closeMenu, true);

    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="w-48 relative">
      <Panel
        className=" cursor-pointer flex items-center justify-between"
        onClick={event => handleOpenMenu(event)}
      >
        {value?.label || 'Select...'}
        <span>{isOpen ? <GoChevronDown /> : <GoChevronLeft />}</span>
      </Panel>

      {isOpen && (
        <Panel className="absolute top-full">
          {options.map((option, index) => (
            <div
              className="hover:bg-sky-100 rounded p-1 cursor-pointer"
              onClick={() => handleOptionClick(option)}
              key={option.value}
            >
              {option.label}
            </div>
          ))}
        </Panel>
      )}
    </div>
  );
};

export default Dropdown;
