import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Form,Button,Row,Col} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import '../App.css'
const Home = () => {
  return (
    <div className="main home-main">
        <div className="after"></div>
        <Container fluid="md">
            <Row className="justify-content-md-center">
                <Col xs lg="8">
                    <h1 className=' site-name'>welcom to the <span className='site-name'>blog</span> </h1>
                    <div className="mb-4  w-50   login-continer" >
                        {/* <div   className=' btn-btn'> */}
                        <motion.div
                                initial={{ y: "-300px", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: '-300px', opacity: 0 }}
                                //transition={{ type: "spring", bounce: 0.25 }}
                                transition={{
                                delay: 0.1,
                                x: { type: "tween", stiffness: 100 ,bounce: 0.25 },
                                default: { duration: 2 },
                                }} 
                                className='log-in-btn'
                        >
                            <Link className="link" to="/login">LOGEN</Link>
                        </motion.div>{' '}
                        <motion.div
                                initial={{ y: "300px", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: '300px', opacity: 0 }}
                                //transition={{ type: "spring", bounce: 0.25 }}
                                transition={{
                                delay: 0.1,
                                x: { type: "tween", stiffness: 100 ,bounce: 0.25 },
                                default: { duration: 2 },
                                }} 
                                className='log-in-btn'
                            >
                                <Link className="link" to="/ragester">RAGESTER</Link>
                            </motion.div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>   
  )
}

export default Home