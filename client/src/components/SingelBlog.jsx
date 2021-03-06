import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button} from 'react-bootstrap';
import {useSelector,useDispatch} from 'react-redux'
import { Link } from "react-router-dom";
import '../App.css'
import { motion } from 'framer-motion';
import { BsChevronDoubleRight } from "react-icons/bs";
const SingelBlog = ({discripion,titel,image,author,_id}) => {
  const [readMore, setReadMore] = useState(false);
  //console.log(titel);
  //const {titel}=blogs
  //const {user}=useSelector((state)=>state.user)
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
        <Card style={{ width: '18rem' }} className='h-100 d-inline-block'>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{titel}</Card.Title>
                <Card.Text>
                    <Link className='read-lenk' to={`/${_id}`} >{readMore ? discripion : `${discripion.substring(0, 100)}... `}<span className='read-span'>Read More --<BsChevronDoubleRight/></span>
                    </Link>
                  
                </Card.Text>
                {/* <Button variant="primary" className='mb-1' onClick={()=>setReadMore(!readMore)}>Read More</Button> */}
                <p className='author'>Author : {author}</p>
            </Card.Body>
        </Card>
    </motion.div>
  )
}

export default SingelBlog