import React from 'react';
import styles from '../styles/styles.module.css';
import Footer from '../../components/footer';
import Header from '../../components/header';
import QuestionCard from '../../components/Questions/questionCard'

const Home = () => {
  return (
    <div className={styles.container}>
      <Header/>

      <main className={styles.mainContent}>
        <h1>Welcome to EnglishShikhii</h1>
        <p>This is the homepage of the EnglishShikhii.</p>
      </main>

    <QuestionCard question={''} topScore={0} averageScore={0} onClickAnswer={function (): void {
        throw new Error('Function not implemented.');
      } }/>
     <Footer />
    </div>
  );
};

export default Home;