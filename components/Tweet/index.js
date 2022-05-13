import styles from "./tweet.module.css";
import CommentIcon from "../../assets/icons/CommentIcon";
import RetweetIcon from "../../assets/icons/RetweetIcon";
import LikeIcon from "../../assets/icons/LikeIcon";
import ShareIcon from "../../assets/icons/ShareIcon";
import VerifiedIcon from "../../assets/icons/VerifiedIcon";

const Tweet = ({ tweet }) => {
  return (
    <div className={styles.tweet}>
      <div className={styles.profileImg}>
        <img src={tweet.profile} alt='user' />
      </div>
      <div className={styles.tweetBody}>
        <div className={styles.tweetHead}>
          <span className={styles.username}>
            <a href='#'>{tweet.username}</a>
            <VerifiedIcon />
          </span>
          <span>@{tweet.user}</span>
          <span>. {tweet.date}</span>
          <span className={styles.more}>...</span>
        </div>
        <span className={styles.content}>{tweet.content}</span>
        {tweet.image && (
          <div className={styles.image}>
            <img src={tweet.image} />
          </div>
        )}
        <div className={styles.interaction}>
          <div className={styles.comment}>
            <CommentIcon />
            <span>{tweet.comment}</span>
          </div>
          <div className={styles.retweet}>
            <RetweetIcon />
            <span>{tweet.retweet}</span>
          </div>
          <div className={styles.like}>
            <LikeIcon />
            <span>{tweet.like}</span>
          </div>
          <div className={styles.share}>
            <ShareIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
