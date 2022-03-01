import {useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Button,Row,Col,Nav} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import '../App.css'
import SingelBlog from './../components/SingelBlog';
import {getAllblogs} from '../app/features/blogSlice';



const AllBlog = () => {
const navigate = useNavigate()
const dispatch = useDispatch()
const {blog,
        isError,
        isSuccess,
        isLoading,
        massage}=useSelector((state)=>state.blog)
 
   

/* const getAllBlogs = async ()=>{
    
    const respons = await axios.get('http://localhost:5001/api/v1/blogs',{ 'headers': { 'Authorization': AuthStr } })
    
    setBlogs(respons.data.bloges)
} */
//console.log(blogs);
 useEffect(()=>{
    dispatch(getAllblogs())
    
},[]) 
const {bloges}=blog
//console.log(bloges)

  return (
      
        <Container className='mt-5 mb-5' >
             <Row  >
                { bloges.map((blog)=>{
                    return(
                        <Col id={blog._id} className='mt-5 ' ><SingelBlog {...blog}/></Col> 
                    )
                })}
            </Row> 
        </Container>
  )
}

export default AllBlog