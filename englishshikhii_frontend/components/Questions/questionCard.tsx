import React from 'react';
import styles from '../../src/styles/Questions/questionCard.module.css';

type CardProps = {
  question: string;
  topScore: number;
  averageScore: number;
  onClickAnswer: () => void;
};

const Card: React.FC<CardProps> = () => {
  return (
    <div className={styles.question_card}>
        <div className={styles.frame36}>
            <div className = {styles.frame33}>
                <div className={styles.Text}>What are your views on the role of social media in today's society?</div>
                <div className={styles.frame32}>
                    <div className={styles.frame30}><p className={styles.scoreType}>Top Score:</p><p className={styles.scoreValue}>7.9</p></div>
                    <div className={styles.frame30}><p className={styles.scoreType}>Avg Score:</p><p className={styles.scoreValue}>6.2</p></div>
                </div>
            </div>
            <button className={styles.frame35}>
                <div className={styles.frame34}>
                    <div className={styles.Submit}>
                        Go 
                    </div>
                </div>
            </button>
        </div>
    </div>
  );
};

export default Card;
