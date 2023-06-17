import React from 'react';
import styles from '/src/styles/results/result.module.css';


const Result = () => {
    return (
      <div className={styles.frame77}>
       <div className={styles.frame64}>
         <div className={styles.frame72}>

              <div className={styles.frame01}>
                 <h3 className={styles.coherence}>Coherence</h3>
                 <div className={styles.frame70}>
                 <div className={styles.frame69}>
                 <h3 className={styles.feedback}>Feedback:</h3>
                 <h3 className={styles.feedback_text}>The coherence is good as the response is short and does not have much scope for incoherence</h3>   
                </div> 
                <div className={styles.frame65}>
                    <h3 className={styles.score}>Score:</h3>
                    <h3 className={styles.score_num}>04</h3>
                </div>
                 </div>
              </div>
              <div className={styles.lineDiv}>
              <hr className={styles.line1}></hr>
              </div>
            
              <div className={styles.frame01}>
                 <h3 className={styles.coherence}>Formal</h3>
                 <div className={styles.frame70}>
                 <div className={styles.frame69}>
                 <h3 className={styles.feedback}>Feedback:</h3>
                 <h3 className={styles.feedback_text}>The coherence is good as the response is short and does not have much scope for incoherence</h3>   
                </div> 
                <div className={styles.frame65}>
                    <h3 className={styles.score}>Score:</h3>
                    <h3 className={styles.score_num}>04</h3>
                </div>
                 </div>
              </div>
              <div className={styles.lineDiv}>
              <hr className={styles.line1}></hr>
              </div>

              <div className={styles.frame01}>
                 <h3 className={styles.coherence}>Relevance</h3>
                 <div className={styles.frame70}>
                 <div className={styles.frame69}>
                 <h3 className={styles.feedback}>Feedback:</h3>
                 <h3 className={styles.feedback_text}>The coherence is good as the response is short and does not have much scope for incoherence</h3>   
                </div> 
                <div className={styles.frame65}>
                    <h3 className={styles.score}>Score:</h3>
                    <h3 className={styles.score_num}>04</h3>
                </div>
                 </div>
              </div>
              <div className={styles.lineDiv}>
              <hr className={styles.line1}></hr>
              </div>

              <div className={styles.frame01}>
                 <h3 className={styles.coherence}>Vocabulary</h3>
                 <div className={styles.frame70}>
                 <div className={styles.frame69}>
                 <h3 className={styles.feedback}>Feedback:</h3>
                 <h3 className={styles.feedback_text}>The coherence is good as the response is short and does not have much scope for incoherence</h3>   
                </div> 
                <div className={styles.frame65}>
                    <h3 className={styles.score}>Score:</h3>
                    <h3 className={styles.score_num}>04</h3>
                </div>
                 </div>
              </div>
              <div className={styles.lineDiv}>
              <hr className={styles.line1}></hr>
              </div>

              <div className={styles.frame01}>
                 <h3 className={styles.coherence}>Overall score</h3>
                 <div className={styles.frame70}>
                 <div className={styles.frame69}>
                 <h3 className={styles.feedback}>Feedback:</h3>
                 <h3 className={styles.feedback_text}>The coherence is good as the response is short and does not have much scope for incoherence</h3>   
                </div> 
                <div className={styles.frame65}>
                    <h3 className={styles.score}>Score:</h3>
                    <h3 className={styles.score_num}>04</h3>
                </div>
                 </div>
              </div>
              <div className={styles.lineDiv}>
              <hr className={styles.line1}></hr>
              </div>

              <div className={styles.frame01}>
                 <h3 className={styles.coherence}>Transcribed text</h3>
                 <div className={styles.frame70}>
                 <div className={styles.frame69}>
                
                 <h3 className={styles.feedback_text}>The coherence is good as the response is short and does not have much scope for incoherence</h3>   
                </div> 
                
                 </div>
              </div>
            
            
         </div>
       </div>
       <div className={styles.frame4585}>
        <div className={styles.frame4592}>
            <div className={styles.frame4584}>
            <img className={styles.statistics} src="/assets/score.svg" alt="My Image"/>
            <h3 className={styles.score2}>Score</h3>
            </div>
            <div className={styles.frame4584}>
            <img className={styles.history} src="/assets/history.svg" alt="My Image"/>
            <h3 className={styles.prevRecord}>Previous Record</h3>
            </div>
        </div>
        <div className={styles.frame63}>
          <div className={styles.frame67}>
            <div className={styles.frame65}>
             <h3 className={styles.numOfAttempts}>Number of attempts:</h3>
             <h3 className={styles.attempts}>04</h3>
            </div>
            <div> <hr className={styles.line2}></hr></div>  

            <div className={styles.frame65}>
             <h3 className={styles.ytop}>Your top score:</h3>
             <h3 className={styles.attempts}>04</h3>
            </div>
            <div className={styles.frame65}>
             <h3 className={styles.ntop}>National top score:</h3>
             <h3 className={styles.attempts}>04</h3>
            </div>

         <div> <hr className={styles.line2}></hr></div>  
            
            <div className={styles.frame65}>
             <h3 className={styles.yavg}>Your average score:</h3>
             <h3 className={styles.attempts}>04</h3>
            </div>

            <div className={styles.frame65}>
             <h3 className={styles.navg}>National average score:</h3>
             <h3 className={styles.attempts}>04</h3>
            </div>

          </div>  
        </div>
       </div>
      </div>
    );
  };

export default Result;