import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Row, Col, Nav, Navbar } from "react-bootstrap";
import { reset, logout } from "../app/features/userSlice";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";
import "../App.css";
import { motion } from "framer-motion";
import { getUserBlogs } from "../app/features/blogSlice";
import { getAllblogs } from "../app/features/blogSlice";
//GrLogout
const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  //console.log(user.user.name)
  const logOUt = () => {
    const users = null;
    dispatch(logout());
    reset();
    navigate("/");
    window.location.reload();
    return false;
  };

  return (
    <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
      <motion.div
        initial={{ x: "-300px", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ y: "-300px", opacity: 0 }}
        transition={{
          delay: 0.1,
          x: { type: "tween", stiffness: 100 },
          default: { duration: 2 },
        }}
        className=" w-100  "
      >
        <Container className="nav-contain ">
          <Navbar.Brand href="#home" className="logo">
            BLOG
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {user ? (
              <Nav className=" w-100  me-auto d-flex justify-content-lg-between">
                <div className=" d-lg-flex  ">
                  <Nav.Link href="#home">
                    <Link to="/" className="links">
                      Home
                    </Link>
                  </Nav.Link>
                  <Nav.Link href="#link">
                    <Link
                      to="/blog"
                      className="links"
                      onClick={() => dispatch(getAllblogs())}
                    >
                      All-blogs
                    </Link>
                  </Nav.Link>
                  <Nav.Link href="#link">
                    <Link
                      to="/user-blogs"
                      className="links"
                      onClick={() => dispatch(getUserBlogs())}
                    >
                      User-blogs
                    </Link>
                  </Nav.Link>
                  <Nav.Link href="#link">
                    <Link to="/creat-blog" className="links">
                      Creat-Blog
                    </Link>
                  </Nav.Link>
                </div>
                <div className="user">
                  <Nav.Link>{user.user.name}</Nav.Link>
                  <Nav.Link>
                    <IoMdLogOut onClick={logOUt} className="logout" />
                  </Nav.Link>
                </div>
              </Nav>
            ) : (
              ""
            )}
          </Navbar.Collapse>
        </Container>
      </motion.div>
    </Navbar>
  );
};

export default NavBar;

/*<Nav
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
            {user? (<><Nav.Item>
                <Nav.Link  onClick={logOUt} >LOGUOT</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="/blog">All Blog</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">User Blog</Nav.Link>
            </Nav.Item>
            </>):''}
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                Disabled
                </Nav.Link>
            </Nav.Item>
        </Nav> */
