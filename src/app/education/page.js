import styles from './education.module.css'

function Education() {
  return (
    <section className={styles.education}>
      <h1 className={styles.mainHeading}>Education</h1>
      <div>
        <h2 className={styles.headings}><li>Undergraduate</li></h2>
        <p className={styles.bodyText}>College: Yeshwantrao Chavan College of Engineering, Nagpur.</p>
        <p className={styles.bodyText}>Degree: Bachelor of Technology.</p>
        <p className={styles.bodyText}>Branch: Information Technology.</p>
        <p className={styles.bodyText}>CGPA: 7.2</p>
      </div>
      <div>
        <h2 className={styles.headings}><li>HSC</li></h2>
        <p className={styles.bodyText}>College: Modern Arts & Science College, Latur.</p>
        <p className={styles.bodyText}>Stream: Science (PCM).</p>
        <p className={styles.bodyText}>Percentage: 60%</p>
      </div>
      <div>
        <h2 className={styles.headings}><li>SSC</li></h2>
        <p className={styles.bodyText}>School: Vidayavikas Madhyamik Vidyalay, Latur.</p>
        <p className={styles.bodyText}>Percentage: 86.4%</p>
      </div>
    </section>
  )
}

export default Education
