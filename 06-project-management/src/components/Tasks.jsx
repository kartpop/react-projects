import { useState } from "react";

export default function Tasks({ currentTasks, onChange }) {
  const [newTask, setNewTask] = useState("");

  function handleTaskChange(e) {
    setNewTask(e.target.value);
  }

  function handleAddTask() {
    let newTaskList = [...currentTasks, newTask];
    setNewTask("");
    onChange(newTaskList);
  }

  function handleDeleteTask(index) {
    let newTaskList = [...currentTasks];
    newTaskList.splice(index, 1);
    onChange(newTaskList);
  }

  return (
    <div>
      <h6 className="text-slate-500 text-left font-bold text-2xl">Tasks</h6>
      <div className="flex">
        <input
          type="text"
          onChange={handleTaskChange}
          value={newTask}
          className="border border-gray-300 p-2 my-2"
        />
        <button onClick={handleAddTask} className="text-black p-2">
          Add Task
        </button>
      </div>
      <div>
        {currentTasks.map((task, index) => (
          <div key={`task-${index}`} className="flex">
            <div className="p-2 m-2">
              <p>{task}</p>
            </div>
            <div className="p-2 m-2">
              <button
                className="text-red-500"
                onClick={() => handleDeleteTask(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
