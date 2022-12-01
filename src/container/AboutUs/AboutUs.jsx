import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Imperial Registrars is a professional services Firm registered and established in Kenya to provide invaluable and holistic professional services to various organizations with various needs. We specialize in solving the complexities of company secretarial practice, governance and corporate advisory services. </p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our Culture</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">We partner with our clients in realizing in realizing their corprate goals we accomplish this by continualy developing our knowledge resources skills and systems in a rewarding environment that encourages teamwork,innovation and exellence.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
