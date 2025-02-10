import { useCallback, useRef, useState } from 'react';
import Button from './Button';
import { LuArrowLeftCircle, LuGithub } from 'react-icons/lu';
import { LuArrowRightCircle } from 'react-icons/lu';
import { motion, useInView, UseInViewOptions } from 'framer-motion';
import { ProjectType } from '../types/types';

const tagVariants = {
  initial: {
    x: 0,
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

const tagItemVariants = {
  initial: {
    x: 20,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

interface ProjectProps {
  project: ProjectType;
}
//  const Project: React.FC<ProjectProps> = ({ project }) => {
const Project = ({ project }: ProjectProps) => {
  // Explicitly specify that this ref will reference an Element or null
  const ref = useRef<HTMLUListElement | null>(null);

  const isInView = useInView(ref, { threshold: 0.5 } as UseInViewOptions);
  // const isInView = useInView(ref, { once: true });

  const { title, images, desc, tags, live, github } = project;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }, [images.length]);

  const isSingleImage = images.length <= 1;

  return (
    <div className="hero-gradient relative before:translate-y-[20%] before:rotate-180 before:opacity-35 sm:before:scale-125">
      <div className="margin-y relative z-20 flex flex-col lg:flex-row lg:justify-between">
        <div className="my-2 flex justify-between lg:hidden">
          <h4 className="section-title font-bold uppercase text-blue-grey lg:mx-0">
            {title}
          </h4>
          <a href={`${github}`} target="_blank" rel="noreferrer">
            <span className="group">
              <LuGithub
                size={24}
                stroke="#e8cbcb"
                strokeWidth="1"
                className="group-hover:stroke-primary-red"
              />
            </span>
          </a>
        </div>
        <motion.ul
          className="my-2 flex flex-wrap gap-2 text-xs font-bold uppercase text-dark-grey md:my-5 md:text-base lg:mx-0 lg:my-10 lg:gap-3 lg:text-lg"
          variants={tagVariants}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          whileInView="animate"
          ref={ref}
        >
          {tags.length > 0
            ? tags.map((tag) => (
                <motion.li key={tag} variants={tagItemVariants}>
                  {tag}
                </motion.li>
              ))
            : null}
        </motion.ul>
        <div className="mx-auto my-auto hidden gap-5 lg:mx-0 lg:flex">
          <a
            onClick={isSingleImage ? undefined : handleNext}
            className={` ${isSingleImage ? 'opacity-50 hover:cursor-not-allowed' : 'hover:cursor-pointer'}`}
          >
            <div className="group">
              <LuArrowLeftCircle
                size={32}
                stroke="#AEAEAE"
                strokeWidth={1}
                className="group-hover:stroke-[#e7e4e4]"
              />
            </div>
          </a>
          <a
            onClick={isSingleImage ? undefined : handlePrev}
            // disabled={isSingleImage}
            className={` ${isSingleImage ? 'opacity-50 hover:cursor-not-allowed' : 'hover:cursor-pointer'}`}
          >
            <div className="group">
              <LuArrowRightCircle
                size={32}
                stroke="#AEAEAE"
                strokeWidth={1}
                className="group-hover:stroke-[#e7e4e4]"
              />
            </div>
          </a>
        </div>
      </div>
      <div className="relative z-20 flex flex-1 flex-col gap-5 lg:grid lg:grid-cols-[1fr_2fr]">
        <div className="order-2 flex flex-col items-center justify-between gap-4 rounded-lg border-tertiary-blue px-2 md:gap-5 md:py-5 lg:order-none lg:items-start lg:gap-10 lg:px-8 lg:py-10">
          <div className="relative flex flex-1 flex-col gap-3 lg:gap-10">
            <div className="hidden justify-between lg:flex">
              <h4 className="section-title mx-auto font-bold uppercase text-light-grey lg:mx-0">
                {title}
              </h4>
              <a href={`${github}`} target="_blank" rel="noreferrer">
                <span className="group">
                  <LuGithub
                    size={32}
                    stroke="#e8cbcb"
                    strokeWidth="1"
                    className="group-hover:stroke-white"
                  />
                </span>
              </a>
            </div>
            <div className="mx-auto my-auto flex gap-5 lg:mx-0 lg:hidden">
              <a
                onClick={isSingleImage ? undefined : handleNext}
                className={` ${isSingleImage ? 'opacity-50 hover:cursor-not-allowed' : 'hover:cursor-pointer'}`}
              >
                <div className="group">
                  <LuArrowLeftCircle
                    size={32}
                    stroke="#AEAEAE"
                    strokeWidth={1}
                    className="group-hover:stroke-[#e7e4e4]"
                  />
                </div>
              </a>
              <a
                onClick={isSingleImage ? undefined : handlePrev}
                className={` ${isSingleImage ? 'opacity-50 hover:cursor-not-allowed' : 'hover:cursor-pointer'}`}
              >
                <div className="group">
                  <LuArrowRightCircle
                    size={32}
                    stroke="#AEAEAE"
                    strokeWidth={1}
                    className="group-hover:stroke-[#e7e4e4]"
                  />
                </div>
              </a>
            </div>
            <p className="paragraph text-gray">{desc}</p>
          </div>
          <div>
            <Button type="red" to={live}>
              See Demo
            </Button>
          </div>
        </div>
        <div className="order-1 h-[350px] rounded-xl border-[2px] border-pink-grey p-1 transition-all sm:h-[450px] md:p-5 lg:order-none lg:h-[550px]">
          <img
            className="duration-50 h-full w-full rounded-xl object-cover hover:rounded-xl"
            src={images[currentImageIndex]}
            alt="project screen "
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
