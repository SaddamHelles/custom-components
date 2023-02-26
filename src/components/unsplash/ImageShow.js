import React from 'react';

const ImageShow = ({ imgUrl, title }) => {
  return (
    <div>
      <img src={imgUrl} alt={title} width="300px" />
    </div>
  );
};

export default ImageShow;
