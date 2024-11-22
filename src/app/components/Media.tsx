import Image from 'next/image';
import React from 'react';
import styles from './Media.module.css'
import srq4 from "./srq4.jpg";
import srq5 from "./srq5.jpg";
import srq6 from "./srq6.jpg";
import Link from 'next/link';
import studio from '../studio/page';

export default function Media() {
    return (
        <div id='media' className={styles.media}>
            <div className={styles.heading} >
                {/* <span className={styles.srq}><h6>Sabter Raza Qadri</h6></span> */}
                {/* <div className='flex justify-center'><span className='bg-green-700 text-green-800 bg-opacity-20 rounded-2xl font-bold text-2xl'>Sabter Raza Qadri</span></div> */}
                <h1>Media <span>Library</span></h1>
            </div>

            <div className={styles.boxes}>
                
                <div className={styles.box1}><Link href={'./studio'}>
                    <h4>Studio Collection</h4>
                    <p>Immerse yourself in the studio-recorded, world-famous tracks recited by Sabter Raza Qadri. Prepare to be enchanted and fall in love with each and every one of them.</p>
                    <Image src={srq4} alt='img' className='absolute z-0 opacity-10 rounded-2xl'></Image>
                    </Link></div>
                
                <div className={styles.box2}><Link href={'./mehfil'}>
                    <h4>Mehfil Collection</h4>
                    <p>Exclusive Performance & Recitation in Mehfil-e-Naat by Sabter Raza Qadri. His voice brings such an amazing feel. </p>
                    <Image src={srq5} alt='img' className='absolute z-0 opacity-10 rounded-2xl'></Image>
                    </Link></div>

                <div className={styles.box3}><Link href={'./pictures'}>
                    <h4>Pictures Collection</h4>
                    <p>Take a mesmerizing journey through the stunning and beautiful images of Sabter Raza Qadri.</p>
                    <Image src={srq6} alt='img' className='absolute z-0 opacity-10 rounded-2xl'></Image>
                    </Link></div> 

                
                
            </div>

        </div>
    )
}