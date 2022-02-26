import {useState,useEffect} from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Button,Row,Col,Nav} from 'react-bootstrap';
import {reset,logout} from '../app/features/userSlice';
import { useNavigate } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import '../App.css'

const AllBlog = () => {
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
    console.log(respons.data);
}

useEffect(()=>{
    getAllBlogs()
},[])

  return (
      <div className="main">
            <Container fluid="md" >
                <Row className="justify-content-md-center">
                    <Col xs lg="8">
                    
                    </Col>
                </Row>
            </Container>
    </div>
  )
}

export default AllBlog