import React,{useState} from 'react'
import {Modal,Alert} from 'react-bootstrap'

function AppointmentModal({code="", color="", text=""}) {

    // const [show, setShow] = useState(false);
  
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    // console.log(data);


    return (
        <>
        {/* <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button> */}
  
        {/* <Modal show={show} onHide={handleClose}> */}
          <Modal.Header>
            <Modal.Title>{text?text:"Your Appointment Code is"}</Modal.Title>
          </Modal.Header>
          <Modal.Body><h1>{code}</h1></Modal.Body>
          <Alert variant={color}>
          {text?"Fill the Form and Get your Order ID":"Please Note your Appointment Code to check your Status Lately!"}
          </Alert>
          {/* <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer> */}
        {/* </Modal> */}
      </>
    )
}

export default AppointmentModal
