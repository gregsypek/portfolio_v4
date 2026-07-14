import { archivedProjects, projects } from '../constants';
import { useRef, useState } from 'react';

import Project from '../components/Project';
import { ProjectType } from '../types/types';

const Projects = () => {
  const [showArchive, setShowArchive] = useState(false);
  const archiveTopRef = useRef<HTMLDivElement>(null);

  const handleShowArchive = () => {
    setShowArchive(true);
  };

  const handleHideArchive = () => {
    setShowArchive(false);
    // Małe opóźnienie, aby React zdążył ukryć archiwum przed przescrollowaniem
    setTimeout(() => {
      if (archiveTopRef.current) {
        archiveTopRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    }, 50);
  };

  return (
    <div className="max-container margin-y relative z-20 flex h-full flex-col">
      <h1 className="section-header">My Websites & Apps</h1>

      {/* Wyświetlanie głównej trójki */}
      {projects.map((project: ProjectType, index: number) => (
        <div key={project.id}>
          <Project project={project} />
          {index !== projects.length - 1 && (
            <hr className="margin-y xl:opacity-0" />
          )}
        </div>
      ))}

      {/* Niewidoczny znacznik (kotwica) do którego będziemy płynnie wracać */}
      <div ref={archiveTopRef} className="h-1 w-full" />

      {/* Przycisk pokazujący archiwum (Znika, gdy archiwum jest otwarte) */}
      {!showArchive && archivedProjects.length > 0 && (
        <div className="mt-12 flex justify-center lg:mt-24">
          <button
            onClick={handleShowArchive}
            className="rounded-lg border-[2px] border-primary-red px-8 py-3 text-lg font-bold text-primary-red transition-all hover:bg-primary-red hover:text-white"
          >
            Show Archived Projects
          </button>
        </div>
      )}

      {/* Wyświetlanie archiwum po kliknięciu */}
      {showArchive && (
        <div className="animate-fade-in mt-12 lg:mt-24">
          <div className="mb-12 flex items-center justify-center gap-4 lg:mb-20">
            <hr className="border-gray-600 w-1/4" />
            <h2 className="text-gray-400 text-xl font-semibold uppercase tracking-widest">
              Archive
            </h2>
            <hr className="border-gray-600 w-1/4" />
          </div>

          {archivedProjects.map((project: ProjectType, index: number) => (
            <div key={project.id}>
              <Project project={project} />
              {index !== archivedProjects.length - 1 && (
                <hr className="margin-y xl:opacity-0" />
              )}
            </div>
          ))}

          {/* Dolny przycisk zamykający archiwum */}
          <div className="margin-y flex justify-center">
            <button
              onClick={handleHideArchive}
              className="rounded-lg border-[2px] border-primary-red px-8 py-3 text-lg font-bold text-primary-red transition-all hover:bg-primary-red hover:text-white"
            >
              Hide Archived Projects
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
