"use client"
import Image from 'next/image';
import styles from './page.module.css';
import img from './img.png';
import download from './download.png';
import { useEffect, useState } from 'react';
import Contact from './contact/page';
import Education from './education/page';
import Projects from './projects/page';
import Skills from './skills/page';
import useDeviceSize from '@/hooks/window';



export default function Home() {

  const [width, height] = useDeviceSize();

  useEffect(() => {
    // es
  }, [width])

  return (
    <>
      <main className={styles.home}>
        <div className={styles.headingDiv}>
          <h1 className={styles.heading}>Hi, I am <span className={styles.specialText}>Satyam Gade</span> and I am passionate about <span className={styles.specialText}>Coding.</span></h1>
          <p className={styles.homeText}>Proficient in various programming languages and eager to apply my technical knowledge to contribute effectively to dynamic IT projects.</p>
          <div className={styles.btnDiv}>
            <a href="/resume.pdf" download style={{textDecoration: "none"}}>
            <button className={styles.btn}>
              <Image src={download} className={styles.downloadPng} alt='download' />
              <p>Download Resume</p>
            </button>
            </a>
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
      {
        width <= 767 &&
        <>
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </>
      }
    </>
  );
}
