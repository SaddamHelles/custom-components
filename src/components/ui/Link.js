import React from 'react';
import classNames from 'classnames';
import useNavigate from '../../hooks/use-navigate-context';

const Link = ({ to, children, className, ...rest }) => {
  console.log('to: ', to);
  const { navigate, currentPath } = useNavigate();

  const classes = classNames(
    currentPath === to
      ? 'text-blue-700 font-bold border-l-4 border-blue-700 pl-2'
      : 'text-blue-500',
    className
  );

  const handleClick = event => {
    if (event.metaKey || event.ctrlKey) return;
    event.preventDefault();
    navigate(to);
  };
  return (
    <a {...rest} className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
