import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Row,Col,Form,Container,FloatingLabel} from 'react-bootstrap';
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
    //console.log(despatch(creatBlog({titel,discripion})));
     despatch(creatBlog({titel,discripion}))
    setAddBlog({
        titel:'',
        discripion:'',
    });
} 



  return (
    <div className="blog-form">
        <Container >
        <Form onSubmit={handelSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Inter Titel</Form.Label>
                    <Form.Control type="text" name="titel" value={titel} onChange={handelChange}placeholder="Inter Titel"  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Weite your blog</Form.Label>
                    <Form.Control as="textarea" rows={3} name="discripion" value={discripion} onChange={handelChange}/>
                </Form.Group>
                <Button variant="primary" type="submit" >
                                Submit
                </Button>
        </Form>
            
            
        </Container>
    </div>
  )
}

export default CreatBlog


{/* <FloatingLabel controlId="floatingTextarea2" label="Comments" column="md" lg={3} style={{height: '200px'}} >
                    <Form.Control
                                    
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }} name="discripion" value={discripion} onChange={handelChange}
                        column="md"
                    />
                </FloatingLabel> */}
                    
                    {/* <Form.Label column lg={2}>
                    Write Uer Blog
                    </Form.Label>
                    <Col>
                    <Form.Control type="text" name="discripion" value={discripion} onChange={handelChange} placeholder="Write Uer Blog" />
                    </Col> */}

                    {/* <Form onSubmit={handelSubmit}>
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
            </Form> */}