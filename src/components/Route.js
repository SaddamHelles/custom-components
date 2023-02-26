import React from 'react';
import useNavigateContext from '../hooks/use-navigate-context';

const Route = ({ path, children }) => {
  const { currentPath } = useNavigateContext();
  console.log('currentPath: ', currentPath);

  return currentPath === path ? <div>{children}</div> : <></>;
};

export default Route;
