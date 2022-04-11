import { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Button,
  Row,
  Col,
  Nav,
  Spinner,
  Card,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../App.css";
import Model from "../components/Model";
import {
  getUserBlogs,
  edeatBlog,
  deletBlog,
  reset,
} from "../app/features/blogSlice";
import UserBlogs from "../components/UserBlogs";
import { motion } from "framer-motion";

const UserBlog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [edite, setEdite] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isSuccess, user } = useSelector((state) => state.user);
  const { blog, isLoading, isError, message } = useSelector(
    (state) => state.blog
  );
  const element = useRef(null);
  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getUserBlogs());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  //*handel edite

  const handelEdete = (_id) => {
    setIsOpen(true);
    const edet = blog.find((blog) => blog._id === _id);
    setEdite(edet);
    console.log(edet);
  };
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center mt-5 text-center  spener">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <Container className="mt-5 mb-5 ">
      <Row>
        {blog.length === 0 ? (
          <motion.div
            initial={{ x: "-300px", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ y: "-300px", opacity: 0 }}
            transition={{
              delay: 0.1,
              x: { type: "tween", stiffness: 100 },
              default: { duration: 2 },
            }}
          >
            <Container
              style={{ width: "100rem" }}
              className="h-100 mt-5 d-flex justify-content-center text-uppercase"
            >
              <h3>you have no post let's add some</h3>
            </Container>
          </motion.div>
        ) : (
          blog.map((blog) => {
            return (
              <Col className="mt-5 d-flex justify-content-center">
                <UserBlogs
                  id={blog._id}
                  blog={blog}
                  handelEdete={handelEdete}
                />
              </Col>
            );
          })
        )}
      </Row>
      {isOpen && <Model isOpen={isOpen} setIsOpen={setIsOpen} {...edite} />}
    </Container>
  );
};

export default UserBlog;
//{blog.lenth == 0 ? console.log(blog.lenth):
//<div className='model' >
