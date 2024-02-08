"use client"
import { useEffect, useState } from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';

function Navbar() {

    const [state, setState] = useState(false);
    const handleClick = () =>{
        setState((prev) => !prev);
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarHeading}>Portfolio</div>
            <ul className={`${styles.navbarUl} ${state ? styles.active : ''}`}>
                <li className={styles.navbarLi}>
                    <Link href='/' className={styles.navbarLink} onClick={handleClick}>Home</Link>
                </li>
                <li className={styles.navbarLi}>
                    <Link href='/skills' className={styles.navbarLink} onClick={handleClick}>Skills</Link>
                </li>
                <li className={styles.navbarLi}>
                    <Link href='/projects' className={styles.navbarLink} onClick={handleClick}>Projects</Link>
                </li>
                <li className={styles.navbarLi}>
                    <Link href='/education' className={styles.navbarLink} onClick={handleClick}>Education</Link>
                </li>
                <li className={styles.navbarLi}>
                    <Link href='/contact' className={styles.navbarLink} onClick={handleClick}>Contact</Link>
                </li>
            </ul>
            <div className={`${styles.hamburger} ${state ? styles.active : ''}`} onClick={handleClick}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </div>
        </nav>
    )
}

export default Navbar