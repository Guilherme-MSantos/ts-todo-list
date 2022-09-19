import styles from "./Modal.module.css";
type Props = {
  children: React.ReactNode;
};

const Modal = ({ children }: Props) => {
  const closeModal = (e: React.MouseEvent): void => {
    const modal = document.getElementById("modal");

    modal!.classList.add("hide");
  };
  return (
    <div id="modal" className="hide">
      <div className={styles.fade} onClick={closeModal}></div>
      <div className={styles.modal}>
        <h2>Editar tarefa</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
