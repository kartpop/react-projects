import LabelInput from "./LabelInput";

export default function CreateProject() {
  return (
    <>
      <div className="flex justify-end m-2">
        <button className="m-2">Cancel</button>
        <button className="m-2">Save</button>
      </div>
      <LabelInput label="Title" type="text" />
      <LabelInput label="Description" type="text" />
      <LabelInput label="Due Date" type="date" />
    </>
  );
}
