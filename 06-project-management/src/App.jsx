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
                onClick={() => handleProjectClick(project.title)}
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
          {activeProjectTitle && (
            <Project
              title={activeProject.title}
              description={activeProject.description}
              date={activeProject.date}
              tasks={activeProject.tasks}
              onChangeTasks={handleTasksChange}
            ></Project>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
