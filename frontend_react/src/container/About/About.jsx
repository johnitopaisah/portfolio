import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';

// import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
// import { urlFor, client } from '../../client';

const abouts = [
  {title: 'Web Design', description: 'I am good at design', imgUrl: images.about01},
  {title: 'Web Design', description: 'I am good at design', imgUrl: images.about02},
  {title: 'Web Design', description: 'I am good at design', imgUrl: images.about03},
  {title: 'Web Design', description: 'I am good at design', imgUrl: images.about04}
]

const About = () => {
  // const [abouts, setAbouts] = useState([]);

  // useEffect(() => {
  //   const query = '*[_type == "abouts"]';

  //   client.fetch(query).then((data) => {
  //     setAbouts(data);
  //   });
  // }, []);

  return (
    <>
      <h2 className="head-text">Effective design is more than aesthetics; <span>it’s a fusion of functionality, scalability,</span> <br />and user-centric experience that  <span>drives sustainable business value.</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title}/>
            {/* <img src={urlFor(about.imgUrl)} alt={about.title} /> */}
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};


export default About;
// export default AppWrap(
//   MotionWrap(About, 'app__about'),
//   'about',
//   'app__whitebg',
// );