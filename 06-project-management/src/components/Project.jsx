import { useState } from "react";
import Tasks from "./Tasks";

export default function Project({ title, date, description }) {
  const [taskList, setTaskList] = useState([]);

  function handleTaskChange(newTaskList) {
    setTaskList(newTaskList);
  }

  return (
    <div className="p-2 m-2">
      <h3 className="text-black text-left font-bold text-2xl">{title}</h3>
      <p className="text-black text-left text-sm">{date}</p>
      <p className="text-black text-left">{description}</p>
      <hr className="my-4 border-gray-300" />

      <Tasks currentTasks={taskList} onChange={handleTaskChange}></Tasks>
    </div>
  );
}
