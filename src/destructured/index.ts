import { editTextType } from './../interfaces/index';

export interface AddTaskProps {
    tasks: string[];
    setTasks: React.Dispatch<React.SetStateAction<string[]>>;
    setEdit: React.Dispatch<React.SetStateAction<boolean>>;
    setEditText: React.Dispatch<React.SetStateAction<editTextType>>;
}