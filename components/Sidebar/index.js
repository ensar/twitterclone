import styles from "./sidebar.module.css";
import SearchIcon from "../../assets/icons/SearchIcon";
import Trend from "../Trend";
import Follow from "../Follow";
import Footer from "../Footer";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.head}>
        <div className={styles.search}>
          <SearchIcon />
          <input type='text' placeholder="Twitter'da Ara" />
        </div>
      </div>
      <Trend />
      <Follow />
      <Footer />
    </div>
  );
};

export default Sidebar;
