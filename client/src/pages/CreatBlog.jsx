import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Row,Col,Form,Container} from 'react-bootstrap';
import {creatBlog} from '../app/features/blogSlice'
import {useDispatch} from 'react-redux'

import '../App.css'
const CreatBlog = () => {
    const despatch = useDispatch()
    const [addBlog,setAddBlog] = useState({
        titel:'',
        discripion:'',
    });


    const {titel,discripion} = addBlog;
    const handelChange = (e) => {
        setAddBlog((prevState)=>({...prevState,[e.target.name]:e.target.value}))
    }

const handelSubmit = (e)=>{
    e.preventDefault()
    console.log(titel,discripion);
    despatch(creatBlog({titel,discripion}))
    setAddBlog({
        titel:'',
        discripion:'',
    });
}



  return (
    <div className="blog-form">
        <Container>
            <Form onSubmit={handelSubmit}>
                <Row>
                    <Form.Label column="lg" lg={2}>
                    Inter Titel
                    </Form.Label>
                    <Col>
                    <Form.Control size="lg" type="text" name="titel" value={titel} onChange={handelChange}placeholder="Inter Titel" />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Form.Label column lg={2}>
                    Write Uer Blog
                    </Form.Label>
                    <Col>
                    <Form.Control type="text" name="discripion" value={discripion} onChange={handelChange} placeholder="Write Uer Blog" />
                    </Col>
                </Row>
                <br />
                    <Button variant="primary" type="submit" >
                                Submit
                    </Button>
            </Form>
            
        </Container>
    </div>
  )
}

export default CreatBlog