import {useState,useEffect} from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Button,Row,Col,Nav} from 'react-bootstrap';
import {reset,logout} from '../app/features/userSlice';
import { useNavigate } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import '../App.css'
import SingelBlog from './../components/SingelBlog';

const AllBlog = () => {
    const [blogs,setBlogs]=useState([])
const navigate = useNavigate()
const dispatch = useDispatch()
const {user}=useSelector((state)=>state.user)
 const logOUt = ()=>{
    dispatch(logout(user))
    reset()
    navigate('/')
} 

const getAllBlogs = async ()=>{
    const AuthStr = 'Bearer ' + user.token
    const respons = await axios.get('http://localhost:5001/api/v1/blogs',{ 'headers': { 'Authorization': AuthStr } })
    console.log(respons.data.bloges);
    setBlogs(respons.data.bloges)
}

useEffect(()=>{
    getAllBlogs()
},[])

  return (
      
        <Container  >
            <Row  >
                { blogs.map((blog)=>{
                    return(
                        <Col id={blog._id} md="4"><SingelBlog/></Col> 
                    )
                })}
            </Row>
        </Container>
  )
}

export default AllBlog