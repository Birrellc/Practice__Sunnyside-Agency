import React from 'react';
import './GalleryStyles.css';

const Gallery = () => {
  return (
    <div className='gallery'>
      <div className='container'>
        <div className='gallery-content'>
          <img
            className=''
            src={require('./images/image-gallery-milkbottles.jpg')}
            alt=''
          />
          <img
            className=''
            src={require('./images/image-gallery-orange.jpg')}
            alt=''
          />
          <img
            className=''
            src={require('./images/image-gallery-cone.jpg')}
            alt=''
          />
          <img
            className=''
            src={require('./images/image-gallery-sugar-cubes.jpg')}
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
