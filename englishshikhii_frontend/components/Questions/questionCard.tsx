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
    <div className={styles.card}>
      <div className={styles.question}>What are your views on the role of social media in today's society?</div>
      <div className={styles.scores}>
        <div className={styles.topScore}>Top Score: 7.9</div>
        <div className={styles.averageScore}>Average Score: 6.2</div>
      </div>
      <button className={styles.answerButton}>
        Go
      </button>
    </div>
  );
};

export default Card;
