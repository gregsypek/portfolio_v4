import { projects } from '../constants';
import Project from '../components/Project';
import { ProjectType } from '../types/types';
const Projects = () => {
  return (
    <div className="max-container margin-y relative z-20 flex h-full flex-col">
      <h1 className="section-header">My Websites & Apps</h1>
      {projects.map((project: ProjectType, index: number) => (
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
