import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <div className='testimonials'>
      <div className='container'>
        <div className='content'>
          <div>
            <h3>Client Testimonials</h3>
          </div>
          <div className='testimonial'>
            <div className='testimonial-image'>
              <img src={require('./images/image-emily.jpg')} alt='' />
            </div>
            <div className='testimonial-test'>
              <p>
                We put our trust in Sunnyside and they delivered, making sure
                our needs were met and deadlines were always hit.
              </p>
            </div>
            <div className='testimonial-name'>
              <p>Emily R. </p>
              <p>Marketing Director</p>
            </div>
          </div>
          <div className='testimonial'>
            <div className='testimonial-image'>
              <img src={require('./images/image-thomas.jpg')} alt='' />
            </div>
            <div className='testimonial-test'>
              <p>
                Sunnyside’s enthusiasm coupled with their keen interest in our
                brand’s success made it a satisfying and enjoyable experience.
              </p>
            </div>
            <div className='testimonial-name'>
              <p>Thomas S. </p>
              <p>Chief Operating Officer</p>
            </div>
          </div>
          <div className='testimonial'>
            <div className='testimonial-image'>
              <img src={require('./images/image-jennie.jpg')} alt='' />
            </div>
            <div className='testimonial-test'>
              <p>
                Incredible end result! Our sales increased over 400% when we
                worked with Sunnyside. Highly recommended!
              </p>
            </div>
            <div className='testimonial-name'>
              <p>Jennie F.. </p>
              <p>Business Owner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
