import { projects } from "../constants";
import Project from "../components/Project";
const Projects = () => {
	return (
		<div className="max-container h-full flex flex-col relative z-20">
			<h1 className="section-header mx-auto lg:mx-0 mb-8">
				My Websites & Apps
			</h1>
			{projects.map((project, index) => (
				<>
					<Project key={project.id} project={project} />
					{index != projects.length - 1 && <hr className="my-8 lg:my-16" />}
				</>
			))}
		</div>
	);
};

export default Projects;
