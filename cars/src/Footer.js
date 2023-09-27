import React from 'react';
import './footer.css';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

function Footer() {
  return (
    <>
      <div className='footer'>
        <footer>
          <div className="social-media">
            <div className="social-media-item">

            
              <FaFacebook className='icon Facebook' />
              <a
                href="https://www.facebook.com/your-page-url"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </div>
            <div className="social-media-item">
              <FaInstagram className='icon Instagram' />
              <a
                href="https://www.instagram.com/your-page-url"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
            <div className="social-media-item">
              <FaLinkedin className='icon Linkedin' />
              <a
                href="https://www.linkedin.com/in/your-profile-url"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
            <div className="social-media-item">
              <FaTwitter className='icon Twitter' />
              <a
                href="https://twitter.com/your-twitter-url"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>
          </div>

          
          <div className="contact-info">
            <div className="contact-item">
              <MdEmail className='icon Email' />
              <p>carworld@mail.com</p>
            </div>
            <div className="contact-item">
              <MdPhone className='icon Phone' />
              <p>+1 (123) 456-7890</p>
            </div>
            <div className="contact-item">
              <MdLocationOn className='icon Location' />
              <p>123 Car Street, City</p>
            </div>
            </div>

          <div className="footer-text">
            <p>&copy; 2023 Car World. All rights reserved.</p>
          </div>
        </footer>
      </div>

      
    </>
  );
}

export default Footer;
