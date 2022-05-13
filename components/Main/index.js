import styles from "./main.module.css";
import PopularIcon from "../../assets/icons/PopularIcon";
import NewTweet from "../NewTweet";
import Tweet from "../Tweet";
import { tweets } from "../../data";

const Main = () => {
  const datam = tweets;
  return (
    <div className={styles.mainContainer}>
      <div className={styles.head}>
        <span>Anasayfa</span>
        <PopularIcon />
      </div>
      <NewTweet />
      {datam.map((t, i) => {
        return <Tweet tweet={t} key={i} />;
      })}
    </div>
  );
};

export default Main;
