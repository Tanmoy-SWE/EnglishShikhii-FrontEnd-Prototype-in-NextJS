import React from 'react';
import styles from '/src/styles/answers/answerStop.module.css';


const AnswerStop = () => {
    return (
      <div className={styles.frame61}>
         <div className={styles.frame62}>
         <p className={styles.que}>What are your views on social media today?</p>
         <div className={styles.frame60}>
          <button className={styles.stop}><svg enableBackground="new 0 0 512 512" height="16.67px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="16.67px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M256,512C114.625,512,0,397.375,0,256C0,114.609,114.625,0,256,0s256,114.609,256,256C512,397.375,397.375,512,256,512z   M256,64C149.969,64,64,149.969,64,256s85.969,192,192,192c106.03,0,192-85.969,192-192S362.031,64,256,64z M192,192h128v128H192  V192z"/></svg><h6 className={styles.stopButtonText}>Stop</h6></button>
         <h6 className={styles.time}>01:23</h6>
         </div>
         </div>
      </div>
    );
  };

export default AnswerStop;