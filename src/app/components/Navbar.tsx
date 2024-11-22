"use client"
import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import SocialMediaIcons from "./SocialMediaIcons";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={styles.navbar}>
            <h1 className={styles.title} title="Go to the homepage">
                Sabter Raza Qadri
            </h1>
            <button
                className={styles.toggleButton}
                onClick={toggleMenu}
                aria-label="Toggle navigation menu"
            >
                ☰
            </button>
            <ol
                className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : styles.menuClosed}`}
            >
                <li className={styles.menuItem}>
                    <Link href="/">Home</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/#biography">Biography</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/#media">Media</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/">About</Link>
                </li>
            </ol>
            <div className={styles.socialMedia}>
                <SocialMediaIcons />
            </div>
        </div>
    );
}























// import Link from "next/link"

// export default function Navbar() {
//     return (
//         <div style={{ display : 'flex', borderBottom : '2px solid #edede9'}}>
            
            
//             <h1 style={{ margin: '10px', fontSize: '30px', fontFamily: 'serif', fontWeight: 'bold', paddingLeft: '30px', paddingRight: '30px', }} title="Go to the homepage">Sabter Raza Qadri</h1>
            

//             <ol style={{ display : 'flex' , margin: ''}}>
//                <li style={{alignContent : 'center', color : '#6c757d' , fontFamily: 'arial', padding : '0px 20px 0px 20px'}}><Link href={'/'}>Home</Link></li>
//                <li style={{alignContent : 'center', color : '#6c757d' , fontFamily: 'arial', padding : '0px 20px 0px 20px'}}><Link href={'/'}>Biography</Link></li>
//                <li style={{alignContent : 'center', color : '#6c757d' , fontFamily: 'arial', padding : '0px 20px 0px 20px'}}><Link href={'/'}>Media</Link></li>
//                <li style={{alignContent : 'center', color : '#6c757d' , fontFamily: 'arial', padding : '0px 20px 0px 20px'}}> <Link href={'/'}>About</Link></li>
//             </ol>

//             <form action="">
//                 <input type="search" placeholder="Search Naat" style={{ backgroundColor: '#e9ecef', position : 'absolute', right :'200px', margin:'20px',borderRadius: '2px 0px 0px 2px'}} />
//             </form>

//             <button style={{position: 'absolute', right : '169px', backgroundColor:'#61dafb', marginTop:'20px'}}>Search</button>

//         </div> 
//     )
// }