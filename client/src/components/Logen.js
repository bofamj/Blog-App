
import {useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Form,Button,Row,Col,Spinner} from 'react-bootstrap';
import {login,reset,getBlog} from '../app/features/userSlice'
import {getAllblogs,getUserBlogs} from '../app/features/blogSlice';

const Logen = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user,
            isError,
            isSuccess,
            isLoading,
            massage}=useSelector((state)=>state.user)



const handelSubmit = async (e)=>{
    e.preventDefault()
    dispatch(login({email,password}))
    setEmail('')
    setPassword('')
    
}

useEffect(()=>{
    if(isError){
        console.log(massage);
    }
    if(isSuccess|| user){
        dispatch(getAllblogs())
        navigate('/blog')
    }
    //dispatch(getUserBlogs())
    dispatch(reset) 
},[isError,isSuccess,navigate,dispatch,user,massage])

if(isLoading){
    return <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
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