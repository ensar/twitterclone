import styles from "./button.module.css";
const Button = ({ w, h, disable }) => {
  return (
    <button
      className={styles.btn}
      style={{ width: `${w}px`, height: `${h}px` }}
      disabled={disable}
    >
      Tweetle
    </button>
  );
};

export default Button;
