function SlidingText({
	skills,
	currentSkillIndex,
}: {
	skills: string[];
	currentSkillIndex: number;
}) {
	return (
		<>
			{skills.map((skill, index) => (
				<div
					key={index}
					style={{
						transition: "opacity 1.5s ease-in-out",
					}}
				>
					<p
						key={index}
						style={{
							display: index === currentSkillIndex ? "block" : "none",
						}}
					>
						{skill}
					</p>
				</div>
			))}
		</>
	);
}

export default SlidingText;
