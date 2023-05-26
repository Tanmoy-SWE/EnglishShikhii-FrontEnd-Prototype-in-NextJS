import React from 'react';
import styles from '../styles/styles.module.css';
const PageNavbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarLogo}>
                {/* Add your logo here */}
                <img src="/logo.png" alt="Logo" />
            </div>
            <ul className={styles.navbarMenu}>
                <li><a href="#">Questions</a></li>
                <li><a href="#">Login</a></li>
                <li>
                <select className={styles.languageSelect}>
                    <option value="en">EN</option>
                    <option value="ban">BAN</option>
                </select>
                </li>
            </ul>
        </nav>
    )
}

export default PageNavbar;