import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Row,
  Col,
  Form,
  Container,
  FloatingLabel,
} from "react-bootstrap";
import { creatBlog, reset } from "../app/features/blogSlice";
import { useSelector, useDispatch } from "react-redux";

import "../App.css";
const CreatBlog = () => {
  const dispatch = useDispatch();
  const { isError, message } = useSelector((state) => state.blog);
  const [addBlog, setAddBlog] = useState({
    titel: "",
    discripion: "",
    image: "",
  });

  const [error, setError] = useState(false);

  const { titel, discripion, image } = addBlog;
  const handelChange = (e) => {
    setAddBlog((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  //*creact a post
  const handelSubmit = (e) => {
    e.preventDefault();
    if (!titel || !discripion || !image) {
      alert("please provide title discripion and image");
    }
    dispatch(creatBlog({ titel, discripion, image }));
    setAddBlog({
      titel: "",
      discripion: "",
      image: "",
    });
  };
  //*<div className="blog-form">

  return (
    <Container className="creat__blog__cont d-flex justify-content-center align-items-center">
      <Form onSubmit={handelSubmit} className="mb-3 w-75  ">
        {/* {error ? (
          <div class="alert alert-danger" role="alert">
            hy
          </div>
        ) : (
          ""
        )} */}
        <Form.Group
          className="mb-3 creat__blog__form"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>Enter image URL</Form.Label>
          <Form.Control
            type="text"
            name="image"
            value={image}
            onChange={handelChange}
            placeholder="enter your url"
          />
        </Form.Group>
        <Form.Group
          className="mb-3 w-100 "
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Enter Titel</Form.Label>
          <Form.Control
            type="text"
            name="titel"
            value={titel}
            onChange={handelChange}
            placeholder="enter Titel"
          />
        </Form.Group>
        <Form.Group
          className="mb-3 creat__blog__form"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>Write your blog</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="discripion"
            value={discripion}
            onChange={handelChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default CreatBlog;

{
  /* <FloatingLabel controlId="floatingTextarea2" label="Comments" column="md" lg={3} style={{height: '200px'}} >
                    <Form.Control
                                    
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }} name="discripion" value={discripion} onChange={handelChange}
                        column="md"
                    />
                </FloatingLabel> */
}

{
  /* <Form.Label column lg={2}>
                    Write Uer Blog
                    </Form.Label>
                    <Col>
                    <Form.Control type="text" name="discripion" value={discripion} onChange={handelChange} placeholder="Write Uer Blog" />
                    </Col> */
}

{
  /* <Form onSubmit={handelSubmit}>
                <Row>
                    <Form.Label column="lg" lg={2}>
                    Inter Titel
                    </Form.Label>
                    <Col>
                    <Form.Control size="lg" type="text" name="titel" value={titel} onChange={handelChange}placeholder="Inter Titel" />
                    </Col>
                </Row>
                <br />
                <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1"  >
                    <Form.Label >Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={4} name="discripion" value={discripion} onChange={handelChange} />
                </Form.Group>
                <br />
                    <Button variant="primary" type="submit" >
                                Submit
                    </Button>
            </Form> */
}
