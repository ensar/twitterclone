import styles from "./main.module.css";
import PopularIcon from "../../assets/icons/PopularIcon";
import NewTweet from "../NewTweet";
import Tweet from "../Tweet";
import { DataContext } from "../../pages";
import { useContext } from "react";

const Main = ({ setTweets }) => {
  const { tweets } = useContext(DataContext);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.head}>
        <span>Anasayfa</span>
        <PopularIcon />
      </div>
      <NewTweet setTweets={setTweets} />
      {tweets.map((t, i) => {
        return <Tweet tweet={t} key={i} />;
      })}
    </div>
  );
};

export default Main;
