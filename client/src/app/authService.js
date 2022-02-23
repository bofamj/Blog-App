import axios from 'axios';


const API_URl = 'http://localhost:5001/api/v1/auth/register'


const register = async (userData)=>{
    const response = await axios.post(API_URl, userData)
    console.log(response);
    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data
}


const authService = {
    register
}


export default authService