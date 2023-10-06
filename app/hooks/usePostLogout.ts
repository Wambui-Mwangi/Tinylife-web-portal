import { useState } from 'react';
import { useRouter } from 'next/navigation';
// import cookie from 'cookiejs';
const useUserLogOut = () => {
  
  const router = useRouter();
  const handleUserLogOut = () => {
    cookie.remove('user Loggen in');
    router.push('/signup');
  };
  return { handleUserLogOut };
};
export default useUserLogOut;


