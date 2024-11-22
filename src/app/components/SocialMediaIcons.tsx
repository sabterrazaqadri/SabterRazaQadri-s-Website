// components/SocialMediaIcons.js
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from './SocialMediaIcons.module.css';

export default function SocialMediaIcons() {
    return (
        <div className={styles.iconsContainer}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className={styles.icon} />
            </a>
            <a href="https://www.youtube.com" target='_blank' rel='noopener noreferrer'>
                <FaYoutube className={styles.icon} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className={styles.icon} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className={styles.icon} />
            </a>
        </div>
    );
}
