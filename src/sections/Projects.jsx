import { projects } from "../constants";
import Project from "../components/Project";
const Projects = () => {
	return (
		<div className="max-container h-full flex flex-col relative z-20">
			<h1 className="section-header mx-auto lg:mx-0">My Websites & Apps</h1>
			{projects.map((project) => (
				<Project key={project.id} project={project} />
			))}
		</div>
	);
};

export default Projects;
