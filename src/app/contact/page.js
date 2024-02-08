import Link from 'next/link';
import styles from './contact.module.css';
import whatsapp from './whatsapp.png';
import insta from './instagram.png';
import git from './github.png';
import linkedin from './linkedin.png';
import Image from 'next/image';

function Contact() {
  return (
    <section className={styles.contact}>
      <h1 className={styles.mainHeading}>Contact</h1>
      <form action="https://formsubmit.co/satyagade8055@gmail.com" method='POST' className={styles.form}>
        <div className={styles.inputFieldDiv}>
          <label htmlFor="name"></label>
          <input type="text" placeholder='Name' name='name' id='name' />
        </div>
        <div className={styles.inputFieldDiv}>
          <label htmlFor="email"></label>
          <input type="email" name="email" id="email" placeholder='Email' />
        </div>
        <div className={`${styles.inputFieldDiv} ${styles.msg}`}>
          <label htmlFor="msg"></label>
          <input type="text" name="msg" id="msg" placeholder='Message' />
        </div>
        <div className={styles.btnDiv}>
          <button className={styles.btn}>SEND</button>
        </div>
      </form>
      <div className={styles.socialLogoDiv}>
        <Link href='https://wa.me/+919422631407?text=I%20am%20interested%20in%20your%20profile%20and%20wants%20to%20hire%20you.%20Let%20me%20know,%20you%20are%20available%20or%20not.%20Thank%20You.' target='_blank'><Image src={whatsapp} alt='whatsapp' className={styles.socialLogo}/></Link>
        <Link href='https://github.com/SatyamGade' target='_blank'><Image src={git} alt='github' className={styles.socialLogo}/></Link>
        <Link href='https://linkedin.com/in/satyam-gade-904458265' target='_blank'><Image src={linkedin} alt='linkedin' className={styles.socialLogo}/></Link>
        <Link href='https://www.instagram.com/iamsatya_7?igsh=MWl6bm1kbmU0aDBxNw== ' target='_blank'><Image src={insta} alt='instagram' className={styles.socialLogo}/></Link>
      </div>
    </section>
  )
}
export default Contact
