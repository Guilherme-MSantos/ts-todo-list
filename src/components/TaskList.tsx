import { ITask } from "../interfaces/Task";
import styles from "./TaskList.module.css";

type Props = {
  taskList: ITask[];
  handleDelete(id: number): void;
  handleEdit(task: ITask): void;
};

const TaskList = ({ taskList, handleDelete, handleEdit }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id} className={styles.task}>
            <div className={styles.details}>
              <h4>{task.title}</h4>
              <p>Dificuldade : {task.difficulty}</p>
            </div>
            <div className={styles.actions}>
              <i
                className="bi bi-pencil"
                onClick={() => {
                  handleEdit(task);
                }}
              >
                Editar
              </i>
              <i
                className="bi bi-trash"
                onClick={() => {
                  handleDelete;
                }}
              >
                Excluir
              </i>
            </div>
          </div>
        ))
      ) : (
        <p>Não tem tarefas cadastradas</p>
      )}
    </>
  );
};

export default TaskList;
