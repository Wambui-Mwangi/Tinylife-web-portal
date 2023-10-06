import { useState } from 'react';
import {loginUser} from '../utilities/utils';     

interface LoginData {
  username: string;
  password: string;
}

const useLogin = (initialLoginData: LoginData) => {
  const [user, setUser] = useState<string| object>();
  const [error,setError] =useState<string>('')

const handleLogin = async () => {

if(!initialLoginData.username|| !initialLoginData.password){
  setError("add all fields")
  return;
}
else{
  try{
    const newUser = await loginUser(initialLoginData);
    setUser(newUser)

  } catch (error){
    console.error('Error during signup:', error);
    setError('Sign-up failed. Phonenumber already exists')
  }
}
}
return { user,error, handleLogin };
};

export default useLogin;
