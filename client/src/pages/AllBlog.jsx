import {useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Button,Row,Col,Nav,Spinner} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import '../App.css'
import SingelBlog from './../components/SingelBlog';
import {getAllblogs} from '../app/features/blogSlice';



const AllBlog = () => {
const navigate = useNavigate()
const dispatch = useDispatch()
const {isSuccess,user}=useSelector((state)=>state.user)
const {blog,
        isError,
        isLoading,
        massage}=useSelector((state)=>state.blog)
 
   
        

  useEffect(()=>{
    if(isError){
        console.log(massage);
    }
     if(user){
        dispatch(getAllblogs())
    } 
    
    
},[isError,user,massage,dispatch])  


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
            <Container className='mt-5 mb-5' >
                    <Row  >
                        {console.log(blog)}
                             { blog.map((blog)=>{
                                return(
                                        <Col  className='mt-5 d-flex justify-content-center'  ><SingelBlog id={blog._id} {...blog}/></Col> 
                            )
                        })}   
                    </Row> 
            </Container>
        )
}

export default AllBlog