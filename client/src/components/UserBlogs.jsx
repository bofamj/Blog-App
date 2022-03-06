import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button} from 'react-bootstrap';
import {useSelector,useDispatch} from 'react-redux'
import {deleteUserBlog} from '../app/features/blogSlice'
import {getUserBlogs} from '../app/features/blogSlice';
import '../App.css'

const UserBlogs = ({discripion,titel,image,_id}) => {
  const [readMore, setReadMore] = useState(false);
  const dispatch = useDispatch()

  const handelDlete = ()=>{
    console.log(_id);
     dispatch(deleteUserBlog(_id))
    dispatch(getUserBlogs()) 
  }
  return (
    <Card style={{ width: '18rem' }} className='h-100 d-inline-block'>
        <Card.Img variant="top" src={image} />
        <Card.Body>
            <Card.Title>{titel}</Card.Title>
            <Card.Text >
              {readMore ? discripion : `${discripion.substring(0, 100)}...`}
            </Card.Text>
            {/* <Button variant="primary" className='mb-1' onClick={()=>setReadMore(!readMore)}>Read More</Button> */}
            <Button variant="primary" >Edete</Button>{' '}
            <Button variant="danger" className='ms-2' onClick={handelDlete}>Dleate</Button>
        </Card.Body>
    </Card>
  )
}

export default UserBlogs