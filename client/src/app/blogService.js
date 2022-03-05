import axios from 'axios';


const BLOG_URL='http://localhost:5001/api/v1/blogs'
const CRAT_URL = 'http://localhost:5001/api/v1/blogs/user'

//*get all blog
const getAllBlogs = async (token)=>{
    const config = {headers: { Authorization: `Bearer ${token}` } }
    const response = await axios.get(BLOG_URL,config)
    return response.data
    //console.log(response.data)
}

//* creat blog

const creatBlog = async (userBlog,token)=>{
    const config = {headers: { Authorization: `Bearer ${token}`}} 
    const response = await axios.post(BLOG_URL,userBlog,config)
    return response.data
}

//*get a user blogs

const getUserBlogs = async (token) =>{
    const config = {headers: { Authorization: `Bearer ${token}`}}
    const response = await axios.get(CRAT_URL,config)
    return response.data
}


const blogService = {
    getAllBlogs,
    creatBlog,
    getUserBlogs
}

export default blogService