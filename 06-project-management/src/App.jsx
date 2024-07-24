import CreateProject from "./components/CreateProject";

function App() {
  return (
    <>
      <div className="flex">
        <div className="w-1/4 bg-slate-800 h-screen">
          <h2 className="text-white text-left font-bold text-xl p-4">
            Your Projects
          </h2>
          <div className="flex">
            <div className="p-2"></div>
            <button className="py-2 px-4 bg-slate-500 text-white">
              + Add Project
            </button>
          </div>
        </div>
        <div className="w-3/4 bg-white h-screen p-4">
          <CreateProject></CreateProject>
        </div>
      </div>
    </>
  );
}

export default App;
