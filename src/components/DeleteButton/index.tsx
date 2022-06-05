import { Trash } from "phosphor-react";
import { ButtonHTMLAttributes } from "react";
import styles from "./index.module.css";

function DeleteButton({ ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={styles.deleteButton}
      {...rest}
    >
      <Trash size={20}/>
    </button>
  );
};

export { DeleteButton };
