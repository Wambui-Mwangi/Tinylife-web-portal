'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import useLogin from '@/app/hooks/useLogin';

const defaultPageLink = "/dashboard";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const { user, handleLogin } = useLogin({
    username: username,
    password: password,
  });

  const router = useRouter()

  const handleLoginUser = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    await handleLogin();

    if (user) {
      setMessage('Login Successful!');
      router.push('/dashboard')
    } else {
      setMessage('Login failed. Please check your credentials');
    }

    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  console.log(user);

  return (
    <div className="max-w-full bg-white flex gap-x-20">
    <img src="/images/one.jpeg" width='482px' height='500px' alt="logo" className="" />
    <div className="max-w-full w-auto h-auto mt-10 bg-white">
      <div className="flex gap-x-20">
        <div>
          <div className="text-black text-[43px] ml-20 pl-[150px] font-['Nunito']">Sign In</div>
          <form className="mt-10 ml-2 w-max text-[20px] font-['Nunito']" onSubmit={handleLoginUser}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 mb-2  font-nunito">
                Enter Username:
              </label>
              <input
          type="text"
          id="username"
          name="username"
          className= "w-[583px] h-[57px] rounded-[10px] border-2 border-grey-400 border-opacity-30"
          value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
        />
            </div>
            <div className="mb-10 mt-10">
              <label htmlFor="password" className="block text-gray-700 mb-2 font-nunito">
                Enter Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className= "w-[583px] h-[57px] rounded-[10px] border-2 border-grey-400 border-opacity-30"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="">
            {/* {user && Object.values(user)? Object.values(user)[0]: user} */}
              {showPopup && (
                <p className={`text-${message.includes('Successful') ? 'green' : 'red'} text-xl ml-[14%] font-normal font-['Nunito']`}>
                  {message}
                </p>
              )}
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-3 mt-10 mb-5 rounded-md mt-2 pr-5 font-nunito"
                style={{
                  width: '200px',
                  height: '70px',
                  borderRadius: '10px',
                  background: '#2DCD1F',
                }}
              >
                Sign In
              </button>
              <Link href="/signup">
                <p className="text-black text-xl font-normal font-['Nunito']">
                  Don't have an account? <span className="text-green-400">Sign Up</span>
                </p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;
