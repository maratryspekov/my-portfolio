import React from "react";
import styles from "./Input.module.scss";

type InputProps = {
  className?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

function Input({
  className = "",
  type = "text",
  placeholder = "",
  required = false,
  ...rest
}: InputProps) {
  return (
    <input
      className={`${styles.input} ${className}`}
      type={type}
      placeholder={placeholder}
      required={required}
      {...rest}
    />
  );
}

export default Input;
