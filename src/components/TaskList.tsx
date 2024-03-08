import { AddTaskProps } from "../destructured";

const TaskList = ({ tasks, setTasks, setEdit, setEditText }: AddTaskProps) => {
  const handleDelete = (id: number) => {
    const newTasks = [...tasks];
    newTasks.splice(id, 1);
    setTasks(newTasks);
  };

  const handleEdit = ({ id, task }: { id: number; task: string }) => {
    setEdit(true);
    setEditText({ id: id, task: task });
  };

  return (
    <div>
      {tasks.map((task, id) => {
        return (
          <div>
            <li key={id}>{task}</li>
            <button onClick={() => handleDelete(id)}>Del</button>
            <button onClick={() => handleEdit({ id: id, task: task })}>
              Edit
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
