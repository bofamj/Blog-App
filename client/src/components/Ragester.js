import {useState} from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Form,Button,Row,Col} from 'react-bootstrap';

const form_state = {
    email:'',
    Password:'',
    name:'',
}




const Ragester = () => {
    const [formData,setFormData]=useState(form_state)
    
    const handelInput = (event)=>{
        setFormData(prevState =>({...prevState ,[event.target.name]:event.target.value}))
    }
    console.log(formData);
  return (
      <div className="form">
        <Container >
            <Row className="justify-content-center align-items-center " >
                <Col xs={12} md={5}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="name" value={formData.name}  name='name' onChange={handelInput} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={formData.email}  name='email' onChange={handelInput}/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={formData.Password}  name='Password' onChange={handelInput}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Ragester