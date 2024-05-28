import React from 'react';
// import data
import { aboutData } from '../data';
// import motion
import { motion } from 'framer-motion';
// import variants
import { staggerContainer, fadeIn, plateVariants } from '../variants';

const About = () => {
  // destructure data
  const { pretitle, title, subtitle, image, btnText } = aboutData;
  return (
    <section className=' min-h-[620px]'>
      <div className='container mx-auto min-h-[620px]'>
        {/* text & image wrapper */}
        <motion.div className=' min-h-[620px] flex flex-col lg:flex-row items-center'
          variants={staggerContainer}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}

        >

          {/* text */}
          <motion.div
            variants={fadeIn('right', 'tween', 0.2, 1.8)}
            className='flex-1 text-center lg:text-left'
          >

            <div className='pretitle'>{pretitle}</div>
            <h2 className='h2 capitalize'>{title}</h2>
            <p className='mb-8 max0w-{560px}'>{subtitle}</p>
            <button className='btn capitalize mx-auto lg:mx-0'>
              {btnText}
            </button>
          </motion.div>
          {/* image */}
          <motion.div
            variants={plateVariants}
            className='-mb-[300px] -mr-[186px] z-10'>
            <img src={image} alt='' />
          </motion.div>
        </motion.div>

      </div>

    </section>
  );
};

export default About;
