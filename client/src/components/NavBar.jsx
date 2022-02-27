import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Button,Row,Col,Nav} from 'react-bootstrap';
import {reset,logout} from '../app/features/userSlice';
import { useNavigate } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'

const NavBar = () => {
  const navigate = useNavigate()
const dispatch = useDispatch()
const {user}=useSelector((state)=>state.user)
 const logOUt = ()=>{
    dispatch(logout(user))
    reset()
    navigate('/')
} 

  return (
    <Container fluid="md">
        <Nav
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
        </Nav>
    </Container>
  )
}

export default NavBar