import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSingelBlog } from "../app/features/blogSlice";
import { motion } from "framer-motion";
import "../App.css";
const ReadMore = () => {
  const { blog, isLoading, isError, message } = useSelector(
    (state) => state.blog
  );
  const [redMore, setRedMore] = useState([]);
  const { id } = useParams();
  const read = () => {
    const redBlog = blog.filter((blog) => blog._id === id);
    setRedMore(...redBlog);
  };
  //read()
  console.log(redMore);

  useEffect(() => {
    read();
  }, []);
  //console.log(blog);
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center mt-5 text-center  spener">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ y: "-300px", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "-300px", opacity: 0 }}
      //transition={{ type: "spring", bounce: 0.25 }}
      transition={{
        delay: 0.1,
        x: { type: "tween", stiffness: 100, bounce: 0.25 },
        default: { duration: 2 },
      }}
    >
      <Container className=" read__more ">
        <Row>
          <Col>
            <img
              variant="top"
              src={redMore.image}
              className="read__more__img "
            />
            <h1>{redMore.titel}</h1>
          </Col>
          <Col className="red-para">
            <p>{redMore.discripion}</p>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default ReadMore;

//<div className="main-red-mor">
{
  /* <Container className='mt-5 mb-5 ' > */
}
{
  /* <Card  className=' d-inline-block blog-read-redMore'>
            <Card.Img variant="top" src={redMore.image} style={{ height: '300px',padding:'50px' }}/>
            <Card.Body>
                <Card.Title className='discript'>{redMore.titel}</Card.Title>
                <Card.Text className='discript'>
                {redMore.discripion}
                </Card.Text>
            </Card.Body>
        </Card> 
        </Container> */
}
