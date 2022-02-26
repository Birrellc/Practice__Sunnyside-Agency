import React from 'react';
import './InfoStyles.css';

const Info = () => {
  return (
    <div className='info'>
      <div className='container'>
        <div className='content'>
          <div className='text'>
            <h3>Transform your brand</h3>
            <p>
              Transform your brand We are a full-service creative agency
              specializing in helping brands grow fast. Engage your clients
              through compelling visuals that do most of the marketing for you.
              Learn more
            </p>
            <a href=''>Learn More</a>
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
            <h3>Stand out to the right audience</h3>
            <p>
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </p>
            <a href=''>Learn More</a>
          </div>
        </div>
        <div className='content3'>
          <div className='text'>
            <h3>Graphic Design</h3>
            <p>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </div>
        </div>
        <div className='content4'>
          <div className='text'>
            <h3>Photography</h3>
            <p>
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
