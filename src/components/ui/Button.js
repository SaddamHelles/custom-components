import React from 'react';
import classNames from 'classnames';

const Button = ({
  children,
  primary,
  secondary,
  warning,
  success,
  danger,
  outline,
  rounded,
  className,
  ...rest
}) => {
  const classes = classNames(
    className,
    'flex gap-x-2 items-center px-3 py-1.5 border',
    {
      'border-blue-500 bg-blue-500 text-white': primary,
      'border-gray-900 bg-gray-900 text-white': secondary,
      'border-yellow-400 bg-yellow-400 text-white': warning,
      'border-red-500 bg-red-500 text-white': danger,
      'border-green-500 bg-green-500 text-white': success,
      'rounded-full': rounded,
      'bg-white': outline,
      'text-blue-500': outline && primary,
      'text-gray-900': outline && secondary,
      'text-yellow-400': outline && warning,
      'text-red-500': outline && danger,
      'text-green-500e': outline && success,
    }
  );
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, warning, danger, success }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!danger) +
      Number(!!success);
    if (count > 1) {
      return new Error(
        'only one of primary, secondary, success, warning, danger can be true!'
      );
    }
  },
};

export default Button;
