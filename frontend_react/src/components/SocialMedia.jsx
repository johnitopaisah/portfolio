import React from 'react';
import { BsLinkedin, BsTwitter, BsGithub, BsMedium } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/johnitopaisah" target="_blank" rel="noopener noreferrer">
        <BsLinkedin />
      </a>
    </div>
    
    <div>
      <a href="https://github.com/johnitopaisah" target="_blank" rel="noopener noreferrer">
        <BsGithub />
      </a>
    </div>

    <div>
      <a href="https://medium.com/@isahjohna" target="_blank" rel="noopener noreferrer">
        <BsMedium />
      </a>
    </div>

    <div>
      <a href="https://twitter.com/isah_johna" target="_blank" rel="noopener noreferrer">
        <BsTwitter />
      </a>
    </div>

    <div>
      <a href="https://www.facebook.com/profile.php?id=100006873405485" target="_blank" rel="noopener noreferrer">
        <FaFacebookF />
      </a>
    </div>

  </div>  
);

export default SocialMedia;
