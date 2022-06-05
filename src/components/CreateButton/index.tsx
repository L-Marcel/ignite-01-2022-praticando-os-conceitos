import { Plus } from "phosphor-react";
import { ButtonHTMLAttributes } from "react";
import styles from "./index.module.css";

function CraeteButton({ ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={styles.createButton}
      {...rest}
    >
      Criar
      <Plus size={16} fontWeight="bold"/>
    </button>
  );
};

export { CraeteButton };
