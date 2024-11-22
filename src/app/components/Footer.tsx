// components/Footer.js
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <a href="/about" className={styles.link}>About Us</a>
          <a href="/services" className={styles.link}>Services</a>
          <a href="/contact" className={styles.link}>Contact</a>
        </div>
        <div className={styles.socialMedia}>
          <a href="https://twitter.com" className={styles.socialLink}>Twitter</a>
          <a href="https://facebook.com" className={styles.socialLink}>Facebook</a>
          <a href="https://instagram.com" className={styles.socialLink}>Instagram</a>
        </div>
        <p className={styles.copy}>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
  