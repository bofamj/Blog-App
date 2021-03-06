import { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form, CloseButton } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { edeatBlog } from "../app/features/blogSlice";
import "../App.css";
import { motion } from "framer-motion";

const Model = ({ setIsOpen, isOpen, titel, discripion, _id }) => {
  const dispatch = useDispatch();
  const [editValue, setEditValue] = useState({
    titel,
    discripion,
    id: _id,
  });
  let flip = {
    hidden: {
      transform: "scale(0) rotateX(-360deg)",
      opacity: 0,
      transition: {
        delay: 0.3,
      },
    },
    visible: {
      transform: " scale(1) rotateX(0deg)",
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      transform: "scale(0) rotateX(360deg)",
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  const handelClick = () => {
    setIsOpen(!isOpen);
  };
  //*siving the edit value
  const handelSubmit = () => {
    dispatch(edeatBlog(editValue));
    setIsOpen(!isOpen);
  };

  const handelChange = (e) => {
    setEditValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <Modal show={isOpen} onHide={handelClick}>
        <Modal.Header>
          <Modal.Title>Edit Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Titel</Form.Label>
              <Form.Control
                type="text"
                name="titel"
                value={editValue.titel}
                placeholder=""
                onChange={handelChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>blog</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="discripion"
                value={editValue.discripion}
                onChange={handelChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handelClick}>
            Close
          </Button>
          <Button variant="primary" onClick={handelSubmit}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Model;

{
  /* <motion.div
        variants={flip}
        initial="hidden"
        animate="visible"
        exit="exit"
    > */
}

{
  /* <Modal.Dialog >
            <Modal.Header >
                <Modal.Title>Edet Blog</Modal.Title>
                
                <button type="button" className="btn-close btn-clos" aria-label="Close" onClick={handelClick}>X</button>
            </Modal.Header>

            <Modal.Body>
                <Form >
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Titel</Form.Label>
                            <Form.Control type="text" name="titel" value={editValue.titel} placeholder='' onChange={handelChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>blog</Form.Label>
                            <Form.Control as="textarea" rows={3} name="discripion" value={editValue.discripion} onChange={handelChange} />
                        </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handelClick}>Close</Button>
                <Button variant="primary" onClick={handelSubmit}>Save changes</Button>
            </Modal.Footer>
        </Modal.Dialog> */
}
