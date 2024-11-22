import styles from "./Biography.module.css";
import Image from "next/image";
import srq from "./srq.jpg";
import srq2 from "./srq2.jpg";
import srq3 from "./srq3.jpg";
import Link from "next/link";

export default function Biography() {
  return (
    
    <div id="biography" className="Biography " style={{ position: "relative",}}>
      <div className="BlueBioPage" style={{position : "relative"} }>
            <Image className={styles.bboximg} src={srq2} alt='image' width={1000} height={800}/>
            <div className={styles.bbox}></div>
            <div className={styles.bbox2}> <h1>Biography</h1><p>Read More About <b>Sabter Raza Qadri's</b> Personal Life,<br /> His Early Age, 
            Education, Profession <br /> & Much More.</p> <Link href={"/#bio"}><h6>Read Biography →</h6></Link></div>
      </div>
      


      <div className={styles.box}id="bio">
      <Image
        className={styles.boximg}
        src={srq}
        alt="image"
        width={700}
        height={0}
        />
        
        <div className={styles.Biography} >
        <h1>
          Life Journey <br /> Of <br /> <b>SRQ</b>
        </h1>
        <p className={styles.p1}>
          Muhammad Sabter Raza Qadri embarked on a remarkable journey that
          intertwined spirituality, education, and Devotion.Let’s delve deeper
          into the chapters of his life:
          <br />
          <br />
          <b>Early Life and Naat Khuwani Beginnings :</b> <br />
          Born on December 14, 1997, in Karachi, Pakistan, Muhammad Sabter Raza
          Qadri discovered his love for Naat Khuwani and spirituality at an
          early age. His soulful voice resonated with the hearts of those around
          him, and he became known for his celestial renditions at just age of
          12.
          <br/>
          <br/>
          <b>Bai'at :</b> <br />
          In 2010 He Gave His Hand In Hands Of Huzoor Tajushariyah Mufti Akhtar
          Raza Khan , Also he is Taalib From Huzoor Peer Syed Daulat Hussain
          Shah Sahab and Maulana Ilyas Qadri
          <br />
          <br />
          <b>Dars-e-Nizami (Alim Course) :</b> <br />
          In 2012, Sabter Raza Qadri began his pursuit of religious knowledge by
          enrolling in the Dars-e-Nizami program in Noor Masjid Kaghzi Bazar.
          This traditional Islamic curriculum covers various subjects, including
          Arabic grammar, jurisprudence, theology, and Hadith studies and took
          classess for almost 6 years. <br />
          <br />
        </p>
      </div>

       </div>
      
      <div style={{position:'relative'}}>

      <div className={styles.box2}><Image className={styles.boximg3} src={srq3} alt="" width={500} height={0} />
      

        </div>
      
        <div className={styles.bio2}>
      <p className={styles.p2}>
          
            <b>Naat Khuwani :</b> <br />
            As a Naat Khuwan, Sabter Raza Qadri dedicated himself to reciting
            Islamic devotional poetry (naats) in praise of the Prophet Muhammad.
            His performances were not just about melodies; they were a spiritual
            journey that touched the depths of the soul. His voice carried the
            essence of devotion, love, and reverence. <br />
            In 2017, he joined Madani Channel, embarking on his media journey from
            there. His first studio kalam, titled “YA Muawiya”, was published in
            2018 and gained widespread fame, establishing his recognition.
            <br />
            <br />
            <b>Marriage :</b> <br />
            He got married in early age of 23 in 2021, now he has a beautifull
            Daughter named Yusra Fatima.
            <br />
            <br />
            <b>Connecting with the Audience :</b> <br />
            Beyond the stage, Sabter Raza Qadri engaged with his audience on
            social media platforms. His Facebook page allowed fans to stay updated
            on his latest releases, live performances, and personal reflections.
            His humility and genuine connection with listeners made him a beloved
            figure in the world of Naat.
            <br />
            <br />
            <b>YouTube Channel and Fan Base :</b> <br />
            Sabter Raza Qadri’s official YouTube channel became a sanctuary for
            those seeking solace throug naat. His naats, accompanied by soothing
            melodies, garnered millions of views. Listeners from all walks of life
            found comfort in his heartfelt expressions of faith.
            <br /> <br />
            <b>Legacy and Impact :</b> <br />
            Muhammad Sabter Raza Qadri’s legacy extends beyond the notes he sang.
            His devotion, sincerity, and unwavering faith continue to inspire
            generations. Through his naats, he reminds us of the beauty of
            spirituality and the power of naat to elevate the soul.
          </p>
        </div>
      </div>
                  
    </div>
  );
}
