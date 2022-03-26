import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button} from 'react-bootstrap';
import {useSelector,useDispatch} from 'react-redux'
//import {deleteUserBlog} from '../app/features/blogSlice'
import {getUserBlogs,deletBlog} from '../app/features/blogSlice';
import '../App.css'


const UserBlogs = ({discripion,titel,image,_id,handelEdete}) => {
  const [readMore, setReadMore] = useState(false);
  const dispatch = useDispatch()
  const {blog,
          isError,
          isSuccess} = useSelector((state)=>state.blog)

  const handelDlete = ()=>{
    dispatch(deletBlog(_id))
    //dispatch(deleteUserBlog(_id))
    //console.log(_id)
  }
  
  
  return (
    <Card style={{ width: '18rem' }} className='h-100 d-inline-block singel-blog'>
        <Card.Img variant="top" src={image} />
        <Card.Body>
            <Card.Title>{titel}</Card.Title>
            <Card.Text >
              {readMore ? discripion : `${discripion.substring(0, 100)}...`}
            </Card.Text>
            {/* <Button variant="primary" className='mb-1' onClick={()=>setReadMore(!readMore)}>Read More</Button> */}
            <Button variant="primary" className='btn-user-cart-edete' id={_id} onClick={(e)=>handelEdete(e)}>Edete</Button>{' '}
            <Button variant="danger" className='ms-2 btn-user-cart-delet' onClick={handelDlete}>Dleate</Button>
        </Card.Body>
    </Card>
  )
}

export default UserBlogs