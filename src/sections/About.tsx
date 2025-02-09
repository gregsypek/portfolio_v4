import { Link as ScrollLink } from 'react-scroll';
import Button from '../components/Button';
import { motion, useInView, UseInViewOptions } from 'framer-motion';
import { aboutInfo } from '../constants';
import { useRef } from 'react';

const textVariants = {
  initial: {
    x: -200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const About = () => {
  const ref = useRef<HTMLInputElement | null>(null);
  const isInView = useInView(ref, { threshold: 0.5 } as UseInViewOptions);

  return (
    <div className="max-container about-gradient relative before:-translate-x-[15%] before:-translate-y-[30%] lg:before:-translate-x-[40%]">
      <div className="inline-block aspect-square rounded-md border-2 border-white md:hidden">
        <h1 className="section-header relative z-20 p-4 text-left align-middle">
          About <br /> Me
        </h1>
      </div>
      <div className="my-auto flex flex-col gap-[3vw] max-md:my-2 max-md:space-y-5 md:grid md:gap-[1.5vw] lg:gap-[2vw]">
        {/* SQUARE 1  */}
        <div className="about-square1">
          <h1 className="relative z-20 translate-x-10 bg-text-gradient bg-clip-text p-4 text-left align-middle text-[36px] font-bold leading-10 text-transparent sm:text-[48px] sm:leading-none md:text-[68px] xl:text-8xl">
            About <br /> Me
          </h1>
        </div>
        {/* SQUARE 2  */}
        <div className="about-square2"></div>

        {aboutInfo.map((info) => (
          <motion.p
            variants={textVariants}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            whileInView="animate"
            ref={ref}
            key={info.id}
            className={`${info.className} text-dark-grey`}
          >
            {info.content}
          </motion.p>
        ))}

        <div className="relative z-20 col-span-5 col-start-6 row-start-6 mt-12 flex justify-end">
          <ScrollLink to="Projects" smooth={true} duration={500}>
            <Button type="blue">See the Latest Works</Button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default About;
