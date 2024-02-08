import styles from './skills.module.css';

function Skills() {
  return (
    <section className={styles.skills}>
      <div>
        <h1 className={styles.mainHeading}>Technical Skills</h1>
        <div className={styles.btns}>
        <button disabled className={styles.skill}>C</button>
        <button disabled className={styles.skill}>C++</button>
        <button disabled className={styles.skill}>Data Stucture</button>
        <button disabled className={styles.skill}>Algorithms</button>
        <button disabled className={styles.skill}>HTML</button>
        <button disabled className={styles.skill}>CSS</button>
        <button disabled className={styles.skill}>Bootstrap</button>
        <button disabled className={styles.skill}>Tailwind CSS</button>
        <button disabled className={styles.skill}>Figma Basics</button>
        <button disabled className={styles.skill}>JavaScript</button>
        <button disabled className={styles.skill}>React JS</button>
        <button disabled className={styles.skill}>Next JS</button>
        <button disabled className={styles.skill}>Node JS</button>
        <button disabled className={styles.skill}>Express JS</button>
        <button disabled className={styles.skill}>MongoDB</button>
        <button disabled className={styles.skill}>SQL</button>
        </div>
      </div>
      <div>
        <h3 className={styles.mainHeading}>Soft Skills</h3>
        <div className={styles.subBtns}>
        <button disabled className={styles.softSkill}>Problem Solving</button>
        <button disabled className={styles.softSkill}>Time Management</button>
        <button disabled className={styles.softSkill}>Self-Motivated</button>
        <button disabled className={styles.softSkill}>Teamwork</button>
        <button disabled className={styles.softSkill}>Flexible</button>
        </div>
      </div>
    </section>
  )
}

export default Skills
