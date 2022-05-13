import styles from "./trend.module.css";
import TrendItem from "./TrendItem";
const Trend = () => {
  return (
    <div className={styles.container}>
      <h1>İlgini çekebilecek gündemler</h1>
      <TrendItem />
      <TrendItem />
      <TrendItem />
      <TrendItem />
      <TrendItem />
      <TrendItem />
      <TrendItem />
      <TrendItem />
      <TrendItem />
      <TrendItem />

      <div className={styles.trendItem}>
        <span className={styles.more}>Daha fazla göster</span>
      </div>
    </div>
  );
};

export default Trend;
