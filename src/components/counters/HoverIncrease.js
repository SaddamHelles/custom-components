import withCounter from './withCounter';

function HoverIncrease({
  counter: fontSize,
  setCounter: setFontSize,
  name,
  ...rest
}) {
  console.log('Value from the app component: ', rest.appValue);
  return (
    <div>
      <button onMouseOver={setFontSize}>Increase on hover</button>
      <p style={{ fontSize }}>
        Size of font in onMouseOver function: {fontSize}
      </p>
      <p>Value of 'name' in HoverIncrease: {name}</p>
    </div>
  );
}
export default withCounter(HoverIncrease, 6);
