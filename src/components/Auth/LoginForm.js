import { useState } from 'react';
import FirebaseAuthService from '../../FirebaseAuthService';

import './LoginForm.css';

const LoginForm = ({ killModal, resetPassword }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await FirebaseAuthService.loginUser(email, password);
      killModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='LoginForm mt-1'>
      <form onSubmit={onSubmit}>
        <label htmlFor='email' className='mt-1'>
          Email
        </label>
        <input
          type='email'
          name='email'
          id='email'
          value={email}
          onChange={onChange}
          placeholder='Enter email'
          required
          className='text-input mt-1'
        />
        <label htmlFor='password' className='mt-2'>
          Password
        </label>
        <input
          type='password'
          id='password'
          name='password'
          value={password}
          onChange={onChange}
          placeholder='Enter password'
          required
          className='text-input mt-1'
        />
        <button type='submit' className='button button-white-smoke mt-3'>
          Login
        </button>
      </form>
      <div
        onClick={() => resetPassword()}
        className='forgot-password-link mt-3 mb-1'>
        Forgot password?
      </div>
    </div>
  );
};
export default LoginForm;
