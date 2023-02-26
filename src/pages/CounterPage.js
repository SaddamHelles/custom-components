import Button from '../components/ui/Button';
import { useCounter } from '../hooks/use-counter';

const CounterPage = ({ initialCount }) => {
  const { count, handleIncrement, handleDecrement } = useCounter(initialCount);
  return (
    <div>
      <h1>Count is: {count}</h1>
      <Button onClick={handleIncrement}>Increment</Button>
      <Button onClick={handleDecrement}>Decrement</Button>
    </div>
  );
};

export default CounterPage;
