import { useState } from "react";

import LabelInput from "./LabelInput";

export default function CreateProject({ onSave }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleDateChange(e) {
    setDueDate(e.target.value);
  }

  function handleSave() {
    onSave({ title, description, dueDate });
  }

  return (
    <>
      <div className="flex justify-end m-2">
        <button className="m-2">Cancel</button>
        <button className="m-2" onClick={handleSave}>
          Save
        </button>
      </div>
      <LabelInput
        label="Title"
        type="text"
        value={title}
        onChange={handleTitleChange}
      />
      <LabelInput
        label="Description"
        type="text"
        value={description}
        onChange={handleDescriptionChange}
      />
      <LabelInput
        label="Due Date"
        type="date"
        value={dueDate}
        onChange={handleDateChange}
      />
    </>
  );
}
