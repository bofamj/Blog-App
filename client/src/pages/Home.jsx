import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Form,Button,Row,Col} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import {AiOutlineLogin} from "react-icons/ai";
import {BiRegistered} from "react-icons/bi";
import '../App.css'
//AiOutlineLogin   BiRegistered
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
                            <Link className="link home-btn" to="/login"><AiOutlineLogin/> LOGEN</Link>
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
                                <Link className="link home-btn" to="/ragester"><BiRegistered/> RAGiSTER </Link>
                            </motion.div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>   
  )
}

export default Home