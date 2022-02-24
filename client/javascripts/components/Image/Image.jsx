import React from 'react';

const Image = ({src, alt, className='', width='370', height='235', onClick=() => {}}) => {
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