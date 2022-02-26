import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Form,Button,Row,Col} from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../App.css'
const Home = () => {
  return (
    <div className="main">
        <Container fluid="md">
            <Row className="justify-content-md-center">
                <Col xs lg="8">
                    <h1 className='text-secondary'>welcom to the beast blog sait ever</h1>
                    <div className="mb-4 justify-content-md-center w-75  p-3" >
                        <Button variant="secondary" size="lg" className='me-5'>
                        <Link className="link" to="/login">LOGEN</Link>
                        </Button>{' '}
                        <Button variant="secondary" size="lg">
                            <Link className="link" to="/ragester">RAGESTER</Link>
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>   
  )
}

export default Home