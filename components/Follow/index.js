import styles from "./follow.module.css";
const Follow = () => {
  return (
    <div className={styles.container}>
      <h1>Kimi takip etmeli</h1>
      <div className={styles.followItem}>
        <div className={styles.profile}>
          <img
            src='https://pbs.twimg.com/profile_images/1216091400560836609/jDg8yaud_400x400.jpg'
            alt='user'
          />
          <div className={styles.userInfo}>
            <h4>Listenary.</h4>
            <span>@listenary</span>
          </div>
        </div>
        <button>Takip Et</button>
      </div>
      <div className={styles.followItem}>
        <div className={styles.profile}>
          <img
            src='https://pbs.twimg.com/profile_images/1483846139967324167/V8-tMtF0_400x400.jpg'
            alt='user'
          />
          <div className={styles.userInfo}>
            <h4>Out Of Context Animals</h4>
            <span>@cuteanimalspict</span>
          </div>
        </div>
        <button>Takip Et</button>
      </div>
      <div className={styles.followItem}>
        <div className={styles.profile}>
          <img
            src='https://pbs.twimg.com/profile_images/1225087545920446466/0J-IeFuq_400x400.jpg'
            alt='user'
          />
          <div className={styles.userInfo}>
            <h4>Ensar</h4>
            <span>@ensarreken</span>
          </div>
        </div>
        <button>Takip Et</button>
      </div>
      <div className={styles.followItem}>
        <span className={styles.more}>Daha fazla göster</span>
      </div>
    </div>
  );
};

export default Follow;
