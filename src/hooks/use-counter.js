import { useState, useEffect } from 'react';

function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount);
  useEffect(() => {
    console.log(count);
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return { count, handleIncrement, handleDecrement };
}

export { useCounter };
