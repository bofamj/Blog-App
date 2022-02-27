import {useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Form,Button,Row,Col,Spinner} from 'react-bootstrap';
import {register,reset,getBlog} from '../app/features/userSlice'

/* import authService from '../app/authService'

import axios from 'axios';
 */



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
    useEffect(()=>{
        if(isError){
            console.log(massage)
        }
          if(isSuccess || user){
            navigate('/blog')
        }  
        dispatch(reset())
    },[isError,isSuccess,user,dispatch,navigate,massage])
    const handelSubmit= (e)=>{
        e.preventDefault()
        dispatch(register({email,password,name}))
        const AuthStr = 'Bearer ' + user.token;
        setUserData({
            email:'',
            password:'',
            name:'',
        })
    }

    if(isLoading){
        return <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    }

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