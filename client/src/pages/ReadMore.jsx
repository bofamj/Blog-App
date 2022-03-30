import React,{useEffect,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,} from 'react-bootstrap';
import {  useParams,Link } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import {getSingelBlog} from '../app/features/blogSlice';
import '../App.css'
const ReadMore = () => {
  const { blog, isLoading, isError, message } = useSelector(
    (state) => state.blog
  )
  const [redMore,setRedMore]= useState([])
    const {id}=useParams()
   // console.log(blog.filter((blog)=>blog._id === id))
    const read = ()=>{
      const redBlog = blog.filter((blog)=>blog._id === id)
      setRedMore(...redBlog)
    }
    //read()
   // console.log(redMore)
    
      useEffect(()=>{
        read()
    },[])   
    //console.log(blog);
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
    <div className="main-red-mor">
           <Card  className=' d-inline-block blog-read-redMore'>
            <Card.Img variant="top" src={redMore.image} style={{ height: '300px',padding:'50px' }}/>
            <Card.Body>
                <Card.Title className='discript'>{redMore.titel}</Card.Title>
                <Card.Text className='discript'>
                {redMore.discripion}
                </Card.Text>
            </Card.Body>
        </Card>  
    </div>
  )
}

export default ReadMore