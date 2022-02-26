import React from 'react';
import './GalleryStyles.css';

const Gallery = () => {
  return (
    <div className='gallery'>
      <div className='container'>
        <div className='content'>
          <img src={require('./images/image-gallery-milkbottles.jpg')} alt='' />
          <img src={require('./images/image-gallery-orange.jpg')} alt='' />
          <img src={require('./images/image-gallery-cone.jpg')} alt='' />
          <img src={require('./images/image-gallery-sugar-cubes.jpg')} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
