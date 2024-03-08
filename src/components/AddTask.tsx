import { useState } from "react";
import TaskList from "./TaskList";
import { editTextType } from "../interfaces";

const AddTask = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [value, setValue] = useState<string>("");
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState<editTextType>({
    id: -1,
    task: "",
  });

  const hanleOnClick = (e: any) => {
    console.log(editText);
    // console.log(typeof e);
    e.preventDefault();
    if (edit) {
      setEdit(false);
      const newTasks = tasks.map((taskText, id) =>
        id === editText.id ? editText.task : taskText
      );

      setTasks(newTasks);
      setEditText({
        id: -1,
        task: "",
      });
    } else {
      setTasks([...tasks, value]);
      setValue("");
    }
  };

  return (
    <div>
      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        setEdit={setEdit}
        setEditText={setEditText}
      />
      <h1>Add Task</h1>
      <form>
        {edit ? (
          <input
            type="text"
            value={editText.task}
            onChange={(e) => {
              // console.log("edit text")
              // console.log(e.target.value)
              setEditText({ id: editText.id, task: e.target.value });
            }}
          />
        ) : (
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        )}
        <button onClick={hanleOnClick} type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTask;
