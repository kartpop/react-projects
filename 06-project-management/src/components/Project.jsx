import Tasks from "./Tasks";

export default function Project({
  title,
  date,
  description,
  tasks,
  onChangeTasks,
  onDelete,
}) {
  function handleTaskChange(newTaskList) {
    onChangeTasks(newTaskList);
  }

  function handleDelete() {
    onDelete();
  }

  console.log(date);

  return (
    <div className="p-2 m-2">
      <div className="flex justify-between items-center">
        <h3 className="text-black text-left font-bold text-2xl">{title}</h3>
        <button className="text-red-500" onClick={handleDelete}>
          Delete
        </button>
      </div>
      <p className="text-stone-500 my-2 text-left text-sm">
        {new Date(date).toLocaleDateString()}
      </p>
      <p className="text-black text-left my-2">{description}</p>
      <hr className="my-4 border-gray-300" />
      <Tasks currentTasks={tasks} onChange={handleTaskChange}></Tasks>
    </div>
  );
}
