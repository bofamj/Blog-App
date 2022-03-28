import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Form,Button,Row,Col} from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../App.css'
const Home = () => {
  return (
    <div className="main home-main">
        <div className="after"></div>
        <Container fluid="md">
            <Row className="justify-content-md-center">
                <Col xs lg="8">
                    <h1 className=' site-name'>welcom to the <span className='site-name'>blog</span> </h1>
                    <div className="mb-4  w-50  btn-continer" >
                        <div   className=' btn-btn'>
                            <Link className="link" to="/login">LOGEN</Link>
                        </div>{' '}
                        <div   className=' btn-btn'>
                            <Link className="link" to="/ragester">RAGESTER</Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>   
  )
}

export default Home