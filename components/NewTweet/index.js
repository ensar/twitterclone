import { useContext, useState } from "react";
import { UserContext } from "../../pages";
import EarthIcon from "../../assets/icons/EarthIcon";
import MediaIcon from "../../assets/icons/MediaIcon";
import GifIcon from "../../assets/icons/GifIcon";
import SurveyIcon from "../../assets/icons/SurveyIcon";
import EmojiIcon from "../../assets/icons/EmojiIcon";
import PlanIcon from "../../assets/icons/PlanIcon";
import LocationIcon from "../../assets/icons/LocationIcon";
import Button from "../Button";
import styles from "./newTweet.module.css";

const NewTweet = () => {
  const [tweet, setTweet] = useState();
  const user = useContext(UserContext);
  return (
    <div className={styles.newTweet}>
      <div className={styles.row}>
        <img src={user.image} alt='user' />
        <div className={styles.text}>
          <textarea
            placeholder='Neler oluyor?'
            value={tweet}
            onChange={(e) => setTweet(e.target.value)}
          ></textarea>
          {tweet && (
            <div className={styles.privacy}>
              <EarthIcon />
              <span>Herkes yanıtlayabilir</span>
            </div>
          )}
        </div>
      </div>
      <div className={styles.row}>
        <div
          className={styles.bottom}
          style={{
            borderTop: tweet ? "1px solid #2F3336" : "",
            paddingTop: tweet ? "12px" : "0px",
          }}
        >
          <div className={styles.icons}>
            <MediaIcon />
            <GifIcon />
            <SurveyIcon />
            <EmojiIcon />
            <PlanIcon />
            <LocationIcon />
          </div>
          {tweet ? <Button w='90' h='36' /> : <Button w='90' h='36' disable />}
        </div>
      </div>
    </div>
  );
};

export default NewTweet;
