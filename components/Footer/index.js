import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <a>Hizmet Şartları</a>
      <a>Gizlilik Politikası</a>
      <a>Çerez Politikası</a>
      <a>Imprint</a>
      <a>Erişilebilirlik</a>
      <a>Reklam Bilgisi</a>
      <a>Daha Fazla</a>
    </div>
  );
};

export default Footer;
