import { useContext } from "react";
import { UserContext } from "../../pages";
import styles from "./profile.module.css";
const Profile = () => {
  const user = useContext(UserContext);
  const username = user.name.replace(" ", "");
  return (
    <div className={styles.profile}>
      <div className={styles.user}>
        <img src={user.image} alt='profile' />
        <div className={styles.userInfo}>
          <h4>{user.name}</h4>
          <span>{`@${username}`}</span>
        </div>
      </div>
      <div>...</div>
    </div>
  );
};

export default Profile;
