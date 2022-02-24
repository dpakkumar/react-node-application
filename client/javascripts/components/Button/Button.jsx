import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Button.scss';

const Button = ({className, children, onClick}) => {
  return (
    <>
      <button
        className={classnames('default-button', className)}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};


Button.defaultProps = {
  className: undefined,
  onClick: () => {},
};

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;