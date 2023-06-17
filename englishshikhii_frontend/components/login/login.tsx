'use client'
import React, { useState,useEffect } from 'react';
import styles from '/src/styles/login/login.module.css';
import axios from 'axios';

const Login : React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState<string>('');

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // try {
    //   const response = await axios.post('/api/login', { email, password });
    //   console.log(response.data);
    //   // Handle successful login
    // } catch (error) {
    //   setError(error.response?.data?.message || 'An error occurred');
    // }
  };

    return (
      <div className={styles.frame4630}>
       <div className={styles.frame4578}>
        <h4 className={styles.login_to_see_result}>Login to see result</h4>
        <div className={styles.loginForm}>
           <form onSubmit={handleLogin}>
        {/* {error && <p>{error}</p>} */}
        <div className={styles.input_field1}>
          <label>
            <h3 className={styles.label1}>Name</h3>
            <div className={styles.name}>
            <input className={styles.name_field} type="text" value={name} placeholder='Enter your full name' onChange={(e) => setName(e.target.value)} />

            </div>
          </label>
        </div>
   <br></br><br></br>
        <div className={styles.input_field2}>
          <label>
          <h3 className={styles.label2}>Phone Number</h3>
          <div className={styles.phone}>
          <input  className={styles.phone_field} type="number" value={phone} placeholder='Provide your phone number' onChange={(e) => setPhone(e.target.value)} />

          </div>
          </label>
        </div>
      </form>
      </div>
      <button className={styles.btndiv}><h3 className={styles.btnText}>Next</h3></button>
     </div>
     <img className={styles.cross} src="/assets/close.svg" alt="My Image"/>
   </div>
  
    );
  
   
  };
  
export default Login;