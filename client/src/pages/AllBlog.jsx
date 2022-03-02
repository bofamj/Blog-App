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
const {isSuccess}=useSelector((state)=>state.user)
const {blog,
        isError,
        isLoading,
        massage}=useSelector((state)=>state.blog)
 
   
        

  useEffect(()=>{
    if(isError){
        console.log(massage);
    }
    /* if(isSuccess){
        dispatch(getAllblogs())
    } */
    
    
},[isError,isSuccess,massage,dispatch])  


     if(isLoading ){
        return (
            <div className="form">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        )
    } 

        return (
                <Container className='mt-5 mb-5' >
                     <Row  >
                            { blog.bloges.map((blog)=>{
                                return(
                                    <Col  className='mt-5 ' ><SingelBlog id={blog._id} {...blog}/></Col> 
                                )
                            })}  
                    </Row> 
                </Container>
        )
}

export default AllBlog