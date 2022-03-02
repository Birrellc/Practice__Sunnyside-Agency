import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <div className='testimonials'>
      <div className='container'>
        <div className='content'>
          <div className='testimonial-header'>
            <h3>CLIENT TESTIMONIALS</h3>
          </div>
          <div className='testimonial-group'>
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
              <div>
                <p className='testimonial-name'>Emily R. </p>
                <p className='testimonial-role'>Marketing Director</p>
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
              <div>
                <p className='testimonial-name'>Thomas S. </p>
                <p className='testimonial-role'>Chief Operating Officer</p>
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
              <div>
                <p className='testimonial-name'>Jennie F. </p>
                <p className='testimonial-role'>Business Owner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
