import React from 'react';
import PageNavbar from './header';
import styles from '../styles/styles.module.css';
import Footer from '../../components/footer';


const Home = () => {
  return (
    <div className={styles.container}>
      <PageNavbar/>

      <main className={styles.mainContent}>
        <h1>Welcome to EnglishShikhii</h1>
        <p>This is the homepage of the EnglishShikhii.</p>
      </main>
      {/* <footer className={styles.footer}>
        <p>&copy; This is Footer Element. This will be edited.</p>
      </footer> */}

<Footer />
    </div>
  );
};

export default Home;