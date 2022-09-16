import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./TaskForm.module.css";

// interfaces
import { ITask } from "../interfaces/Task";
interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const TaskForm = ({ btnText, taskList, setTaskList }: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 1000);
    const newTask: ITask = {
      id,
      title,
      difficulty,
      length: 0,
    };

    setTaskList!([...taskList, newTask]);

    setTitle("");
    setDifficulty(0);
  };
  return (
    <form className={styles.form} onSubmit={addTaskHandler}>
      <div className={styles.input_container}>
        <label htmlFor="title">Titulo: </label>
        <input
          type="text"
          name="title"
          placeholder="Nome da tarefa"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
          value={title}
        />
      </div>{" "}
      <div className={styles.input_container}>
        <label htmlFor="difficulty">Titulo: </label>
        <input
          type="text"
          name="difficulty"
          placeholder="Qual a dificuldade da tarefa"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setDifficulty(parseInt(e.target.value));
          }}
          value={difficulty}
        />
      </div>{" "}
      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
