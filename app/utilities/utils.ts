// import { BASE_URL } from "../config";

interface UsersData {
    username: string;
    email: string;
    password: string;
    org_type: string;
    website: string;
    phone_number:string;
  }


export const signup = async (userData: UsersData) => {
    const url =  '/api/users/'
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const result = await response.json();
      return result;
    } catch (error: any) {
      return error.message;

    };
}

export const getUserDetails= async()=>{
        const url ='/api/profile'
        try{
            const response = await fetch(url)
            const result = await response.json();
            return result;
        }
        catch (error: any) {
          return error.message;
        }

}

interface LoginData {
    username: string;
    password: string;
}
  
export const loginUser = async (loginData: LoginData) => {
    const url =  '/api/login/'
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
      const result = await response.json();
      return result;
    } catch (error: any) {
      return error.message;
    }
  };




  


interface MapData {
  prediction: string;
}
export const getLocations = async (prediction : MapData) => {
    const url = `https://4912-2c0f-fe38-2240-3ea6-b2b8-fa3b-89ad-7933.ngrok-free.app/api`
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(prediction),
      });
      const result = await response.json();
      return result;
    } catch (error: any) {
      return error.message;
    }
  };

interface FilesData {
  location: string;
  sources_of_water: number;
  proximity_to_industries: string;
  number_of_garages_in_area: number;
  proximity_to_dumpsite: number;
  presence_of_open_sewage: number;
  past_cases_of_lead_poisoning: number;
  women_and_children_population: number;
}


export const getStageTracking= async()=>{
    const url ='api/get-organizations'
    try{
        const response = await fetch(url)
        const result = await response.json();
        return result;
    }
    catch(error:any){
        return error.message
    }
}



// utils.js
export const getFiles= async()=>{
  const url = '/api/get-files';
  try{
      const response = await fetch(url);
      const result = await response.json();
      console.log({result});
      return result
  }
  catch(error:any){
      return error.message
  }
}


// utils.ts
export const uploadfile = async (file: string | Blob) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    const response = await fetch('https://nezabackend-2a2e9782ab7f.herokuapp.com/api/upload/', {
      method: 'POST',
      body: formData,
    });
    if (!response.ok) {
      throw new Error('File upload failed.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('File upload failed.');
  }
};







