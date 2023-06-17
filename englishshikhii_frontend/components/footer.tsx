import React from 'react';
import styles from '../src/styles/footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>

      <div className={styles.frame4629}>
        <div className={styles.logodiv}>
        <img className={styles.logo} src="/assets/dark_logo.svg" alt="My Image"/>
        </div>
      
        <div className={styles.frame4631}>
          <p className={styles.links}>Links</p>
          <div className={styles.frame4630}>
            <h6 className={styles.questions}>Questions</h6>
            <h6 className={styles.login}>Login</h6>
            <h6 className={styles.tandc}>Terms and Conditions</h6>
            <h6 className={styles.privacy}>Privacy Policy</h6>
          </div>
        </div>

        <div className={styles.frame4634}>
            <div className={styles.frame4632}>
               <p className={styles.stayconnected}>Stay Connected</p> 
                <div className={styles.frame34}>
                <div className={styles.svg}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 33.867 33.867" id="discord"><path d="M11.343 5.177c-1.076 0-4.32 1.316-4.902 1.579-.582.263-1.228 1.084-1.961 2.439-.734 1.355-1.323 2.939-2.28 5.269-.956 2.33-1.179 6.822-1.147 8.193.032 1.371.189 2.442 1.594 3.253 1.404.81 2.646 1.658 3.953 2.168 1.308.51 2.2.877 2.806.367.606-.51 1.005-1.403 1.005-1.403s.574-.797-.51-1.275c-1.084-.479-1.626-.814-1.579-1.308.048-.494.127-.765.398-.701.271.064.91 1.211 3.365 1.737s4.848.447 4.848.447 2.394.08 4.849-.447c2.455-.526 3.093-1.673 3.364-1.737.271-.064.35.207.398.7.048.495-.494.83-1.578 1.309-1.084.478-.51 1.275-.51 1.275s.399.892 1.005 1.403c.605.51 1.498.143 2.805-.367 1.307-.51 2.55-1.357 3.954-2.168 1.405-.811 1.562-1.882 1.594-3.253.032-1.37-.191-5.863-1.148-8.193-.956-2.33-1.546-3.914-2.28-5.269-.732-1.355-1.379-2.176-1.96-2.44-.582-.262-3.827-1.578-4.903-1.578-1.076 0-1.394.75-1.394.75l-.375.829s-2.52-.479-3.804-.48c-1.284 0-3.837.48-3.837.48l-.375-.83s-.318-.749-1.395-.749zm.117 9.948h.04c1.569 0 2.84 1.373 2.84 3.066 0 1.694-1.271 3.066-2.84 3.066s-2.84-1.372-2.84-3.066c-.001-1.677 1.247-3.043 2.8-3.066zm10.907 0h.04c1.553.023 2.8 1.39 2.8 3.066 0 1.694-1.271 3.066-2.84 3.066-1.57 0-2.84-1.372-2.84-3.066 0-1.693 1.27-3.066 2.84-3.066z" paintOrder="fill markers stroke"></path></svg>
 
                </div>    
                    <p className={styles.discordcommunity}>Join our discord community</p>
                </div>
            </div>
            <hr className={styles['horizontalline']}></hr>
            <div className={styles.frame4635}>
            <p className={styles.allrightsreserved}>All rights reserved &copy; {new Date().getFullYear()}</p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;