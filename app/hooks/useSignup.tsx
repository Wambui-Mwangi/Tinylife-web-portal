import { useState } from 'react';
// import { signup } from '../utilities/utils';
import { signup } from '../utilities/utils';
import { sign } from 'crypto';

interface UsersData {
  username: string;
  email: string;
  password: string;
  org_type: string;
  website: string;
  phone_number:string;
}

const useSignup = (initialUserData: UsersData) => {
  const [user, setUser] = useState<string| object>();
  const [error,setError] =useState<string>('')

const handleSignup = async () => {

if(!initialUserData.username|| !initialUserData.email|| !initialUserData.password||!initialUserData.org_type||!initialUserData.website|| !initialUserData.phone_number){
  setError("add all fields")
  return;
}
else{
  try{
    const newUser = await signup(initialUserData);
    setUser(newUser)

  } catch (error){
    console.error('Error during signup:', error);
    setError('Login failed. Please check your credentials')
  }
}
}
return { user,error, handleSignup };
};

export default useSignup;