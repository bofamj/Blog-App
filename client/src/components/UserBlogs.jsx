import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button} from 'react-bootstrap';
import {useSelector,useDispatch} from 'react-redux'
import {getUserBlogs,deletBlog} from '../app/features/blogSlice';
import '../App.css'
import { motion } from 'framer-motion';


const UserBlogs = ({blog,handelEdete}) => {
  const [readMore, setReadMore] = useState(false);
  const dispatch = useDispatch()

   /* const handelDlete = ()=>{
    dispatch(deletBlog(_id))
  }  */
  
    /* useEffect(()=>{

    dispatch(getUserBlogs())
    
},[deletBlog])   */
  return (
    <motion.div
        initial={{ x: "-300px", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ y: '-300px', opacity: 0 }}
    >
        <Card style={{ width: '18rem' }} className='h-100 d-inline-block singel-blog'>
            <Card.Img variant="top" src={blog.image} />
            <Card.Body>
                <Card.Title>{blog.titel}</Card.Title>
                <Card.Text >
                  {readMore ? blog.discripion : `${blog.discripion.substring(0, 100)}...`}
                </Card.Text>
                {/* <Button variant="primary" className='mb-1' onClick={()=>setReadMore(!readMore)}>Read More</Button> */}
                <Button variant="primary" className='btn-user-cart-edete' id={blog._id} onClick={(e)=>handelEdete(e)}>Edete</Button>{' '}
                <Button variant="danger" className='ms-2 btn-user-cart-delet' onClick={() => dispatch(deletBlog(blog._id))}>Dleate</Button>
            </Card.Body>
        </Card>
    </motion.div>
  )
}

export default UserBlogs