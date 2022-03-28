import axios from 'axios';


const API_URl = 'http://localhost:5001/api/v1/auth/register'
const API_URl_LOGIN = 'http://localhost:5001/api/v1/auth/login'
//const GET_BLOG = 'http://localhost:5001api/v1/blogs'



//*register user
const register = async (userData)=>{
    const response = await axios.post(API_URl, userData)
    //console.log(response);
    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data
}

//* login user
const login = async (userData)=>{

    const response = await axios.post(API_URl_LOGIN,userData)
    if (response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data
}



//*logout user
const logout = () => {
    //localStorage.removeItem(user')
    window.localStorage.removeItem('user')
  }
  

 /* const getBlog = async (userToken)=>{
    const response = await axios.get(GET_BLOG,userToken)
    console.log(response.data);
    if (response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data
} */



const authService = {
    register,
    login,
    logout,
    //getBlog
}


export default authService