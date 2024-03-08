import { useState } from "react";
import TaskList from "./TaskList";
import { editTextType, userType } from "../interfaces";
import { v4 as uuidv4 } from "uuid";

const AddTask = () => {
  const [users, setUsers] = useState<userType[]>([]);
  const [id, setId] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [displayName, setDisplayName] = useState<string>("");
  const [role, setRole] = useState<string>("");
  // const [role, setRole] = useState(false);

  const [editText, setEditText] = useState<editTextType>({
    id: -1,
    task: "",
  });
  const hanleOnClick = (e: any) => {
    e.preventDefault();
    const newUser: userType = {
      id: uuidv4(),
      name: name,
      displayName: displayName,
      role: role,
    };
    console.log(newUser);
    setUsers([...users, newUser]);
    console.log(users);
    setId("");
    setName("");
    setDisplayName("");
    setRole("");
  };

  return (
    <div>
      {/* <TaskList
        tasks={tasks}
        setTasks={setTasks}
        setEdit={setEdit}
        setEditText={setEditText}
      /> */}
      <h1>Add Users</h1>
      <form>
        <input
          type="text"
          placeholder="input name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="input disPlayname"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
        <input
          type="text"
          placeholder="input role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <button onClick={hanleOnClick} type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTask;
