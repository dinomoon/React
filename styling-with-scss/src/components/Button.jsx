import React from 'react';
import './Button.scss'

function Button({children, size, color}) {
  return (
    <button className={['Button', size, color].join(' ')}>{children}</button>
  );
}

Button.defaultProps = {
  size: 'medium',
  color: 'blue'
}

export default Button;