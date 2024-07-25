import Tasks from "./Tasks";

export default function Project({
  title,
  date,
  description,
  tasks,
  onChangeTasks,
}) {
  function handleTaskChange(newTaskList) {
    onChangeTasks(newTaskList);
  }

  return (
    <div className="p-2 m-2">
      <h3 className="text-black text-left font-bold text-2xl">{title}</h3>
      <p className="text-black text-left text-sm">{date}</p>
      <p className="text-black text-left">{description}</p>
      <hr className="my-4 border-gray-300" />
      <Tasks currentTasks={tasks} onChange={handleTaskChange}></Tasks>
    </div>
  );
}
