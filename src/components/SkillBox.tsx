import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ExperienceType, SkillBoxType } from '../types/types';
const skillsVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    y: 0,
    scale: 1,

    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
};

function SkillBox({
  box,
  onClick,
}: {
  box: Partial<SkillBoxType>;
  onClick: (box: Partial<SkillBoxType>) => void;
}) {
  const { year, name, languages, desc } = box;
  const handleSkillBoxClick = () => {
    onClick(box);
  };
  const rightContainerRef = useRef(null);
  return (
    <div className="relative z-10 my-12 flex flex-col items-start gap-5 p-6 sm:px-6 md:px-8">
      {/* bg-background-card */}
      <div className="p absolute bottom-0 left-0 top-0 z-10 h-auto rounded-xl md:w-[80%] lg:w-[85%]"></div>
      <div className="flex w-full">
        <div className="relative z-20 flex flex-1 flex-row justify-between font-bold sm:mr-8 md:mr-12 lg:mr-6">
          <p className="caption-top self-start text-3xl uppercase">{name}</p>

          <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-light-grey text-sm font-bold text-black shadow-md lg:h-16 lg:w-16 lg:text-lg">
            {year}
            {/* First ring */}
            <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-white to-blue-grey opacity-50 blur-md"></div>
            {/* Second ring */}
            <div className="absolute inset-0 animate-ping rounded-full bg-gradient-to-r from-blue-400 to-blue-grey opacity-30 blur-lg"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-base sm:flex-row md:gap-20">
        <div className="paragraph relative z-20 order-2 flex-1 text-gray sm:order-1">
          {desc}
        </div>
        <div
          className="relative z-20 order-1 flex grid-cols-[120px_120px_120px] grid-rows-[50px_50px] flex-wrap gap-0 sm:order-2 sm:flex-col sm:flex-nowrap lg:grid"
          ref={rightContainerRef}
        >
          {languages?.map((lang) => {
            const { background, color, border } = lang.colors;

            return (
              <motion.div
                variants={skillsVariants}
                initial="initial"
                whileInView="animate"
                key={lang.name}
                className={`&& border "border-${border} border-x" } m-2 flex h-[30px] w-[100px] items-center justify-center rounded-md text-xs hover:cursor-pointer md:h-[50px] md:w-[120px] md:text-base`}
                style={{
                  backgroundColor: background,
                  color: color,
                  gridColumn: lang.column,
                  gridRow: lang.row,
                  borderWidth: '0.5px',
                  display: 'flex',
                  flexDirection: 'column',
                  paddingBlock: '5px',
                  transition: 'all 0.6s ease-in-out',
                }}
                onClick={handleSkillBoxClick}
              >
                {lang.name}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SkillBox;
