import { useState } from "react";

export default function Tasks( {currentTasks, onChange}) {
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState(currentTasks || []);

  function handleTaskChange(e) {
    setNewTask(e.target.value);
  }

  function handleAddTask() {
    setTaskList([...taskList, newTask]);
    setNewTask("");
    onChange(taskList);
  }

  return (
    <div>
        <h6 className="text-slate-500 text-left font-bold text-2xl">Tasks</h6>
      <div className="flex">
        <input
          type="text"
          onChange={handleTaskChange}
          value={newTask}
          className="border border-gray-300 p-2"
        />
        <button onClick={handleAddTask} className="text-black p-2">
          Add Task
        </button>
      </div>
      <div>
        {taskList.map((task, index) => (
          <div key={index} className="p-2 m-2">
            <p>{task}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
