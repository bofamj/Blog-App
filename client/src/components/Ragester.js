import {useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Form,Button,Row,Col} from 'react-bootstrap';
import {register,reset} from '../app/features/userSlice'

import authService from '../app/authService'

import axios from 'axios';


//const API_URl = 'http://localhost:5001/api/v1/auth/register'


/* const form_state = {
    email:'',
    Password:'',
    name:'',
} */




const Ragester = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const{user,
        isError,
        isSuccess,
        isLoading,
        massage}=useSelector((state)=>state.user)
    const [userData,setUserData]=useState({
        email:'',
        password:'',
        name:'',
    })
    const {email,password,name}=userData
    const handelInput = (e)=>{
        setUserData((prevState)=>({...prevState, [e.target.name]:e.target.value}))
    }

    const handelSubmit= (e)=>{
        e.preventDefault()
        //const response = await axios.post(API_URl,{email,password,name})
        dispatch(register({email,password,name}))
    }

   //console.log(name,email,password);
  return (
      <div className="form">
        <Container >
            <Row className="justify-content-center align-items-center " >
                <Col xs={12} md={5}>
                    <Form onSubmit={handelSubmit}>
                         <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="name" value={name}  name='name' onChange={handelInput} />
                        </Form.Group> 
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control  type="email" placeholder="Enter email" value={email}  name='email' onChange={handelInput}/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password}  name='password' onChange={handelInput}/>
                        </Form.Group>
                        <Button variant="primary" type="submit" >
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Ragester




    /*const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
   
   const handelSubmit =async (e)=>{
       e.preventDefault();
       try{
            const response = await axios.post(API_URl,{name,email,password})
            console.log( response.data)
       }catch(error){
           console.log( error)
            
       }
       
   }*/ 