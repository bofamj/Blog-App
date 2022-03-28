import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Button,Row,Col,Nav,Navbar} from 'react-bootstrap';
import {reset,logout} from '../app/features/userSlice';
import { useNavigate } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import {  Link } from 'react-router-dom';
import '../App.css'
import {getUserBlogs} from '../app/features/blogSlice';
import {getAllblogs} from '../app/features/blogSlice';

const NavBar = () => {
  const navigate = useNavigate()
const dispatch = useDispatch()
const {user}=useSelector((state)=>state.user)
 const logOUt = ()=>{
     const users = null
    dispatch(logout())
    reset()
    navigate('/')
} 

  return (
    <Navbar bg="dark" expand="lg" variant="dark" fixed="top" >
        <Container >
            <Navbar.Brand href="#home" className='logo'>BLOG</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
                {user?(<Nav className="me-auto">
                <Nav.Link href="#home"><Link to='/' className='links'>Home</Link></Nav.Link>
                <Nav.Link href="#link"><Link to='/blog' className='links' onClick={()=>dispatch(getAllblogs())}>All-blogs</Link></Nav.Link>
                <Nav.Link href="#link"><Link to='/user-blogs' className='links' onClick={()=>dispatch(getUserBlogs())}>User-blogs</Link></Nav.Link>
                <Nav.Link href="#link"><Link to='/creat-blog' className='links'>Creat-Blog</Link></Nav.Link>
                <Nav.Link  onClick={logOUt}>LOGOUT</Nav.Link>
                </Nav>):''}
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavBar

/*<Nav
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
            {user? (<><Nav.Item>
                <Nav.Link  onClick={logOUt} >LOGUOT</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="/blog">All Blog</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">User Blog</Nav.Link>
            </Nav.Item>
            </>):''}
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                Disabled
                </Nav.Link>
            </Nav.Item>
        </Nav> */