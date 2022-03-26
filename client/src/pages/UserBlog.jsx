import {useEffect,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Button,Row,Col,Nav,Spinner} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import '../App.css'
import Model from '../components/Model';
import {getUserBlogs} from '../app/features/blogSlice';
import UserBlogs from '../components/UserBlogs'


const UserBlog = () => {
    const [isOpen,setIsOpen]=useState(false)
    const [edite,setEdite]=useState([])
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
        console.log(blog);

        //*handel edite

        const handelEdete = (e)=> {
            /* setIsOpen(true)
             const edet = blog.filter((blog)=>blog._id === e.target.id)
             setEdite(edet) */
             
        }

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
                         {/* {console.log(blog.bloge)} */}
                                  { blog.map((blog)=>{
                                    return(
                                            <Col  className='mt-5 d-flex justify-content-center' ><UserBlogs {...blog} handelEdete={handelEdete}/></Col>
                                        ) 
                                })}    
                        </Row> 
                        {/* {isOpen && (<div className='model'> <Model  setIsOpen={setIsOpen} edite={edite}/></div>)} */}
                    </Container>
            )

}

export default UserBlog