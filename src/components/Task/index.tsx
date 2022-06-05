import { ChangeEvent } from "react";
import { Checkbox } from "../Checkbox";
import { DeleteButton } from "../DeleteButton";
import styles from "./index.module.css";

export interface TaskProps {
  id: string;
  content: string;
  onChangeIsCompleted?: (id: string, isCompleted: boolean) => void;
  isCompleted: boolean;
  onRemoveTask?: (id: string) => void; 
};

function Task({
  content,
  id,
  isCompleted,
  onChangeIsCompleted,
  onRemoveTask
}: TaskProps) {

  function handleOnTaskStatus(e: ChangeEvent<HTMLInputElement>) {
    onChangeIsCompleted && onChangeIsCompleted(id, e.target.checked);
  };

  return (
    <article className={`${styles.task} ${isCompleted? styles.isCompleted:""}`}>
      <Checkbox
        checked={isCompleted}
        onChange={handleOnTaskStatus}
      />
      <p>{content}</p>
    
      <DeleteButton
        onClick={() => onRemoveTask && onRemoveTask(id)}
      />
    </article>
  );
};

export { Task };
