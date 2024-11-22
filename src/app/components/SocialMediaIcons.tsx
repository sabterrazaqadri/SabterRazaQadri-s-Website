import dynamic from 'next/dynamic';
const FaFacebook = dynamic(() => import('react-icons/fa').then(mod => mod.FaFacebook), { ssr: false });
const FaYoutube = dynamic(() => import('react-icons/fa').then(mod => mod.FaYoutube), { ssr: false });
const FaInstagram = dynamic(() => import('react-icons/fa').then(mod => mod.FaInstagram), { ssr: false });
const FaLinkedin = dynamic(() => import('react-icons/fa').then(mod => mod.FaLinkedin), { ssr: false });

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
