import Image from 'next/image';
import styles from './page.module.css';
import img from './img.png';
import download from './download.png';

export default function Home() {
  return (
    <main className={styles.home}>
      <div className={styles.headingDiv}>
        <h1 className={styles.heading}>Hi, I am <span className={styles.specialText}>Satyam Gade</span> and I am passionate about <span className={styles.specialText}>Coding.</span></h1>
        <p className={styles.homeText}>Proficient in various programming languages and eager to apply my technical knowledge to contribute effectively to dynamic IT projects.</p>
        <div className={styles.btnDiv}>
          <button className={styles.btn} >
            <Image src={download} className={styles.downloadPng} alt='download'/>
            <p>Download Resume</p>
          </button>
        </div>
      </div>
      <div>
        <Image
          src={img}
          className={styles.img}
          alt='img'
        />
      </div>
    </main>
  );
}
