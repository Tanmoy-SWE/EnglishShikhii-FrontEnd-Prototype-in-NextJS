import React from 'react';
import styles from '/src/styles/answers/answerSubmit.module.css';


const AnswerSubmit = () => {
    return (
      <div className={styles.frame62}>
       <div className={styles.frame61}>
       <p className={styles.que}>What are your views on social media today?</p>
       <div className={styles.frame60}>
       <button className={styles.submit}><h6 className={styles.submitButtonText}>Submit</h6></button>
       <button className={styles.reset}><h6 className={styles.resetButtonText}>Reset</h6></button>
       </div>
       </div>
      </div>
    );
  };

export default AnswerSubmit;