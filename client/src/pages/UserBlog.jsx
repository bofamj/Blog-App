import {useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Button,Row,Col,Nav,Spinner} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import '../App.css'
//import SingelBlog from './../components/SingelBlog';
import {getUserBlogs} from '../app/features/blogSlice';
import UserBlogs from '../components/UserBlogs'


const UserBlog = () => {
    const navigate = useNavigate()
const dispatch = useDispatch()
const {isSuccess,user}=useSelector((state)=>state.user)
const {blog,
        isError,
        isLoading,
        massage}=useSelector((state)=>state.blog)
        useEffect(()=>{

            dispatch(getUserBlogs())
            
        },[])  



        if(isLoading ){
            return (
                <div className="d-flex justify-content-center mt-5 text-center  spener">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )
        } 
    
            return (
                    <Container className='mt-5 mb-5 ' >
                         <Row  >
                         {console.log(blog.bloge)}
                                  { blog.bloge.map((blog)=>{
                                    return(
                                            <Col  className='mt-5 d-flex justify-content-center' ><UserBlogs {...blog}/></Col>
                                        ) 
                                })}    
                        </Row> 
                    </Container>
            )

}

export default UserBlog