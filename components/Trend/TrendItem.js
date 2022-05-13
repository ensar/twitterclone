import styles from "./trend.module.css";
const TrendItem = () => {
  return (
    <div className={styles.trendItem}>
      <div className={styles.trendHead}>
        <span>Dijital varlıklar kripto para · Gündemdekiler</span>
        <span>...</span>
      </div>
      <p>Kripto</p>
      <span>4 B Tweet</span>
    </div>
  );
};

export default TrendItem;
