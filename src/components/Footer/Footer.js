import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Iron Works Complex , Woodstock ,Cape Town</p>
        <p className="p__opensans">+27 818-517-826</p>
        <p className="p__opensans">+27 685-213-958</p>
        <p className="p__opensans">+27 679-003-436</p>
      </div>

      <div className="app__footer-links_logo">
      <h1 className="app__footer-headtext">Company Motto</h1>
        
        <p className="AIA-motto">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
       
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="A">Monday-Friday:</p>
        <p className="B">0800 hrs - 1600 hrs</p>
        <p className="C">Saturday-Sunday:</p>
        <p className="D">0700 hrs - 1400 hrs</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="AIA">2023. Developed by the Alignment Informatics Agents (AIA). All Rights reserved.</p>
    </div>
    

  </div>
);

export default Footer;