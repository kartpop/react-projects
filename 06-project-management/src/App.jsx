import { useState, useRef } from "react";
import CreateProject from "./components/CreateProject";
import Project from "./components/Project";

function App() {
  const [newProjectActive, setNewProjectActive] = useState(false);
  const [projectList, setProjectList] = useState([]);
  const [activeProjectTitle, setActiveProjectTitle] = useState(null);

  const handleAddProjectCick = () => {
    setActiveProjectTitle(null);
    setNewProjectActive(true);
  };

  const handleNewProjectCreated = ({ title, description, dueDate, tasks }) => {
    setProjectList([...projectList, { title, description, dueDate, tasks }]);
    setNewProjectActive(false);
  };

  const handleCancelNewProjectCreation = () => {
    setNewProjectActive(false);
  };

  const handleProjectClick = (projectTitle) => {
    setActiveProjectTitle(projectTitle);
  };

  const handleTasksChange = (tasks) => {
    const updatedProjectList = projectList.map((project) => {
      if (project.title === activeProjectTitle) {
        return { ...project, tasks };
      }
      return project;
    });

    setProjectList(updatedProjectList);
  };

  const handleDeleteProject = () => {
    const updatedProjectList = projectList.filter(
      (project) => project.title !== activeProjectTitle
    );

    setProjectList(updatedProjectList);
    setActiveProjectTitle(null);
  };

  let activeProject = projectList.find(
    (project) => project.title === activeProjectTitle
  );

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
              className="py-2 px-4 bg-slate-700 text-white"
            >
              + Add Project
            </button>
          </div>
          <div className="p-4">
            {projectList.map((project, index) => (
              <button
                key={index}
                className={`p-2 m-2 w-72 hover:bg-gray-700 ${
                  activeProjectTitle === project.title ? "bg-slate-500" : ""
                }`}
                onClick={() => handleProjectClick(project.title)}
              >
                <h3 className="text-white text-left text-lg">
                  {project.title}
                </h3>
              </button>
            ))}
          </div>
        </div>
        <div className="w-3/4 bg-white h-screen p-4">
          {newProjectActive && (
            <CreateProject
              onSave={handleNewProjectCreated}
              onCancel={handleCancelNewProjectCreation}
            ></CreateProject>
          )}
          {activeProjectTitle && (
            <Project
              title={activeProject.title}
              description={activeProject.description}
              date={activeProject.dueDate}
              tasks={activeProject.tasks}
              onChangeTasks={handleTasksChange}
              onDelete={handleDeleteProject}
            ></Project>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
