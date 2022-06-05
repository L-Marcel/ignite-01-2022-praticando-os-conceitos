import { InputHTMLAttributes } from "react";
import styles from "./index.module.css";

function Checkbox({ ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className={styles.checkbox}>
      <input
        type="checkbox"
        {...rest}
      />
      <span/>
    </label>
  );
};

export { Checkbox };
