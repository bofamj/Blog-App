import {useState} from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Form,Button,Row,Col} from 'react-bootstrap';

const Logen = () => {
  return (
    <div className="form">
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} md={5}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
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

export default Logen