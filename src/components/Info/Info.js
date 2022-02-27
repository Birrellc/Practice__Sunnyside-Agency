import React from 'react';
import './InfoStyles.css';

const Info = () => {
  return (
    <div className='info'>
      <div className='container'>
        <div className='content'>
          <div className='text'>
            <h2 className='info-heading-one'>Transform your brand</h2>
            <p className='info-text'>
              Transform your brand We are a full-service creative agency
              specializing in helping brands grow fast. Engage your clients
              through compelling visuals that do most of the marketing for you.
              Learn more
            </p>
            <a href='' className='link'>
              Learn More
            </a>
          </div>
          <div className='image'>
            <img src={require('./images/image-transform.jpg')} alt='' />
          </div>
        </div>
        <div className='content2'>
          <div className='image'>
            <img src={require('./images/image-stand-out.jpg')} alt='' />
          </div>
          <div className='text'>
            <h2 className='info-heading-one'>
              Stand out to the right audience
            </h2>
            <p className='info-text'>
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </p>
            <a href='' className='link'>
              Learn More
            </a>
          </div>
        </div>
        <div className='content3'>
          <div className='text'>
            <h3 className='info-heading-two'>Graphic Design</h3>
            <p className='graphic-text'>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </div>
        </div>
        <div className='content4'>
          <div className='text'>
            <h3 className='info-heading-three'>Photography</h3>
            <p className='photography-text'>
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
