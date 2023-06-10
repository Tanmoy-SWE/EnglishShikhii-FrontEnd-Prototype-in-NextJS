import React from 'react';
import styles from '../src/styles/header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoDiv}>
      <img className={styles.logo} src="/assets/transparentLogo.png" alt="My Image"/>
      </div>

      <div className={styles.frame4623}>
      <div className={styles.frame7}>
      <div className={styles.questions}>Questions</div>
       <button className={styles.loginbtn}> Login</button>
      </div>
      <div className={styles.language}>
        <select>
          <option value="en">EN</option>
          <option value="ba">BA</option>
         
        </select>
      </div>
      </div>
     
    
      
    </header>
  );
};

export default Header;
