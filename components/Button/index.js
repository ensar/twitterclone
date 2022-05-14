import styles from "./button.module.css";
const Button = ({ w, h, disable, onClick }) => {
  return (
    <button
      className={styles.btn}
      style={{ width: `${w}px`, height: `${h}px` }}
      disabled={disable}
      onClick={onClick}
    >
      Tweetle
    </button>
  );
};

export default Button;
