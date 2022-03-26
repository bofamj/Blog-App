import React,{useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,} from 'react-bootstrap';
import {  useParams,Link } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import {getSingelBloge} from '../app/features/blogSlice';
import '../App.css'
const ReadMore = () => {
    const despatch = useDispatch()
    const {id}=useParams()
    //console.log(id)
    const {blog} = useSelector((state)=>state.blog)
    /* useEffect(()=>{
        despatch(getSingelBloge(id))
    },[blog]) */
    //console.log(blog);
  return (
    <div className="main-red-mor">
        <Card  className=' d-inline-block blog-read-redMore'>
            <Card.Img variant="top" src={blog.image} style={{ height: '300px',padding:'50px' }}/>
            <Card.Body>
                <Card.Title className='discript'>{blog.titel}</Card.Title>
                <Card.Text className='discript'>
                {blog.discripion}
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
  )
}

export default ReadMore