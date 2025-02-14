import { useCallback, useEffect, useState } from 'react';

import { useWindowSize } from 'react-use';
import { experience, skillColors } from '../constants';
import SkillBox from '../components/SkillBox';
import {
  ColorType,
  ExperienceType,
  LanguageBoxType,
  SkillBoxType,
} from '../types/types';

function Experience() {
  const { width: windowWidth } = useWindowSize();
  const [skillBoxes, setSkillBoxes] = useState<SkillBoxType[]>([]);

  const getRandomColor = (): ColorType => {
    const randomIndex = Math.floor(Math.random() * skillColors.length);
    return skillColors[randomIndex];
  };

  const getRandomColumn = (maxColumn: number): number => {
    const randomNumber = Math.random();
    const columns = Array.from({ length: maxColumn }, (_, index) => index + 1);

    const randomIndex = Math.floor(randomNumber * columns.length);
    return columns[randomIndex];
  };

  const colorSet = useCallback((skills: string[]): ColorType[] => {
    return skills.map(() => getRandomColor());
  }, []);

  const skillSet = useCallback(
    (skills: string[]): LanguageBoxType[] => {
      const languageColors = colorSet(skills);

      const test = skills.map((name, langIndex) => {
        return {
          skillId: langIndex,
          name,
          colors: languageColors[langIndex],
          // backgroundColor: languageColors[langIndex].background,
          column: windowWidth > 1000 ? getRandomColumn(3) : getRandomColumn(2),
          row: langIndex + 1,
          // border: lang.border,
        };
      });
      return test;
    },
    [colorSet, windowWidth]
  );

  const newBoxSkill = useCallback(
    (work: ExperienceType): SkillBoxType => {
      const { name, desc, year, title, languages, id } = work;

      return {
        id,
        languages: skillSet(languages),
        name,
        desc,
        year,
        title,
      };
    },
    [skillSet]
  );

  useEffect(() => {
    const newSkillBoxes: SkillBoxType[] = experience.map(newBoxSkill);
    setSkillBoxes(newSkillBoxes);
  }, [newBoxSkill]);

  const handleSkillBoxClick = useCallback(
    (clickedBox: SkillBoxType) => {
      const languageColors = colorSet(
        clickedBox.languages.map((lang) => lang.name)
      );

      const updatedSkillBoxes: SkillBoxType[] = skillBoxes.map((box) =>
        box.id === clickedBox.id
          ? {
              ...clickedBox,
              languages: clickedBox.languages.map((l, index) => ({
                ...l,
                colors: languageColors[index],
                column:
                  windowWidth > 1000 ? getRandomColumn(3) : getRandomColumn(2),
                row: index + 1,
              })),
            }
          : box
      );

      setSkillBoxes(updatedSkillBoxes);
    },
    [colorSet, skillBoxes, windowWidth]
  );

  return (
    <div className="max-container md:lines-gradient mx-auto grid h-auto min-h-screen grid-rows-[150px_repeat(3,minmax(1fr,auto))]">
      <div>
        <h1 className="section-header margin-y relative z-20 mx-auto">
          Experiences & Skills
        </h1>
      </div>
      <div className="margin-y">
        {skillBoxes.map((box) => {
          return (
            <SkillBox
              box={box}
              key={box.id}
              onClick={() => handleSkillBoxClick(box)}
              //  "
            />
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
