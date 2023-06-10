import React from 'react';
import styles from '../styles/styles.module.css';
import Footer from '../../components/footer';
import Header from '../../components/header';
import StartPracticing from '../../components/startPracticing';
import AnswerRecord from '../../components/answers/answerRecord';
import AnswerStop from '../../components/answers/answerStop';
import AnswerSubmit from '../../components/answers/answerSubmit';



import QuestionCard from '../../components/Questions/questionCard'

const Home = () => {
  return (
    <div className={styles.container}>
      <Header/>

      <main className={styles.mainContent}>
       <StartPracticing/>
       <br></br>
       <AnswerRecord/>
       <br></br>
       <AnswerStop/>
       <br></br>
       <AnswerSubmit/>

      </main>

    <QuestionCard question={''} topScore={0} averageScore={0} onClickAnswer={function (): void {
        throw new Error('Function not implemented.');
      } }/>     <br></br><br></br>
     <Footer />
    </div>
  );
};

export default Home;