import axios from 'axios';


const BLOG_URL='http://localhost:5001/api/v1/blogs'

const getAllBlogs = async (token)=>{
    const config = {headers: { Authorization: `Bearer ${token}` } }
    const response = await axios.get(BLOG_URL,config)
    return response.data
}


const blogService = {
    getAllBlogs,
}

export default blogService