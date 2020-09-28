import React from 'react' ;
import {Modal} from 'react-bootstrap'
import {useState} from 'react'

function MyVerticallyCenteredModal(props) {
     const a = "b"
    const [smileyBox, setSmileyBox] = useState(true)


    const styles = {
         textAreaStyle : {
            width:"400px",
            borderRadius : "15px"
        }
    }
    
    return (
      
      <Modal id="modal"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea style={styles.textAreaStyle}placeholder="Speak Up"></textarea>
          <button onClick={() => setSmileyBox(false)}>😁</button>
          
        </Modal.Body>
        <Modal.Footer>
          <button onClick={props.onHide}>Post</button>
        </Modal.Footer>
      </Modal>
    
    );
  }
  export default MyVerticallyCenteredModal