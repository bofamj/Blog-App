import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button} from 'react-bootstrap';
import {useSelector,useDispatch} from 'react-redux'
import {getUserBlogs,deletBlog} from '../app/features/blogSlice';
import '../App.css'
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { BsChevronDoubleRight,BsFillTrashFill } from "react-icons/bs";
import { TiEdit } from "react-icons/ti";
//BsChevronDoubleRight
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
        transition={{
          delay: 0.1,
          x: { type: "tween", stiffness: 100 },
          default: { duration: 2 },
        }}
    >
        <Card style={{ width: '18rem' }} className='h-100 d-inline-block singel-blog'>
            <Card.Img variant="top" src={blog.image} />
            <Card.Body>
                <Card.Title>{blog.titel}</Card.Title>
                <Card.Text >
                    <Link className='read-lenk' to={`/${blog._id}`} >{readMore ? blog.discripion : `${blog.discripion.substring(0, 100)}... `}   <span className='read-span'>Read More --<BsChevronDoubleRight/> </span>
                    </Link>
                </Card.Text>
                
                <div id={blog._id} onClick={(e)=>handelEdete(e)}  className='btn' ><TiEdit className='edite'/></div>{' '}
                <div  className='btn' onClick={() => dispatch(deletBlog(blog._id))}><BsFillTrashFill className='delet'/></div>
            </Card.Body>
        </Card>
    </motion.div>
  )
}

export default UserBlogs