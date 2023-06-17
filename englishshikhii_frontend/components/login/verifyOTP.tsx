'use client'
import React, { useState,useEffect } from 'react';
import styles from '/src/styles/login/verifyOTP.module.css';
import axios from 'axios';

const VerifyOTP : React.FC = () =>  {
  
  const [isEditing, setIsEditing] = useState(false);
  const [phone, setPhone] = useState('0123456789');
  const [password, setPassword] = useState('');

  const [error, setError] = useState<string>('');

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Here, you can perform the necessary logic to save the updated profile fields, such as making an API request.
  };


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
       <div> <h4 className={styles.login_to_see_result}>Verify OTP</h4>
       <h4 className={styles.sentOTP}>We’ve sent an OTP to your phone number</h4></div>  

        <div className={styles.loginForm}>
           <form onSubmit={handleLogin}>
        {/* {error && <p>{error}</p>} */}
        <div className={styles.input_field1}>
          <label>
            <div className={styles.phone_num}>
            <input className={styles.phone_num_field} type='text' value={phone} onChange={(e) => setPhone(e.target.value)} />
            <img className={styles.edit} src="/assets/edit.svg" alt="My Image"/>

            </div>
          </label>
        </div>
   
        <div className={styles.input_field2}>
          <label>
          <h3 className={styles.label2}>Phone Number</h3>
          <div className={styles.pass}>
          <input  className={styles.pass_field} type="password" value={password} placeholder='One time password' onChange={(e) => setPassword(e.target.value)} />

          </div>
          </label>
        </div>
      </form>
      </div>
     <div><button className={styles.btndiv}><h3 className={styles.btnText}>Submit</h3></button> </div> 
    <div>  <h3 className={styles.resend}>Resend OTP in 1:33 seconds</h3> </div> 
     </div>
     <img className={styles.cross} src="/assets/close.svg" alt="My Image"/>
   </div>
  
    );
  
  };

export default VerifyOTP;