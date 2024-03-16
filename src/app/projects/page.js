import Image from 'next/image';
import styles from './projects.module.css';
import task from './task.jpg';
import news from './news.png';
import clock from './clock.jpg';
import textutils from './textutils.png';
import Link from 'next/link';

function Projects() {
  return (
    <section className={styles.projects}>
      <h1 className={styles.mainHeading}>Projects</h1>
      <div className={styles.projectDiv}>
        <div className={styles.project}>
          <div className={styles.imgDiv}><Image src={task} alt='iNotebook' className={styles.img} /></div>
          <h3 className={styles.heading}>iNotebook</h3>
          <p className={styles.description}>In iNotebook, you can create, read, update and delete your notes. This is MERN stack project.</p>
          <div className={styles.linkDiv}>
            <Link href='https://github.com/SatyamGade/iNotebook-frontend' target='_blank' className={styles.link}>Source Code</Link>
            <Link href='https://i-notebook-frontend-six.vercel.app/' target='_blank' className={styles.link}>Visit Website</Link>
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.imgDiv}><Image src={news} alt='news24/7' className={styles.img} /></div>
          <h3 className={styles.heading}>News 24/7</h3>
          <p className={styles.description}>In News 24/7, you can read latest news according to the categories. This project created using ReactJS and Bootstrap.</p>
          <div className={styles.linkDiv}>
            <Link href='https://github.com/SatyamGade/News24-7' target='_blank' className={styles.link}>Source Code</Link>
            <Link href='https://satyamgade.github.io/News24-7/' target='_blank' className={styles.link}>Visit Website</Link>
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.imgDiv}><Image src={clock} alt='clock&weather' className={styles.img} /></div>
          <h3 className={styles.heading}>World Clock & Weather</h3>
          <p className={styles.description}>In this project, you can check time and wheather of countries. This project created using HTML, CSS and JavaScript.</p>
          <div className={styles.linkDiv}>
            <Link href='https://github.com/SatyamGade/Clock-Weather' target='_blank' className={styles.link}>Source Code</Link>
            <Link href='https://satyamgade.github.io/Clock-Weather/' target='_blank' className={styles.link}>Visit Website</Link>
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.imgDiv}><Image src={textutils} alt='textUtils' className={styles.img} /></div>
          <h3 className={styles.heading}>Text Utils</h3>
          <p className={styles.description}>In this project, you can manupulate your text. This project created using React JS and Bootstrap.</p>
          <div className={styles.linkDiv}>
            <Link href='https://github.com/SatyamGade/TextUtils' target='_blank' className={styles.link}>Source Code</Link>
            <Link href='https://satyamgade.github.io/TextUtils/' target='_blank' className={styles.link}>Visit Website</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
