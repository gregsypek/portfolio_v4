import { projects } from "../constants";
import Project from "../components/Project";
const Projects = () => {
	return (
		<div className="max-container margin-y  h-full flex flex-col relative z-20">
			<h1 className="section-header ">My Websites & Apps</h1>
			{projects.map((project, index) => (
				<div key={project.id}>
					<Project project={project} />
					{index != projects.length - 1 && (
						<hr className="margin-y xl:opacity-0" />
					)}
				</div>
			))}
		</div>
	);
};

export default Projects;
