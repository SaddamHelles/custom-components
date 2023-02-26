import withCounter from './withCounter';

function ClickIncrease({ counter, setCounter, name, ...rest }) {
  console.log('Value from the app component: ', rest.appValue);
  return (
    <div>
      <button onClick={setCounter}>Increase with click</button>
      <p style={{ fontSize: counter }}>
        Size of font in onClick function: {counter}
      </p>
      <p>Value of 'name' in ClickIncrease: {name}</p>
    </div>
  );
}
export default withCounter(ClickIncrease, 3);
