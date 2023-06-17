import React from 'react';
import styles from '../src/styles/startPracticing.module.css';

const StartPracticing= () => {
  return (
   <div>
   <div className={styles.frame3}>
    <div className={styles.frame6}>
    <div className={styles.frame5}>
    <h6 className={styles.lorem1}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
     <h1 className={styles.lorem2}>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. 
     </h1>
    </div>
    <button className={styles.practicebtn}>Start Practicing</button>
    </div>
    <div className={styles.ellipse}>
    <img className={styles.ellipse4} src="/assets/Ellipse 4.svg" alt="My Image"/>
    <img className={styles.ellipse3} src="/assets/Ellipse 3.svg" alt="My Image"/>
    <img className={styles.ellipse2} src="/assets/Ellipse 2.svg" alt="My Image"/>
    <img className={styles.ellipse1} src="/assets/Ellipse 1.svg" alt="My Image"/>
    </div>
   </div>

   <div className={styles.frame14}>
   <h1 className={styles.learn_english}>The Simplest way to learn English</h1>
   <div className={styles.frame9}>
      <div className={styles.frame16}>
         <div className={styles.frame15}>
           <div className={styles.frame13}>
             <div className={styles.logo1}><img className={styles.arrow} src="/assets/arrow.svg" alt="My Image"/></div>
             <div className={styles.text1}>
             <h4 className={styles.large_text1}>Choose a Question</h4>
             <h6 className={styles.small_text1}>Lorem ipsum dolor, sit amet</h6>
             </div>
            
           </div>
           <div>
             <hr className={styles.hline1}></hr>
            </div>

           <div className={styles.frame32}>
           <div className={styles.logo2}><img className={styles.mic} src="/assets/mic.svg" alt="My Image"/></div>
             <div className={styles.text2}>
             <h4 className={styles.large_text2}>Record and Submit</h4>
             <h6 className={styles.small_text2}>Lorem ipsum dolor, sit amet</h6>
             </div>
           </div>
           <div>
             <hr className={styles.hline2}></hr>
            </div>


           <div className={styles.frame1}>
           <div className={styles.logo3}><img className={styles.mountain} src="/assets/mountain.svg" alt="My Image"/></div>
             <div className={styles.text3}>
             <h4 className={styles.large_text3}>Get The Result</h4>
             <h6 className={styles.small_text3}>Lorem ipsum dolor, sit amet</h6>
             </div>
           </div>
          
         </div>
         <div className={styles.frame10}>
           <h3 className={styles.nocost}>
           No Cost 
           </h3>
           <h3 className={styles.nolimit}>
           No Limit
           </h3>
           <div className={styles.frame4}>
           <button className={styles.practicebtn2}>Start Practicing</button>
           </div>
         </div>
      </div>
   </div>
   </div>

   </div>
  
  


  );
};

export default StartPracticing;