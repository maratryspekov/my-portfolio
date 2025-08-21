import styles from "./AnimatedButton.module.scss";

type AnimatedButtonProps = {
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function AnimatedButton({
  className = "",
  children,
  ...rest
}: AnimatedButtonProps) {
  return (
    <button className={`${styles.animated_button} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export default AnimatedButton;
