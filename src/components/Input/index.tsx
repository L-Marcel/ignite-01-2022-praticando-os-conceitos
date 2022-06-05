import { InputHTMLAttributes } from "react";
import styles from "./index.module.css";

function Input({ ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input 
      className={styles.input}
      {...rest}
    />
  );
};

export { Input };
