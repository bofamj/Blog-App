import {useEffect,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal,Button,Form} from 'react-bootstrap';
import {useSelector,useDispatch} from 'react-redux'
import {edeatBlog} from '../app/features/blogSlice'
import '../App.css'

const Model = ({setIsOpen,edite}) => {
    //const useSelector = useSelector()
    const dispatch = useDispatch()
    //const{_id}=edite;
    const [editValue,setEditValue]=useState({
        titel:edite[0].titel,
        discripion:edite[0].discripion,
        id:edite[0]._id
    })
    const {id,titel,discripion}=editValue;
    const handelClick = ()=>{
        setIsOpen(false)
        console.log(edite)
    }

    
    //console.log(editValue)
const handelSubmit=()=>{
    dispatch(edeatBlog(id,{titel,discripion}))
    //console.log(dispatch(edeatBlog({id:id,titel:editValue?.titel,discripion:editValue?.discripion}))) 
    //console.log(editValue) 
    //dispatch(edeatBlog(id,{titel,discripion}))
}
const handelChange =(e)=>{
    setEditValue(prevState=>({...prevState,[e.target.name]:e.target.value}))
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
    </Modal.Dialog>
  )
}

export default Model