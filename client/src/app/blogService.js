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

//*delete a user blogs

const deleteUserBlog = async (blogId,token) =>{
    const config = {headers: { Authorization: `Bearer ${token}`}}
    const response = await axios.delete(BLOG_URL_DELET+blogId,config)
    console.log(response)
    return response.data
}

//* edite blogService
const editeBlog = async (blogId,token)=>{
   const  config = {headers: { Authorization: `Bearer ${token}`}}
    const response = await axios.patch(`http://localhost:5001/api/v1/blogs/${blogId}`,config)
    return response.data
}


const blogService = {
    getAllBlogs,
    creatBlog,
    getUserBlogs,
    deleteUserBlog,
    editeBlog
}

export default blogService