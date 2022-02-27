import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, alt, className, width, height }) => {
  return (
    <img
      src={`/pages/assets/images/${src}`}
      alt={alt || ''}
      width={width}
      height={height}
      className={className}
      onClick={onClick}
    />
  )
};

export default Image;

Image.defaultProps = {
  alt: '',
  className: '',
  height: '235',
  src: '',
  width: '370',
  onClick: () => {},
};

Image.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  height: PropTypes.string,
  src: PropTypes.string,
  width: PropTypes.string,
  onClick: PropTypes.func,
};