import axios from 'axios';


const BLOG_URL='http://localhost:5001/api/v1/blogs'
const BLOG_URL_DELET='http://localhost:5001/api/v1/blogs/'
const CRAT_URL = 'http://localhost:5001/api/v1/blogs/user'

//*get all blog
const getAllBlogs = async (token)=>{
    const config = {headers: { Authorization: `Bearer ${token}` } }
    const response = await axios.get(BLOG_URL,config)
    return response.data
    //console.log(response.data)
}

//*get a user blogs

const getUserBlogs = async (token) =>{
    const config = {headers: { Authorization: `Bearer ${token}`}}
    const response = await axios.get(CRAT_URL,config)
    return response.data
}

//*delet a blog


const deletBlog = async (blogId,token) =>{
    const config = {headers: { Authorization: `Bearer ${token}`}}
    const response = await axios.delete(BLOG_URL_DELET+blogId,config)
    return response.data
}

//*creat a blog 

const creatBlog =async (userBlog,token)=>{
    const config = {headers: { Authorization: `Bearer ${token}`}}
    const response = await axios.post(BLOG_URL,userBlog,config)
    return response.data
}

//*edeat blog

/* const edeatBlog = async (blogId,userBlog,token)=>{
    const config = {headers: { Authorization: `Bearer ${token}`}}
    const response = await axios.patch(BLOG_URL_DELET+blogId,userBlog,config)
    return response.data
} */


const blogService = {
    getAllBlogs,
    getUserBlogs,
    deletBlog,
    creatBlog,
    //edeatBlog
}

export default blogService