import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal,Button,Form} from 'react-bootstrap';
import '../App.css'

const Model = ({setIsOpen}) => {

    const handelClick = ()=>{
        console.log('clicked');
        setIsOpen(false)
    }
  return (
    <Modal.Dialog >
        <Modal.Header >
            <Modal.Title>Edet Blog</Modal.Title>
            {/* <CloseButton variant="white" size="xl"/> */}
            <button type="button" className="btn-close btn-clos" aria-label="Close" onClick={handelClick}>X</button>
        </Modal.Header>

        <Modal.Body>
            <Form >
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Titel</Form.Label>
                        <Form.Control type="text" name="titel" value='' placeholder="Inter Titel"  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>blog</Form.Label>
                        <Form.Control as="textarea" rows={3} name="discripion" value='' />
                    </Form.Group>
            </Form>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary" onClick={handelClick}>Close</Button>
            <Button variant="primary">Save changes</Button>
        </Modal.Footer>
    </Modal.Dialog>
  )
}

export default Model