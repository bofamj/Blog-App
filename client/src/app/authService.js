import axios from 'axios';


const API_URl = 'http://localhost:5001/api/v1/auth/register'
const API_URl_LOGIN = 'http://localhost:5001/api/v1/auth/login'


const register = async (userData)=>{
    const response = await axios.post(API_URl, userData)
    //console.log(response);
    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data
}
const login = async (userData)=>{

    const response = await axios.post(API_URl_LOGIN,userData)
    if (response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data
}

const logout = ()=>{
    localStorage.remiveItem('user')
}
const authService = {
    register,
    login,
    logout
}


export default authService