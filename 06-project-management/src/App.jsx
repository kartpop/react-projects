import { useState } from "react";
import CreateProject from "./components/CreateProject";
import Project from "./components/Project";

function App() {
  const [newProjectActive, setNewProjectActive] = useState(false);
  const [projectList, setProjectList] = useState([]);
  const [activeProject, setActiveProject] = useState(null);

  const handleAddProjectCick = () => {
    setActiveProject(null); // todo - not sure if this will work
    setNewProjectActive(true);
  };

  const handleNewProjectCreated = ({ title, description, dueDate }) => {
    setProjectList([...projectList, { title, description, dueDate }]);
    setNewProjectActive(false);
  };

  const handleProjectClick = (project) => {
    setActiveProject(project);
  };

  return (
    <>
      <div className="flex">
        <div className="w-1/4 bg-slate-800 h-screen">
          <h2 className="text-white text-left font-bold text-xl p-4">
            Your Projects
          </h2>
          <div className="flex">
            <div className="p-2"></div>
            <button
              onClick={handleAddProjectCick}
              className="py-2 px-4 bg-slate-500 text-white"
            >
              + Add Project
            </button>
          </div>
          <div className="p-4">
            {projectList.map((project, index) => (
              <div
                key={index}
                className="p-2 m-2"
                onClick={() => handleProjectClick(project)}
              >
                <h3 className="text-white text-left text-lg">
                  {project.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
        <div className="w-3/4 bg-white h-screen p-4">
          {newProjectActive && (
            <CreateProject onSave={handleNewProjectCreated}></CreateProject>
          )}
          {activeProject && (
            <Project
              title={activeProject.title}
              description={activeProject.description}
              date={activeProject.date}
            ></Project>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
