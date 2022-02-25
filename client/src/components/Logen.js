
import {useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Form,Button,Row,Col} from 'react-bootstrap';
import axios from 'axios';
import {login,reset} from '../app/features/userSlice'
import { register } from './../app/features/userSlice';

const API_URl = 'http://localhost:5001/api/v1/auth/login'

const Logen = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()

const handelSubmit = async (e)=>{
    e.preventDefault()
    console.log('heloo');
    dispatch(login({email,password}))
    setEmail('')
    setPassword('')
    navigate('/ragester')
    /* try{
            const response = await axios.post(API_URl ,{email,password})
            console.log(response.data);
    }catch(error){
        console.log(error);
    } */
}

  return (
    <div className="form">
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} md={5}>
                    <Form onSubmit={handelSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} value={email} />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} value={password} />
                        </Form.Group>
                        <Button variant="primary" type="submit" className='mr-5' >
                            Submit
                        </Button>
                        <Button variant="primary" type="submit"  >
                            Register
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Logen