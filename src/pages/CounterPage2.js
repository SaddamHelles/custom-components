import React, { useReducer } from 'react';
import preduce from 'immer';
import Panel from '../components/Panel';
import Button from '../components/ui/Button';

const reducer = (state, action) => {
  const { type, payload } = action;
  const { count, valueToAdd } = state;
  switch (type) {
    case 'ToAdd':
      state.valueToAdd = payload;
      break;
    case 'INC':
      state.count = count + valueToAdd;
      break;
    case 'DEC':
      state.count = count - valueToAdd;
      break;
    default:
      return state;
  }
};
const CounterPage2 = () => {
  //   const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(preduce(reducer), {
    count: 10,
    valueToAdd: 1,
  });

  const handleSubmit = event => {
    event.preventDefault();

    dispatch({ type: 'INC' });
  };

  const handleChange = event => {
    dispatch({ type: 'ToAdd', payload: +event.target.value });
    console.log('valueToAdd: ', state.valueToAdd);
  };

  const handleClick = () => {
    dispatch({ type: 'DEC' });
  };
  return (
    <Panel className="m-3">
      <h3 className="text-lg">CounterPage2</h3>
      Count is: {state.count}
      <div className="flex flex-row">
        <Button onClick={() => dispatch({ type: 'INC' })}>+</Button>
        <Button onClick={handleClick}>-</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="add">Add a lot!</label>
        <input
          onChange={handleChange}
          value={state.valueToAdd || ''}
          type="number"
          id="add"
          className="p-1 m-3 bg-gry-50 border border-gray-300"
        />
      </form>
    </Panel>
  );
};

export default CounterPage2;
