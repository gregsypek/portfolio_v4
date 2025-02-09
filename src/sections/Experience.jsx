import { useCallback, useEffect, useState } from "react";

import { useWindowSize } from "react-use";
import { experience, skillColors } from "../constants";
import SkillBox from "../components/SkillBox";

function Experience() {
	const { width: windowWidth } = useWindowSize();
	const [skillBoxes, setSkillBoxes] = useState([]);

	const getRandomColor = () => {
		const randomIndex = Math.floor(Math.random() * skillColors.length);
		return skillColors[randomIndex];
	};

	const getRandomColumn = (maxColumn) => {
		const randomNumber = Math.random();
		const columns = Array.from({ length: maxColumn }, (_, index) => index + 1);

		const randomIndex = Math.floor(randomNumber * columns.length);
		return columns[randomIndex];
	};

	const colorSet = useCallback((skills) => {
		return skills.map(() => getRandomColor());
	}, []);

	const skillSet = useCallback(
		(skills) => {
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
		(work) => {
			const { name, desc, year, title, languages, id } = work;

			const boxSkill = {
				id,
				languages: skillSet(languages),
				name,
				desc,
				year,
				title,
			};

			return boxSkill;
		},
		[skillSet]
	);

	useEffect(() => {
		const newSkillBoxes = [];
		experience.map((work) => {
			newSkillBoxes.push(newBoxSkill(work, work.id));
		});
		if (newSkillBoxes.length) {
			setSkillBoxes(newSkillBoxes);
		}
	}, [newBoxSkill]);

	const handleSkillBoxClick = (clickedBox) => {
		const languageColors = colorSet(clickedBox.languages);

		const updatedSkillBoxes = skillBoxes.map((box) => {
			if (box.id === clickedBox.id) {
				return {
					...clickedBox,
					languages: clickedBox.languages.map((l, index) => ({
						...l,
						colors: languageColors[index],
						column:
							windowWidth > 1000 ? getRandomColumn(3) : getRandomColumn(2),
						row: index + 1,
					})),
				};
			} else {
				return box;
			}
		});

		setSkillBoxes(updatedSkillBoxes);
	};

	return (
		<div className="max-container min-h-screen grid h-auto mx-auto grid-rows-[150px_repeat(3,minmax(1fr,auto))]">
			<div>
				<h1 className="relative z-20 mx-auto section-header margin-y">
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
							className="my-12 "
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Experience;
