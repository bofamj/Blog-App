import axios from 'axios';


const API_URl = '/api/v1/auth/'


const register = async (userData)=>{
    const response = await axios.post(API_URl, userData)

    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data
}


const authService = {
    register
}


export default authService