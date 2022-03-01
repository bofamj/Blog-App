import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button} from 'react-bootstrap';
import {useSelector,useDispatch} from 'react-redux'
import '../App.css'

const SingelBlog = ({discripion,titel,image}) => {
  const [readMore, setReadMore] = useState(false);
  //console.log(titel);
  //const {titel}=blogs
  //const {user}=useSelector((state)=>state.user)
  return (
    <Card style={{ width: '18rem' }} className='h-100 d-inline-block'>
        <Card.Img variant="top" src={image} />
        <Card.Body>
            <Card.Title>{titel}</Card.Title>
            <Card.Text>
              {readMore ? discripion : `${discripion.substring(0, 100)}...`}
            </Card.Text>
            <Button variant="primary" className='mb-1' onClick={()=>setReadMore(!readMore)}>Read More</Button>
        </Card.Body>
    </Card>
  )
}

export default SingelBlog