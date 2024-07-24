import { useState } from "react";
import CreateProject from "./components/CreateProject";

function App() {
  const [newProjectActive, setNewProjectActive] = useState(false);
  const [projects, setProjects] = useState([]);

  const handleAddProjectCick = () => {
    setNewProjectActive(true);
  };

  const handleNewProjectCreated = ({ title, description, dueDate }) => {
    setProjects([...projects, { title, description, dueDate }]);
    setNewProjectActive(false);
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
            {projects.map((project, index) => (
              <div key={index} className="border border-slate-500 p-2 m-2">
                <h3 className="text-white text-left font-bold text-lg">
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
        </div>
      </div>
    </>
  );
}

export default App;
