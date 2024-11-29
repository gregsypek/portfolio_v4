import { useEffect, useState } from "react";
import "./experience.scss";

import { useWindowSize } from "react-use";
import { experience } from "../constants";
import SkillBox from "../components/SkillBox";

function Experience() {
	const { width: windowWidth } = useWindowSize();
	const [skillBoxes, setSkillBoxes] = useState([]);

	const skillColors = [
		{ background: "transparent", color: "#e7e4e4", border: "#e7e4e4" },
		{ background: "#18457C", color: "#D2D2D2", border: "transparent" },
		{ background: "#892066", color: "#D2D2D2", border: "transparent" },
		{ background: "transparent", color: "#e7e4e4", border: "transparent" },
		{ background: "#18457C", color: "black", border: "transparent" },
		{ background: "#9b8595", color: "#0A0C10", border: "transparent" },
	];

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

	const colorSet = (skills) => {
		return skills.map(() => getRandomColor());
	};

	const skillSet = (skills) => {
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
	};

	const newBoxSkill = (work) => {
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
	};

	useEffect(() => {
		const newSkillBoxes = [];
		experience.map((work) => {
			newSkillBoxes.push(newBoxSkill(work, work.id));
		});
		if (newSkillBoxes.length) {
			setSkillBoxes(newSkillBoxes);
		}
	}, []);

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
		<div className="max-container min-h-screen gap-8 grid h-auto mx-auto grid-rows-[150px_repeat(3,minmax(1fr,auto))]">
			<div className=" ">
				<h1 className="section-header mx-auto my-16">Experiences & Skills</h1>
			</div>
			{skillBoxes.map((box) => {
				return (
					<SkillBox
						box={box}
						key={box.id}
						onClick={() => handleSkillBoxClick(box)}
						className="my-12"
					/>
				);
			})}
		</div>
	);
}

export default Experience;
