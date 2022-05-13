import TwitterLogo from "../../assets/icons/TwitterLogo";
import HomeIcon from "../../assets/icons/HomeIcon";
import ExploreIcon from "../../assets/icons/ExploreIcon";
import NotificationIcon from "../../assets/icons/NotificationIcon";
import MessageIcon from "../../assets/icons/MessageIcon";
import ProfileIcon from "../../assets/icons/ProfileIcon";
import MoreIcon from "../../assets/icons/MoreIcon";
import BookmarksIcon from "../../assets/icons/BookmarksIcon";
import ListsIcon from "../../assets/icons/ListsIcon";
import styles from "./nav.module.css";
import Button from "../Button";
import Profile from "../Profile";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.head}>
        <TwitterLogo w='30' />
      </div>
      <div className={styles.menu}>
        <div className={styles.menuItem}>
          <div className={styles.item}>
            <HomeIcon />
            <span>Anasayfa</span>
          </div>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.item}>
            <ExploreIcon />
            <span>Keşfet</span>
          </div>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.item}>
            <NotificationIcon />
            <span>Bildirimler</span>
          </div>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.item}>
            <MessageIcon />
            <span>Mesajlar</span>
          </div>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.item}>
            <BookmarksIcon />
            <span>Yer İşaretleri</span>
          </div>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.item}>
            <ListsIcon />
            <span>Listeler</span>
          </div>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.item}>
            <ProfileIcon />
            <span>Profil</span>
          </div>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.item}>
            <MoreIcon />
            <span>Daha fazla</span>
          </div>
        </div>
      </div>
      <Button w='230' h='50' />
      <Profile />
    </div>
  );
};

export default Nav;
