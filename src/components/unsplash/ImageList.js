import React, { useEffect, useState } from 'react';
import ImageShow from './ImageShow';
import { searchImages } from '../../api';

const ImageList = ({ images }) => {
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await searchImages(searchTerm);
  //     // console.log('response: ', response);

  //     setImages(response);
  //   }

  //   try {
  //     fetchData();
  //   } catch (er) {
  //     console.log('error msg: ', er);
  //   }
  // }, [searchTerm]);
  return (
    <div>
      {images.map(image => (
        <ImageShow
          key={image.id}
          imgUrl={image.urls.small}
          title={image.user.name}
        />
      ))}
    </div>
  );
};

export default ImageList;
