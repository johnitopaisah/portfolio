import React from 'react'
import { motion, transform } from 'framer-motion';

import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut' 
    }
  }
}

const Header = () => {
  return (
    <div id="home" className="app__header app_flex">
      <motion.div 
        whileInView={{ x: [-100, 0], opacity: [0, 1]}}
        transition={{ duration: 1 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app_flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">John</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
            <p className="p-text">AWS-Cloud Practitioner</p>
            <p className="p-text"> Embedded Software Engineer</p>
          </div>
        </div>

      </motion.div>

      <motion.div 
        whileInView={{ opacity: [0, 1]}}
        transition={{ duration: 1, delayChildren: 1 }}
        className="app__header-img"
      >
        <img src={ images.profile } alt="profile_bg" />
        <motion.img 
          whileInView={{ scale: [0, 1]}}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle} 
          alt="profile_cicle"
          className="overlay_circle" 
        />

      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circle"
      >
        {[ images.node, images.django, images.spring].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle"/>

          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Header